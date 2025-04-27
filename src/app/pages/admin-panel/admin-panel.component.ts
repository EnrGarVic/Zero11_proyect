import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-admin-panel',
  imports: [ CommonModule, FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})

export class AdminPanelComponent {
  nombre = '';
  precio: number | null = null;
  categoria_id: number | null = null;
  categorias: any[] = [];

  constructor(private http: HttpClient) {}

  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = !!localStorage.getItem('token');
    this.http.get<any[]>('http://localhost:3000/categorias').subscribe((data) => {
      this.categorias = data;
    });
  }

  enviarProducto() {
    const nuevoProducto = {
      nombre: this.nombre,
      precio: this.precio,
      categoria_id: this.categoria_id
    };

    this.http.post('http://localhost:3000/productos', nuevoProducto).subscribe(
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
    localStorage.removeItem('token');
    window.location.href = '/';
  }
}