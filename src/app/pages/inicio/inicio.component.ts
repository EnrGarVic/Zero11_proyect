import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [CommonModule, GaleriaComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
