<?php

namespace App\Services;

use App\Services\Geolite\Contracts\CoordinatesInterface;
use App\Services\Geolite\Contracts\LocationInterface;

interface AreaInterface
{
    public function getLocationId();

    public function checkBoundary($position);

    public function pointInVertices(CoordinatesInterface $coordinate);

    public function pointInCircle(CoordinatesInterface $coordinate);

    public function matchAddressComponents(LocationInterface $position);
}
