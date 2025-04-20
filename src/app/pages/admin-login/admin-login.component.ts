import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-admin-login',
  imports: [],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  cerrarModal() {
    window.location.href = '/';
  }
}