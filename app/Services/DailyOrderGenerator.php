<?php
namespace App\Services;

use App\Models\Customer;
use App\Models\MealPlanOrder;
use App\Models\MealPlan;
use App\Models\Driver;
use App\Models\DriverZone;
use App\Models\DailyDeliveryMealPlanLog;
use App\Models\OrderStatus;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DailyOrderGenerator 
{
    //get orders by Delivery Windows

    public function generateOrder($deliveryWindowId)
    {
        $orderAlreadyCreate = $this->orderAlreadyCreate($deliveryWindowId);
        if ($orderAlreadyCreate) {
            return false;
        }
        $orders = $this->getMealPlanOrders($deliveryWindowId);

        foreach ($orders as $order) {
            if($order->customer->status == 0){
                continue;
            }

            $deliveryZoneId = $order->customer->address->delivery_zone_id;

            $driver = $this->getDriver($deliveryZoneId, $deliveryWindowId);
            
            if($this->orderItemsDeliveryDays($order->items)){
                $this->createDailyDeliveries(
                    $order->id, $order->customer_id, 
                    $driver->id, $deliveryZoneId, 
                    $order->delivery_window_id,
                    $order->customer->address->id
                );
            }
        }
        return true;
    }

    /**
     * Check if delivery orders are already create for today
     */
    public function orderAlreadyCreate($deliveryWindowId)
    {
        $tz = $this->getClientTimezone();
        $todayDate = $this->getTodaysDate()->format('Y-m-d ');

        Log::info("Log Today date :" . $todayDate);

        return DailyDeliveryMealPlanLog::whereDate(
                DB::raw("CONVERT_TZ(created_at, 'UTC', '".$tz."')"), 
                $todayDate
            )->where('delivery_window_id', $deliveryWindowId)->exists();
    }

    /**
     * Create if delivery orders
     */
    public function createDailyDeliveries($customer_id, $order_id, $driver_id, $deliveryZoneId, $deliveryWindowId, $addressId)
    {
        DailyDeliveryMealPlanLog::create([
            "customer_id" => $customer_id,
            "driver_id" => $order_id,
            "order_id" => $driver_id,
            "delivery_zone_id" => $deliveryZoneId,
            "delivery_window_id" => $deliveryWindowId,
            "address_id" => $addressId,
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
        $todayDate = $this->getTodaysDate()->format('Y-m-d ');
        Log::info("Log Today date :" . $todayDate);

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
        $driverZone = DriverZone::where([
            'delivery_window_id' => $deliveryWindowId,
            'delivery_zone_id' => $deliveryZoneId
        ])->first();
        return $driverZone->driver;
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

    public function orderItemsDeliveryDays($items)
    {
        $deliveryDays = [];
        foreach ($items as $item) {
            $deliveryDays[] = $item->mealplan->delivery_days;
        }
        return $this->isOrderGoingToday($deliveryDays);
    }

    

    public function isOrderGoingToday($deliveryDays)
    {
        $deliveryDaysByWeekDays = $this->getDayOfTheWeek();
        foreach ($deliveryDaysByWeekDays as $weekDay) {
            if(in_array($weekDay, $deliveryDays)){
                return true;
            }
        }
        return false;
    }

    public function getDayOfTheWeek()
    {
        $weekMap = [
            1 => ['monday_to_friday', 'monday_to_saturday'], // 'monday'
            2 => ['monday_to_friday', 'monday_to_saturday'], // 'tuesday'
            3 => ['monday_to_friday', 'monday_to_saturday'], // 'wednesday',
            4 => ['monday_to_friday', 'monday_to_saturday'], // 'thursday',
            5 => ['monday_to_friday', 'monday_to_saturday'], // 'friday',
            6 => ['monday_to_saturday'], // saturday
            7 => [],//'sunday',
        ];
        $dayOfWeekInNumber = Carbon::now()->tz(config('app.CLIENT_TIMEZONE'))->dayOfWeek;
        return $weekMap[$dayOfWeekInNumber];
    }


    private function getTodaysDate()
    {
        $tz = $this->getClientTimezone();
        $today = Carbon::now()->tz($tz);
        return $today;
    }

    private function getClientTimezone()
    {
        return config('app.CLIENT_TIMEZONE');
    }

}

