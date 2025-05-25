import { Component, inject, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { IngresarGastoComponent } from "./ingresar-gasto/ingresar-gasto.component";
import { ListarGastoComponent } from "./listar-gasto/listar-gasto.component";
import { Router } from '@angular/router';
import { EstadisticasComponent } from "../estadisticas/estadisticas.component";

@Component({
  selector: 'app-gastos',
  imports: [IngresarGastoComponent, ListarGastoComponent, EstadisticasComponent],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent implements OnInit{
presupuestoService = inject(PresupuestoService);
router = inject(Router);
ngOnInit(): void {
console.log(this.presupuestoService.presupuesto);
if(this.presupuestoService.presupuesto === 0) {
  this.router.navigate(['/ingresar-presupuesto'])
}


}


}
