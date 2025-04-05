import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  cerrarModal() {
    window.location.href = '/'; 
  }
}