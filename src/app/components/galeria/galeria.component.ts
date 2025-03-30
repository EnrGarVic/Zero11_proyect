import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css',
})
export class GaleriaComponent implements OnInit {
  fotos: { url: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<{ url: string }[]>('/assets/api/instagram.json')
      .subscribe((data) => {
        this.fotos = data;
      });
  }
}
