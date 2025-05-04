import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria_id: number;
}
export interface CategoriaConProductos {
  id: number;
  nombre: string;
  productos: {
    id: number;
    nombre: string;
    precio: number;
    categoria_id: number;
  }[];
}
@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getCategoriasConProductos(): Observable<CategoriaConProductos[]> {
    return this.http.get<CategoriaConProductos[]>(
      'http://localhost:3000/categorias-con-productos'
    );
  }
  editarProducto(producto: Producto) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.put(
      `${this.apiUrl}/${producto.id}`,
      producto,
      { headers }
    );
  }
  eliminarProducto(id: number) {
    const token = sessionStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers,
    });
  }
}
