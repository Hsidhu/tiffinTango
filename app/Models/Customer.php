<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Request;
use Exception;
// use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class Customer extends Model
{
    use HasFactory, HasApiTokens;

    private $send_invite = false;

    protected $guarded = [];
    
    public $appends = ['full_name'];
    
    public function mealplanorders()
    {
        return $this->hasMany(App\Models\MealPlanOrder::class);
    }
    
    public function address()
    {
        return $this->belongsTo(\App\Models\Address::class);
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

    protected function afterCreate()
    {
        if ($this->send_invite) {
            $this->sendInvite();
        }

        $this->ip_address = Request::getClientIp();
    }

    protected function afterSave()
    {

        if (!$this->exists)
            return;

        if (array_key_exists('addresses', $this->attributes))
            $this->saveAddresses($this->attributes['addresses']);
    }

    protected function sendInvite()
    {
        $this->bindEventOnce('model.mailGetData', function ($view, $recipientType) {
            if ($view === 'admin::_mail.invite_customer') {
                $this->reset_code = $inviteCode = $this->generateResetCode();
                $this->reset_time = now();
                $this->save();

                return ['invite_code' => $inviteCode];
            }
        });

        $this->mailSend('admin::_mail.invite_customer');
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

}
