<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    public function create(Request $request){
        $credentials=$request->validate([
            'name'=>["required"],
            'type'=>["required"],
            'isAvailable'=>["required",'boolean'],
            'large'=>["required",'boolean'],
            'medium'=>["required",'boolean'],
            'small'=>["required",'boolean'],
            "gender"=>["required"],
            "color"=>["required"],
            "file"=>["required"],

            
        ]);
        $product=Product::create([
            'name' => $credentials['name'],
            'type' => $credentials['type'],
            'is_available'=>$credentials['isAvailable'],
            'large'=>$credentials['large'],
            'medium'=>$credentials['medium'],
            'small'=>$credentials['small'],
            'gender'=>$credentials['gender'],
            "color"=>$credentials['color'],
            "price"=>$request->price,
            "productimage"=>$credentials['file'],
        ]);
        return response()->json("Product Updates");
    
}
    public function show(){
        $products=Product::all();

        return $products->toJson();
    }
}