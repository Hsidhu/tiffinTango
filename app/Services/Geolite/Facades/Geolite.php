<?php

namespace App\Services\Geolite\Facades;

use Illuminate\Support\Facades\Facade;

class Geolite extends Facade
{
    /**
     * Get the registered name of the component.
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'geolite';
    }
}
