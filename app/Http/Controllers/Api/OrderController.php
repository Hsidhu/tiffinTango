<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlan;
use App\Http\Resources\MealPlanOrderResource;

use App\Models\MealPlanOrder;
use App\Models\MealPlanOrderItem;
use App\Models\MealPlanOrderItemOption;
use App\Models\MealPlanOrderTotal;

class OrderController extends Controller
{

    public function getMealPlans()
    {
        $mealPlans = MealPlan::where('status', 1)->get();
        return MealPlanOrderResource::collection($mealPlans)->collection;
    }

    public function save(Request $request)
    {

    }
}
