<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
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
}
