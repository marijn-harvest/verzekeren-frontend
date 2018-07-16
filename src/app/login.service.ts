import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;
  
  authenticated = false;

  constructor(private http: HttpClient) { }
  
  authenticate(credentials, callback) {
    const authorizationHeader = btoa(credentials.username + ':' + credentials.password);
    localStorage.setItem('authorizationHeader', authorizationHeader);

    this.http.get(`${this.API_URL}/user/`).subscribe(response => {
      if (response['name']) {
        this.authenticated = true;
      }
      return callback && callback();
    });
  }
  
  getAuthorizationHeader() {
    return localStorage.getItem('authorizationHeader');
  }
}
