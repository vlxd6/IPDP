import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authButtonText: string = 'Login';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(status => {
      this.authButtonText = status ? 'Logout' : 'Login';
    });
  }

  onAuthAction() {
    if (this.authButtonText === 'Logout') {
      this.onLogout();
    } else {
      this.router.navigateByUrl('/login');  
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}