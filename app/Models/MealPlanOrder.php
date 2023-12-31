<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Carbon\Carbon;

// add soft delete

class MealPlanOrder extends Model
{
    use HasFactory;

    const DELIVERY = 'delivery';

    const PICKUP = 'pickup';

    const PAYMENT_PROCESSED = 1;
    const PAYMENT_NOT_PROCESSED = 0;

    protected $guarded = [];

    protected $casts = [
        "total_price" => 'float',
        // 'invoice_date' => 'dateTime'
    ];

    public function customer()
    {
        return $this->belongsTo(\App\Models\Customer::class, 'customer_id');
    }

    public function items()
    {
        return $this->hasMany(\App\Models\MealPlanOrderItem::class, 'order_id');
    }

    public function totals()
    {
        return $this->hasMany(\App\Models\MealPlanOrderTotal::class, 'order_id');
    }

    public function deliveries()
    {
        return $this->hasMany(\App\Models\DailyDeliveryMealPlanLog::class, 'order_id');
    }

    public function pickups()
    {
        return $this->hasMany(\App\Models\PickedUpMealPlanLog::class, 'order_id');
    }

    public function isDeliveryType()
    {
        return $this->order_type == static::DELIVERY;
    }

    public function isCollectionType()
    {
        return $this->order_type == static::COLLECTION;
    }

    public function status()
    {
        return $this->belongsTo(\App\Models\OrderStatus::class, 'order_status_id');
    }

    public function deliveryWindow()
    {
        return $this->hasOne(\App\Models\DeliveryWindow::class, 'delivery_window_id');
    }
    /**
     * Return the order data to build mail template
     *
     * @return array
     */
    public function mailGetData()
    {
        $model = $this->fresh();

        $data = $model->toArray();
        $data['order'] = $model;
        $data['order_number'] = $model->order_id;
        $data['order_id'] = $model->order_id;
        $data['first_name'] = $model->first_name;
        $data['last_name'] = $model->last_name;
        $data['customer_name'] = $model->customer_name;
        $data['email'] = $model->email;
        $data['telephone'] = $model->telephone;
        $data['order_comment'] = $model->comment;

        $data['order_type'] = $model->order_type_name;
        $data['order_time'] = Carbon::createFromTimeString($model->order_time)->isoFormat(lang('system::lang.moment.time_format'));
        $data['order_date'] = $model->order_date->isoFormat(lang('system::lang.moment.date_format'));
        $data['order_added'] = $model->created_at->isoFormat(lang('system::lang.moment.date_time_format'));

        $data['invoice_id'] = $model->invoice_number;
        $data['invoice_number'] = $model->invoice_number;
        $data['invoice_date'] = $model->invoice_date ? $model->invoice_date->isoFormat(lang('system::lang.moment.date_format')) : null;

        $data['order_payment'] = $model->payment_method->name ?? lang('admin::lang.orders.text_no_payment');

        $data['order_menus'] = [];
        $menus = $model->getOrderMenusWithOptions();
        foreach ($menus as $menu) {
            $optionData = [];
            foreach ($menu->menu_options->groupBy('order_option_group') as $menuItemOptionGroupName => $menuItemOptions) {
                $optionData[] = $menuItemOptionGroupName;
                foreach ($menuItemOptions as $menuItemOption) {
                    $optionData[] = $menuItemOption->qty
                        .'&nbsp;'.lang('admin::lang.text_times').'&nbsp;'
                        .$menuItemOption->order_option_name
                        .lang('admin::lang.text_equals')
                        .currency_format($menuItemOption->qty * $menuItemOption->order_option_price);
                }
            }

            $data['order_menus'][] = [
                'menu_name' => $menu->name,
                'menu_quantity' => $menu->qty,
                'menu_price' => currency_format($menu->price),
                'menu_subtotal' => currency_format($menu->subtotal),
                'menu_options' => implode('<br /> ', $optionData),
                'menu_comment' => $menu->comment,
            ];
        }

        $data['order_totals'] = [];
        $orderTotals = $model->getOrderTotals();
        foreach ($orderTotals as $total) {
            $data['order_totals'][] = [
                'order_total_title' => htmlspecialchars_decode($total->title),
                'order_total_value' => currency_format($total->value),
                'priority' => $total->priority,
            ];
        }

        $data['order_address'] = lang('admin::lang.orders.text_collection_order_type');
        if ($model->address)
            $data['order_address'] = format_address($model->address->toArray(), false);

        if ($model->location) {
            $data['location_logo'] = $model->location->thumb;
            $data['location_name'] = $model->location->location_name;
            $data['location_email'] = $model->location->location_email;
            $data['location_telephone'] = $model->location->location_telephone;
            $data['location_address'] = format_address($model->location->getAddress());
        }

        return $data;
    }
}
