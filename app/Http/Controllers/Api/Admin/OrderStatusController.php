<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\OrderStatus;
use App\Models\MealPlanOrder;

class OrderStatusController extends Controller
{
    
    public function updateOrderStatus(Request $request)
    {
        $order = MealPlanOrder::where('id', $request->get('order_id'))
        ->update([
            'status' => $request->get('status_id')
        ]);
        return response()->json($order);
    }

    public function getOrderStatuses()
    {
        $orderStatus = OrderStatus::getDataForSelect();
        return response()->json($orderStatus);
    }
}
