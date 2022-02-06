<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Cart;

class Customer extends Model
{
    use HasFactory;
    protected $fillable=["user_id","address","date_of_birth"];
   
    
    public function user(){
      return  $this->belongsTo(User::class,'id','user_id');
    }
}
