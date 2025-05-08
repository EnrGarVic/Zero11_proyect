import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento, EventosService } from '../../services/eventos.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  imports: [CommonModule],
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = [];
  eventoProximo: Evento | null = null;

  constructor(
    private eventosService: EventosService,
    private authService: AuthService
  ) {}

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = !!sessionStorage.getItem('token');
    this.getEventos();
    this.eventosService.getEventoProximo().subscribe({
      next: (res) => {
        this.eventoProximo = res;

        this.eventosService.getEventos().subscribe({
          next: (res) => {
            this.eventos = res.filter((e) => e.id !== this.eventoProximo?.id);
          },
        });
      },
    });
  }
  getEventos(): void {
    this.eventosService.getEventos().subscribe({
      next: (res) => {
        this.eventos = res;
      },
      error: (err) => {
        console.error('Error al cargar eventos', err);
      },
    });
  }
  eliminarEvento(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este evento?')) {
      this.eventosService.eliminarEvento(id).subscribe({
        next: () => {
          alert('Evento eliminado correctamente');
          this.getEventos(); // vuelve a cargar la lista
        },
        error: (err) => {
          console.error('Error al eliminar evento:', err);
          alert('Error al eliminar el evento');
        },
      });
    }
  }
}
