<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MealPlan;
use App\Models\MealPlanAddon;
use App\Models\MealPlanOption;
use App\Models\MealPlanOptionValue;

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
            'duration' => '',
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


        $mealPlanAddon = MealPlanAddon::create([]);
    }
}
