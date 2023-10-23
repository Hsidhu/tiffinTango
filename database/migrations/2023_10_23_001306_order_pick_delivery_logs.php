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
        Schema::create('daily_delivery_meal_plan_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('driver_id');
            $table->integer('order_id');
            $table->string('image', 164)->nullable();
            $table->float('lat', 10, 6)->nullable();
            $table->float('lng', 10, 6)->nullable();
            $table->string('comment', 268)->nullable();
            $table->integer('priority')->default(1);
            $table->integer('status')->default(1);
            $table->timestamps();
        });

        Schema::create('picked_up_meal_plan_logs', function (Blueprint $table) {
            $table->id();
            $table->integer('customer_id');
            $table->integer('order_id');
            $table->dateTime('picked_at');
            $table->string('comment', 268)->nullable();
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('daily_delivery_meal_plan_logs');
        Schema::dropIfExists('picked_up_meal_plan_logs');
    }
};
