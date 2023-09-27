<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlanAddon extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function mealPlan()
    {
        return $this->belongsTo(\App\Models\MealPlan::class);
    }

    public function mealPlanOption()
    {
        return $this->hasOne(\App\Models\MealPlanOption::class, 'id', 'meal_plan_option_id');
    }
}
