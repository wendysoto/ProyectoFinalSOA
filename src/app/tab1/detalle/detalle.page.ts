import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsumoapiService } from 'src/app/service/consumoapi.service';
import { Restaurante } from 'src/app/service/Restaurante';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  restaurantes: Restaurante[]=[]
  restaurante: Restaurante[]=[]
  dato: any

  constructor(private route:ActivatedRoute, private servicio: ConsumoapiService) { 

    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(r=>{
      console.log(r.get('id'))
      this.dato=r.get('id')
    })
    this.obtenerRestaurante()
  }

  obtenerRestaurante(){
    this.servicio.getRestaurantes().subscribe(r=>{      
      this.restaurantes=r

      for (let x of this.restaurantes){
        console.log("El vcalor de x es: " + x) 
        console.log( x.id )  
        if(x.id == this.dato){
          this.restaurante.push(x)
        }   
      }

      //this.restaurante.push(this.restaurantes[this.dato-4])
      console.log(this.restaurante)
    })
  }

}
