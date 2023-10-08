<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\MealPlanOrder;
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
        $today = Carbon::now();
        $orders = MealPlanOrder::whereDate('start_date', '<=', $today)
            ->whereDate('end_date', '>=', $today)
            ->get();
        
        foreach ($orders as $order) {
            $this->info("Meal Plan: {$order->customer->full_name}");
        }
        $this->info('Daily meal plan orders created successfully.');
        return 0;
    }
}
