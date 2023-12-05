<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class DeliveryZoneResource extends JsonResource
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
            'location_id' => $this->location_id,
            'name' => $this->name,
            'type' => $this->type,
            'addresses' => $this->addresses,
            'drivers' => $this->drivers,
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s')
        ];
    }
}
