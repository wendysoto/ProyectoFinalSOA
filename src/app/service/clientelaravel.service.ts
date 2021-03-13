  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from './restaurante';

@Injectable({
  providedIn: 'root'
})
export class ClientelaravelService {

  URL = "https://proyectorestful.herokuapp.com/api/restaurante";

  constructor(private httpc: HttpClient) {

  }

  getRestaurantes(): Observable<Restaurante[]> {

    return this.httpc.get<Restaurante[]>(this.URL); 
  }

  addRestaurante(nombreR:string, RucR:string, telefonoR:string, direccionR:string, administradorR:string, correoR:string, horarioR:string, imagenR:string)
  {
    let objetoRestaurante = {nombre: nombreR, Ruc: RucR, telefono:telefonoR, direccion: direccionR, administrador: administradorR, correo: correoR, horario:horarioR, imagen: imagenR}
     return this.httpc.post(this.URL,objetoRestaurante);
  }

  editRestaurante(nombreR:string, RucR:string, telefonoR:string, direccionR:string, administradorR:string, correoR:string, horarioR:string, imagenR:string, idRestaurante:number)
  {
      let obj ={nombre: nombreR, Ruc: RucR, telefono:telefonoR, direccion: direccionR, administrador: administradorR, correo: correoR, horario:horarioR, imagen: imagenR}
      
      return this.httpc.put(`${this.URL}/${idRestaurante}`,obj)
      
  }

  deleteRestaurante(idRestaurante:number)
  { 
    return this.httpc.delete(`${this.URL}/${idRestaurante}`)
  }

  
  getRestauranteById(idRestaurante:number)
  {
    
    return this.httpc.get<Restaurante>(`${this.URL}/${idRestaurante}`);
  }
}