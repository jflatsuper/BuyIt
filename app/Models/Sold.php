<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sold extends Model
{
    use HasFactory;
    protected $fillable=['product_id','buyer_id','seller_id','totalprice','num_of_related','discount','discount_percentage','trans_id','ref_id'];
    public function products(){
        return $this->belongsToMany(Product::class,'product_sold','sold_id','product_id')->withPivot('amount', 'price','size');
    }
}
