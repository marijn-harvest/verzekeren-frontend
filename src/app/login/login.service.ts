import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public static storeCredentials(username, password) {
    if (username) {
      sessionStorage.setItem('username', username);
    }
    if (password) {
      sessionStorage.setItem('password', password);
    }
  }

  public static isAuthenticated() {
    return !!sessionStorage.getItem('username') && !!sessionStorage.getItem('password');
  }

  authenticate(credentials, callback) {
    LoginService.storeCredentials(credentials.username, credentials.password);

    this.http.get(`${this.API_URL}/principal`).subscribe(() => {
      return callback && callback();
    }, () => {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('password');
      return callback && callback(true);
    });
  }
}
