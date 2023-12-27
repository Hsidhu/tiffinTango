<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_methods', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->string('description')->nullable();
            $table->tinyInteger('is_default')->default(0);
            $table->tinyInteger('status')->default(0);
            $table->longText('data')->nullable();
            $table->timestamps();
        });
        Schema::create('payment_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('payment_method_id');
            $table->integer('order_id');
            $table->integer('customer_id');
            $table->string('message');
            $table->longText('request')->nullable();
            $table->longText('response')->nullable();
            $table->tinyInteger('is_success')->default(0);
            $table->dateTime('refunded_at')->nullable();
            $table->tinyInteger('is_refunded')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payment_methods');
        Schema::dropIfExists('payment_logs');
    }
};
