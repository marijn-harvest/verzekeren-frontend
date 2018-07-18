import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  
  register(user, callback) {
    this.http.post(`${this.API_URL}/user`, user).subscribe(response => {
      return callback && callback();
    }, error => {
      return callback && callback(true);
    });
  }
}
