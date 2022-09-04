<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFunctionSelectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('function_selectors', function (Blueprint $table) {
            $table->id();

            $table->string('function_name')->index();
            $table->string('topic')->index();
            $table->string('selector')->index()->unique();
            $table->json('types');
            $table->json('type_names');
            $table->string('description', 1000)->nullable();

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
        Schema::dropIfExists('function_selectors');
    }
}
