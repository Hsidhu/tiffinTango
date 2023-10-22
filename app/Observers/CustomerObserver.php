<?php

namespace App\Observers;

use App\Models\Customer;
use Illuminate\Support\Facades\Request;
use App\Traits\SearchesNearby;


class CustomerObserver
{
    use SearchesNearby;
    /**
     * Handle the Customer "created" event.
     *
     * @param  \App\Models\Customer  $customer
     * @return void
     */
    public function created(Customer $customer)
    {
        $customer->ip_address = Request::getClientIp();

        // get use lat and long
        // get closest lat and long and get all the delivery zones and search for the zone user belong to
        // $deliveryZone = $this->onSearchNearby([$customer->address->lat, $customer->address->lng]);
        // $customer->address->zone_id = $deliveryZone;
        // $customer->address->save();


        $customer->save();

        // Send email to customer

    }

    /**
     * Handle the Customer "updated" event.
     *
     * @param  \App\Models\Customer  $customer
     * @return void
     */
    public function updated(Customer $customer)
    {
        //
    }

    /**
     * Handle the Customer "deleted" event.
     *
     * @param  \App\Models\Customer  $customer
     * @return void
     */
    public function deleted(Customer $customer)
    {
        //
    }

    /**
     * Handle the Customer "restored" event.
     *
     * @param  \App\Models\Customer  $customer
     * @return void
     */
    public function restored(Customer $customer)
    {
        //
    }

    /**
     * Handle the Customer "force deleted" event.
     *
     * @param  \App\Models\Customer  $customer
     * @return void
     */
    public function forceDeleted(Customer $customer)
    {
        //
    }

}
