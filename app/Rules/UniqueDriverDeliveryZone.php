<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\DriverZone;

class UniqueDriverDeliveryZone implements Rule
{
    private $deliveryWindowId;
    private $driverId;

    public function __construct($deliveryWindowId, $driverId)
    {
        $this->deliveryWindowId = $deliveryWindowId;
        $this->driverId = $driverId;
    }

    public function passes($attribute, $value)
    {
        return !DriverZone::where('delivery_window_id', $this->deliveryWindowId)
                                  ->where('driver_id', $this->driverId)
                                  ->where('delivery_zone_id', '!=', $value)
                                  ->exists();
    }

    public function message()
    {
        return 'The driver is already assigned to a zone for this delivery window.';
    }
}
