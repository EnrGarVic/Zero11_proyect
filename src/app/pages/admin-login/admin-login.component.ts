import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  usuario = '';
  contrasena = '';
  mostrarModal = true;

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  cerrarModal() {
    this.mostrarModal = false;
  }
  iniciarSesion() {
    const datos = {
      usuario: this.usuario,
      password: this.contrasena,
    };

    this.authService.loginAdmin(this.usuario, this.contrasena).subscribe(
      (response: any) => {
        if (response.token) {
          this.authService.login(response.token);
          //this.router.navigate(['/admin/panel']);
          this.cerrarModal();
        }
      },
      (error) => {
        alert('Usuario o contraseña incorrectos');
      }
    );
  }
}
