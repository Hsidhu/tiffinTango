<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Admin\MealPlanOptionResource;

class MealPlanResource extends JsonResource
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
            'name' => $this->name,
            'description' => $this->description,
            'short_description' => $this->short_description,
            'price' => $this->price,
            'discount' => $this->discount,
            'duration' => $this->duration,
            'media_url' => $this->getFirstMediaUrl('mealPlanImage') ?? null,
            'delivery_type'=> $this->delivery_type,
            'delivery_days'=> $this->delivery_days,
            'media_info' => $this->getImageInfo(),
            'quota'=> $this->quota,
            'status'=> $this->status,
            'options' => MealPlanOptionResource::collection($this->options)
        ];

    }

    protected function getImageInfo()
    {
        $mealPlanImage = $this->getFirstMedia('mealPlanImage');

        return $mealPlanImage ? 
            [
                'uid' => $mealPlanImage->id,
                'name' => $mealPlanImage->name,
                'status' => 'done',
                'url' => $mealPlanImage->getUrl()
            ]
            : null;
    }

}
