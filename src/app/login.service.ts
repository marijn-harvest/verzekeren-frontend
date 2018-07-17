import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  authenticate(credentials, callback) {
    const authorizationHeader = btoa(credentials.username + ':' + credentials.password);
    sessionStorage.setItem('authorizationHeader', authorizationHeader);

    this.http.get(`${this.API_URL}/user/`).subscribe(response => {
      return callback && callback();
    }, error => {
      sessionStorage.removeItem('authorizationHeader');
      return callback && callback(true);
    });
  }
  
  getAuthorizationHeader() {
    return sessionStorage.getItem('authorizationHeader');
  }
  
  isAuthenticated() {
    return !!this.getAuthorizationHeader();
  }
}
