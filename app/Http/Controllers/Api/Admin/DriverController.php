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
            'address' => ['required', 'min:4', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:64'],
            'postal_code' => ['required'],
            'country' => ['required'],
        ]);
        
        $address = Address::create($request->only(['address', 'city', 'state', 'postal_code', 'country', 'lat', 'lng']));
        $driverData = array_merge(['address_id' => $address->id, 'password' => config('app.customer_default')],
            $request->only(['first_name','last_name','email', 'phone', 'license'])
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
            'email' => ['required', 'email:filter', 'max:96', 'unique:customers,email,'.$driver->id],
            'phone' => ['sometimes'],
            'address' => ['required', 'min:3', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:128'],
            'postal_code' => ['required'],
            'country' => ['required'],
        ]);
        $driver->update(
            $request->only(['first_name','last_name','email', 'phone'])
        );
        $address->update(
            $request->only(['address', 'city', 'state', 'postal_code', 'country', 'lat', 'lng'])
        );

        return response()->json($driver);
    }

    public function delete($id)
    {
        $driver = Driver::find($id);
        Address::find($driver->address_id)->delete();

        return response()->json($driver);
    }

    public function getDriversSelect()
    {
        $drivers = Driver::getDataForSelect();
        return response()->json($drivers);
    }

}