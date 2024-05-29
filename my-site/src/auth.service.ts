import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/auth';

  constructor(private http: HttpClient) {
    this.checkLoggedInStatus();
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password });
  }

  login(username: string, password: string): Observable<any> {
    this.loggedIn.next(true);
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  private loggedIn = new BehaviorSubject<boolean>(false);
  authStatus = this.loggedIn.asObservable();

  private checkLoggedInStatus() {
    const loggedUser = localStorage.getItem('loggedUser');
    this.loggedIn.next(!!loggedUser);
  }


  logout() {
    localStorage.removeItem('loggedUser');
    this.loggedIn.next(false);
  }

}
