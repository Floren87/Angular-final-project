import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';
import { Subscription } from 'rxjs';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-gasto',
  imports: [NgFor, NgClass],
  templateUrl: './listar-gasto.component.html',
  styleUrl: './listar-gasto.component.css'
})
export class ListarGastoComponent implements OnInit, OnDestroy{
 verEstadisticas() {
  this.router.navigate(['/estadisticas'])
}
router = inject(Router);

  subscription: Subscription;
  presupuestoService = inject(PresupuestoService);
  presupuesto: number;
  restante: number;
  listaGastos: any[] = [];


ngOnInit(): void {
  this.presupuesto = this.presupuestoService.presupuesto;
  this.restante = this.presupuestoService.restante;
}
constructor() {
  this.presupuesto = 0;
  this.restante = 0;
  this.subscription=this.presupuestoService.getGastos().subscribe(data => {
  this.restante = this.restante - data.cantidad;
  this.listaGastos.push(data);
  })

}


ngOnDestroy():void  {
  this.subscription.unsubscribe()
}

aplicarColorRestante () {
  if(this.presupuesto / 4 > this.restante){
    return 'alert alert-danger';
  }else if(this.presupuesto / 2 > this.restante){
    return 'alert alert-warning'
  }else {
    return 'alert alert-secondary';
  }

  }
 
  

}



