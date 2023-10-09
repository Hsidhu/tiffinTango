<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MealPlanOrder;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function invoice($hash)
    {
        dd($hash);
        $order = MealPlanOrder::where('hash',$hash)->first();
        return view('order.invoice',[
            'model' => $order
        ]);
    }
}
