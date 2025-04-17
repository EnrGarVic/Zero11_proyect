import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto, ProductosService } from '../../services/productos.service';

@Component({
  standalone: true,
  selector: 'app-carta',
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.getProductos().subscribe((data) => {
      this.productos = data;
      console.log('Productos cargados:', data); 
    });
  }
}
