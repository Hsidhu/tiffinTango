<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Address;
use App\Http\Resources\Admin\CustomerResource;
use App\Services\CreateMealPlanOrder;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::get();
        return CustomerResource::collection($customers);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'first_name' => ['required', 'between:4,48'],
            'last_name' => ['required', 'between:4,48'],
            'email' => ['required', 'email:filter', 'min:4', 'max:96', 'unique:customers,email'],
            'phone' => ['sometimes'],
            'address.address' => ['required', 'min:4', 'max:128'],
            'address.city' => ['required', 'min:4', 'max:128'],
            'address.state' => ['max:64'],
            'address.postal_code' => ['required'],
            'address.country' => ['required'],
        ]);
        
        $address = Address::create($request->address);
        $customerData = array_merge(['address_id' => $address->id, 'password' => \Hash::make(config('app.customer_default')) ],
            $request->only(['first_name','last_name','email', 'phone', 'status'])
        );
        $customer = Customer::create($customerData);
        return response()->json($customer);
    }

    public function edit($id)
    {
        $customer = Customer::with('address')->find($id);
        return new CustomerResource($customer);
    }
    
    public function update(Request $request)
    {
        $customer = Customer::find($request->id);
        $address = Address::find($request->address_id);
        $this->validate($request, [
            'first_name' => ['required', 'between:1,48'],
            'last_name' => ['required', 'between:1,48'],
            'email' => ['required', 'email:filter', 'max:96', 'unique:customers,email,'.$customer->id],
            'phone' => ['sometimes'],
            'address.address' => ['required', 'min:3', 'max:128'],
            'address.city' => ['required', 'min:2', 'max:128'],
            'address.state' => ['max:128'],
            'address.postal_code' => ['required'],
            'address.country' => ['required'],
        ]);
        $customer->update(
            $request->only(['first_name','last_name','email', 'phone', 'status'])
        );
        $address->update(
            $request->address
        );

        return $customer;
    }

    public function createOrder(Request $request)
    {
        $orderCreated =  new CreateMealPlanOrder($request);
        return response()->json(['success' => $orderCreated->create()]);
    }
}
