<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Driver extends Model
{
    use HasFactory, HasApiTokens;

    protected $guarded = [];

    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class);
    }

    public function getFullNameAttribute($value)
    {
        return $this->first_name.' '.$this->last_name;
    }

}
