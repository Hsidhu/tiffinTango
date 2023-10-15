<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Location;
use App\Http\Resources\Admin\LocationResource;

class LocationController extends Controller
{
    public function index()
    {
        $locations = Location::get();
        return LocationResource::collection($locations);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'name' => ['required', 'between:1,48'],
            'phone' => ['sometimes'],
            'address' => ['required', 'min:3', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:128'],
            'postal_code' => ['required'],
            'country' => ['required'],
            'radius' => ['required'],
        ]);
        
        $location = Location::create($request->only(
            ['name', 'description', 'phone', 'address', 'city', 'state', 'postal_code', 'country', 'radius', 'lat', 'lng']
        ));
        return response()->json($location);
    }

    public function edit($id)
    {
        $location = Location::find($id);
        return new LocationResource($location);
    }
    
    public function update(Request $request)
    {
        $location = Location::find($request->id);
        
        $this->validate($request, [
            'name' => ['required', 'between:1,48'],
            'phone' => ['sometimes'],
            'address' => ['required', 'min:3', 'max:128'],
            'city' => ['required', 'min:2', 'max:128'],
            'state' => ['max:128'],
            'postal_code' => ['required'],
            'country' => ['required'],
            'radius' => ['required'],
        ]);

        $location->update($request->only(
            ['name', 'description', 'phone', 'address', 'city', 'state', 'postal_code', 'country', 'radius', 'lat', 'lng']
        ));

        return $location;
    }

    public function delete($id)
    {
        $location = Location::find($id);
        $location->delete();
        
        return response()->json($location);
    }
}
