<?php

namespace App\Http\Controllers\Api;


use App\Http\Controllers\Controller;
use App\Models\Setting;
use Exception;

class SettingController extends Controller
{

    // https://tiffintango.dvl.to/api/images/mealplan/OL6CsRj474oMPwFgq20UWlL3sAWFtHbkNT4eKSVp.png

    protected $modelClass = 'App\Models\Setting';

    protected function createModel()
    {
        if (!isset($this->modelClass) || !strlen($this->modelClass)) {
            throw new Exception('alert_settings_missing_model');
        }

        return new $this->modelClass();
    }
    
    public function getSiteSettings()
    {
        $settings = $this->createModel()->listSettingItems();
        return response()->json($settings);
    }
}
