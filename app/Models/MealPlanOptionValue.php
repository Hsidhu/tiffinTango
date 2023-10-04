<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlanOptionValue extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        "price" => 'float'
    ];

    public function mealplanOption()
    {
        return $this->belongsTo(\App\Models\MealPlanOption::class, 'meal_plan_option_id');
    }
}
