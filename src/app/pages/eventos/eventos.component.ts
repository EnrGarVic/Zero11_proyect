import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Evento, EventosService } from '../../services/eventos.service';

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

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
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
}
