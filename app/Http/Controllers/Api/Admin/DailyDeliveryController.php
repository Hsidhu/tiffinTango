<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\DailyDeliveryMealPlanLogResouce;
use App\Services\RoutePlanner;
use Session;

class DailyDeliveryController extends Controller
{

    private $dailyOrderGenerator;
    private $routePlanner;

    public function __construct(DailyOrderGenerator $dailyOrderGenerator, RoutePlanner $routePlanner)
    {
        $this->dailyOrderGenerator = $dailyOrderGenerator;
        $this->routePlanner = $routePlanner;
    }

    public function index()
    {
        $getDailyOrders = $this->getDailyLog();
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders)->collection->groupBy('delivery_zone_id');
    }

    /**
     * Generate Deliveries by delivery window
     */
    public function generateDailyDeliveries(Request $request) 
    {
        $deliveryWindowId = $request->get('delivery_window_id');

        $output = $this->dailyOrderGenerator->generateOrder($deliveryWindowId);
        if(!$output){
            // return response()->json([
            //     'error' => 'Already created',
            // ], 400);
        }
        $getDailyOrders = $this->getDailyLog(null, $deliveryWindowId);
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders)->collection->groupBy('delivery_zone_id');
    }

    /**
     * Get Sticker Data by zone and delivery window
     */
    public function getStickerData(Request $request)
    {
        $deliveryZoneId = $request->get('delivery_zone_id');
        $deliveryWindowId = $request->get('delivery_window_id');
        $dailyDeliveries = $this->getDailyLog($deliveryZoneId, $deliveryWindowId);
        return DailyDeliveryMealPlanLogResouce::collection($dailyDeliveries);
    }

    public function optimizeRoute(Request $request)
    {
        if(Session::has('zoneRoute')){
            return response()->json(Session::get('zoneRoute'));
        }
        $deliveryZoneId = $request->get('delivery_zone_id');
        $deliveryWindowId = $request->get('delivery_window_id');
        $dailyDeliveries = $this->getDailyLog($deliveryZoneId, $deliveryWindowId);
        $output = $this->routePlanner->updateDeliveryList($dailyDeliveries);
        if(!$output){
            // return response()->json([
            //     'error' => 'Already created',
            // ], 400);
        }
        return response()->json(Session::get('zoneRoute'));
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

    public function update(Request $request)
    {
        $dailyDelivery = DailyDeliveryMealPlanLog::find($request->id);
        $newRequest = $request->except('id');
        $dailyDelivery->update($newRequest);
        
        return response()->json($dailyDelivery);
    }

}
