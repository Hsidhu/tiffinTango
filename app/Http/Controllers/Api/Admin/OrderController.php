<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
use App\Models\OrderStatus;
use App\Http\Resources\Admin\OrderResource;

class OrderController extends Controller
{
    public function index()
    {
        $orders = MealPlanOrder::get();
        return OrderResource::collection($orders);
    }

    public function view($id)
    {
        $order = MealPlanOrder::find($id);
        return new OrderResource($order);
    }

    /**
     * Update order fields
     */
    public function orderUpdates(Request $request)
    {
        $order = MealPlanOrder::find($request->id);
        $newRequest = $request->except('id');
        $order->update($newRequest);
        
        return new OrderResource($order);
    }

    public function getOrderStatuses()
    {
        $orderStatus = OrderStatus::getDataForSelect();
        return response()->json($orderStatus);
    }

}
