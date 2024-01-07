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

    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
        ]);

        $fileName = $this->fileStoreName($request->file('file'));
        $request->file('file')->storeAs('public/site', $fileName);
        $filePath = 'site/'.$fileName;

        return response()->json(['imagePath' => $filePath]);
    }

    private function fileStoreName($file)
    {
        $fileNameWithExt = $file->getClientOriginalName();
        $fileNameWithExt = str_replace(" ", "_", $fileNameWithExt);

        $filename = pathinfo($fileNameWithExt, PATHINFO_FILENAME);
        $filename = preg_replace("/[^a-zA-Z0-9\s]/", "", $filename);
        $filename = urlencode($filename);

        $extension = $file->getClientOriginalExtension();

        return $filename.'_'.time().'.'.$extension;
    }
}
