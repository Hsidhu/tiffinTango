<?php

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use App\Models\Customer;
use Illuminate\Support\Facades\Notification;
use App\Notifications\NewCustomerNotification;

Route::get('/test-view', function () {
    $cu = Customer::first();
    $cu->sendWelcomeNotification();
    return 'sent';
});

Route::get('/test-mail', function (){
    Notification::route('mail', 'yourMail@Email.Address')->notify(new NewCustomerNotification());
    return 'Sent';
});

// blocked by Authenticate middlware
Route::get('/invoice/{hash}', [App\Http\Controllers\HomeController::class, 'invoice'])->name('viewInvoice');

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*')->name('clientApp');



