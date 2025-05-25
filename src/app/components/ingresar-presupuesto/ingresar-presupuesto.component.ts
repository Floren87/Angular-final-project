import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  imports: [NgIf, FormsModule],
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrl: './ingresar-presupuesto.component.css'
})
export class IngresarPresupuestoComponent implements OnInit{
presupuestoService = inject(PresupuestoService);
router = inject(Router);
cantidad: number;
cantidadIncorrecta: boolean;

constructor(){
this.cantidad= 0;
this.cantidadIncorrecta = false;
}
 
ngOnInit(): void {
  
}

agregar() {
if(this.cantidad > 0) {
this.cantidadIncorrecta = false;
this.presupuestoService.presupuesto = this.cantidad;
this.presupuestoService.restante = this.cantidad;
this.router.navigate(['/gastos']);


} else {
  this.cantidadIncorrecta = true;
}

}
}