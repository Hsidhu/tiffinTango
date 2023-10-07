<?php
namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Http\Resources\SettingResource;

class SettingController extends Controller
{
    public function index($code)
    {
        $settings = Setting::where('code', $code)->get();
        return SettingResource::collection($settings);
    }

    public function save(Request $request)
    {
        $requestData = $request->all();
        $keys = array_keys($requestData);
        $code = reset($keys); // first key
        foreach ($requestData[$code] as $key => $value) {
            Setting::updateOrCreate([
                'code' => $code,
                'key' => $key
            ],
            [
                'code' => $code,
                'key' => $key,
                'value' => $value
            ]);
        }
        $settings = Setting::where('code', $code)->get();
        return SettingResource::collection($settings);
    }
}
