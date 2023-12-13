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

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $guarded = [];

    protected $casts = [
        "price" => 'float',
        "quota" => 'int',
    ];
    
    public function addOns()
    {
        return $this->hasMany(\App\Models\MealPlanAddon::class);
    }

    public function options()
    {
        return $this->belongsToMany(\App\Models\MealPlanOption::class, 'meal_plan_addons');
    }

    public function deliveryType()
    {
        return [
            [ 'value' => 'pickup', 'label' => 'pickup' ],
            [ 'value' => 'delivery', 'label' => 'delivery' ]
        ];
    }
    
    public function durationList()
    {
        return [
            [ 'value' => 'monday_to_friday', 'label' => 'Monday to Friday', ],
            [ 'value' => 'monday_to_saturday', 'label' => 'Monday to Saturday', ]
        ];
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
