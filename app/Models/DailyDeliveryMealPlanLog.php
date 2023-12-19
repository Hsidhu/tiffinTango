<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class DailyDeliveryMealPlanLog extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

    protected $guarded = [];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function order()
    {
        return $this->belongsTo(\App\Models\MealPlanOrder::class, 'order_id');
    }

    public function customer()
    {
        return $this->belongsTo(\App\Models\Customer::class, 'customer_id');
    }

    public function driver()
    {
        return $this->belongsTo(\App\Models\Driver::class, 'driver_id');
    }

    public function deliveryZone()
    {
        return $this->belongsTo(\App\Models\DeliveryZone::class, 'delivery_zone_id');
    }

    public function deliveryWindow()
    {
        return $this->belongsTo(\App\Models\DeliveryWindow::class);
    }

    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class);
    }

    public function scopeByClientTimezone($query)
    {
        $tz = config('app.CLIENT_TIMEZONE');
        $todayInClientTimezone = Carbon::now()->tz($tz)->format('Y-m-d');

        return $query->whereDate(
            DB::raw("CONVERT_TZ(created_at, 'UTC', '".$tz."')"),
            $todayInClientTimezone
        );
    }
}
