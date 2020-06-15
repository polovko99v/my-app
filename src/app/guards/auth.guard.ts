import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
    const isAuth = this.authService.isAuthenticated()
    if(isAuth) {
      return true
    }
    this.router.navigate(['/auth/signin']);
  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }

}
