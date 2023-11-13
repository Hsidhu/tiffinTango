<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;

class UserController extends Controller
{
    public function getAuthUser(Request $request)
    {
        $user = $request->user();
        if ($user) {
            $user['userType'] = $this->getUserType($user);
        }
        return response()->json([
            'user' => $user
        ]);
    }

    private function getUserType($user)
    {
        $userType = get_class($user);
        switch ($userType) {
            case \App\Models\Customer::class:
                return 'customer';
            case \App\Models\Driver::class:
                return 'driver';
            default:
                return 'user';
            break;
        }
        return '';
    }

}
