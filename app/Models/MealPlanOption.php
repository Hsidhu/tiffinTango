<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// meanu_options
class MealPlanOption extends Model
{
    use HasFactory;

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $guarded = [];

    public function optionValues()
    {
        return $this->hasMany(\App\Models\MealPlanOptionValue::class);
    }

    public function mealplans()
    {
        return $this->belongsToMany(\App\Models\MealPlan::class, 'meal_plan_addons');
    }

    // get data from admin meal side edit mealplan page
    // if mealPlan already have option attached don't show that option in select
    public static function getDataForSelect($mealplan_id)
    {
        $result = static::all()->map(function ($item) use ($mealplan_id) {
            $optionAttachedTo = $item->mealplans->pluck('id')->toArray();
            if(!in_array($mealplan_id, $optionAttachedTo)){
                return [
                    'value' => $item->id,
                    'label' => $item->name,
                ];
            }
            return;
        })->filter();
        return $result->values()->all();   
    }

    public static function getAllActiveDataForSelect()
    {
        return static::where('status', self::ACTIVE)->get()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        });  
    }
}
