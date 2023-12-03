<?php

use Illuminate\Support\Facades\Route;

// api/customer/

// Order admin
Route::get('/orders', [App\Http\Controllers\Api\Customer\OrderController::class, 'index']);
Route::get('/order/view/{id}', [App\Http\Controllers\Api\Customer\OrderController::class, 'view']);
