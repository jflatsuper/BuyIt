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
     public function updateAddress(Request $request){
        $user=Auth::user();
        $buyer=$user->buyers->update([
            'address'=>$request->address,
        ]);
        
        
        
        return $request->address;


     }
     public function changeDateofBirth(Request $request){
        $user=Auth::user();
        $buyer=$user->buyers->update([
            'date_of_birth'=>$request->birth,
        ]);
        
        
        
        return $request->birth;



     }
}

