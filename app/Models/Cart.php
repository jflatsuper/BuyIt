<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\User;
use App\Models\Products;

class Cart extends Model
{
    
    use HasFactory;
    protected $fillable=['buyer_id','num_of_related'];
    public function buyers(){
        return  $this->belongsTo(Customer::class,'buyer_id','user_id');
      }
      public function user(){
        return  $this->belongsTo(User::class,'buyer_id','id');
      }
      public function products(){
          return $this->belongsToMany(Product::class,'cart_product','cart_id','product_id')->withPivot('amount', 'price');
          //Uses PiVOT table to establish many to many relationship
      }

}
