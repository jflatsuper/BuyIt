<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use App\Models\Customer;
use Illuminate\Http\JsonResponse;
class RegisterController extends Controller
{
    //
    public function checkEmail(Request $request){
        $product=User::where('email',$request->email)->exists();
        return $product;
    }
    public function create(Request $request):JsonResponse{
       $usercreate= User::create([
           'name'=>$request->name,
           'email'=>$request->email,
           'password'=>bcrypt($request->password),
           'user_type'=>$request->role

       ]);

       if($usercreate->user_type===1){
       $usercreate->buyers()->updateOrCreate([
        'user_id' => $usercreate->id,
        // Fields that should be used to find an existing record.
    ], [
        'user_id' =>$usercreate->id ,
        // Fields that should be updated.
    ]);}
    else if($usercreate->user_type==2){
        $usercreate->sellers()->updateOrCreate([
            'id' => $usercreate->id,
            // Fields that should be used to find an existing record.
        ], [
            'id' =>$usercreate->id ,
            // Fields that should be updated.
        ]);

    }
    $usercreate->roles()->syncWithoutDetaching($request->role);


    $usercreate->save();
       if (Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
        $request->session()->regenerate();
        return response()->json($usercreate);
        // authenticates the user if values are found 
    }
    else{
        return response()->json('error');
    }

    }
}
