import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public loginService: LoginService, public router: Router) {}

  canActivate(): boolean {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
