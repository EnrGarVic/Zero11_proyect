import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private router: Router) {}
  
  cerrarModal() {
    window.location.href = '/';
  }
  iniciarSesion() {
    const usuarioValido = 'admin';
    const contrasenaValida = 'admin123';
    if (this.usuario === usuarioValido && this.contrasena === contrasenaValida) {

      localStorage.setItem('admin', 'true');

      this.router.navigate(['/admin/panel']);
    }else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}