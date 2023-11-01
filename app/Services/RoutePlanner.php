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
        $deliveryUnSortedData = $this->setupAddressList($dailyDeliveries);
        $addressList = $deliveryUnSortedData['addressList'];
        $orginalOrder =  $deliveryUnSortedData['addressDeliveryIds'];

       // $addressList = ['Guelph ON', 'Oakville, ON', 'Brampton, ON', 'Mississauga, ON', 'Vaughan, ON', 'Markham, ON, CA'];
        //$orginalOrder = [1,2,3,4,5,6];
        $refinedOrder=[];
        $optimizedList = $this->optimzer($addressList);
        foreach ($optimizedList as $key => $value) {
            if($value['orginal_waypoint_order'] == -1 || $value['orginal_waypoint_order'] == -2){
                continue;
            }
            //$refinedOrder[] = $orginalOrder[$value['orginal_waypoint_order']];
            
            DailyDeliveryMealPlanLog::where('id', $orginalOrder[$value['orginal_waypoint_order']])
            ->update([
                'priority' => $key
            ]);
        }
        return true;
        //dd($refinedOrder, $optimizedList);
    }

    public function setupAddressList($dailyDeliveries)
    {
        $addressList = [];
        $addressDeliveryIds = [];
        foreach ($dailyDeliveries as $delivery) {
            $addressList[] = $delivery->address->formatted_address;
            $addressDeliveryIds[] = $delivery->id;
        }
        return [
            'addressList' => $addressList,
            'addressDeliveryIds' => $addressDeliveryIds,
        ];
    }

    public function optimzer($addressList)
    {
        // get address by zone
        $optimzied = Geocoder::directionRouter(
            'Markham, ON, CA',
            $addressList,
            'Markham, ON, CA'
        );
        return $optimzied;
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
