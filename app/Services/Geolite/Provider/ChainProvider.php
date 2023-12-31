<?php

namespace App\Services\Geolite\Provider;

use App\Services\Geolite\Contracts\AbstractProvider;
use App\Services\Geolite\Contracts\DistanceInterface;
use App\Services\Geolite\Contracts\GeoQueryInterface;
use App\Services\Geolite\Model\Distance;
use Illuminate\Support\Collection;

class ChainProvider extends AbstractProvider
{
    /**
     * @var \Igniter\Flame\Geolite\Contracts\GeocoderInterface
     */
    protected $geocoder;

    /**
     * @var array
     */
    protected $providers = [];

    /**
     * @param $geocoder
     * @param array $providers
     */
    public function __construct($geocoder, array $providers)
    {
        $this->geocoder = $geocoder;
        $this->providers = $providers;
    }

    public function getName(): string
    {
        return 'Chain';
    }

    public function geocodeQuery(GeoQueryInterface $query): Collection
    {
        foreach ($this->providers as $name => $config) {
            $provider = $this->geocoder->makeProvider($name);
            $result = $provider->geocodeQuery($query);
            if ($result->isNotEmpty())
                return $result;
        }

        return new Collection;
    }

    public function reverseQuery(GeoQueryInterface $query): Collection
    {
        foreach ($this->providers as $name => $config) {
            $provider = $this->geocoder->makeProvider($name);
            $result = $provider->reverseQuery($query);
            if ($result->isNotEmpty())
                return $result;
        }

        return new Collection;
    }

    public function distance(DistanceInterface $distance): ?Distance
    {
        foreach ($this->providers as $name => $config) {
            $result = $this->geocoder->makeProvider($name)->distance($distance);
            if (!is_null($result))
                return $result;
        }

        return null;
    }


    public function directionRouter($origin, Array $waypoints, $destination)
    {
        foreach ($this->providers as $name => $config) {
            $result = $this->geocoder->makeProvider($name)->directionRouter($origin, $waypoints, $destination);
            if (!is_null($result))
                return $result;
        }

        return null;
    }

    public function addProvider($name, array $config = [])
    {
        $this->providers[$name] = $config;

        return $this;
    }

    public function getLogs()
    {
        $logs = [];
        foreach ($this->providers as $name => $config) {
            $provider = $this->geocoder->makeProvider($name);
            $logs[] = $provider->getLogs();
        }

        return array_merge(...$logs);
    }
}
