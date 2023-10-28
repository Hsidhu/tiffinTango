<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use App\Services\Geolite\Facades\Geocoder;
use App\Models\Address;
use App\Traits\SearchesNearby;

class FileController extends Controller
{

    use SearchesNearby;
    // https://tiffintango.dvl.to/api/images/mealplan/OL6CsRj474oMPwFgq20UWlL3sAWFtHbkNT4eKSVp.png

    public function images($folder, $filename)
    {
        $filePath = 'public/' . $folder . '/' . $filename;

        if (!Storage::exists($filePath)) {
            return response()->json(['error' => 'Image not found'], 404);
        }

        $fileContents = Storage::get($filePath);
        $fileType = Storage::mimeType($filePath);

        return response($fileContents, 200)
            ->header('Content-Type', $fileType);
    }


    public function test()
    {
        $address = Address::find(7);
        
        $out = $this->onSearchNearby($address->formatted_address);

        dd($out);

        // $collection = Geocoder::reverse($latitude, $longitude);
        $collection = Geocoder::directionRouter(
            'Markham, ON, CA',
            ['Guelph ON', 'Oakville, ON', 'Brampton, ON', 'Mississauga, ON', 'Vaughan, ON', 'Markham, ON, CA'],
            'Markham, ON, CA'
        );
        dd($collection);

    }
}
