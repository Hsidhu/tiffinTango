<?php

namespace App\Services;

use App\Services\Geolite\Facades\Geocoder;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;

class RoutePlanner
{
    public function addressList()
    {
        $collection = Geocoder::directionRouter(
            'Markham, ON, CA',
            ['Guelph ON', 'Oakville, ON', 'Brampton, ON', 'Mississauga, ON', 'Vaughan, ON', 'Markham, ON, CA'],
            'Markham, ON, CA'
        );
        dd($collection);
    }
}
