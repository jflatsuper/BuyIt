<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
            $table->unsignedInteger('price');
            $table->boolean('is_available')->default(0);
            $table->boolean('small')->default(0);
            $table->boolean('medium')->default(0);
            $table->boolean('large')->default(0);
            $table->unsignedInteger('seller_id');
            $table->unsignedInteger('no_of_ratings');
            $table->unsignedInteger('rating');
            $table->string('type');
            $table->string('gender')->default(NULL);
            $table->string('color')->default('Not Available');
            $table->string('productimage')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
