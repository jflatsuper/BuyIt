<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    use HasFactory;
    protected $fillable=["user_id","address","date_of_birth",'rating','sold'];
   
    
    public function user(){
      return  $this->belongsTo(User::class,'id','id');
    }
}

