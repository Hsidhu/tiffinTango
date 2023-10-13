<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DeliveryWindow extends Model
{
    use HasFactory;

    protected $guarded = [];

    public static function getDataForSelect()
    {
        return static::all()->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        });  
    }
}
