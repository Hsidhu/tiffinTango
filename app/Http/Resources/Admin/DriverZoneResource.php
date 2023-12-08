<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverZoneResource extends JsonResource
{
    public static $wrap = null;
    
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'delivery_window_id' => $this->deliveryWindow->id,
            'delivery_window_name' => $this->deliveryWindow->name,
            'delivery_zone_id' => $this->deliveryZone->id,
            'delivery_zone_name' => $this->deliveryZone->name
        ];
    }
}
