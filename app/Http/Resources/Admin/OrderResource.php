<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'customer_id' => $this->customer_id,
            'customer_name' => $this->customer->full_name,
            'email' => $this->customer->email,
            'phone' => $this->customer->phone,
            'customer_address' => $this->customer->address->address,
            'customer_lat' => $this->customer->address->lat,
            'customer_lng' => $this->customer->address->lng,
            'customer_delivery_zone' => $this->customer->address->deliveryZone,
            'order_type' => $this->order_type,
            'start_date' => $this->start_date,
            'created_at' => $this->created_at,
            'end_date' => $this->end_date,
            'total_price' => $this->total_price,
            'items' => OrderItemResource::collection($this->items),
            'totals' => OrderTotalResource::collection($this->totals)
        ];
    }
}
