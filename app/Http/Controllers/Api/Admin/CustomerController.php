<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Address;
use App\Http\Resources\CustomerResource;

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
            'first_name' => ['required', 'between:1,48'],
            'last_name' => ['required', 'between:1,48'],
            'email' => ['required', 'email:filter', 'max:96', 'unique:customers,email'],
            'phone' => ['sometimes'],
            'address' => ['required', 'min:3', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:128'],
            'postal_code' => ['required'],
            'country' => ['required'],
        ]);
        
        $address = Address::create($request->only(['address', 'city', 'state', 'postal_code', 'country', 'lat', 'lng']));
        $customerData = array_merge(['address_id' => $address->id, 'password' => '123456'],
            $request->only(['first_name','last_name','email', 'phone'])
        );
        $customer = Customer::create($customerData);
        return response()->json($customer);
    }

    public function edit($id)
    {
        $customer = Customer::with('address')->find($id);
        return response()->json($customer);
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
            'address' => ['required', 'min:3', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:128'],
            'postal_code' => ['required'],
            'country' => ['required'],
        ]);
        $customer->update(
            $request->only(['first_name','last_name','email', 'phone'])
        );
        $address->update(
            $request->only(['address', 'city', 'state', 'postal_code', 'country', 'lat', 'lng'])
        );

        return $customer;
    }
}
