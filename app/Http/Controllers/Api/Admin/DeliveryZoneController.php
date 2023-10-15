<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Location;
use App\Models\DeliveryZone;
use App\Models\Driver;
use App\Models\DriverZone;


// https://mapsengine.google.com/map/ 

class DeliveryZoneController extends Controller
{
    public function index()
    {
        $deliveryZones = DeliveryZone::get();
        return response()->json($deliveryZones);
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'csvData' => ['required']
        ]);
        $csvRows = $request->get('csvData');
        $location = Location::first();
        foreach ($csvRows as $key => $row) {
            if(!empty($row['WKT'])){
                $boundaries = $this->extractDataFromCSV($row['WKT']);
                $deliveryZone = DeliveryZone::updateOrCreate([
                    'name' => $row['name'],
                    'type' => $boundaries['type']
                ],[
                    'location_id' => $location->id ?? 1,
                    'name' => $row['name'],
                    'type' => $boundaries['type'],
                    'boundaries' => $boundaries['coordinates']
                ]);
            }
            
        }
        return response()->json($deliveryZone);
    }

    public function edit($id)
    {
        $driver = DeliveryZone::find($id);
        return response()->json($driver);
    }

    public function update(Request $request)
    {
        $deliveryZone = DeliveryZone::find($request->id);
        $this->validate($request, [
            'name' => ['required'],
        ]);
        $deliveryZone->update(
            $request->only(['name'])
        );
        return response()->json($deliveryZone);
    }

    public function delete($id)
    {
        $deliveryZone = DeliveryZone::find($id)->delete();
        return response()->json($deliveryZone);
    }

    public function assignZoneToDriver(Request $request)
    {
        $this->validate($request, [
            'driver_id' => ['required'],
            'zone_id' => ['required'],
        ]);
        $driverZone = DriverZone::create(
            $request->only(['driver_id', 'zone_id'])
        );
        return response()->json($driverZone);
    }

    private function extractDataFromCSV($wkt)
    {
        // Define a more flexible regular expression pattern to match various geometry types
        $pattern = '/^([A-Za-z]+)\s*\(\((.*?)\)\)/';

        // Match the pattern against the WKT string
        if (preg_match($pattern, $wkt, $matches)) {
            // $matches[1] will contain the geometry type (e.g., "Polygon" or "Circle")
            // $matches[2] will contain the coordinates

            $type = $matches[1];
            $coordinates = $matches[2];

            // Split the coordinates into individual pairs of latitude and longitude
            $coordinatesArray = explode(',', $coordinates);

            // Process each pair of coordinates
            $parsedCoordinates = [];
            foreach ($coordinatesArray as $pair) {
                list($longitude, $latitude) = explode(' ', trim($pair));
                $parsedCoordinates[] = [
                    'lat' => (float) $latitude,
                    'lng' => (float) $longitude,
                ];
            }
            return [
                'type' => $type,
                'coordinates' => $parsedCoordinates,
            ];
        } else {
            return null; // Not a valid WKT
        }
    }
}
