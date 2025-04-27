import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = false;

  ngOnInit(): void {
    this.isAdmin = !!localStorage.getItem('token');

    //fixme
    setInterval(() => {
      this.isAdmin = !!localStorage.getItem('token');
    }, 500);
  }
  
}
