<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\MealPlanOrder;
use App\Models\Driver;
use App\Models\DriverZone;
use App\Models\DeliveryWindow;
use App\Models\DailyDeliveryMealPlanLog;
use App\Models\OrderStatus;
use Carbon\Carbon;

class CreateDailyMealPlanOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'mealplan:create-daily-orders';

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
        // create table to added all the daily meal plans and log
        // create table to log all the cron job logs
        
        $today = Carbon::now()->format('Y-m-d H:i:s');
        $orders = MealPlanOrder::whereDate('start_date', '<=', $today)->whereDate('end_date', '>=', $today)
            ->where('order_type', MealPlanOrder::DELIVERY)
            ->where('order_status_id', $this->orderStatus()->id)
            ->where('payment_processed', MealPlanOrder::PAYMENT_PROCESSED)
            ->get();

        if($orders->count() == 0){
            $this->info('No Delivery orders today.');
            return 0;
        }
        $this->info("Number of Orders -> {$orders->count()}");
        
        foreach ($orders as $order) {
            $this->info("Meal Plan: {$order->customer->full_name}");
            //$this->info($order->customer->address->formatted_address);
        }

        $this->info('Daily meal plan orders created successfully.');
        return 0;
    }

    public function orderStatus()
    {
        return OrderStatus::where('name', 'Scheduled')->first();
    }

    public function getDriversForOrder()
    {

    }

}
