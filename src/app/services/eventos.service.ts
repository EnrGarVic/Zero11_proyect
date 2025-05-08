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
  private apiUrl = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  getEventoProximo(): Observable<Evento> {
    return this.http.get<Evento>('http://localhost:3000/eventos/proximo');
  }
  eliminarEvento(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.delete(`http://localhost:3000/eventos/${id}`, { headers });
  }
  añadirEvento(evento: any) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.post('http://localhost:3000/eventos', evento, { headers });
  }
}
