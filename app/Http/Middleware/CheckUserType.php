<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckUserType
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();

        if ($user instanceof \App\Models\Customer) {
            // Handle Customer logic
        } elseif ($user instanceof \App\Models\User) {
            // Handle User logic
        }

        return $next($request);
    }
}
