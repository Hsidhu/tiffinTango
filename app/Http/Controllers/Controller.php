<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public $userTimeZone;

    public function __construct(Request $request)
    {
        //$this->getUserTimeZone($request);
    }

    public function getUserTimeZone(Request $request)
    {
        $timezone = 'America/Toronto';
        if ($request->hasHeader('X-Timezone')) {
            $timezone = $request->header('X-Timezone');
        } else {
            $ip = $request->ip();
            $url = "http://ip-api.com/json/$ip";
            $response = json_decode(file_get_contents($url), true);
            $timezone = !empty($response['timezone']) ? $response['timezone'] : $timezone;
        }

        $this->userTimeZone = $timezone;
    }
}
