<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\User;
use Auth;

class BuyerController extends Controller
{
    //
     public function showBuyerDetails(){
         $user=Auth::user();
         $buyer=$user->buyers;
         return $buyer->toJson();


     }
     public function details(Request $request){
        $user=Auth::user()->buyers;
        $buyer=$user->update([
            'date_of_birth'=>$request->birth,
            'address'=>$request->address,
        ]);
   
        return $user;
     }
}

