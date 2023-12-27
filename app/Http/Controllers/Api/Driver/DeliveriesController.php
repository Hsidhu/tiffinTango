<?php
namespace App\Http\Controllers\Api\Driver;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
use App\Models\Driver;
use App\Models\DeliveryWindow;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Driver\DailyDeliveryResource;
use Carbon\Carbon;

class DeliveriesController extends Controller
{

    public function todaysDeliveries(Request $request)
    {
        $deliveryWindow = DeliveryWindow::where('id', $request->delivery_window_id)->first();
        $user = $request->user();
        $deliveries =  DailyDeliveryMealPlanLog::where([
            'driver_id' => $user->id,
            'delivery_window_id'  => $deliveryWindow->id
        ])->get();
        // $this->getDailyLog($user->id, null, $deliveryWindow->id)
        return DailyDeliveryResource::collection($deliveries);
    }

    public function delivered(Request $request)
    {
        $deliveryRecord = DailyDeliveryMealPlanLog::find($request->id);

        $order = MealPlanOrder::find($deliveryRecord->order_id);
        $dailyDeliveryId = DailyDeliveryMealPlanLog::where([
            'id' => $request->id,
            'order_id' => $order->id,
            'customer_id' => $order->customer_id,
            'driver_id' => $request->get('driver_id'),
        ])->update([
            'lat' => $request->get('lat'),
            'lng' => $request->get('lng'),
            'comment' => $request->get('comment'),
            'image' =>'image'
        ]);

        if ($request->hasFile('image')) {
            $deliveryRecord->addMediaFromRequest('image')->toMediaCollection('deliveryProof');
        }

        return new DailyDeliveryResource($deliveryRecord);
    }

    /**
     * get list of dail logs
     */
    private function getDailyLog($driverId, $deliveryZoneId=null, $deliveryWindowId=null)
    {
        $query = DailyDeliveryMealPlanLog::byClientTimezone()->where('driver_id', $driverId);
        if($deliveryZoneId){
            $query->where('delivery_zone_id', $deliveryZoneId);
        }
        if($deliveryZoneId){
            $query->where('delivery_window_id', $deliveryWindowId);
        }
        return $query->orderBy('delivery_zone_id', 'DESC')->orderBy('priority', 'ASC')->get();
    }
}
