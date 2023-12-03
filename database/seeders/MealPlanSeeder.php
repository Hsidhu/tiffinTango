<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MealPlan;
use App\Models\MealPlanAddon;
use App\Models\MealPlanOption;
use App\Models\MealPlanOptionValue;
use App\Models\OrderStatus;
use App\Models\DeliveryWindow;

class MealPlanSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $mealPlan = MealPlan::create([
            'name' => '2 Daal + 4 roti - Mon-to-Fri',
            'description' => "Daal short description - delivery will be monday to friday",
            'short_description' => '2 Daal + 4 roti',
            'price' => 100.00,
            'discount' => 0.00,
            'delivery_days' => 'monday_to_friday',
            'image' => ''
        ]);
        $mealPlanOption = MealPlanOption::create([
            'name' => 'option - 1', 
            'display_type' => 'select', 
            'status' => 1
        ]);
        MealPlanOptionValue::create([
            'meal_plan_option_id' => 1,
            'value' => '10 oz',
            'price' => 10.00
        ]);

        MealPlanOptionValue::create([
            'meal_plan_option_id' => 1,
            'value' => '8 oz',
            'price' => 8.00
        ]);

        MealPlanAddon::create([
            'meal_plan_id' => 1,
            'meal_plan_option_id' => 1,
            'required' => 1,
            'priority' => 1,
            'status' => 1
        ]);

        /** Order status */
        $this->createOrderStatus();

        /** Delivery Windows */
        $this->createDeliveryWindows();

    }

    private function createOrderStatus()
    {
        $orderStatus = [
            [
                'name' => 'Received',
                'description' => 'Customer order Received'
            ],
            [
                'name' => 'Pending',
                'description' => 'Customer order Pending'
            ],
            [
                'name' => 'Scheduled',
                'description' => 'Ready to be shipped Scheduled'
            ],
            [
                'name' => 'Completed',
                'description' => 'Customer order Completed'
            ],
            [
                'name' => 'Canceled',
                'description' => 'Customer order Canceled'
            ]
        ];
        
        foreach ($orderStatus as $status) {
            OrderStatus::create($status);
        }
    }

    private function createDeliveryWindows()
    {
        $deliveryWindows = [
            [
                'name' => 'Morning',
                'description' => 'Morning deliveries and driver shifts'
            ],
            [
                'name' => 'Afternoon',
                'description' => 'Afternoon deliveries',
                'status' => 0
            ],
            [
                'name' => 'Evening',
                'description' => 'Evening deliveries',
            ],
        ];

        foreach ($deliveryWindows as $deliveryWindow) {
            DeliveryWindow::create($deliveryWindow);
        }
    }
}
