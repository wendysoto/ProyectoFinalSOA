<?php

namespace App\Http\Controllers;
use App;
use Illuminate\Http\Request;


class restauranteController extends Controller
{
    
    public function index()
    {        
        return response()->json(App\Models\restaurante::all(),200);
        
    }

   
    public function create()
    {
        //
    }

    //para almacenar registros 
    public function store(Request $request)
    {
        $nuevorestaurante = new App\Models\restaurante;
        $nuevorestaurante->nombre = $request->nombre;
        $nuevorestaurante->Ruc = $request->Ruc;
        $nuevorestaurante->telefono = $request->telefono;
        $nuevorestaurante->direccion = $request->direccion;
        $nuevorestaurante->administrador = $request->administrador;
        $nuevorestaurante->correo = $request->correo;
        $nuevorestaurante->horario = $request->horario;
        $nuevorestaurante->imagen = $request->imagen;
        
        $nuevorestaurante->save();
        return response ()->json(['OK'=>'RESTAURANTE CREADO','codigo'=>200]); 
    }

   
    public function show($id)
    {
        $f = App\Models\restaurante::find($id);

        if(!$f){
            return response ()->json(['error'=>'RESTAURANTE NO ENCONTRADO','codigo'=>202]);
        }
        else{
            
            return response ()->json($f,200);
        } 
    }

   
    public function edit($id)
    {
       
    }

    
    public function update(Request $request, $id)
    {
         $nombreMetodo= $request-> method();

        if($nombreMetodo==='PUT'){

            $RestauranteActualizado = App\Models\restaurante::find($id);

        if(!$RestauranteActualizado){
            return response ()->json(['error'=>'RESTAURANTE NO ENCONTRADO','codigo'=>404]);
        }
        else{
            
            
            $RestauranteActualizado->nombre = $request->nombre;
            $RestauranteActualizado->Ruc = $request->Ruc;
        $RestauranteActualizado->telefono = $request->telefono;
        $RestauranteActualizado->direccion = $request->direccion;
        $RestauranteActualizado->administrador = $request->administrador;
        $RestauranteActualizado->correo = $request->correo;
        $RestauranteActualizado->horario = $request->horario;
        $RestauranteActualizado->imagen = $request->imagen;
            $RestauranteActualizado->save();
            return response ()->json(['error'=>'RESTAURANTE ACTUALIZADO','codigo'=>200]);
        }
        } 
       
    }

    
    public function destroy($id)
    {
         $f = App\Models\restaurante::find($id);

        if(!$f){
            return response ()->json(['error'=>'RESTAURANTE NO ENCONTRADO','codigo'=>202]);
        }
        else{
            $f->delete();
            return response ()->json($f,200);
        } 
    }
}
