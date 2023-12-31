<?php

namespace App\Traits;

use App\Services\Geolite\Facades\Geocoder;
use App\Services\AreaInterface;

trait HasDeliveryAreas
{
    /**
     * @var \Illuminate\Database\Eloquent\Collection
     */
    protected $deliveryAreas;

    public static function bootHasDeliveryAreas()
    {
        // get lat and lng on save
        static::saving(function (self $model) {
           // $model->geocodeAddressOnSave();
        });
    }

    // location address is saved
    protected function geocodeAddressOnSave()
    {
        if (!array_get($this->options, 'auto_lat_lng', true))
            return;

        if (!$this->isDirty([
            'location_address_1',
            'location_address_2',
            'location_city',
            'location_state',
            'location_postcode',
            'location_country_id',
        ])) return;

        $address = format_address($this->getAddress(), false);

        $geoLocation = Geocoder::geocode($address)->first();
        if ($geoLocation && $geoLocation->hasCoordinates()) {
            $this->location_lat = $geoLocation->getCoordinates()->getLatitude();
            $this->location_lng = $geoLocation->getCoordinates()->getLongitude();
        }
    }

    public function listDeliveryAreas()
    {
        return $this->delivery_zones->keyBy('id');
    }

    /**
     * @param $areaId
     *
     * @return \Igniter\Flame\Location\Contracts\AreaInterface|null
     */
    public function findDeliveryArea($zoneId)
    {
        return $this->listDeliveryAreas()->get($zoneId);
    }

    /**
     * @param \Igniter\Flame\Geolite\Contracts\CoordinatesInterface $coordinates
     * @return \Igniter\Flame\Location\Contracts\AreaInterface|null
     */
    public function searchOrDefaultDeliveryArea($coordinates)
    {
        if ($area = $this->searchDeliveryArea($coordinates))
            return $area;

        return $this->delivery_areas->where('is_default', 1)->first();
    }

    /**
     * @param \Igniter\Flame\Geolite\Contracts\CoordinatesInterface $coordinates
     * @return \Igniter\Flame\Location\Contracts\AreaInterface|null
     */
    public function searchOrFirstDeliveryArea($coordinates)
    {
        if (!$area = $this->searchDeliveryArea($coordinates))
            $area = $this->delivery_areas->first();

        return $area;
    }

    /**
     * @param \App\Services\Geolite\Contracts\CoordinatesInterface $coordinates
     * @return \App\Services\Location\Contracts\AreaInterface|null
     */
    public function searchDeliveryArea($coordinates)
    {
        if (!$coordinates)
            return null;

        return $this->delivery_zones
            ->first(function (AreaInterface $model) use ($coordinates) {
                return $model->checkBoundary($coordinates);
            });
    }

    public function getDistanceUnit()
    {
        return strtolower($this->distanceUnit ?? setting('distance_unit'));
    }

    //
    //
    //

    /**
     * Create a new or update existing location areas
     *
     * @param array $deliveryAreas
     *
     * @return bool
     */
    public function addLocationAreas($deliveryAreas)
    {
        $locationId = $this->getKey();
        if (!is_numeric($locationId))
            return false;

        if (!is_array($deliveryAreas))
            return false;

        $idsToKeep = [];
        foreach ($deliveryAreas as $area) {
            $locationArea = $this->delivery_areas()->firstOrNew([
                'area_id' => $area['area_id'] ?? null,
            ])->fill(array_except($area, ['area_id']));

            $locationArea->save();
            $idsToKeep[] = $locationArea->getKey();
        }

        $this->delivery_areas()->whereNotIn('area_id', $idsToKeep)->delete();

        return count($idsToKeep);
    }
}
