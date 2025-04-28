import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaConProductos, Producto, ProductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-carta',
  imports: [CommonModule, FormsModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  categorias: CategoriaConProductos[] = [];
  isAdmin: boolean = false;
  productoSeleccionado: any = null; 

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.isAdmin = !!localStorage.getItem('token'); 
    this.productosService.getCategoriasConProductos().subscribe((producto) => {
      this.categorias = producto;
    });
  }
  obtenerCategoriasConProductos() {
    this.productosService.getCategoriasConProductos().subscribe((producto) => {
      this.categorias = producto;
    });
  }
  eliminarProducto(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      this.productosService.eliminarProducto(id).subscribe(
        () => {
          this.obtenerCategoriasConProductos();
          alert('Producto eliminado correctamente');
        },
        (err) => {
          alert('Error al eliminar el producto');
        }
      );
    }
  }
  seleccionarProducto(producto: any) {
    this.productoSeleccionado = { ...producto }; 
  }

  guardarCambios() {
    const productoAEnviar = {
      id: this.productoSeleccionado.id,
      nombre: this.productoSeleccionado.nombre,
      precio: this.productoSeleccionado.precio,
      categoria_id: this.productoSeleccionado.categoria_id, 
    };
    this.productosService.editarProducto( productoAEnviar)
      .subscribe({
        next: () => {
          this.obtenerCategoriasConProductos(); // recarga la carta
          this.productoSeleccionado = null; // Cierra el formulario de edición
        },
        error: (err) => {
          alert('Error al actualizar el producto');
        }
      });
  }

  cancelarEdicion() {
    this.productoSeleccionado = null;
  }
}


