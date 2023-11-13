<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Driver extends Authenticatable
{
    use HasFactory, HasApiTokens;

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $guarded = [];

    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class);
    }

    public function driverZones()
    {
        return $this->hasMany(\App\Models\DriverZone::class);
    }

    public function shift()
    {
        return $this->hasOne(\App\Models\DeliveryWindow::class);
    }

    public function getFullNameAttribute($value)
    {
        return $this->first_name.' '.$this->last_name;
    }

    public static function getDataForSelect()
    {
        return static::all()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->full_name,
            ];
        });  
    }

}
