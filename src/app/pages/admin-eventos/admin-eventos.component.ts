import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LocalesService, Local } from '../../services/locales.service';
import { AuthService } from '../../services/auth.service';
import { EventosService } from '../../services/eventos.service';

@Component({
  standalone: true,
  selector: 'app-admin-eventos',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-eventos.component.html',
  styleUrls: ['./admin-eventos.component.css'],
})
export class AdminEventosComponent implements OnInit {
  evento = {
    titulo: '',
    descripcion: '',
    fecha: '',
    hora: '',
    local_id: null,
    imagen: '',
    es_proximo: false,
  };

  locales: Local[] = [];
  previewUrl: string = '';
  imagenCargada: boolean = false;

  constructor(
    private http: HttpClient,
    private localesService: LocalesService,
    private authService: AuthService,
    private eventosService: EventosService
  ) {}

  ngOnInit(): void {
    this.localesService.getLocales().subscribe({
      next: (data) => (this.locales = data),
      error: (err) => console.error('Error al cargar locales', err),
    });
  }

  subirImagen(event: any) {
    const archivo = event.target.files[0];
    const formData = new FormData();
    formData.append('imagen', archivo);

    this.http
      .post<{ url: string }>(
        'http://localhost:3000/upload-imagen-evento',
        formData
      )
      .subscribe({
        next: (res) => {
          this.evento.imagen = res.url.replace(
            '/upload/',
            '/upload/w_800,c_limit,q_auto,f_auto/'
          );
          this.imagenCargada = true;
        },
        error: (err) => {
          console.error('Error al subir la imagen', err);
          alert('Error al subir imagen');
        },
      });
  }

  guardarEvento() {
    this.eventosService.añadirEvento(this.evento).subscribe({
      next: () => {
        alert('Evento guardado correctamente');
        this.evento = {
          titulo: '',
          descripcion: '',
          fecha: '',
          hora: '',
          local_id: null,
          imagen: '',
          es_proximo: false,
        };
        this.previewUrl = '';
        this.imagenCargada = false;
      },
      error: (err) => {
        console.error('Error al guardar evento', err);
        alert('Error al guardar evento');
      },
    });
  }
  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
