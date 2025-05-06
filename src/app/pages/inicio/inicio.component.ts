import { Component, OnInit } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { CommonModule } from '@angular/common';
import { Evento, EventosService } from '../../services/eventos.service';
@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [CommonModule, GaleriaComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  eventoProximo: Evento | null = null;
  constructor(private eventosService: EventosService) {}
  ngOnInit(): void {
    this.eventosService.getEventoProximo().subscribe({
      next: (res) => (this.eventoProximo = res),
      error: (err) => console.error('Error al obtener el evento próximo', err),
    });
  }
}
