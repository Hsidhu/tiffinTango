<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class DailyDeliveryMealPlanLogResouce extends JsonResource
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
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->full_name,
            'customer_email' => $this->customer->email,
            'address' => $this->customer->address->formatted_address,
            'customer_phone' => $this->customer->phone,
            'driver_id' => $this->driver_id,
            'driver_name' => $this->driver->full_name,
            'driver_email' => $this->driver->email,
            'driver_phone' => $this->driver->phone,
            'order_id' => $this->order->id,
            'delivery_comment' => $this->order->delivery_comment,
            'items' => $this->order->items()->first(),
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s')
        ];
    }
}
