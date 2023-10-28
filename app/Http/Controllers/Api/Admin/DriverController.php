<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Driver;
use App\Models\Address;
use App\Http\Resources\Admin\DriverResource;

class DriverController extends Controller
{
    public function index()
    {
        $drivers = Driver::get();
        return DriverResource::collection($drivers);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'first_name' => ['required', 'between:4,48'],
            'last_name' => ['required', 'between:4,48'],
            'email' => ['required', 'email:filter', 'min:4', 'max:96', 'unique:drivers,email'],
            'phone' => ['sometimes'],
            'license' => ['required', 'between:4,48'],
            'address.address' => ['required', 'min:4', 'max:128'],
            'address.city' => ['required', 'min:2', 'max:128'],
            'address.state' => ['max:64'],
            'address.postal_code' => ['required'],
            'address.country' => ['required'],
        ]);
        
        $address = Address::create($request->address);
        $driverData = array_merge(['address_id' => $address->id, 'password' => \Hash::make(config('app.customer_default')) ],
            $request->only(['first_name','last_name','email', 'phone', 'license', 'delivery_window_id', 'status'])
        );
        $driver = Driver::create($driverData);
        return response()->json($driver);
    }

    public function edit($id)
    {
        $driver = Driver::with('address')->find($id);
        return response()->json($driver);
    }
    
    public function update(Request $request)
    {
        $driver = Driver::find($request->id);
        $address = Address::find($request->address_id);
        $this->validate($request, [
            'first_name' => ['required', 'between:1,48'],
            'last_name' => ['required', 'between:1,48'],
            'email' => ['required', 'email:filter', 'max:96', 'unique:drivers,email,'.$driver->id],
            'phone' => ['sometimes'],
            'license' => ['required', 'between:4,48'],
            'address.address' => ['required', 'min:3', 'max:128'],
            'address.city' => ['required', 'min:2', 'max:128'],
            'address.state' => ['max:128'],
            'address.postal_code' => ['required'],
            'address.country' => ['required'],
        ]);
        $driver->update(
            $request->only(['first_name', 'last_name', 'email', 'phone', 'delivery_window_id', 'license', 'status'])
        );
        $address->update(
            $request->address
        );

        return response()->json($driver);
    }

    public function delete($id)
    {
        $driver = Driver::find($id);
        Address::find($driver->address_id)->delete();
        $driver->delete();
        
        return response()->json($driver);
    }

    public function getDriversSelect()
    {
        $drivers = Driver::getDataForSelect();
        return response()->json($drivers);
    }

}
