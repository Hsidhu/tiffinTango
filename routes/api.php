<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login', [App\Http\Controllers\Api\Auth\AuthController::class,'authenticate']);
Route::post('/register', [App\Http\Controllers\Api\Auth\AuthController::class,'register']);


Route::get('/mealplan', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'index']);
Route::get('/mealplan/options/{mealplan_id}', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'mealplanOptions']);
Route::post('/mealplan/create', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'create']);
Route::post('/mealplan/create/option', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'createOption']);
Route::post('/mealplan/create/addon', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'createAddon']);
Route::get('/mealplan/edit/{id}', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'edit']);
Route::post('/mealplan/update', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'update']);
Route::delete('/mealplan/delete/{id}', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'delete']);

Route::group(['middleware' => 'auth:sanctum'], function() {
    Route::get('/auth/user', function (Request $request) {
        return ['user' => $request->user()];
    });
    Route::delete('/logout', [App\Http\Controllers\Api\Auth\AuthController::class,'logout']);

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

    // Admin Driver Routes
    Route::get('/drivers', [App\Http\Controllers\Api\Admin\DriverController::class, 'index']);
    Route::post('/driver/create', [App\Http\Controllers\Api\Admin\DriverController::class, 'create']);
    Route::get('/driver/edit/{id}', [App\Http\Controllers\Api\Admin\DriverController::class, 'edit']);
    Route::post('/driver/update', [App\Http\Controllers\Api\Admin\DriverController::class, 'update']);
    Route::delete('/driver/delete/{id}', [App\Http\Controllers\Api\Admin\DriverController::class, 'delete']);

    Route::get('/driver/select', [App\Http\Controllers\Api\Admin\DriverController::class, 'getDriversSelect']);

    // Delivery Zones
    Route::get('/delivery_zones', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'index']);
    Route::post('/delivery_zone/create', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'create']);
    Route::get('/delivery_zone/edit/{id}', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'edit']);
    Route::post('/delivery_zone/update', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'update']);
    Route::delete('/delivery_zone/delete/{id}', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'delete']);
    Route::post('/delivery_zone/assign_zone', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'assignZoneToDriver']);

    Route::get('/delivery_zone/select', [App\Http\Controllers\Api\Admin\DeliveryZoneController::class, 'getSelectList']);


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
    
    
});

Route::post('/media/upload', [App\Http\Controllers\Api\Admin\MediaController::class,'upload']);
Route::get('/media/files', [App\Http\Controllers\Api\Admin\MediaController::class,'index']);

Route::get('images/{folder}/{filename}', [App\Http\Controllers\Api\FileController::class, 'images'])
    ->where(['folder' => '.*', 'filename' => '.*']);

Route::get('test', [App\Http\Controllers\Api\FileController::class, 'test']);


// site Frontend
Route::get('/mealplanorder/data', [App\Http\Controllers\Api\OrderController::class, 'getMealPlans']);
Route::post('/mealplanorder/create', [App\Http\Controllers\Api\OrderController::class, 'createOrder']);
Route::get('/mealplanorder/deliveryCharge', [App\Http\Controllers\Api\OrderController::class, 'getDeliveryCharges']);

Route::get('/delivery_windows', [App\Http\Controllers\Api\OrderController::class, 'getDeliveryWindows']);


Route::get('/site/settings', [App\Http\Controllers\Api\SettingController::class, 'getSiteSettings']);
Route::get('/settings/{code}', [App\Http\Controllers\Api\Admin\SettingController::class, 'index']);
Route::post('/settings/save', [App\Http\Controllers\Api\Admin\SettingController::class, 'save']);

//Route::apiResource('settings', App\Http\Controllers\Api\Admin\SettingController::class);