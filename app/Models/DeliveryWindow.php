<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryWindow extends Model
{
    use HasFactory;

    const ACTIVE = 1;
    const INACTIVE = 0;

    protected $guarded = [];

    public static function getDataForSelect()
    {
        return static::where('status', self::ACTIVE)->get()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        });  
    }
}
