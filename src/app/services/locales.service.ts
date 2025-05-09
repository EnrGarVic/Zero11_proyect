import { environment } from '../../enviroments/enviroment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Local {
  id: number;
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
  descripcion: string;
  enlace_maps: string;
}

@Injectable({ providedIn: 'root' })
export class LocalesService {
  private apiUrl = `${environment.apiUrl}/locales`;

  constructor(private http: HttpClient) {}

  getLocales(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }
}
