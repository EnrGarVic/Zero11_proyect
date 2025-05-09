import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private adminSubject = new BehaviorSubject<boolean>(
    !!sessionStorage.getItem('token')
  );
  isAdmin$ = this.adminSubject.asObservable();

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
}
