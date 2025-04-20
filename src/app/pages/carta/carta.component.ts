import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaConProductos, Producto, ProductosService } from '../../services/productos.service';

@Component({
  standalone: true,
  selector: 'app-carta',
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  categorias: CategoriaConProductos[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getCategoriasConProductos().subscribe((producto) => {
      this.categorias = producto;
    });
  }
  }

