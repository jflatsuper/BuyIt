<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\RegisterController;

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
Route::put('updatecart',[CartController::class,'updateCart']);
Route::get('cart',[CartController::class,'show']);


Route::middleware(['Models:sanctum'])->group (function (){
    Route::get('/user', function (Request $request) {
        return $request->user();    
    });
    
    Route::post('/logout', [LoginController::class, 'logouts']);
});