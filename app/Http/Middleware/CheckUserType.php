<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        $userType = $this->getUserType($user);

        return $next($request);
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
