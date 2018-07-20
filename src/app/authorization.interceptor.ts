import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (LoginService.isAuthenticated()) {
      const username = sessionStorage.getItem('username');
      const password = sessionStorage.getItem('password');
      const authorizationHeader = btoa(username + ':' + password);

      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${authorizationHeader}`
        }
      });
    }

    return next.handle(request);
  }
}
