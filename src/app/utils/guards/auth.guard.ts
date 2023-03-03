import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    // DI 
    const authService = inject(AuthService);
    if(authService.isLoggedIn) {
      return true; // authorized
    }
    // redirect to home
    const router = inject(Router);
    return router.parseUrl('/login');
}
