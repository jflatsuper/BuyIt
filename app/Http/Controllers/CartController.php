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
        $action=$request->action;
        echo ($request->size);
        $user=Auth::user();
        // create a cart for the user if this is his first time adding an object to a cart

       if($action=='plus'){
        $addtoCart=$user->cart()->updateOrCreate(['buyer_id'=>$user->id],[
            'buyer_id'=>$user->id,
            'num_of_related'=>DB::raw('num_of_related+1'),

        ]);
        
        if($addtoCart){
            
            // $cartid=$addtoCart->id;
            // finds the authenticated users cart
            // $cart=Cart::find($cartid);
            //adds the product to the pivot table by referencing carts and the product id
            $v=$addtoCart->products001()->wherePivot('size', $request->size)->wherePivot('product_id', '=',$productid)->get();
            
           
            if(count($addtoCart->products001()->wherePivot('size', $request->size)->wherePivot('product_id', '=',$productid)->get())===0){
                echo 'doing attached';
                $added=$addtoCart->products001()->attach($productid,['amount' => DB::raw('amount+1'), 'price' =>$request->price,'size'=>$request->size]);
                
              
            }else{
                echo 'doing sync';
                $added=$addtoCart->products001()->syncWithoutDetaching($productid);
                
                $addtoCart->products001()->wherePivot('size', $request->size)->updateExistingPivot($productid,['amount' => DB::raw('amount+1'), 'price' =>$request->price]);

            }
            //increments the amount of products in the authenticated users cart  i.e one click increases the amount by one as well as set price
            
            $product=Product::where('id',$productid)->with(['cart' => function ($query) {
                $query->where('buyer_id', Auth::user()->id)->first();
              }])->first();
           
                if($addtoCart){
                   
                    return response()->json($addtoCart);

                }
            
            
        }}elseif ($action=='minus') {
           
       
        $cartid=$user->cart->id;
        //Removes product from cart if the product is greater than 0
        $user->cart->products001()->newPivotStatement()->where('product_id', '=', $productid)  
        ->where('amount', '>', 0)->update(array(
       'amount' =>DB::raw('amount-1')
         ));
      
        $product=Product::where('id',$productid)->with(['cart' => function ($query) {
            $query->where('buyer_id', Auth::user()->id)->first();
        }])->first();
        
        return ($product)->toJson();
        }

    }
    public function removeFromCart(Request $request){
        $user=Auth::user();

        $done=$user->cart->products001()->newPivotStatement()->where('product_id', '=', $request->rid)->delete();
        if ($done) {
            return response()->json('done');
        }
        return response()->json('err');
        


    }
   
    public function show(){
        
        $user=Auth::user();
        if($user->cart){
            $carts=$user->cart->products001;
            return $carts->toJson();

        }
        else{
            return response()->json();
        
        }
        

    }
}


