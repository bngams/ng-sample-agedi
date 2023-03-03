import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isLoggedIn = false;

  constructor(private router: Router) { }

  // get isLoggedIn() {
  //   this.getToken() {
  //     isTokenValid()
  //   }
  // }

  login(credentials: Credentials): void {
    // http
    this.storeToken();
    this.isLoggedIn = true;
    // redirect vers /product
    this.router.navigateByUrl('/product');
  }

  logout(): void {
    this.isLoggedIn = false;
    this.clearToken();
    // redirect vers /home
    this.router.navigateByUrl('/home');
  }

  storeToken() {

  }

  clearToken() {

  }
}
