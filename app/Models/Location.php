<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Services\Geolite\Model\Coordinates;
use App\ServicesGeolite\Contracts\DistanceInterface;
use App\Services\Geolite\Contracts\CoordinatesInterface;

class Location extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $requiredAddressKeys = [
        'address',
        'city',
        'postal_code',
        'state',
        'country',
    ];

    
    public function delivery_zones()
    {
        return $this->hasMany(\App\Models\DeliveryZone::class);
    }

    public function getFormattedAddressAttribute($value)
    {
        return $this->addressFormat($this->toArray(), false);
    }

    private function addressFormat($address, $useLineBreaks = false)
    {
        $formattedAddress = "{address}, {city} {postal_code}, {state}, {country}";
        // Replace placeholders with values from the address array
        foreach ($this->requiredAddressKeys as $key) {
            $formattedAddress = str_replace("{{$key}}", $address[$key], $formattedAddress);
        }
        if ($useLineBreaks) {
            $formattedAddress = str_replace(', ', '<br />', $formattedAddress);
        }
        return $formattedAddress;
    }


    public function calculateDistance(CoordinatesInterface $position)
    {
        $distance = $this->makeDistance();

        $distance->setFrom($this->getCoordinates());
        $distance->setTo($position);
        $distance->in($this->getDistanceUnit());

        return app('geocoder')->distance($distance);
    }

    /**
     * @return App\Services\Geolite\Model\Coordinates
     */
    public function getCoordinates()
    {
        return app('geolite')->coordinates($this->location_lat, $this->location_lng);
    }

    /**
     * @return \App\ServicesGeolite\Contracts\DistanceInterface
     */
    public function makeDistance()
    {
        return app('geolite')->distance();
    }

    // search nears location
    public function searchByCoordinates(CoordinatesInterface $coordinates, $limit = 20)
    {
        $query = $this->select('*')->selectDistance(
            $coordinates->getLatitude(),
            $coordinates->getLongitude()
        );

        return $query->orderBy('distance', 'asc')->limit($limit)->get();
    }

    public function searchDeliveryArea($coordinates)
    {
        if (!$coordinates)
            return null;

        return $this->delivery_zones
            ->first(function ($model) use ($coordinates) {
                return $model->checkBoundary($coordinates);
            });
    }

    //
    // Scopes
    //

    public function scopeSelectDistance($query, $latitude = null, $longitude = null)
    {
        // setting('distance_unit') ??
        $distanceUnit =  'km';
        if ($distanceUnit === 'km') {
            $sql = '( 6371 * acos( cos( radians(?) ) * cos( radians( lat ) ) *';
        }
        else {
            $sql = '( 3959 * acos( cos( radians(?) ) * cos( radians( lat ) ) *';
        }

        $sql .= ' cos( radians( lng ) - radians(?) ) + sin( radians(?) ) *';
        $sql .= ' sin( radians( lat ) ) ) ) AS distance';

        $query->selectRaw(\DB::raw($sql), [$latitude, $longitude, $latitude]);

        return $query;
    }
}
