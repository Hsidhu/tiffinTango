<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class MealPlanOptionValueOrderResource extends JsonResource
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
            'meal_plan_option_id' => $this->meal_plan_option_id,
            'meal_plan_option_name' => $this->mealplanOption->name,
            'value_id' => $this->id,
            'value' => $this->value,
            'price' => $this->price
        ];
    }
}
