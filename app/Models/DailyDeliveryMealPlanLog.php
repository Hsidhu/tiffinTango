<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DailyDeliveryMealPlanLog extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function order()
    {
        return $this->belongsTo(\App\Models\MealPlanOrder::class);
    }

    public function customer()
    {
        return $this->belongsTo(\App\Models\Customer::class);
    }

    public function driver()
    {
        return $this->belongsTo(\App\Models\Driver::class);
    }

    public function deliveryZone()
    {
        return $this->belongsTo(\App\Models\DeliveryZone::class);
    }

    public function deliveryWindow()
    {
        return $this->belongsTo(\App\Models\DeliveryWindow::class);
    }
}
