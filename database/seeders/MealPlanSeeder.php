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
            'name' => '2 Daal + 4 roti',
            'description' => "Daal Daal Daal",
            'short_description' => 'Daal short descriptin',
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
        OrderStatus::create([
            'name' => 'Received',
            'description' => 'customer order Received'
        ]);
        OrderStatus::create([
            'name' => 'Pending',
            'description' => 'customer order Pending'
        ]);
        OrderStatus::create([
            'name' => 'Scheduled',
            'description' => 'Ready to be shipped Scheduled'
        ]);
        OrderStatus::create([
            'name' => 'Canceled',
            'description' => 'customer order Canceled'
        ]);

        /** Delivery Windows */
        DeliveryWindow::create([
            'name' => 'Morning',
            'description' => 'Morning deliveries and driver shifts'
        ]);
        DeliveryWindow::create([
            'name' => 'Afternoon',
            'description' => 'Afternoon deliveries',
            'status' => 0
        ]);

        DeliveryWindow::create([
            'name' => 'Evening',
            'description' => 'Evening deliveries',
        ]);
    }
}
