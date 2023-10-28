<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\DailyOrderGenerator;

class CreateDailyMealPlanOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mealplan:create-daily-orders {delivery_zone_id} {delivery_window_id}';

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
        $deliveryZoneId = $this->argument('delivery_zone_id');
        $deliveryWindowId = $this->argument('delivery_window_id');

        $dailyOrderGenerator = new DailyOrderGenerator();

        $orderAlreadyCreate = $dailyOrderGenerator->orderAlreadyCreate();
        if ($orderAlreadyCreate) {
            $this->info('Orders already created.');
            return 0;
        }

        $customerIdsByZone = $dailyOrderGenerator->getCustomersByDeliveryZone($deliveryZoneId);
        $this->info("Customers found");

        $driver = $dailyOrderGenerator->getDriver($deliveryZoneId, $deliveryWindowId);
        $this->info("driver found");

        $orders = $dailyOrderGenerator->getMealPlanOrders($deliveryWindowId, $customerIdsByZone);

        if($orders->count() == 0){
            $this->info('No Delivery orders today.');
            return 0;
        }
        $this->info("Number of Orders -> {$orders->count()}");
        
        foreach ($orders as $order) {
            $this->info("Order for Customer: {$order->customer->full_name}");
            $this->info("Driver name: {$driver->full_name}");
            $dailyOrderGenerator->createDailyDeliveries($order->id, $order->customer_id, $driver->id);
        }

        $this->info('Daily meal plan orders created successfully.');
        return 0;
    }

}
