<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;

class Customer extends Model
{
    use HasFactory;
    protected $fillable=["id","address","date_of_birth"];
    public function carts(){
        return $this->hasMany(Cart::class,'buyer_id','id');
    }
    public function user(){
      return  $this->belongsTo(User::class,'id','user_id');
    }
}
