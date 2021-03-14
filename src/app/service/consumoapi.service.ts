import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurante } from './Restaurante';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  URL: string ="https://proyectorestful.herokuapp.com/api/restaurante";


  constructor(private httpc:HttpClient) { }

  getRestaurantes():Observable<Restaurante[]>{
    return this.httpc.get<Restaurante[]>(this.URL)
  }

}
