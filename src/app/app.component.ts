import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstadisticasComponent } from "./components/estadisticas/estadisticas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EstadisticasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-gastos';
}
