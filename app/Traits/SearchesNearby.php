<?php

namespace App\Traits;

use Exception;
use App\Exceptions\ApplicationException;
use App\Services\Geolite\Facades\Geocoder;
use App\Services\Geolite\Contracts\CoordinatesInterface;
use App\Models\Location;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Request;

trait SearchesNearby
{

    // search all the location and get nearest one and find zones for the nearest location 
    public function onSearchNearby($searchQuery)
    {
        $userLocation = is_array($searchQuery)
            ? $this->geocodeSearchPoint($searchQuery)
            : $this->geocodeSearchQuery($searchQuery);

        $locationModel = new Location();

        $nearByLocation = $locationModel->searchByCoordinates(
            $userLocation->getCoordinates()
        )->first();
        
        if ($nearByLocation) {
            $deliveryZone = $nearByLocation->searchDeliveryArea($userLocation->getCoordinates());
        }
            
        return [
            'userLocation' => $userLocation ?? null,
            'nearByLocation' => $nearByLocation ?? null,
            'deliveryZone' => $deliveryZone ?? null,
        ];
        
    }
// from location manager
    public function searchByCoordinates(CoordinatesInterface $coordinates, $limit = 20)
    {
        $query = $this->createLocationModelQuery();
        $query->select('*')->selectDistance(
            $coordinates->getLatitude(),
            $coordinates->getLongitude()
        );

        return $query->orderBy('distance', 'asc')->isEnabled()->limit($limit)->get();
    }

    /**
     * @param $searchQuery
     * @return \Igniter\Flame\Geolite\Model\Location
     * @throws \Igniter\Flame\Exception\ApplicationException
     */
    protected function geocodeSearchQuery($searchQuery)
    {
        $collection = Geocoder::geocode($searchQuery);

        $userLocation = $this->handleGeocodeResponse($collection);

       // Location::putSession('searchQuery', $searchQuery);

        return $userLocation;
    }

    protected function geocodeSearchPoint($searchPoint)
    {
        if (count($searchPoint) !== 2)
            throw new ApplicationException('alert_no_search_query');

        [$latitude, $longitude] = $searchPoint;
        if (!strlen($latitude) || !strlen($longitude))
            throw new ApplicationException('alert_no_search_query');

        $collection = Geocoder::reverse($latitude, $longitude);

        $userLocation = $this->handleGeocodeResponse($collection);

       // Location::putSession('searchPoint', $searchPoint);
       // Location::putSession('searchQuery', $userLocation->format());

        return $userLocation;
    }

    protected function handleGeocodeResponse($collection)
    {
        if (!$collection || $collection->isEmpty()) {
            Log::error(implode(PHP_EOL, Geocoder::getLogs()));
            throw new ApplicationException('alert_invalid_search_query');
        }

        $userLocation = $collection->first();
        if (!$userLocation->hasCoordinates())
            throw new ApplicationException('alert_invalid_search_query');

        return $userLocation;
    }
}
