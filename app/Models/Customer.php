<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Exception;
// use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Notifications\NewCustomerNotification;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable
{
    use HasFactory, HasApiTokens, Notifiable;

    const ACTIVE = 1;
    const INACTIVE = 0;


    private $send_invite = false;

    protected $guarded = [];
    
    public $appends = ['full_name'];
    
    public function mealplanorders()
    {
        return $this->hasMany(\App\Models\MealPlanOrder::class);
    }
    
    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class, 'address_id');
    }

    public function getFullNameAttribute($value)
    {
        return $this->first_name.' '.$this->last_name;
    }


    //
    // Events
    //

    protected function beforeCreate()
    {
        $this->generateHash();

        $this->ip_address = Request::getClientIp();
    }

    public function beforeLogin()
    {
        if ($this->is_activated && $this->status)
            return;

        throw new Exception(sprintf(
            lang('admin::lang.customers.alert_customer_not_active'), $this->email
        ));
    }

    public function saveAddresses($addresses)
    {
        $customerId = $this->getKey();
        if (!is_numeric($customerId))
            return false;

        $idsToKeep = [];
        foreach ($addresses as $address) {
            $customerAddress = $this->addresses()->updateOrCreate(
                array_only($address, ['address_id']),
                array_except($address, ['address_id', 'customer_id'])
            );

            $idsToKeep[] = $customerAddress->getKey();
        }

        $this->addresses()->whereNotIn('address_id', $idsToKeep)->delete();
    }
    
    //
    // Mail settings
    //

    public function sendWelcomeNotification()
    {
        // template mails.invite_customer
        // $notifiable have the data from this model
        $this->notify(new NewCustomerNotification);
    }

}
