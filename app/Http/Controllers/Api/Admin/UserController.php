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
        if ($user instanceof \App\Models\Customer) {
            return 'customer';
        } elseif ($user instanceof \App\Models\User) {
            return 'user';
        }
        return false;
    }

}
