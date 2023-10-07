<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

// this table will have subtotal (mealplan + options), tax and grand total
class MealPlanOrderTotal extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $guarded = [];
    
    protected $casts = [
        "value" => 'float'
    ];

}
