<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helpers\Str;
use Illuminate\Support\Arr;

class CustomServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        require app_path('Helpers/helperFunctions.php');
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
