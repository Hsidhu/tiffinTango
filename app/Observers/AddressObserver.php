<?php

namespace App\Observers;

use App\Models\Address;
use App\Traits\SearchesNearby;
use Illuminate\Support\Facades\Log;

class AddressObserver
{
    use SearchesNearby;
    /**
     * Handle the Customer "created" event.
     *
     * @param  \App\Models\Address  $customer
     * @return void
     */

    public function created(Address $address)
    {
        // get use lat and long
        // get closest lat and long and get all the delivery zones and search for the zone user belong to
        $customerLocationDetails = $this->onSearchNearby($address->formatted_address);
        $address->delivery_zone_id = $customerLocationDetails['deliveryZone']->id;
        $address->save();
    }

    /**
     * Handle the Customer "updated" event.
     *
     * @param  \App\Models\Address  $customer
     * @return void
     */
    public function updated(Address $address)
    {
        if ($address->getOriginal('formatted_address') !== $address->formatted_address) {

            // Temporarily disable model events
            Address::withoutEvents(function () use ($address) {
                $customerLocationDetails = $this->onSearchNearby($address->formatted_address);
                
                // Check if 'deliveryZone' is not null in the result
                if ($customerLocationDetails->deliveryZone) {
                    $userCoordinates = $customerLocationDetails->userLocation->getCoordinates();

                    $address->lat = $userCoordinates->getLatitude();
                    $address->lng = $userCoordinates->getLongitude();
                    $address->delivery_zone_id = $customerLocationDetails->deliveryZone->id;
                    $address->save();
                }
            });
        }
    }
}
