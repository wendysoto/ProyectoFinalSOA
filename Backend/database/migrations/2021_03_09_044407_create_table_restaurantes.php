<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRestaurantes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('restaurantes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('Ruc');
            $table->string('telefono');
            $table->string('direccion');
            $table->string('administrador');
            $table->string('correo');
            $table->string('horario');
            $table->string('imagen');             
            $table->timestamps();
                      
   
        });
    }

  
    public function down()
    {
        Schema::dropIfExists('restaurantes');
    }
}
