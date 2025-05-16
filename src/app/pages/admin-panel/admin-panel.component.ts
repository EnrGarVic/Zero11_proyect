import { environment } from '../../../environments/environment';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-admin-panel',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
})
export class AdminPanelComponent {
  nombre = '';
  precio: number | null = null;
  categoria_id: number | null = null;
  categorias: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = !!sessionStorage.getItem('token');
    this.http
      .get<any[]>(`${environment.apiUrl}/categorias`)
      .subscribe((data) => {
        this.categorias = data;
      });
  }

  enviarProducto() {
    const nuevoProducto = {
      nombre: this.nombre,
      precio: this.precio,
      categoria_id: this.categoria_id,
    };

    this.http.post(`${environment.apiUrl}/productos`, nuevoProducto).subscribe(
      (res) => {
        alert('Producto añadido correctamente ');
        this.nombre = '';
        this.precio = null;
        this.categoria_id = null;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
