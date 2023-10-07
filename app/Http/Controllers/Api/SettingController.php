<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SettingController extends Controller
{

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
}
