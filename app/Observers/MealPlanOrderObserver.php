<?php

namespace App\Observers;

use App\Models\MealPlanOrder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Request;

class MealPlanOrderObserver
{
    /**
     * Handle the Customer "created" event.
     *
     * @param  \App\Models\MealPlanOrder  $customer
     * @return void
     */
    public function created(MealPlanOrder $order)
    {
        $order->ip_address = Request::getClientIp();
        $order->user_agent = Request::userAgent();

        $date = Carbon::parse($order->start_date); // Parse the initial date
        $newDate = $date->addMonth();
        $order->end_date = $newDate->toDateString();
        
        $order->hash = $this->createHash();

        $order->invoice_no = $order->id.'_INV_'.Carbon::now()->format('Y_m_d_H_i_s');

        $order->save();
    }

    /**
     * Handle the Customer "updated" event.
     *
     * @param  \App\Models\MealPlanOrder  $customer
     * @return void
     */
    public function updated(MealPlanOrder $customer)
    {
        //
    }

    /**
     * Handle the Customer "deleted" event.
     *
     * @param  \App\Models\MealPlanOrder  $customer
     * @return void
     */
    public function deleted(MealPlanOrder $customer)
    {
        //
    }

    /**
     * Handle the Customer "restored" event.
     *
     * @param  \App\Models\MealPlanOrder  $customer
     * @return void
     */
    public function restored(MealPlanOrder $customer)
    {
        //
    }

    /**
     * Handle the Customer "force deleted" event.
     *
     * @param  \App\Models\MealPlanOrder  $customer
     * @return void
     */
    public function forceDeleted(MealPlanOrder $customer)
    {
        //
    }

    /**
     * Create a hash for this order.
     * @return string
     */
    protected function createHash()
    {
        return md5(uniqid('order', microtime()));
    }
}
