import { Component } from '@angular/core';
import { ConsumoapiService } from '../service/consumoapi.service';
import { Restaurante } from '../service/Restaurante';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  restaurantes: Restaurante[]=[]

  constructor(private service:ConsumoapiService) 
  {}

  ngOnInit():void{
    this.obtenerRestaurantes()
  }

  obtenerRestaurantes(){
    this.service.getRestaurantes().subscribe(r=>{
      console.log(r)
      this.restaurantes=r
    })
  }

}
