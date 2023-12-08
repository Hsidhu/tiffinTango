<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DriverZone extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function driver()
    {
        return $this->belongsTo(\App\Models\Driver::class, 'driver_id');
    }

    public function deliveryWindow()
    {
        return $this->belongsTo(\App\Models\DeliveryWindow::class, 'delivery_window_id');
    }

    public function deliveryZone()
    {
        return $this->belongsTo(\App\Models\DeliveryZone::class, 'delivery_zone_id');
    }
}
