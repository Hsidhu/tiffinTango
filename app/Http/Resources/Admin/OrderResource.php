<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;

use App\Http\Resources\Admin\OrderItemResource;
use App\Http\Resources\Admin\OrderTotalResource;
use App\Http\Resources\Admin\DailyDeliveryMealPlanLogResouce;
use App\Http\Resources\Admin\OrderPickedupLog;

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
            'end_date' => $this->end_date,
            'total_price' => $this->total_price,
            'order_status_id' => $this->order_status_id,
            'status' => $this->status->name,
            'payment_processed'=> $this->payment_processed,
            'items' => OrderItemResource::collection($this->items),
            'totals' => OrderTotalResource::collection($this->totals),
            'deliveries' => DailyDeliveryMealPlanLogResouce::collection($this->deliveries),
            'pickups' => OrderPickedupLog::collection($this->pickups),
            'created_at' => $this->created_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s'),
            'updated_at' => $this->updated_at->setTimezone(config('app.CLIENT_TIMEZONE'))->format('Y-m-d H:i:s')
        ];
    }
}
