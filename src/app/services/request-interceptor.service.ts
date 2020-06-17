import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from './alert.service';
import { AuthService } from './auth.service';

@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertSerice: AlertService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => this.catchError(err)));
  }

  private catchError(err: HttpErrorResponse) {
    switch(err.status) {
      case 401:
        this.authService.setUser(undefined);
        this.router.navigateByUrl('/auth/signin');
        break;
      default:
        this.alertSerice.error(err.message);
    }

    return throwError(err.message);
  }
}
