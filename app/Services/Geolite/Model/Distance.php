<?php

namespace App\Services\Geolite\Model;

use App\Services\Geolite\Distance as GeoliteDistance;
use App\Services\Geolite\Geolite;

class Distance
{
    protected $distance;

    protected $duration;

    public function __construct(float $distance, float $duration)
    {
        $this->distance = $distance;
        $this->duration = $duration;
    }

    public function getDistance()
    {
        return $this->distance;
    }

    public function getDuration()
    {
        return $this->duration;
    }

    public function formatDistance($unit = Geolite::MILE_UNIT)
    {
        return (new GeoliteDistance())->in($unit)->convertToUserUnit($this->distance);
    }

    public function formatDuration($unit = Geolite::MILE_UNIT)
    {
        return now()->diffForHumans(now()->addSeconds($this->duration));
    }
}
