import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaConProductos, ProductosService } from '../../services/productos.service';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-carta',
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  categorias: CategoriaConProductos[] = [];
  isAdmin: boolean = false;

  constructor(private productosService: ProductosService, private http:HttpClient ) {}

  ngOnInit(): void {
    this.isAdmin = !!localStorage.getItem('token'); 
    this.productosService.getCategoriasConProductos().subscribe((producto) => {
      this.categorias = producto;
    });
  }
  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.http.delete(`http://localhost:3000/productos/${id}`).subscribe(
        () => {
          this.categorias.forEach(categoria => {
            categoria.productos = categoria.productos.filter(p => p.id !== id);
          });
          alert('Producto eliminado correctamente');
        },
        (err) => {
          console.error('Error al eliminar el producto:', err);
          alert('Error al eliminar el producto');
        }
      );
    }
  }
  }

