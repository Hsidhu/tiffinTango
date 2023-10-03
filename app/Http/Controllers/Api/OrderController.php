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
use App\Models\Customer;
use App\Models\Address;

class OrderController extends Controller
{

    public function getMealPlans()
    {
        $mealPlans = MealPlan::where('status', 1)->get();
        return MealPlanOrderResource::collection($mealPlans)->collection;
    }

    public function createOrder(Request $request)
    {
        $mealPlan =  MealPlan::find($request->get('id'));

        // MealPlanOrder
        // MealPlanOrderItem -> which mealplan
        // MealPlanOrderItemOption -> which options
        // MealPlanOrderTotal -> iitem total + delivery total + HST
        // Customer
        // Address

        $this->validate($request, [
            'name' => ['required', 'between:1,64'],
            'description' => ['required', 'between:1,48'],
            'short_description' => ['between:1,48'],
            'price' => ['required','numeric'],
            'discount' => ['numeric'],
            'duration' => ['max:64']
        ]);
    }
}
