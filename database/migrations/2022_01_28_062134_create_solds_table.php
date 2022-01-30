<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSoldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('solds', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('buyer_id');
            $table->unsignedInteger('seller_id');
            $table->unsignedInteger('totalprice');
            $table->unsignedInteger('num_of_related')->nullable();
            $table->timestamp('bought_at')->nullable();
            $table->boolean('discount')->default(0);
            $table->unsignedInteger('discount_percentage');
       
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('solds');
    }
}
