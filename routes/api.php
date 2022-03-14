<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\BuyerController;
use App\Http\Controllers\SoldController;
use App\Http\Controllers\PaymentController;

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

Route::post('checkEmail',[RegisterController::class,'checkEmail']);
Route::post('createUser',[RegisterController::class,'create']);
Route::post('login',[LoginController::class,'login']);
Route::post('create',[ProductController::class,'create']);
Route::get('products',[ProductController::class,'show']);
// Laravel 5.1.17 and above
Route::post('/pay', [PaymentController::class, 'redirectToGateway']);
// Laravel 8
Route::get('/payment/callback', [PaymentController::class, 'handleGatewayCallback']);
Route::get('cart',[CartController::class,'show']);
Route::put('addCart',[CartController::class,'updateCart']);
Route::put('remCart',[CartController::class,'removeFromCart']);
Route::post('searchproducts',[ProductController::class,'find']);

Route::post('checkout',[SoldController::class,'checkout']);
Route::get('orders',[SoldController::class,'show']);


Route::middleware(['Models:sanctum'])->group (function (){
    Route::get('/user', function (Request $request) {
        return $request->user();    
    });
    
    Route::post('/logout', [LoginController::class, 'logouts']);
    Route::get('/basicdetails',[BuyerController::class,'showBuyerDetails']);
    Route::put('/changeAddress',[BuyerController::class,'updateAddress']);
    Route::put('/changeDOB',[BuyerController::class,'changeDateofBirth']);
    Route::get('/sellerproducts',[ProductController::class,'sellerprod']);
    
  
});