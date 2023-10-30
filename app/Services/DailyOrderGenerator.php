<?php
namespace App\Services;

use App\Models\Customer;
use App\Models\MealPlanOrder;
use App\Models\Driver;
use App\Models\DailyDeliveryMealPlanLog;
use App\Models\OrderStatus;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DailyOrderGenerator 
{
    //get orders by Delivery Windows

    public function generateOrder($deliveryWindowId)
    {
        $orderAlreadyCreate = $this->orderAlreadyCreate();
        if ($orderAlreadyCreate) {
            return false;
        }

        $orders = $this->getMealPlanOrders($deliveryWindowId);

        foreach ($orders as $order) {

            $deliveryZoneId = $order->customer->address->delivery_zone_id;
            $driver = $this->getDriver($deliveryZoneId, $deliveryWindowId);

            $this->createDailyDeliveries(
                $order->id, $order->customer_id, 
                $driver->id, $deliveryZoneId, 
                $order->delivery_window_id
            );
        }
        return true;
    }

    /**
     * Check if delivery orders are already create for today
     */
    public function orderAlreadyCreate()
    {
        $tz = $this->getClientTimezone();
        $today = Carbon::now()->tz($tz);
        return DailyDeliveryMealPlanLog::whereDate(
                DB::raw("CONVERT_TZ(created_at, 'UTC', '".$tz."')"), 
                $today->format('Y-m-d')
            )->exists();
    }

    /**
     * Create if delivery orders
     */
    public function createDailyDeliveries($customer_id, $order_id, $driver_id, $deliveryZoneId, $deliveryWindowId)
    {
        DailyDeliveryMealPlanLog::create([
            "customer_id" => $customer_id,
            "driver_id" => $order_id,
            "order_id" => $driver_id,
            "delivery_zone_id" => $deliveryZoneId,
            "delivery_window_id" => $deliveryWindowId,
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
    public function getMealPlanOrders($deliveryWindowId, $customerIdsByZone = null)
    {
        $tz = $this->getClientTimezone();
        $todayDate = Carbon::now()->tz($tz)->format('Y-m-d');
        $query = MealPlanOrder::whereDate(
            DB::raw("CONVERT_TZ(start_date, 'UTC', '".$tz."')"),
            '<=', $todayDate
            )
            ->whereDate(
                'end_date', 
            '>=', $todayDate)
            ->where('order_type', MealPlanOrder::DELIVERY)
            ->where('order_status_id', $this->orderStatus()->id)
            ->where('payment_processed', MealPlanOrder::PAYMENT_PROCESSED)
            ->where('delivery_window_id', $deliveryWindowId);

        if($customerIdsByZone !== null) {
            $query->whereIn('customer_id', $customerIdsByZone);
        }
        
        return $query->get();
    }

    public function orderStatus()
    {
        return OrderStatus::where('name', 'Scheduled')->first();
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

    private function getClientTimezone()
    {
        return config('app.CLIENT_TIMEZONE');
    }

}

