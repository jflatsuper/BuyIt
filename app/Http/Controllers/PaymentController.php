<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Paystack;

class PaymentController extends Controller
{
    //
    public function redirectToGateway()
    {
        try{
            return Paystack::getAuthorizationUrl()->redirectNow();
        }catch(\Exception $e) {
            return $e;
        }        
    }
    public function handleGatewayCallback()
    {
        $paymentDetails = Paystack::getPaymentData();

        return $paymentDetails->toJson();
        // Now you have the payment details,
        // you can store the authorization_code in your db to allow for recurrent subscriptions
        // you can then redirect or do whatever you want
    }

}
