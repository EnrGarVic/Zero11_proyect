import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;
  menuAbierto = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe((status) => { 
      this.isAdmin = status;
    });
  }
}
