<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            'meal_plan_id' => $this->meal_plan_id,
            'meal_plan_name' => $this->name,
            'price' => $this->price,
            'subtotal' => $this->subtotal,
            'options' => OrderItemOptionResource::collection($this->options)
        ];
    }
}
