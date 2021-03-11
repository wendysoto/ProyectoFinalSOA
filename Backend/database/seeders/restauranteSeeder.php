<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\restaurante;
class restauranteSeeder extends Seeder
{
    
    public function run()
    {
        restaurante::truncate();
        $rest= new restaurante();
        $rest->nombre="El chorigol";
        $rest->Ruc="0605478012001";
        $rest->telefono="0328745";
        $rest->direccion="Av la Corunia y la Colon";
        $rest->administrador="Pedro Cifuentes";
        $rest->correo="elchorigol@gmail.com";
        $rest->horario="9:00- 19:00";
        $rest->imagen="https://lh3.googleusercontent.com/urrbpsKrcLC7mI8flJpcRpiQxj67Si5AQlzPt3qkMq7mjYV9R3fHzaJ7l7UX1keYDOGFfOJu=w768-h432-p-no-v0";
        $rest->save();
    }
}
