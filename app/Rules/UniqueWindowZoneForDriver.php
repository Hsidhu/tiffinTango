<?php
namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Models\DriverZone;

class UniqueWindowZoneForDriver implements Rule
{
    private $deliveryWindowId;
    private $deliveryZoneId;
    private $driverId;

    public function __construct($deliveryWindowId, $deliveryZoneId, $driverId)
    {
        $this->deliveryWindowId = $deliveryWindowId;
        $this->deliveryZoneId = $deliveryZoneId;
        $this->driverId = $driverId;
    }

    public function passes($attribute, $value)
    {
        return !DriverZone::where('delivery_window_id', $this->deliveryWindowId)
                                  ->where('delivery_zone_id', $this->deliveryZoneId)
                                  ->where('driver_id', '!=', $this->driverId)
                                  ->exists();
    }

    public function message()
    {
        return 'Another driver is already assigned to this delivery window and zone.';
    }
}
