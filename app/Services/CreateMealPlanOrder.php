<?php
namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Carbon\Carbon;

use App\Models\Customer;
use App\Models\MealPlan;

use App\Models\MealPlanOrder;
use App\Models\MealPlanOrderItem;
use App\Models\MealPlanOrderItemOption;
use App\Models\MealPlanOrderTotal;

class CreateMealPlanOrder 
{
    public $request;
    public $subTotalPrice = 0;
    public $totalPrice = 0;

    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    
    public function create()
    {
        $customer = Customer::where('id', $this->request->get('customer_id'))->first();
        $mealPlan = MealPlan::where('id', $this->request->get('meal')['meal_id'])->first();

        $this->subTotalPrice = $mealPlan->price;

        $options = $this->request->get('options');
        if($options){
            foreach($options as $option) {
                $this->subTotalPrice  += $option['price'];
            }
        }

        // add delivery order period
        $orderData = [
            'customer_id' => $customer->id,
            'order_type' => $mealPlan->delivery_type,
            "start_date" => $this->request->get('start_date', Carbon::now()),
            "end_date" => $this->request->get('end_date', Carbon::now()),
            'total_items' => 1,
            "total_price" => $this->subTotalPrice,
            "invoice_no" => '',
            "payment_type" => 'cash',
            'payment_processed' => 0,
            'order_status_id' => 1,
            'delivery_comment' => $this->request->get('delivery_comment', 'no comment'),
            'comment' => $this->request->get('comment'),
            'delivery_window_id' => $this->request->get('delivery_window_id', 1)
        ];
        $order = MealPlanOrder::create($orderData);

        $orderItem = [
            'order_id' => $order->id,
            'meal_plan_id' => $mealPlan->id,
            'name' => $mealPlan->name,
            'price' => $mealPlan->price,
            'subtotal' => $this->subTotalPrice,
        ];
        $orderItem = MealPlanOrderItem::create($orderItem);
        
        foreach($options as $option)
        {
            MealPlanOrderItemOption::create([
                "order_id" => $order->id,
                "meal_plan_order_item_id" => $orderItem->id,
                "meal_plan_id" => $mealPlan->id,
                "meal_plan_option_id" => $option["meal_plan_option_id"],
                "option_name" => $option["meal_plan_option_name"],
                "value_id" => $option["value_id"],
                "value_name" => $option["value"],
                "value_price" => $option["price"],
            ]);
        }

        $orderTotalItems[0] = [
            "order_id" => $order->id,
            "code" => 'subtotal',
            "title" => 'Subtotal',
            "value" => $this->subTotalPrice,
            "is_summable" => 1
        ];

        $this->totalPrice = $this->subTotalPrice;
        $orderTotalItems[3] =[
            "order_id" => $order->id,
            "code" => 'total',
            "title" => 'Grand Total',
            "value" => $this->totalPrice,
            "is_summable" => 0
        ];
        $orderItemTotal = MealPlanOrderTotal::insert($orderTotalItems);
        return true;
    }

    public function beginOrderCreation()
    {
        DB::beginTransaction();
        try {
            // Create the user
            $userData = Arr::only($data, ['name', 'email', 'password']); // Add more fields as necessary
            $user = User::create($userData);

            // Check if post data exists and create the post
            if (isset($data['post'])) {
                $postData = $data['post'];
                $postData['user_id'] = $user->id;
                $post = Post::create($postData);
            }

            DB::commit();
            return $user; // Or return a response as required
        } catch (\Exception $e) {
            DB::rollBack();
            // Handle the exception as needed
        }
    }
}

