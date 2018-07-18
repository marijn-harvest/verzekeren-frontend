import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(public loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.loginService.isAuthenticated()) {
        request = request.clone({
        setHeaders: {
          Authorization: `Basic ${this.loginService.getAuthorizationHeader()}`
        }
      });
    }

    return next.handle(request);
  }
}