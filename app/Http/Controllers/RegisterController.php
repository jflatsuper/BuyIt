<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use App\Models\Customer;

class RegisterController extends Controller
{
    //
    public function checkEmail(Request $request){
        $product=User::where('email',$request->email)->exists();
        return $product;
    }
    public function create(Request $request){
       $usercreate= User::create([
           'name'=>$request->name,
           'email'=>$request->email,
           'password'=>bcrypt($request->password)

       ]);
       $usercreate->buyers()->updateOrCreate([
        'user_id' => $usercreate->id,
        // Fields that should be used to find an existing record.
    ], [
        'user_id' =>$usercreate->id ,
        // Fields that should be updated.
    ]);

    $usercreate->save();
       if (Auth::attempt($request->all())){
        $request->session()->regenerate();
        $user = Auth::user();
        return response()->json($user);
        // authenticates the user if values are found 
    }

    }
}
