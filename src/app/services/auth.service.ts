import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public apiUrl = environment.apiUrl;
  private adminSubject = new BehaviorSubject<boolean>(
    !!sessionStorage.getItem('token')
  );
  isAdmin$ = this.adminSubject.asObservable();

  constructor(private http: HttpClient) {}

  loginAdmin(usuario: string, password: string) {
    return this.http.post<{ success: boolean; token: string }>(
      `${this.apiUrl}/login-admin`,
      { usuario, password }
    );
  }

  login(token: string) {
    sessionStorage.setItem('token', token);
    this.adminSubject.next(true);
  }

  logout() {
    sessionStorage.removeItem('token');
    this.adminSubject.next(false);
  }

  checkAdmin() {
    this.adminSubject.next(!!sessionStorage.getItem('token'));
  }

  restoreSession() {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.adminSubject.next(true);
    }
  }
}
