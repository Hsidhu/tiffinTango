<?php

use Illuminate\Support\Facades\Route;

// api/admin/

// Location Routes
Route::get('/locations', [App\Http\Controllers\Api\Admin\LocationController::class, 'index']);
Route::post('/location/create', [App\Http\Controllers\Api\Admin\LocationController::class, 'create']);
Route::get('/location/edit/{id}', [App\Http\Controllers\Api\Admin\LocationController::class, 'edit']);
Route::post('/location/update', [App\Http\Controllers\Api\Admin\LocationController::class, 'update']);
Route::delete('/location/delete/{id}', [App\Http\Controllers\Api\Admin\LocationController::class, 'delete']);

// Customer Routes
Route::get('/customers', [App\Http\Controllers\Api\Admin\CustomerController::class, 'index']);
Route::post('/customer/create', [App\Http\Controllers\Api\Admin\CustomerController::class, 'create']);
Route::get('/customer/edit/{id}', [App\Http\Controllers\Api\Admin\CustomerController::class, 'edit']);
Route::post('/customer/update', [App\Http\Controllers\Api\Admin\CustomerController::class, 'update']);
Route::delete('/customer/delete/{id}', [App\Http\Controllers\Api\Admin\CustomerController::class, 'delete']);
Route::post('/customer/createOrder', [App\Http\Controllers\Api\Admin\CustomerController::class, 'createOrder']);

// Admin Driver Routes
Route::get('/drivers', [App\Http\Controllers\Api\Admin\DriverController::class, 'index']);
Route::post('/driver/create', [App\Http\Controllers\Api\Admin\DriverController::class, 'create']);
Route::get('/driver/edit/{id}', [App\Http\Controllers\Api\Admin\DriverController::class, 'edit']);
Route::post('/driver/update', [App\Http\Controllers\Api\Admin\DriverController::class, 'update']);
Route::delete('/driver/delete/{id}', [App\Http\Controllers\Api\Admin\DriverController::class, 'delete']);

Route::get('/driver/select', [App\Http\Controllers\Api\Admin\DriverController::class, 'getDriversSelect']);
Route::post('/driver/workForm', [App\Http\Controllers\Api\Admin\DriverController::class, 'workForm']);
Route::delete('/driver/deliveryWindowAndZone/{id}', [App\Http\Controllers\Api\Admin\DriverController::class, 'deleteDeliveryWindowAndZone']);


// mealplan create
Route::post('/mealplan/create', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'create']);
Route::post('/mealplan/create/option', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'createOption']);
Route::post('/mealplan/create/addon', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'createAddon']);
Route::get('/mealplan/edit/{id}', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'edit']);
Route::post('/mealplan/update', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'update']);
Route::delete('/mealplan/delete/{id}', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'delete']);


// Delivery Zones
Route::get('/delivery_zones', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'index']);
Route::post('/delivery_zone/create', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'create']);
Route::get('/delivery_zone/edit/{id}', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'edit']);
Route::post('/delivery_zone/update', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'update']);
Route::delete('/delivery_zone/delete/{id}', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'delete']);
Route::post('/delivery_zone/assign_zone/driver', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'assignZoneToDriver']);
Route::post('/delivery_zone/assign_zone/address', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'assignZoneToAddress']);


Route::get('/delivery_zone/select', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'getSelectList']);

// Order admin
Route::get('/orders', [App\Http\Controllers\Api\Admin\OrderController::class, 'index']);
Route::get('/order/view/{id}', [App\Http\Controllers\Api\Admin\OrderController::class, 'view']);
Route::get('/order/statuses', [App\Http\Controllers\Api\Admin\OrderStatusController::class, 'getOrderStatuses']);
Route::post('/order/updates', [App\Http\Controllers\Api\Admin\OrderController::class, 'orderUpdates']);

Route::post('/order/picked', [App\Http\Controllers\Api\Admin\OrderController::class, 'picked']);
Route::post('/order/delivered', [App\Http\Controllers\Api\Admin\OrderController::class, 'delivered']);

Route::get('/order/dailyDeliveries', [App\Http\Controllers\Api\Admin\DailyDeliveryController::class,'index']);
Route::post('/order/generateDailyDeliveries', [App\Http\Controllers\Api\Admin\DailyDeliveryController::class,'generateDailyDeliveries']);
Route::post('/order/generateDailyDelivery/update', [App\Http\Controllers\Api\Admin\DailyDeliveryController::class, 'update']);

Route::post('/order/getStickerData', [App\Http\Controllers\Api\Admin\DailyDeliveryController::class,'getStickerData']);
Route::post('/order/optimizeRoute', [App\Http\Controllers\Api\Admin\DailyDeliveryController::class,'optimizeRoute']);

Route::get('/order/cloneOrder/{id}', [App\Http\Controllers\Api\Admin\OrderController::class, 'cloneOrder']);


// site Settings
Route::get('/settings/{code}', [App\Http\Controllers\Api\Admin\SettingController::class, 'index']);
Route::post('/settings/save', [App\Http\Controllers\Api\Admin\SettingController::class, 'save']);



