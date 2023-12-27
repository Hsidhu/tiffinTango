<?php

use Illuminate\Support\Facades\Route;


Route::post('/dailyDeliveries/{deliveryWindowID}', [App\Http\Controllers\Api\Driver\DeliveriesController::class, 'todaysDeliveries']);

Route::post('/dailyDelivery/delivered', [App\Http\Controllers\Api\Driver\DeliveriesController::class, 'delivered']);