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
        $mealPlan = MealPlan::create([]);
        $mealPlanOption = MealPlanOption::create([]);
        $mealPlanOptionValue = MealPlanOptionValue::create([]);


        $mealPlanAddon = MealPlanAddon::create([]);
    }
}
