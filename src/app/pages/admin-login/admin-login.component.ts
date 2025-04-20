import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  usuario = '';
  contrasena = '';
  
  cerrarModal() {
    window.location.href = '/';
  }
  iniciarSesion() {
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);
  }
}