import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public static isAuthenticated() {
    return sessionStorage.getItem('isAuthenticated') === 'true';
  }

  authenticate(credentials, callback) {
    const authorizationHeader = btoa(credentials.username + ':' + credentials.password);

    this.http.get(`${this.API_URL}/principal`, { headers: new HttpHeaders({
        'Authorization': `Basic ${authorizationHeader}`
      }) }).subscribe(() => {
        sessionStorage.setItem('isAuthenticated', 'true');
      return callback && callback();
    }, () => {
      sessionStorage.setItem('isAuthenticated', 'false');
      return callback && callback(true);
    });
  }
}
