<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\DailyOrderGenerator;
use Carbon\Carbon;

class CreateDailyMealPlanOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mealplan:create-daily-orders {delivery_window_id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create daily meal plan orders';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $deliveryWindowId = $this->argument('delivery_window_id');

        $dailyOrderGenerator = new DailyOrderGenerator();

        $orderAlreadyCreate = $dailyOrderGenerator->orderAlreadyCreate($deliveryWindowId);
        if ($orderAlreadyCreate) {
            $this->info('Orders already created.');
            return 0;
        }

        $orders = $dailyOrderGenerator->getMealPlanOrders($deliveryWindowId);

        if($orders->count() == 0){
            $this->info('No Delivery orders today.');
            return 0;
        }
        $this->info("Number of Orders -> {$orders->count()}");
        
        foreach ($orders as $order) {
            $this->info("Order for Customer: {$order->customer->full_name}");
            $deliveryZoneId = $order->customer->address->delivery_zone_id;
            $driver = $dailyOrderGenerator->getDriver($deliveryZoneId, $deliveryWindowId);
            
            $this->info("Driver found: {$driver->full_name}");

            if($dailyOrderGenerator->orderItemsDeliveryDays($order->items)){
                $dailyOrderGenerator->createDailyDeliveries(
                    $order->id, 
                    $order->customer_id, 
                    $driver->id, 
                    $deliveryZoneId, 
                    $order->delivery_window_id,
                    $order->customer->address->id
                );
            }
            else{
                $this->info("Delivery day is not today for Order ID: {$order->id}");
            }
        }

        $this->info('Daily meal plan orders created successfully.');
        return 0;
    }

}
