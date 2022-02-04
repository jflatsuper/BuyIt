<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable=['name','type','is_available','large','medium','small','seller_id','rating','no_of_rating','gender','color','productimage','price'];
    
}
