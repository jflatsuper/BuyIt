<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
class LoginController extends Controller
{
    //
    public function login(Request $request):JsonResponse{
        $credentials=$request->validate([
            'email'=>['required','email'],
            'password'=>['required'],
            
        ]);
        $cred=User::where('email',$credentials['email'])->first()->user_type;
        //validates the values passed into the controller
        if (User::where('email',$credentials['email'])->first()->user_type==$request->role && Auth::attempt($credentials)){
            $request->session()->regenerate();
            $users = Auth::user();
            
            return response()->json($users);
            // authenticates the user if values are found 
        }
        return response()->json([
            'errors'=>[
                'email'=>'The provided credentials do not match our record.'
            ]],422);
            //returns errors in json format if auth attempt fails
           
    }
  
    public function logouts(Request $request): JsonResponse
    {

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json('Successfully logged out');
    }
}
