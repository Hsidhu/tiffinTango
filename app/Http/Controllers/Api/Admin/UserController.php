<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Support\Facades\Hash;

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

    public function updatePassword(Request $request)
    {
        $this->validate($request, [
            'password' => 'required|min:6|confirmed',
        ]);

        $user = $request->user();
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json(['message' => 'Password updated successfully']);
    }

}
