<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\MealPlanOrder;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {
        $orders = MealPlanOrder::whereMonth('created_at', Carbon::now()->month)-> whereDoesntHave('status', function ($query) {
            $query->where('name', 'canceled');
        })->get();
        return response()->json([
            'monthlyOrderCount' => $orders->count()
        ]);
    }
}

