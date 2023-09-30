<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\MealPlanOptionValueOrderResource;

class MealPlanAddOnOrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        // mix of meal addon and meal options
        return [
            'meal_plan_id' => $this->meal_plan_id,
            'meal_plan_option_id' => $this->meal_plan_option_id,
            'required' => $this->required,
            'name' => $this->mealPlanOption->name,
            'display' => $this->mealPlanOption->display_type,
            'values'=> MealPlanOptionValueOrderResource::collection($this->mealPlanOption->optionValues)
        ];
    }
}
