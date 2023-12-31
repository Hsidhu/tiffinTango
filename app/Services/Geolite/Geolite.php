<?php

namespace App\Services\Geolite;

use App\Services\Geolite\Model\Coordinates;

class Geolite
{
    /**
     * The ratio meters per mile.
     *
     * @var float
     */
    const METERS_PER_MILE = 1609.344;

    /**
     * The ratio feet per meter.
     *
     * @var float
     */
    const FEET_PER_METER = 0.3048;

    /**
     * The kilometer unit.
     *
     * @var string
     */
    const KILOMETER_UNIT = 'km';

    /**
     * The mile unit.
     *
     * @var string
     */
    const MILE_UNIT = 'mi';

    /**
     * The feet unit.
     *
     * @var string
     */
    const FOOT_UNIT = 'ft';

    public function distance()
    {
        return new Distance();
    }

    public function circle($coordinate, $radius)
    {
        return (new Circle($coordinate, $radius))
            ->setPrecision(config('geocoder.precision'));
    }

    public function polygon($coordinates)
    {
        return (new Polygon($coordinates))
            ->setPrecision(config('geocoder.precision'));
    }

    public function vertex()
    {
        return (new Vertex)
            ->setPrecision(config('geocoder.precision'));
    }

    public function coordinates($latitude, $longitude)
    {
        return (new Coordinates($latitude, $longitude))
            ->setPrecision(config('geocoder.precision'));
    }

    public function addressMatch($components)
    {
        return new AddressMatch($components);
    }
}
