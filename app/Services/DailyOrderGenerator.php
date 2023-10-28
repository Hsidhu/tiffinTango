<?php

namespace App\Services;

use App\Models\Customer;
use App\Models\MealPlanOrder;
use App\Models\Driver;
use App\Models\DriverZone;
use App\Models\DeliveryWindow;
use App\Models\DailyDeliveryMealPlanLog;
use App\Models\OrderStatus;
use Carbon\Carbon;

class DailyOrderGenerator 
{

    public function generateOrder($deliveryZoneId, $deliveryWindowId)
    {
        $orderAlreadyCreate = $this->orderAlreadyCreate();
        if ($orderAlreadyCreate) {
            return false;
        }
        $customerIdsByZone = $this->getCustomersByDeliveryZone($deliveryZoneId);

        $driver = $this->getDriver($deliveryZoneId, $deliveryWindowId);

        $orders = $this->getMealPlanOrders($deliveryWindowId, $customerIdsByZone);

        foreach ($orders as $order) {
            $this->createDailyDeliveries($order->id, $order->customer_id, $driver->id);
        }
        return true;
    }

    /**
     * Check if delivery orders are already create for today
     */
    public function orderAlreadyCreate()
    {
        $today = Carbon::now();
        return DailyDeliveryMealPlanLog::whereDate('created_at', $today->toDateString())->exists();
    }

    /**
     * Create if delivery orders
     */
    public function createDailyDeliveries($customer_id, $order_id, $driver_id)
    {
        DailyDeliveryMealPlanLog::create([
            "customer_id" => $customer_id,
            "driver_id" => $order_id,
            "order_id" => $driver_id,
        ]);
    }

    /**
     * Get orders base or condition
     * Order for customer in given delivery zone
     * Order is Delivery order
     * Status is Scheduled
     * Payment is Processed
     * given delivery window and customers
     * Check if order is for 5 or 6 days
     */
    public function getMealPlanOrders($deliveryWindowId, $customerIdsByZone)
    {
        $today = Carbon::now()->format('Y-m-d H:i:s');
        return MealPlanOrder::whereDate('start_date', '<=', $today)->whereDate('end_date', '>=', $today)
            ->where('order_type', MealPlanOrder::DELIVERY)
            ->where('order_status_id', $this->orderStatus()->id)
            ->where('payment_processed', MealPlanOrder::PAYMENT_PROCESSED)
            ->where('delivery_window_id', $deliveryWindowId)
            ->whereIn('customer_id', $customerIdsByZone)
            ->get();
    }

    public function orderStatus()
    {
        return OrderStatus::where('name', 'Scheduled')->first();
    }

     /**
     * Get Customer based on zone
     */
    public function getCustomersByDeliveryZone($deliveryZoneId)
    {
        return Customer::where('status', Customer::ACTIVE)
                ->whereHas('address', function ($query) use ($deliveryZoneId) {
                    $query->where('delivery_zone_id', $deliveryZoneId);
                })
                ->get()->pluck('id')->toArray();
    }

    /**
     * Get Driver based on zone and delivery window
     */
    public function getDriver($deliveryZoneId, $deliveryWindowId)
    {
        return Driver::where('delivery_window_id', $deliveryWindowId)->where('status', Driver::ACTIVE)
        ->whereHas('driverZones', function ($query) use ($deliveryZoneId) {
            $query->where('delivery_zone_id', $deliveryZoneId);
        })
        ->first();
    }

}

