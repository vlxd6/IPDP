// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginObj: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    const { username, password } = this.loginObj;
    this.authService.login(username, password).subscribe(
      (response) => {
        // Autentificare reușită, redirecționează către pagina de home
        this.router.navigate(['/home']);
      },
      (error) => {
        // Autentificare eșuată, afișează un mesaj de eroare
        alert('Date de autentificare greșite! Te rog să încerci din nou.');
      }
    );
  }
}

