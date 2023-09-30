<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// this model will have selected mealplan price and sub total
class MealPlanOrderItem extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function item()
    {
        return $this->belongTo(\App\Models\MealPlanOrderItem::class);
    }
 
    public function options()
    {
        return $this->hasMany(\App\Models\MealPlanOrderItemOption::class);
    }

}
