<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Auth;
use Cloudinary;
use Illuminate\Support\Facades\Storage;
class ProductController extends Controller
{
    //
    public function create(Request $request){
        $credentials=$request->validate([
            'name'=>["required"],
            'type'=>["required"],
            'description'=>["required"],

            'large'=>["required"],
            'medium'=>["required"],
            'small'=>["required"],
            "gender"=>["required"],
            "color"=>["required"],
            "file"=>["required"],
            "price"=>["required"]

            
        ]);
     
        //local file storage
        $filename = time().rand(3,7). '.'.$request->file('file') ->getClientOriginalExtension();
        // $request->file('file')->move('uploads/', $filename);
         
        // $path = Storage::putFileAs(
        //     'products', $request->file('file'), $filename
        // );
        $img = $request->file->storeOnCloudinaryAs('products', $filename);
        $path=$img->getSecurePath();
        $public_id=$img->getPublicId();
        echo($public_id);

        // $imglink=cloudinary()->upload($request->file('file')->getRealPath())->getSecurePath();
        
       
        $product=Product::create([
            'name' => $credentials['name'],
            'type' => $credentials['type'],
            
            
            'large'=>json_decode($credentials['large']),
            'medium'=>json_decode($credentials['medium']),
            'seller_id'=>Auth::user()->id,
            'description'=>$credentials['description'],
            'small'=>json_decode($credentials['small']),
            'gender'=>$credentials['gender'],
            "color"=>$credentials['color'],
            "price"=>json_decode($request->price),
            "productimage"=>$path,
            "productpublicid"=>$public_id,
        ]);
        return response()->json($product);
    
}
    public function show(){
        
       
      
        $products8=Product::where('large','>',0)->OrWhere('medium','>',0)->OrWhere('small','>',0)->get();
        //   $products= Product::with('cart')->where('buyer_id',Auth::user()->id)->first()->pivot->amount;
       

        return $products8->toJson();
    }

    public function find(Request $request){
        $search=$request->var;
        $products=Product::where('name','LIKE','%'.$search.'%')
        ->OrWhere('type','LIKE','%'.$search.'%')->get();
        
        return $products->toJson();
    }
    public function sellerprod(Request $request){
        $products=Product::where('seller_id','LIKE','%'.Auth::user()->id.'%')->with(['cart'])->get();
        return $products->toJson();
    }
}