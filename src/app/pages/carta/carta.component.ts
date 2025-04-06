import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-carta',
  imports: [CommonModule],
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent {
  categorias = [
    {
      nombre: 'Burgers',
      productos: [
        { nombre: 'Lotus OU CheeseBurger', precio: 7.5 },
        { nombre: ' Lotus XL', precio: 13.5 },
        { nombre: 'Valencia', precio: 7.5},
        { nombre: 'Valencia XL OU Veggie', precio: 13.5 },
        { nombre: 'Zero 11', precio: 7.5 },
        { nombre: 'Zero 11 XL OU Fried chicken', precio: 13.5 },
      ]
    },
    {
      nombre: 'Combos',
      productos: [
        { nombre: 'Combo Burger Amor', precio: 15.0 },
        { nombre: 'Combo Burger Lager', precio: 13.5 },
        { nombre: 'Combo 2 pinta + entrantes', precio: 18.0 },
        { nombre: 'Combo Burger Märzen', precio: 14.5},
      ]
    },
    {
      nombre: 'Para compartir',
      productos: [
        { nombre: 'Alitas', precio: 9.5 },
        { nombre: 'Bolsa Papa OU Nachos Pulled Pork', precio: 2.0 },
        { nombre: 'Costillar Bbq OU Pulled pork fries', precio: 15.0 },
        { nombre: 'El rústico', precio: 9.5 },
        { nombre: 'Ensaladilla', precio: 11.0 },
        { nombre: ' Escalivada', precio: 9.5 },
        { nombre: 'French Fries', precio: 4.0 },
        { nombre: 'Gilda', precio: 2.8 },
        { nombre: 'Jamón', precio: 15.0 },
        { nombre: 'Lágrimas', precio: 8.0 },
        { nombre: 'Las Ernesto', precio: 7.5 },
        { nombre: 'Nachos Guacamole', precio: 10.0 },
        { nombre: 'Nachos Pulled Pork OU Queso', precio: 13.5 },
        { nombre: 'Rebecorn OU Curry', precio: 14.0 },
        { nombre: 'Salchipapa OU Tater Tots Pulled Pork', precio: 8.0 },
        { nombre: 'Sweet Potato Fries', precio: 7.0 },
        { nombre: 'Tequeños', precio: 10.0 },
        { nombre: 'Torrezno', precio: 5.5 },
      ]
    },
    {
      nombre: '1/2 Pinta',
      productos: [
        { nombre: 'Gilda  ', precio: 4.8 },
        { nombre: 'Budvar  ', precio: 3.2 },
        { nombre: 'Tinto OU ', precio: 4.3 },
        { nombre: 'castrum OU', precio: 4.4 },
        { nombre: 'Saez & Son', precio: 4.6 },
        { nombre: 'Marzen', precio: 3.5 },
        { nombre: 'Zeta / Amor', precio: 3.9 },
        { nombre: 'Delirium ', precio: 3.9 },
      ]
    },
    {
      nombre: 'Pinta',
      productos: [
        { nombre: 'Budvar', precio: 5.2 },
        { nombre: 'Tinto OU', precio: 4.5 },
        { nombre: 'castrum OU', precio: 8.4 },
        { nombre: 'saez & son', precio: 8.9 },
        { nombre: 'Marzen', precio: 6.6 },
        { nombre: 'Zeta / Amor', precio: 7.5 },
        { nombre: 'Delirium', precio: 7.5 },
      ]
    },
    {
      nombre: 'Latas',
      productos: [
        { nombre: 'Classic Burger', precio: 8.5 },
        { nombre: 'Cheeseburger', precio: 9.0 },
        { nombre: 'Classic Burger', precio: 8.5 },
        { nombre: 'Cheeseburger', precio: 9.0 },
        { nombre: 'Classic Burger', precio: 8.5 },
        { nombre: 'Cheeseburger', precio: 9.0 },
        { nombre: 'Classic Burger', precio: 8.5 },
        { nombre: 'Cheeseburger', precio: 9.0 },
      ]
    },
    {
      nombre: 'Vino',
      productos: [
        { nombre: 'Sangria', precio: 3.5 },
        { nombre: 'Sidra Galipette', precio: 4.0 },
        { nombre: 'Vermouth Barril', precio: 3.5 },
        { nombre: 'Vino Blanco Ilusionat', precio: 3.5 },
        { nombre: 'Vino Blanco Ilusionat Botella', precio: 18.0 },
        { nombre: 'Vino Tinto Murviedro', precio: 3.5 },
        { nombre: 'Vino Tinto Murviedro Botella', precio: 17.5 },
      ]
    },
    {
      nombre: 'Cocteleria',
      productos: [
        { nombre: 'Chupito', precio: 2.5 },
        { nombre: 'Cubata', precio: 7.5 },
        { nombre: 'Gintonic', precio: 7.5 },
        { nombre: 'Mojito entero', precio: 7.0 },
        { nombre: 'Porron Gintonic', precio: 14.0 },
        { nombre: 'Spritz OU Medio mojito', precio: 6.0 },
        { nombre: 'Tinto verano', precio: 4.0 },
      ]
    },
    {
      nombre: 'Soft drinks',
      productos: [
        { nombre: 'Agua', precio: 2.0},
        { nombre: 'Agua c/g', precio: 2.8 },
        { nombre: 'Antónica La Fantástica', precio: 3.0 },
        { nombre: 'Avelina Navelate', precio: 3.0 },
        { nombre: 'Cítrico Montoya', precio: 3.0 },
        { nombre: 'Sr Nuez', precio: 3.0 },
        { nombre: 'Srta Cafeína', precio: 3.0 },
      ]
    },
  ];
}
