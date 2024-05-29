import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  constructor() {
    this.checkLoggedInStatus();
  }

  private checkLoggedInStatus() {
    const loggedUser = localStorage.getItem('loggedUser');
    this.loggedIn.next(!!loggedUser);
  }

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedIn.next(false);
  }
}