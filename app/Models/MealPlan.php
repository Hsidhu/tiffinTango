<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        "price" => 'float',
        
    ];
    
    public function addOns()
    {
        return $this->hasMany(\App\Models\MealPlanAddon::class);
    }

    public function options()
    {
        return $this->belongsToMany(\App\Models\MealPlanOption::class, 'meal_plan_addons');
    }

    // Accessor to format price without .00
    // public function getPriceAttribute()
    // {
    //     // Cast the value to a float and format it without decimal places
    //     return number_format((float)$this->attributes['price'], 2, '.', '');
    // }

    // public function getImageAttribute()
    // {
    //     return 'images/mealplan/'.$this->attributes['image'];
    // }
}
