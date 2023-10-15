<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\ServiceProvider;

use App\Models\Customer;
use App\Observers\CustomerObserver;

use App\Models\MealPlanOrder;
use App\Observers\MealPlanOrderObserver;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->setConfiguration();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(env('APP_DEBUG')) {
            DB::listen(function($query) {
                File::append(
                    storage_path('/logs/query.log'),
                    $query->sql . ' [' . implode(', ', $query->bindings) . ']' . PHP_EOL
                );
            });
        }

        // observers
        Customer::observe(CustomerObserver::class);
        MealPlanOrder::observe(MealPlanOrderObserver::class);
    }

    protected function setConfiguration()
    {
        $this->app->resolving('geocoder', function ($geocoder, $app) {
           // $app['config']->set('geocoder.default', setting('default_geocoder'));

           // $region = $app['country']->getCountryCodeById(setting('country_id'));
           // $app['config']->set('geocoder.providers.google.region', $region);
           // $app['config']->set('geocoder.providers.nominatim.region', $region);

//            $app['config']->set('geocoder.providers.google.apiKey', setting('maps_api_key'));
            $app['config']->set('geocoder.providers.google.apiKey', 'AIzaSyBEqSY4vEjuJnO8zbX5Pb8PO3ln9czPQxk');

           // $app['config']->set('geocoder.precision', setting('geocoder_boundary_precision', 8));
        });

    }
}
