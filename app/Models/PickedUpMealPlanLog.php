<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PickedUpMealPlanLog extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    // qty
    protected $casts = [
        'created_at' => 'datetime',
        'picked_at' => 'datetime',
    ];

}
