import { Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';

export const routes: Routes = [
    
    {path: '', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'},
    {path:'ingresar-presupuesto', component: IngresarPresupuestoComponent },
    {path:'estadisticas', component:EstadisticasComponent},
    {path:'gastos', component: GastosComponent },
    {path: '**', redirectTo: '/ingresar-presupuesto', pathMatch: 'full'}
];
