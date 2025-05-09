import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  hora: string;
  local_id: number;
  imagen: string;
  es_proximo: boolean;
}

@Injectable({ providedIn: 'root' })
export class EventosService {
  private apiUrl = `${environment.apiUrl}/eventos`;

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEventoProximo(): Observable<Evento> {
    return this.http.get<Evento>(`${environment.apiUrl}/eventos/proximo`);
  }

  eliminarEvento(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.delete(`${environment.apiUrl}/eventos/${id}`, { headers });
  }

  añadirEvento(evento: any) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post(`${environment.apiUrl}/eventos`, evento, { headers });
  }
}
