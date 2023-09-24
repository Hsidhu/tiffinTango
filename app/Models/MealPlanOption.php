<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlanOption extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function optionValues()
    {
        return $this->hasMany(\App\Models\MealPlanOptionValue::class);
    }

    public function mealplans()
    {
        return $this->belongsToMany(\App\Models\MealPlan::class, 'meal_plan_addons');
    }

    public static function getDataForSelect()
    {
        return static::all()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        });
    }
}
