<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $defaultFormat = [
        "{address}, {city} {postal_code}, {state}, {country}",
    ];

    protected $requiredAddressKeys = [
        'address',
        'city',
        'postal_code',
        'state',
        'country',
    ];

    public function customer()
    {
        return $this->hasOne(\App\Models\Customer::class);
    }

    public function deliveryZone()
    {
        return $this->belongsTo(\App\Models\deliveryZone::class);
    }

    //
    // Accessors & Mutators
    //

    public function getFormattedAddressAttribute($value)
    {
        return $this->addressFormat($this->toArray(), false);
    }

    private function addressFormat($address, $useLineBreaks = false)
    {
        $formattedAddress = $this->getDefaultFormat();
        // Replace placeholders with values from the address array
        foreach ($this->requiredAddressKeys as $key) {
            $formattedAddress = str_replace("{{$key}}", $address[$key], $formattedAddress);
        }

        if ($useLineBreaks) {
            // Replace ', ' with a line break '<br />' after each comma and space
            $formattedAddress = str_replace(', ', '<br />', $formattedAddress);
        }
        return $formattedAddress;
    }

    public function getDefaultFormat()
    {
        return $this->defaultFormat[0];
    }

}
