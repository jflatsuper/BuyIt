<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
class LoginController extends Controller
{
    //
    public function login(Request $request):JsonResponse{
        $credentials=$request->validate([
            'email'=>['required','email'],
            'password'=>['required']
        ]);
        //validates the values passed into the controller
        if (Auth::attempt($credentials)){
            $request->session()->regenerate();
            $user = Auth::user();
            return response()->json($user);
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
