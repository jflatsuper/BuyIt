<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\Models\Cart;

class CartController extends Controller
{
    //
    // public function updateCart(Request $request){
    //     if(Cart::)
    // }
    public function updateCart(Request $request){
        $productid=$request->productId;
        $user=Auth::user();
        // create a cart for the user if this is his first time adding an object to a cart

       
        $addtoCart=$user->cart()->updateOrCreate(['buyer_id'=>$user->id],[
            'buyer_id'=>$user->id,
            'num_of_related'=>DB::raw('num_of_related+1'),

        ]);
        if($addtoCart){
            
            // $cartid=$addtoCart->id;
            // finds the authenticated users cart
            // $cart=Cart::find($cartid);
            //adds the product to the pivot table by referencing carts and the product id
            $added=$addtoCart->products()->syncWithoutDetaching($productid);
            //increments the amount of products in the authenticated users cart  i.e one click increases the amount by one as well as set price
            $addtoCart->products()->updateExistingPivot($productid,['amount' => DB::raw('amount+1'), 'price' => 49.99]);
            
           
                if($added){
                    return response()->json($added);

                }
            
            
        }
    }
    public function removeFromCart(Request $request){
        $productid=$request->productId;
        $user=Auth::user();
        if(!$user->cart()){
            return response()->json("You are yet to cart any item");
        }
        $cartid=$user->cart->id;
        
        $user->cart->products()->newPivotStatement()->where('product_id', '=', $productid)  
        ->where('amount', '>', 0)->update(array(
       'amount' =>DB::raw('amount-1')
   ));
          

        return response()->json("removed");

    }
}


