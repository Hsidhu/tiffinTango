<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    public $relation = [
        'belongsTo' => [
            'customer' => 'App\Models\Customer',
        ],
    ];

    protected $guarded = [];

    //
    // Accessors & Mutators
    //

    public function getFormattedAddressAttribute($value)
    {
        return format_address($this->toArray(), false);
    }
}
