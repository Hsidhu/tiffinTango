<?php
namespace App\Http\Controllers\Api\Customer;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
use App\Models\OrderStatus;
use App\Models\PickedUpMealPlanLog;
use App\Models\DailyDeliveryMealPlanLog;
use App\Http\Resources\Admin\OrderResource;
use Carbon\Carbon;

class OrderController extends Controller
{
    public function index()
    {
        $user = \Auth::user();
        $orders = MealPlanOrder::where('customer_id', $user->id)->get();
        return OrderResource::collection($orders);
    }

    public function view($id)
    {
        $order = MealPlanOrder::find($id);
        return new OrderResource($order, true);
    }

    public function getOrderStatuses()
    {
        $orderStatus = OrderStatus::getDataForSelect();
        return response()->json($orderStatus);
    }

}
