<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $defaultFormat = [
        "{address}\n{city} {postal_code}\n{state}\n{country}",
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

    private function addressFormat($address, $useLineBreaks = true)
    {
        $format = $this->getDefaultFormat();

        $address = $this->evalAddress($address);

        // Override format if present in address array
        if (!empty($address['format']))
            $format = $address['format'];

        $formattedAddress = str_replace(['\r\n', '\r', '\n'], '<br />',
            preg_replace(['/\s\s+/', '/\r\r+/', '/\n\n+/'], '<br />',
                str_replace([
                    '{address}', '{city}', '{postal_code}', '{state}', '{country}',
                ], array_except($address, 'format'), $format)
            )
        );

        if (!$useLineBreaks)
            $formattedAddress = str_replace('<br />', ', ', $formattedAddress);

        return strip_tags($formattedAddress);
    }

    protected function evalAddress($address)
    {
        $result = [];
        foreach ($this->requiredAddressKeys as $key) {
            $result[$key] = $address[$key] ?? '';
        }
        return $result;
    }

    public function getDefaultFormat()
    {
        return $this->defaultFormat;
    }
}
