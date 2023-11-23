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


Route::group(['middleware' => 'auth:sanctum'], function() {
    
    Route::get('/auth/user', [App\Http\Controllers\Api\Admin\UserController::class, 'getAuthUser']);
    Route::delete('/logout', [App\Http\Controllers\Api\Auth\AuthController::class,'logout']);
    
    // media
    Route::post('/media/upload', [App\Http\Controllers\Api\Admin\MediaController::class, 'upload']);
    Route::get('/media/files', [App\Http\Controllers\Api\Admin\MediaController::class, 'index']);

    Route::get('/media/get/{id}', [App\Http\Controllers\Api\Admin\MediaController::class, 'getMedia']);

});


Route::get('images/{folder}/{filename}', [App\Http\Controllers\Api\FileController::class, 'images'])
    ->where(['folder' => '.*', 'filename' => '.*']);

Route::get('test', [App\Http\Controllers\Api\FileController::class, 'test']);


// site Frontend
Route::get('/mealplanorder/data', [App\Http\Controllers\Api\OrderController::class, 'getMealPlans']);
Route::post('/mealplanorder/create', [App\Http\Controllers\Api\OrderController::class, 'createOrder']);
Route::get('/mealplanorder/deliveryCharge', [App\Http\Controllers\Api\OrderController::class, 'getDeliveryCharges']);

Route::get('/delivery_windows', [App\Http\Controllers\Api\OrderController::class, 'getDeliveryWindows']);
Route::get('/site/settings', [App\Http\Controllers\Api\SettingController::class, 'getSiteSettings']);


//Route::apiResource('settings', App\Http\Controllers\Api\Admin\SettingController::class);