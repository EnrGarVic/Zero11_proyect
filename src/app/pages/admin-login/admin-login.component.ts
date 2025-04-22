import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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

  constructor(private router: Router, private http: HttpClient) {}
  
  cerrarModal() {
    window.location.href = '/';
  }
  iniciarSesion() {
  const datos = {
    usuario: this.usuario,
    password: this.contrasena
  };

  this.http.post('http://localhost:3000/login-admin', datos).subscribe(
    (response: any) => {
      if (response.success) {
        localStorage.setItem('admin', 'true');
        this.router.navigate(['/admin/panel']);
      }
    },
    (error) => {
      alert('Usuario o contraseña incorrectos');
    }
  );
}
}