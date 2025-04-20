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
}
