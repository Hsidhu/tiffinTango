<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class DriverResource extends JsonResource
{
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
            'full_name' => $this->full_name,
            'email' => $this->email,
            'phone' => $this->phone,
            'address_id' => $this->address->id,
            'address' => $this->address->address,
            'city' => $this->address->city,
            'postal_code' => $this->address->postal_code,
            'driverZones' => $this->driverZones,
            'shift' => $this->shift,
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s')
        ];
    }
}
