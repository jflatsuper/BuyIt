<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;
use App\Models\Sold;
use Auth;

class Product extends Model
{
    use HasFactory;
    protected $fillable=['name','type','is_available','large','medium','small','seller_id','rating','no_of_rating','gender','color','productimage','price','productpublicid','description'];
    public function cart(){
        return $this->belongsToMany(Cart::class)->withPivot('amount', 'price');
    }
    public function sold(){
        return $this->belongstoMany(Sold::class)->withPivot('amount','price');
    }
    
}
