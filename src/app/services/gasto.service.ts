import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGasto } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private apiUrl = 'http://localhost:3001/gastos';

 constructor(private http: HttpClient) { }

  // GET: Leer todos los gastos
  getGastos(): Observable<IGasto[]> {
    return this.http.get<IGasto[]>(this.apiUrl);
  }

  // POST: Crear un nuevo gasto
  addGasto(gasto: IGasto): Observable<IGasto> {
    return this.http.post<IGasto>(this.apiUrl, gasto);
  }

  // PUT: Editar un gasto existente
  updateGasto(gasto: IGasto): Observable<IGasto> {
    return this.http.put<IGasto>(`${this.apiUrl}/${gasto.id}`, gasto);
  }

  // DELETE: Borrar un gasto
  deleteGasto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}