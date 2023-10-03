<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        //  $table->dropSoftDeletes();
        DB::statement("
            CREATE TABLE `locations` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `location_name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `description` text COLLATE utf8mb4_unicode_ci,
                `address` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `city` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `state` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `postal_code` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `country` varchar(10) DEFAULT NULL,
                `phone` text COLLATE utf8mb4_unicode_ci,
                `lat` double DEFAULT NULL,
                `lng` double DEFAULT NULL,
                `radius` int(11) DEFAULT NULL,
                `status` tinyint(1) DEFAULT NULL,
                `permalink_slug` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `created_at` timestamp NULL DEFAULT NULL,
                `updated_at` timestamp NULL DEFAULT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        DB::statement("
            CREATE TABLE `location_areas` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `location_id` int(11) NOT NULL,
                `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
                `boundaries` json NOT NULL,
                `conditions` json NOT NULL,
                `is_default` tinyint(1) NOT NULL DEFAULT '0',
                `priority` int(11) NOT NULL DEFAULT '0',
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        DB::statement("
            CREATE TABLE `categories` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `description` text COLLATE utf8mb4_unicode_ci,
                `parent_id` int(11) DEFAULT NULL,
                `priority` int(11) NOT NULL DEFAULT '0',
                `status` tinyint(1) NOT NULL DEFAULT '1',
                `permalink_slug` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `created_at` timestamp NULL DEFAULT NULL,
                `updated_at` timestamp NULL DEFAULT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        DB::statement("
            CREATE TABLE `customers` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `address_id` int(11) DEFAULT NULL,
                `first_name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `last_name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `email` varchar(96) COLLATE utf8mb4_unicode_ci NOT NULL,
                `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `phone` varchar(32) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `ip_address` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `status` tinyint(1) NOT NULL DEFAULT '1',
                `activation_code` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `remember_token` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `is_activated` tinyint(1) DEFAULT NULL,
                `date_activated` datetime DEFAULT NULL,
                `last_login` datetime DEFAULT NULL,
                `last_seen` datetime DEFAULT NULL,
                `created_at` datetime NOT NULL,
                `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (`id`),
                UNIQUE KEY `customers_email_unique` (`email`)
            ) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        DB::statement("
            CREATE TABLE `addresses` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `address` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `city` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `state` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `postal_code` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `country` varchar(64) NOT NULL,
                `lat` double DEFAULT NULL,
                `lng` double DEFAULT NULL,
                `created_at` timestamp NULL DEFAULT NULL,
                `updated_at` timestamp NULL DEFAULT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=InnoDB  CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        DB::statement("
            CREATE TABLE `media_attachments` (
                `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
                `disk` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `file_name` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `mime_type` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
                `size` int(10) unsigned NOT NULL,
                `tag` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `attachment_type` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                `attachment_id` bigint(20) unsigned DEFAULT NULL,
                `is_public` tinyint(1) NOT NULL DEFAULT '1',
                `custom_properties` text COLLATE utf8mb4_unicode_ci,
                `priority` int(10) unsigned DEFAULT NULL,
                `created_at` timestamp NULL DEFAULT NULL,
                `updated_at` timestamp NULL DEFAULT NULL,
                PRIMARY KEY (`id`),
                KEY `media_attachments_attachment_type_attachment_id_index` (`attachment_type`,`attachment_id`),
                KEY `media_attachments_tag_index` (`tag`)
            ) ENGINE=InnoDB CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");

        Schema::create('meal_plans', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('name', 164);
            $table->string('description', 164)->nullable();
            $table->string('short_description', 164)->nullable();
            $table->decimal('price', 10, 2);
            $table->decimal('discount', 15, 2)->nullable();
            $table->string('duration')->nullable();
            $table->string('image')->nullable();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });

        Schema::create('meal_plan_options', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('name');
            $table->string('display_type');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
        Schema::create('meal_plan_option_values', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('value');
            $table->integer('meal_plan_option_id');
            $table->integer('priority')->default(0);
            $table->decimal('price', 10, 2);
            $table->timestamps();
        });

        Schema::create('meal_plan_addons', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('meal_plan_id')->nullable();
            $table->integer('meal_plan_option_id')->nullable();
            $table->boolean('required')->default(1);
            $table->integer('priority')->default(0);
            $table->boolean('status')->default(1);
            $table->timestamps();
        });


        Schema::create('meal_plan_orders', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('hash', 40)->nullable()->index();
            $table->integer('customer_id')->nullable();
            $table->string('first_name', 32)->nullable();
            $table->string('last_name', 32)->nullable();
            $table->string('email', 96)->nullable();
            $table->string('telephone', 32)->nullable();
            $table->integer('address_id')->nullable();
            $table->text('cart');
            $table->integer('total_items');
            $table->text('comment');
            $table->string('payment', 35);
            $table->string('order_type', 32);
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->date('date_modified');
            $table->time('order_time');
            $table->date('order_date');
            $table->decimal('order_total', 15, 4)->nullable();
            $table->integer('status_id');
            $table->string('ip_address', 40);
            $table->string('user_agent');
            $table->boolean('notify');
            $table->integer('invoice_no');
            $table->string('invoice_prefix', 32);
            $table->dateTime('invoice_date');
            $table->boolean('processed')->nullable();
            $table->text('delivery_comment')->nullable();
            $table->integer('area_id')->nullable();
            $table->timestamps();
        });
    
        // will have meal plan item id
        Schema::create('meal_plan_order_items', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->integer('meal_plan_id');
            $table->string('name');
            $table->decimal('price', 15, 4)->nullable();
            $table->decimal('subtotal', 15, 4)->nullable();
            $table->text('option_values');
            $table->text('comment');
        });
        // will have meal plan item options
        Schema::create('meal_plan_order_item_options', function (Blueprint $table) {
            $table->id();
            $table->integer('meal_plan_order_item_id');
            $table->integer('order_id');
            $table->integer('meal_plan_id');
            $table->integer('meal_plan_order_option_id');
            $table->integer('meal_plan_option_value_id');
            $table->string('order_option_name', 128);
            $table->decimal('order_option_price', 15, 4)->nullable();
            $table->string('order_option_value_name', 128);
            $table->decimal('order_option_value_price', 15, 4)->nullable();
        });
        
        // order total with delivery an taxes
        Schema::create('meal_plan_order_totals', function (Blueprint $table) {
                $table->engine = 'InnoDB';
                $table->id();
                $table->integer('order_id');
                $table->string('code', 30);
                $table->string('title');
                $table->decimal('value', 15);
                $table->boolean('priority');
                $table->boolean('is_summable')->default(0);
        });

        Schema::create('meal_plan_order_transactions', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('meal_plan_order_id');
            $table->integer('customer_id');
            $table->integer('staff_id');
            $table->integer('delivered_at');
            $table->string('image');
            $table->float('lat', 10, 6);
            $table->float('lng', 10, 6);
            $table->text('metadata');
            $table->string('delivery_status');
            $table->timestamps();
        });

        // we can use location area zones
        Schema::create('driver_zones', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('staff_id');
            $table->integer('area_id');
            $table->integer('status');
            $table->timestamps();
        });

        Schema::create('customer_zones', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('customer_id');
            $table->integer('area_id');
            $table->integer('status');
            $table->timestamps();
        });

        Schema::create('meal_plan_payment_logs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('payment_log_id', true);
            $table->integer('meal_plan_order_id');
            $table->string('payment_name', 128);
            $table->string('message');
            $table->text('request')->nullable();
            $table->text('response')->nullable();
            $table->boolean('status')->default(0);
            $table->dateTime('date_added')->nullable();
            $table->dateTime('date_updated')->nullable();
            $table->string('payment_code');
            $table->boolean('is_refundable')->default(false);
            $table->dateTime('refunded_at')->nullable();
            $table->timestamps();
        });

        Schema::create('delivery_zones', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->integer('location_id');
            $table->string('name', 64);
            $table->string('type', 32);
            $table->json('boundaries')->nullable();
            $table->json('conditions')->nullable();
            $table->timestamps();
        });

        Schema::create('settings', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->id();
            $table->string('key', 64);
            $table->string('value', 128);
            $table->timestamps();
        });

        // $this->seedData();
    }

    public function down()
    {
        Schema::dropIfExists('meal_plans');
        Schema::dropIfExists('meal_plan_options');
        Schema::dropIfExists('meal_plan_option_values');
        Schema::dropIfExists('meal_plan_addons');
        
        Schema::dropIfExists('meal_plan_orders');
        Schema::dropIfExists('meal_plan_order_items');
        Schema::dropIfExists('meal_plan_order_item_options');
        Schema::dropIfExists('meal_plan_order_totals');

        Schema::dropIfExists('meal_plan_order_transactions');
        Schema::dropIfExists('driver_zones');
        Schema::dropIfExists('customer_zones');
        Schema::dropIfExists('meal_plan_payment_logs');

        Schema::dropIfExists('delivery_zones');
        Schema::dropIfExists('settings');
        
    }

    protected function seedData()
    {
        if (DB::table('meal_plans')->count())
            return;

        $tables =[
            'meal_plans',
            'meal_plan_options',
            'meal_plan_orders',
            'meal_plan_order_options',
            'meal_plan_order_transection',
            'delivery_zones',
            'driver_zones'
        ];

        DB::table('meal_plans')->insert(array_map(function ($record) {
           // $record['order_restriction'] = 0;
           //$record['date_added'] = now();
            return $record;
        }, $this->getSeedRecords('meal_plans')));
    }

    protected function getSeedRecords($name)
    {
        return json_decode(file_get_contents(__DIR__.'/../records/'.$name.'.json'), true);
    }
};
