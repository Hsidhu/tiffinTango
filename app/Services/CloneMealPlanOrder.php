<?php

namespace App\Services;

use App\Models\MealPlanOrder;
use App\Models\MealPlanOrderItem;
use App\Models\MealPlanOrderItemOption;
use App\Models\MealPlanOrderTotal;
use Carbon\Carbon;

class CloneMealPlanOrder {

    public static function createNewOrder($orderId)
    {
        // Assuming you have the original order
        $originalOrder = MealPlanOrder::find($orderId);

        // Replicate the original order
        $clonedOrder = $originalOrder->replicate();

        $twoDaysLater = Carbon::now()->addDays(2)->toDateTimeString();
        // Change the start_date to the desired value
        $clonedOrder->start_date = $twoDaysLater;

        // Save the cloned order
        $clonedOrder->save();

        // Clone related items and their options
        foreach ($originalOrder->items as $item) {
            $clonedItem = $item->replicate();
            $clonedItem->order_id = $clonedOrder->id;
            $clonedItem->save();

            foreach ($item->options as $option) {
                $clonedOption = $option->replicate();
                $clonedOption->order_id = $clonedOrder->id; 
                $clonedOption->meal_plan_order_item_id = $clonedItem->id;
                $clonedOption->save();
            }
        }

        // Clone order totals
        foreach ($originalOrder->totals as $total) {
            $clonedTotal = $total->replicate();
            $clonedTotal->order_id = $clonedOrder->id;
            $clonedTotal->save();
        }
        return $originalOrder;
    }

}
