import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientelaravelService } from 'src/app/service/clientelaravel.service';
import { Restaurante } from 'src/app/service/restaurante';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  actualizar: boolean = false;
  title = 'RESTAURANTES';
  restaurantes: Restaurante[] = [];
  myFormRestaurante!: FormGroup;
  constructor(public servc: ClientelaravelService) {}
  ngOnInit(): void {
    this.obtenerRestaurantes();

    this.myFormRestaurante = new FormGroup({
      idR : new FormControl(''),
      nombreR: new FormControl(''),
      RucR: new FormControl(''),
      telefonoR: new FormControl(''),
      direccionR:new FormControl(''),
      administradorR:new FormControl(''),
      correoR:new FormControl(''),
      horarioR:new FormControl(''),
      imagenR:new FormControl('')
    });
  }

  obtenerRestaurantes() {
    this.servc.getRestaurantes().subscribe((r) => {
      console.table(r);
      return this.restaurantes = r;
    });
  }

  ingresarRestaurante() {
    if (this.actualizar==false) {
    let nombre = this.myFormRestaurante.value.nombreR;
    let Ruc = this.myFormRestaurante.value.RucR;
    let telefono = this.myFormRestaurante.value.telefonoR;
    let direccion  = this.myFormRestaurante.value.direccionR;
    let administrador = this.myFormRestaurante.value.administradorR;
    let correo = this.myFormRestaurante.value.correoR;
    let horario = this.myFormRestaurante.value.horarioR;
    let imagen = this.myFormRestaurante.value.imagenR;
    this.servc
      .addRestaurante(nombre, Ruc, telefono, direccion, administrador, correo, horario, imagen )
      .subscribe((r) => {
        this.obtenerRestaurantes();
        this.myFormRestaurante = new FormGroup({
          idR : new FormControl(''),
          nombreR: new FormControl(''),
          RucR: new FormControl(''),
          telefonoR: new FormControl(''),
          direccionR:new FormControl(''),
          administradorR:new FormControl(''),
          correoR:new FormControl(''),
          horarioR:new FormControl(''),
          imagenR:new FormControl('')
        });
      });
    }
    else
    {
      let id = this.myFormRestaurante.value.idR;
      let nombre = this.myFormRestaurante.value.nombreR;
      let Ruc = this.myFormRestaurante.value.RucR;
      let telefono = this.myFormRestaurante.value.telefonoR;
      let direccion  = this.myFormRestaurante.value.direccionR;
      let administrador = this.myFormRestaurante.value.administradorR;
      let correo = this.myFormRestaurante.value.correoR;
      let horario = this.myFormRestaurante.value.horarioR;
      let imagen = this.myFormRestaurante.value.imagenR;
      this.servc
        .editRestaurante(nombre, Ruc, telefono, direccion, administrador, correo, horario, imagen, id)
        .subscribe((r) => {
          this.obtenerRestaurantes();
          this.myFormRestaurante = new FormGroup({
            idR : new FormControl(''),
            nombreR: new FormControl(''),
            RucR: new FormControl(''),
            telefonoR: new FormControl(''),
            direccionR:new FormControl(''),
            administradorR:new FormControl(''),
            correoR:new FormControl(''),
            horarioR:new FormControl(''),
            imagenR:new FormControl('')
          });
        });
      
    }
  }

  eliminarRestaurante(id: number) {
    console.warn(id)
    if (
      !confirm(
        'ALERTA!! va a proceder a eliminar este registro, si desea eliminarlo de click en ACEPTAR\n de lo contrario de click en CANCELAR.'
      )
    ) {
      return false;
    } else {
      this.servc.deleteRestaurante(id).subscribe((r) => 
      {
        console.log('Datos eliminados');
        this.obtenerRestaurantes();
      });
      return true;
    }
  }

  editarRestaurante(id: number) 
  {
    this.servc.getRestauranteById(id).subscribe((r) => 
    {
      
      this.myFormRestaurante = new FormGroup({
        idR : new FormControl(`${r.id}`),
        nombreR: new FormControl(`${r.nombre}`),
        RucR: new FormControl(`${r.Ruc}`),
        telefonoR: new FormControl(`${r.telefono}`),
        direccionR:new FormControl(`${r.direccion}`),
        administradorR:new FormControl(`${r.administrador}`),
        correoR:new FormControl(`${r.correo}`),
        horarioR:new FormControl(`${r.horario}`),
        imagenR:new FormControl(`${r.imagen}`)
      });
      this.actualizar = true;
    });
  }

}
