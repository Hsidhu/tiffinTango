<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

//https://spatie.be/docs/laravel-medialibrary/v10/basic-usage/associating-files
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MealPlan extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

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
