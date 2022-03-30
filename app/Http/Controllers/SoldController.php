<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sold;
use App\Models\Cart;
use App\Models\Product;
use Auth;


class SoldController extends Controller
{
    
    public function checkout(Request $request){
        $user=Auth::user();
        echo('this');
        echo($request->checked);

        
        $sold=Sold::create([
                //'product_id'=>$val['id'],
                'buyer_id'=>$user->id,
                //'seller_id'=>99,
                //'totalprice'=>$val['pivot']['amount'] * $val['pivot']['price'],
                //'num_of_related'=>$val['pivot']['amount'],
                'trans_id'=>$request->transid,
                'ref_id'=>$request->reference
        ]);
        foreach ($request->checked as $key => $value) {
            # code...
            $sold->products()->syncWithoutDetaching($value['id']);
            $sold->products()->updateExistingPivot($value['id'],['amount'=>$value['pivot']['amount'],'price'=> $value['pivot']['amount'] * $value['pivot']['price']]);
            echo ($user->cart->products001()->detach($value['id']));
            
        }
    }
    public function show(){
        $user=Auth::user();
        $orders=Sold::where('buyer_id',$user->id)->with(['products'])->get();
        
        return $orders->toJson();
    }
}