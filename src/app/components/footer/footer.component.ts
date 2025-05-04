import { Component, OnInit } from '@angular/core';
import { LocalesService, Local } from '../../services/locales.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [ CommonModule ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  locales: Local[] = [];

  constructor(private localesService: LocalesService) {}

  ngOnInit(): void {
    this.localesService.getLocales().subscribe({
      next: (local) => this.locales = local,
      error: (err) => console.error('Error al cargar locales', err)
    });
  }
}