<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\MealPlanAddOnOrderResource;

class MealPlanOrderResource extends JsonResource
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
            'meal_id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'short_description' => $this->short_description,
            'price' => $this->price,
            'media_url' => $this->getFirstMediaUrl('mealPlanImage') ?? null,
            'mealPlanOptions' => MealPlanAddOnOrderResource::collection($this->addOns)
        ];
    }
}
