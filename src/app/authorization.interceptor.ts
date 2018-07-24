import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true
    });

    return next.handle(request).pipe(catchError( err => {
      if (err.status === 401) {
        sessionStorage.setItem('isAuthenticated', 'false');
        this.router.navigate(['login']);
        return EMPTY;
      } else {
        return throwError(err);
      }
    }));
  }
}
