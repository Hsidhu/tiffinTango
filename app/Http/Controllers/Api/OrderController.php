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
use App\Models\DeliveryWindow;

class OrderController extends Controller
{

    public function getMealPlans(Request $request)
    {
        $deliveryType = $request->get('delivery_type', null);
        $mealPlans = MealPlan::where('status', 1)
        ->when(!empty($deliveryType), function($query) use ($deliveryType) {
            return $query->where('delivery_type', $deliveryType);
        })->get();
    
        return MealPlanOrderResource::collection($mealPlans)->collection;
    }

    public function createOrder(Request $request)
    {
        $items = $request->input('items');
        $mealPlan = $this->getMealPlan($items)['mealPlan'];
        $options = $this->getMealPlan($items)['options'];
        $subTotal = $this->getMealPlan($items)['subTotal'];

        // create customer and address
        $customer = $this->createCustomer($request);

        // add delivery order period
        $orderData = [
            'customer_id' => $customer->id,
            'order_type' => $request->get('order_type'),
            "start_date" => $request->get('start_date'),
            'total_items' => count($request->get('items')),
            "total_price" => $subTotal,
            "invoice_no" => 'adsfaf',
            "payment_type" => 'cash',
            'payment_processed' => 1,
            'order_status_id' => 1,
            'delivery_comment' => $request->get('delivery_comment'),
            'comment' => $request->get('comment'),
            'delivery_window_id' => $request->get('delivery_window_id')
        ];
        $order = MealPlanOrder::create($orderData);
        $orderItem = [
            'order_id' => $order->id,
            'meal_plan_id' => $mealPlan['meal_id'],
            'name' => $mealPlan['name'],
            'price' => $mealPlan['price'],
            'subtotal' => $subTotal,
        ];
        $orderItem = MealPlanOrderItem::create($orderItem);

        foreach($options as $option)
        {
            MealPlanOrderItemOption::create([
                "order_id" => $order->id,
                "meal_plan_order_item_id" => $orderItem->id,
                "meal_plan_id" => $mealPlan['meal_id'],
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
            "value" => $subTotal,
            "is_summable" => 1
        ];
        if(setting('core.include_delivery_charge')){
            $orderTotalItems[1] = [
                "order_id" => $order->id,
                "code" => 'delivery',
                "title" => 'Delivery',
                "value" => $request->get('deliveryCharges'),
                "is_summable" => 1
            ];
            $subTotal += $request->get('deliveryCharges');
        }

        if(setting('core.include_tax')){
            $taxAmount = $subTotal * setting('core.tax');
            $orderTotalItems[2] = [
                "order_id" => $order->id,
                "code" => 'tax',
                "title" => 'Tax[13%]',
                "value" => $taxAmount,
                "is_summable" => 1
            ];
            $subTotal += $taxAmount;
        }
        
        $orderTotalItems[3] =[
            "order_id" => $order->id,
            "code" => 'total',
            "title" => 'Grand Total',
            "value" => $subTotal,
            "is_summable" => 0
        ];
        $orderItemTotal = MealPlanOrderTotal::insert($orderTotalItems);
        return;
    }

    private function createCustomer(Request $request)
    {
        $address = Address::create($request->only(['address', 'city', 'state', 'postal_code', 'country', 'lat', 'lng']));
        $customerData = array_merge(['address_id' => $address->id, 'password' => config('app.customer_default')],
            $request->only(['first_name','last_name','email', 'phone'])
        );
        return Customer::create($customerData);
    }

    public function getDeliveryCharges()
    {
        return 10;    
    }

    private function getMealPlan($items)
    {
        $mealItems = [];
        $optionItems = [];
        $totalPrice = 0;
        foreach ($items as $item) {
            if (isset($item['meal_id'])) {
                $mealId = $item['meal_id'];
                unset($item['mealPlanOptions']);
                $mealItems[$mealId] = $item;
                if(!empty($item['selectedOptions']))
                {
                    foreach($item['selectedOptions'] as $selectedOption){
                        $optionId = $selectedOption['meal_plan_option_id'];
                        $optionItems[$optionId] = $selectedOption;
                        $totalPrice += $selectedOption['price'];
                    }
                }
            }
            $totalPrice += $item['price'];
        }
        return [
            'mealPlan' => reset($mealItems), // get first mealplan
            'options' => $optionItems,
            'subTotal' => $totalPrice
        ];
    }

    public function getDeliveryWindows()
    {
        $deliveryWindows = DeliveryWindow::getDataForSelect();
        return response()->json($deliveryWindows);
    }
}
