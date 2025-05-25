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

constructor() {
  this.nombreGasto= '';
  this.cantidad = 0;
  this.formularioIncorrecto = false;
  this.textIncorrecto = 'Alguno de los datos estan incorrectos!'
  
}
agregarGasto(){
if(this.cantidad > this.presupuestoService.restante) {
  this.formularioIncorrecto = true;
  this.textIncorrecto = 'No tienes dinero suficiente';
  return
}


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




