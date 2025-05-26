import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGasto } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {
private apiUrl = '/estadisticas'
   constructor(private http: HttpClient) { }

    getGastos(): Observable<IGasto[]> {
       return this.http.get<IGasto[]>(this.apiUrl);
     }
}
