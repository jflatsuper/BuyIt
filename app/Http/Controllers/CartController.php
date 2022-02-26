<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use DB;
use App\Models\Cart;
use App\Models\Product;

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
            $addtoCart->products()->updateExistingPivot($productid,['amount' => DB::raw('amount+1'), 'price' =>$request->price]);
            $product=Product::where('id',$productid)->with(['cart' => function ($query) {
                $query->where('buyer_id', Auth::user()->id)->first();
              }])->first();
           
                if($addtoCart){
                    return ($product)->toJson();

                }
            
            
        }
    }
    public function removeFromCart(Request $request){
        $productid=$request->productId;
        $user=Auth::user();
       
        if($user->cart===null)
        {
            return null;
        }
        $user->cart->products()->newPivotStatement()->where('product_id', '=', $productid)  
        ->where('amount', '<=', 1)->delete();
        $cartid=$user->cart->id;
        //Removes product from cart if the product is greater than 0
        $user->cart->products()->newPivotStatement()->where('product_id', '=', $productid)  
        ->where('amount', '>', 0)->update(array(
       'amount' =>DB::raw('amount-1')
   ));
      
   $product=Product::where('id',$productid)->with(['cart' => function ($query) {
    $query->where('buyer_id', Auth::user()->id)->first();
  }])->first();
          

  return ($product)->toJson();

    }
    public function show(){
        $user=Auth::user();
        if($user->cart){
            $carts=$user->cart->products;
            return $carts->toJson();

        }
        else{
            return response()->json();
        
        }
        

    }
}


