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


Route::get('/customer/edit/{id}', [App\Http\Controllers\Api\Admin\CustomerController::class, 'edit']);
Route::post('/customer/update', [App\Http\Controllers\Api\Admin\CustomerController::class, 'update']);
Route::delete('/customer/delete/{id}', [App\Http\Controllers\Api\Admin\CustomerController::class, 'delete']);

Route::get('/mealplan', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'index']);
Route::get('/mealplan/options', [App\Http\Controllers\Api\Admin\MealPlanController::class, 'mealplanOptions']);
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

    Route::get('/customer', [App\Http\Controllers\Api\Admin\CustomerController::class, 'index']);
    Route::post('/customer/create', [App\Http\Controllers\Api\Admin\CustomerController::class, 'create']);
});

Route::get('images/{folder}/{filename}', [App\Http\Controllers\Api\FileController::class, 'images'])
    ->where(['folder' => '.*', 'filename' => '.*']);


Route::get('/mealplanorder/data', [App\Http\Controllers\Api\OrderController::class, 'getMealPlans']);