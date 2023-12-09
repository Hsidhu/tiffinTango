<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
use App\Models\OrderStatus;
use App\Models\PickedUpMealPlanLog;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\OrderResource;
use Carbon\Carbon;
use App\Services\CloneMealPlanOrder;

class OrderController extends Controller
{
    public function index()
    {
        $orders = MealPlanOrder::get();
        return OrderResource::collection($orders->map(function ($order)  {
            return new OrderResource($order, false);
        }));
    }

    public function view($id)
    {
        $order = MealPlanOrder::find($id);
        $withDetails = true;
        return new OrderResource($order, $withDetails);
    }

    /**
     * Update order fields
     */
    public function orderUpdates(Request $request)
    {
        $order = MealPlanOrder::find($request->id);
        $newRequest = $request->except('id');
        $order->update($newRequest);
        
        return new OrderResource($order, true);
    }

    public function getOrderStatuses()
    {
        $orderStatus = OrderStatus::getDataForSelect();
        return response()->json($orderStatus);
    }

    /**
     * Order picked up
     */
    public function picked(Request $request)
    {
        $order = MealPlanOrder::find($request->id);
        $picked = PickedUpMealPlanLog::create([
            'order_id' => $order->id,
            'customer_id' => $order->customer_id,
            'comment' => $request->get('comment'),
            'qty' => $request->get('qty') ?? 1
        ]);
        return response()->json($picked);
    }

    public function delivered(Request $request)
    {
        $order = MealPlanOrder::find($request->order_id);
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

        $deliveryModel = DailyDeliveryMealPlanLog::find($dailyDeliveryId);
        // // addMediaFromRequest
        $deliveryModel->addMedia($request->file('image'))->toMediaCollection();

        return response()->json($deliveryModel);
    }

    public function cloneOrder($id)
    {
        $order = CloneMealPlanOrder::createNewOrder($id);
        $withDetails = true;
        return new OrderResource($order, $withDetails);
    }
}
