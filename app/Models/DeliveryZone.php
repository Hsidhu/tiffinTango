<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Services\Geolite\Contracts\CoordinatesInterface;
use App\Services\Geolite\Contracts\LocationInterface;
use App\Services\Geolite\Facades\Geocoder;
use InvalidArgumentException;

class DeliveryZone extends Model
{
    use HasFactory ;

    protected $guarded = [];

    public $relation = [
        'belongsTo' => [
            'location' => [\App\Models\Location::class],
        ],
    ];

    protected $casts = [
        'boundaries' => 'array'
    ];

    public static function getDataForSelect()
    {
        return static::all()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        });  
    }

    public function getLocationId()
    {
        return $this->attributes['location_id'];
    }

    public function getVerticesAttribute()
    {
        return $this->boundaries;

        // return isset($this->boundaries['vertices']) ?
        //     json_decode($this->boundaries['vertices'], false) : [];
    }

    // [{"type": "above", "total": "5.00", "amount": "5.00", "priority": 0}]
     // {"circle": "{\"lat\":43.6867472,\"lng\":-79.7383617,\"radius\":1294.4522874525585}", "polygon": "kptiGfjreNnz@fe@|Jh`CueBe[", "distance": [{"type": "equals_or_greater", "charge": "5", "distance": "5", "priority": 0}], "vertices": "[{\"lat\":43.69174,\"lng\":-79.72532000000001},{\"lat\":43.68222,\"lng\":-79.73144},{\"lat\":43.680310000000006,\"lng\":-79.75213000000001},{\"lat\":43.696740000000005,\"lng\":-79.74762000000001}]", "components": []}
    public function getCircleAttribute()
    {
        return $this->boundaries;
        // return isset($this->boundaries['circle']) ?
        //     json_decode($this->boundaries['circle'], false) : null;
    }

    public function getBoundariessAttribute($value)
    {
        return json_decode($this->boundaries, true);
    }


    public function isAddressBoundary()
    {
        return $this->type === 'address';
    }

    public function isPolygonBoundary()
    {
        return $this->type === 'POLYGON';
    }

    // search area
    public function checkBoundary($coordinate)
    {
        if (!$coordinate instanceof CoordinatesInterface) {
            throw new InvalidArgumentException(sprintf(
                'Invalid class "%s" given, expected: %s',
                get_class($coordinate), CoordinatesInterface::class
            ));
        }
        if ($this->isAddressBoundary()) {
            $position = Geocoder::reverse(
                $coordinate->getLatitude(), $coordinate->getLongitude()
            )->first();

            if ($position)
                return $this->matchAddressComponents($position);
        }

        return $this->isPolygonBoundary()
            ? $this->pointInVertices($coordinate)
            : $this->pointInCircle($coordinate);
    }

    // Check if the point is inside the polygon or on the boundary
    public function pointInVertices(CoordinatesInterface $coordinate)
    {
        if (!$this->vertices)
            return false;

        return $this->getPolygon()->pointInPolygon($coordinate);
    }

    public function pointInCircle(CoordinatesInterface $coordinate)
    {
        if (!$this->circle)
            return false;

        $circle = $this->getCircle();

        $circle->distanceUnit(setting('distance_unit'));

        return $circle->pointInRadius($coordinate);
    }

    public function matchAddressComponents(LocationInterface $position)
    {
        $components = array_get($this->boundaries, 'components');
        if (!is_array($components))
            $components = [];

        $groupedComponents = collect($components)->groupBy('type')->all();

        return app('geolite')->addressMatch($groupedComponents)->matches($position);
    }


    //
    // Helpers
    //

    /**
     * @return App\Services\Geolite\Contracts\PolygonInterface
     */
    public function getPolygon()
    {
        $geolite = app('geolite');
        $vertices = array_map(function ($coordinates) use ($geolite) {
            return $geolite->coordinates($coordinates['lat'], $coordinates['lng']);
        }, $this->vertices);

        return $geolite->polygon($vertices);
    }

    /**
     * @return App\Services\Geolite\Contracts\CircleInterface
     */
    public function getCircle()
    {
        $geolite = app('geolite');
        $coordinate = $geolite->coordinates(
            $this->circle->lat,
            $this->circle->lng
        );

        return $geolite->circle($coordinate, $this->circle->radius);
    }

}
