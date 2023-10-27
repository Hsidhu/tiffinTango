<?php

namespace App\Http\Resources\admin;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderPickedupLog extends JsonResource
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
            'comment' => $this->comment,
            'customer_id' => $this->customer_id,
            'order_id' => $this->order_id,
            'picked_at' => $this->picked_at->format('Y-m-d'), // Format in the original timezone
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s')
        ];
        return parent::toArray($request);
    }

}
