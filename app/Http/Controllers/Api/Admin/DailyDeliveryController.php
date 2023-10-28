<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\DailyDeliveryMealPlanLogResouce;
use Carbon\Carbon;

class DailyDeliveryController extends Controller
{
    public function index()
    {
        $today = Carbon::now();
        $getDailyOrders = DailyDeliveryMealPlanLog::whereDate('created_at', $today->toDateString())->get();
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders);
    }

    public function generateDailyDeliveries(Request $request) 
    {
        $deliveryZoneId = $request->get('delivery_zone_id');
        $deliveryWindowId = $request->get('delivery_window_id');

        $output = (new DailyOrderGenerator())->generateOrder($deliveryZoneId, $deliveryWindowId);
        if(!$output){
            // return response()->json([
            //     'error' => 'Already created',
            // ], 400);
        }
        $today = Carbon::now();
        $getDailyOrders = DailyDeliveryMealPlanLog::whereDate('created_at', $today->toDateString())->get();

        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders);
    }

}
