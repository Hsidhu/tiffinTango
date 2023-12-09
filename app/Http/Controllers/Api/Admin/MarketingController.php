<?php

namespace App\Http\Controllers\Api\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customer;

class MarketingController extends Controller
{
    public function index()
    {
        $customers = Customer::get();
        return response()->json($customers);
    }

}
