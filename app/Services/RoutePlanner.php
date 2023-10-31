<?php

namespace App\Services;

use App\Services\Geolite\Facades\Geocoder;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;
use App\Models\DeliveryZone;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RoutePlanner
{
    public function updateDeliveryList($dailyDeliveries)
    {
        $addressList = $this->setupAddressList($dailyDeliveries);
        $this->optimzer($addressList);
    }

    public function setupAddressList($dailyDeliveries)
    {
        $addressList = [];
        foreach ($dailyDeliveries as $delivery) {
            $addressList[] = $delivery->address->formatted_address;
        }
        return $addressList;
    }

    public function optimzer($addressList)
    {
        // get address by zone
        $collection = Geocoder::directionRouter(
            'Markham, ON, CA',
            ['Guelph ON', 'Oakville, ON', 'Brampton, ON', 'Mississauga, ON', 'Vaughan, ON', 'Markham, ON, CA'],
            'Markham, ON, CA'
        );
        dd($collection);
    }

    public function getDailyLogs($deliveryWindowId)
    {
        $today = Carbon::now()->tz(config('app.CLIENT_TIMEZONE'));
        return DailyDeliveryMealPlanLog::whereDate(
            DB::raw("CONVERT_TZ(created_at, 'UTC', '".config('app.CLIENT_TIMEZONE')."')"), 
            $today->format('Y-m-d')
        )
        ->where('delivery_window_id', $deliveryWindowId)
        ->orderBy('delivery_zone_id', 'ASC')
        ->orderBy('priority', 'DESC')
        ->get();
    }
}
