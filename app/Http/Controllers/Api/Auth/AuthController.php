<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthenticateRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function authenticate(AuthenticateRequest $request): JsonResponse
    {
        $userType = $request->input('user_type', 'user');
        $guard = $this->getGraud($userType);

        $credentials = $request->only('email', 'password');

        if (!Auth::guard($guard)->attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        // $user = User::find(1);
        // $token = $user->createToken('token-name')->plainTextToken;
        // $user->tokens()->delete();
        // GET /api/user
        // Authorization: Bearer {API_TOKEN}
        $request->session()->regenerate();

        $user = Auth::guard($guard)->user();
        $user['userType'] = $this->getUserType($user);

        $token = $user->createToken('auth_token')->plainTextToken;
        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function register(RegisterRequest $request): UserResource
    {
        $data = $request->all();
        $userDetails = [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => \Hash::make($data['password']),
        ];
        $user = User::create($userDetails);
        $token = $user->createToken('auth_token')->plainTextToken;

        $request->session()->regenerate();

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer'
        ]);
    }

    public function logout(Request $request): JsonResponse
    {
        $userType = $request->input('user_type', 'user');  
        $guard = ($userType === 'customer') ? 'customer-web' : 'web';

        Auth::guard($guard)->logout();
        Auth::user()->tokens()->delete();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(["message" => "User successfully logged out"], 204);
    }

    private function getUserType($user)
    {
        if ($user instanceof \App\Models\Customer) {
            return 'customer';
        } elseif ($user instanceof \App\Models\User) {
            return 'user';
        } elseif ($user instanceof \App\Models\Driver) {
            return 'driver';
        }
        return false;
    }

    private function getGraud($userTypeFlag)
    {
        switch ($userTypeFlag) {
            case 'customer':
                    return 'customer-web';
                break;
            case 'driver':
                return 'driver-web';
            break;
            default:
                return 'web';
            break;
        }
    }
}
