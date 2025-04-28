import { Injectable } from '@angular/core';
import { Users } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey = 'currentUser';

  login(user: Users): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(user));
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
  }

  getUser(): Users | null {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}