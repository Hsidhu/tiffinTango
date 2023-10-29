<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\DailyOrderGenerator;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\DailyDeliveryMealPlanLogResouce;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DailyDeliveryController extends Controller
{
    public function index()
    {
        $getDailyOrders = $this->getDailyLog();
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
        
        $getDailyOrders = $this->getDailyLog();
        return DailyDeliveryMealPlanLogResouce::collection($getDailyOrders);
    }

    private function getDailyLog()
    {
        $today = Carbon::now()->tz(config('app.CLIENT_TIMEZONE'));
        return DailyDeliveryMealPlanLog::whereDate(
            DB::raw("CONVERT_TZ(created_at, 'UTC', '".config('app.CLIENT_TIMEZONE')."')"), 
            $today->format('Y-m-d')
        )
        ->orderBy('delivery_zone_id', 'ASC')
        ->orderBy('priority', 'DESC')
        ->get();
        
    }

}
