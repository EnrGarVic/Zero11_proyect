import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent implements OnInit {
  fotos: { id: number; url: string }[] = [];
  isAdmin: boolean = false;
  imagenCargando: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isAdmin = !!sessionStorage.getItem('token');
    this.cargarGaleria();
  }

  cargarGaleria() {
    this.http
      .get<{ id: number; url: string }[]>(`${environment.apiUrl}/galeria`)
      .subscribe((data) => {
        this.fotos = data;
      });
  }

  subirImagen(event: any) {
    const archivo = event.target.files[0];
    if (!archivo) return;

    const formData = new FormData();
    formData.append('imagen', archivo);
    this.imagenCargando = true;

    this.http
      .post<{ url: string }>(
        `${environment.apiUrl}/upload-imagen-galeria`,
        formData
      )
      .subscribe({
        next: () => {
          this.cargarGaleria();
          this.imagenCargando = false;
        },
        error: (err) => {
          console.error('Error al subir imagen', err);
          alert('Error al subir imagen');
          this.imagenCargando = false;
        },
      });
  }
  eliminarFoto(id: number) {
    if (!confirm('¿Estás seguro de que quieres eliminar esta imagen?')) return;

    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    this.http
      .delete(`${environment.apiUrl}/galeria/${id}`, { headers })
      .subscribe({
        next: () => {
          this.cargarGaleria();
        },
        error: (err) => {
          console.error('Error al eliminar imagen', err);
          alert('Error al eliminar imagen');
        },
      });
  }
}
