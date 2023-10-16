<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $defaultFormat = [
        "{address_1}\n{address_2}\n{city} {postcode}\n{state}\n{country}",
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

    private function addressFormat($address, $useLineBreaks = true)
    {
        $format = $this->getDefaultFormat();

        $address = $this->evalAddress($address);

        // Override format if present in address array
        if (!empty($address['format']))
            $format = $address['format'];

        $formattedAddress = str_replace(['\r\n', '\r', '\n'], '<br />',
            preg_replace(['/\s\s+/', '/\r\r+/', '/\n\n+/'], '<br />',
                trim(str_replace([
                    '{address_1}', '{address_2}', '{city}', '{postcode}', '{state}', '{country}',
                ], array_except($address, 'format'), $format))
            )
        );

        if (!$useLineBreaks)
            $formattedAddress = str_replace('<br />', ', ', $formattedAddress);

        return strip_tags($formattedAddress);
    }
}
