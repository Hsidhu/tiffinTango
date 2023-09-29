<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MealPlan extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    public function addOns()
    {
        return $this->hasMany(\App\Models\MealPlanAddon::class);
    }

    // public function getImageAttribute()
    // {
    //     return 'images/mealplan/'.$this->attributes['image'];
    // }
}
