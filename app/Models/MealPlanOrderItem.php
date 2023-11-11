<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// this model will have selected mealplan price and sub total
class MealPlanOrderItem extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = [];

    protected $casts = [
        "price" => 'float',
        "subtotal" => 'float'
    ];

    public function mealPlan()
    {
        return $this->belongsTo(\App\Models\MealPlan::class, "meal_plan_id");
    }

    public function order()
    {
        return $this->belongsTo(\App\Models\MealPlanOrder::class, "order_id");
    }
 
    public function options()
    {
        return $this->hasMany(\App\Models\MealPlanOrderItemOption::class, "meal_plan_order_item_id");
    }

}
