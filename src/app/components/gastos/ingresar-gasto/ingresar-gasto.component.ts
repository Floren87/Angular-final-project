import {  NgIf, UpperCasePipe } from '@angular/common';
import { Component,  inject,  OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../../services/presupuesto.service';




@Component({
  selector: 'app-ingresar-gasto',
  imports: [FormsModule, UpperCasePipe, NgIf],
  templateUrl: './ingresar-gasto.component.html',
  styleUrl: './ingresar-gasto.component.css'
})

//para asegurarme que los datos se cargan siempre primero en la pagina he utilizado en todos los componentes el metodo on init
export class IngresarGastoComponent implements OnInit{

presupuestoService = inject(PresupuestoService);
nombreGasto: string;
cantidad: number;
formularioIncorrecto: boolean;
textIncorrecto: string;
fechaGasto: Date | undefined;
modoPago: string | undefined;

ngOnInit(): void {

}
//aunque los servicios tambien se pueden iniciar en el contructor , he preferido injectarlo fuera , y hacer dentro del contructor solo las inicializaciones de las propriedades
constructor() {
  this.nombreGasto= '';
  this.cantidad = 0;
  this.formularioIncorrecto = false;
  this.textIncorrecto = 'Alguno de los datos estan incorrectos!'
  
}
//esta es la funcion del primer boton agregar gastos 
agregarGasto(){ 
if(this.cantidad > this.presupuestoService.restante) { // aqui comparamos el valor de la cantidad de dinero de un gasto con lo que nos queda "en el bolsillo " o restante
  this.formularioIncorrecto = true;
  this.textIncorrecto = 'No tienes dinero suficiente';
  return
}

// aqui si no tenemos nada en el from a la hora de agregar un gasto , nos salta el texto incorrecto para avisarnos de un error 
if(this.nombreGasto === '' || this.cantidad <= 0 ){
  this.formularioIncorrecto = true;
}else {
  const GASTO = {
    nombre: this.nombreGasto,
    cantidad: this.cantidad,
    fecha: this.fechaGasto,
    pago: this.modoPago
  }
  this.presupuestoService.agregarGasto(GASTO);
  this.formularioIncorrecto = false;
  this.nombreGasto = '';
  this.cantidad = 0;
  }
  }

}




