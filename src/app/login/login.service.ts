import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  authenticate(credentials, callback) {
    this.storeCredentials(credentials.username, credentials.password);

    this.http.get(`${this.API_URL}/principal`).subscribe(response => {
      return callback && callback();
    }, error => {
      sessionStorage.removeItem('authorizationHeader');
      return callback && callback(true);
    });
  }

  storeCredentials(username, password) {
    if (username) {
      sessionStorage.setItem('username', username);
    }
    if (password) {
      sessionStorage.setItem('password', password);
    }
  }

  isAuthenticated() {
    return !!sessionStorage.getItem('username') && !!sessionStorage.getItem('password');
  }
}
