<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Setting;

class SettingController extends Controller
{

    // https://tiffintango.dvl.to/api/images/mealplan/OL6CsRj474oMPwFgq20UWlL3sAWFtHbkNT4eKSVp.png
    
    public function getSiteSettings()
    {
        $settings = Setting::get();
        return response()->json($settings);
    }
}
