import { Component,  OnInit } from '@angular/core';
import { IGasto } from '../../interfaces/interface';
// import { HttpClient } from '@angular/common/http';
import { GastoService } from '../../services/gasto.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-estadisticas',
  imports: [ ReactiveFormsModule, FormsModule , CommonModule],
  templateUrl: './estadisticas.component.html',
  styleUrl: './estadisticas.component.css'
})
export class EstadisticasComponent implements OnInit{
gastos: IGasto[] = [];
gastosPorMes : number[] = new Array(12).fill(0);  // para poder clasificarlos por mes 
nuevoGasto: IGasto = {
    id: 0,
    nombre: '',
    cantidad: '',
    fecha: '',
    pay: '',
  };
  
constructor(private gastoService: GastoService) {}

ngOnInit(): void {
this.cargarGastos();
}
  // Carga todos los gastos (GET)
cargarGastos(): void {
  this.gastoService.getGastos().subscribe(data => {
    this.gastos = data;
  });
}
 // Agregar gasto nuevo (POST)
agregarGasto(): void {
    this.gastoService.addGasto(this.nuevoGasto).subscribe(gastoCreado => {
      this.gastos.push(gastoCreado);
      this.nuevoGasto = { 
    id: 0,
    nombre: '',
    cantidad: '',
    fecha: '',
    pay: '',
  };
    });
  }
   // Editar gasto (PUT)
editarGasto(gasto: IGasto): void {
    this.gastoService.updateGasto(gasto).subscribe(() => {
      this.cargarGastos();
    });
  }

  eliminarGasto(id: number): void {
    this.gastoService.deleteGasto(id).subscribe(() => {
      this.gastos = this.gastos.filter(g => g.id !== id);
    });
  }
}


  


