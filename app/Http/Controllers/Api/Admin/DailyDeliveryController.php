<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\DailyDeliveryMealPlanLogResouce;

class DailyDeliveryController extends Controller
{
    public function index()
    {
        $getDailyOrders = $this->getDailyLog();
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders)->collection->groupBy('delivery_zone_id');
    }

    public function generateDailyDeliveries(Request $request) 
    {
        $deliveryWindowId = $request->get('delivery_window_id');

        $output = (new DailyOrderGenerator())->generateOrder($deliveryWindowId);
        if(!$output){
            // return response()->json([
            //     'error' => 'Already created',
            // ], 400);
        }
        
        $getDailyOrders = $this->getDailyLog();
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders)->collection->groupBy('delivery_zone_id');
    }

    public function getStickerData(Request $request)
    {
        $deliveryZoneId = $request->get('delivery_zone_id');
        $deliveryWindowId = $request->get('delivery_window_id');
        $dailyDeliveries = $this->getDailyLog($deliveryZoneId, $deliveryWindowId);
        return DailyDeliveryMealPlanLogResouce::collection($dailyDeliveries);
    }

    /**
     * get list of dail logs
     */
    private function getDailyLog($deliveryZoneId=null, $deliveryWindowId=null)
    {
        $query = DailyDeliveryMealPlanLog::byClientTimezone();
        if($deliveryZoneId){
            $query->where('delivery_zone_id', $deliveryZoneId);
        }
        if($deliveryZoneId){
            $query->where('delivery_window_id', $deliveryWindowId);
        }
        return $query->orderBy('delivery_zone_id', 'DESC')->orderBy('priority', 'ASC')->get();
    }

}
