<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\SetClientTimeZone;

class DeliveryZone extends Model
{
    use HasFactory ;

    protected $guarded = [];

    protected $casts = [
        'boundaries' => 'array'
    ];

    public function getBoundariessAttribute($value)
    {
        return json_decode($this->boundaries);
    }
}
