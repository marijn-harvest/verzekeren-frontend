import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  API_URL = 'http://localhost:8000';
  
  constructor(private httpClient: HttpClient) {}
  
  createAutoVerzekering(autoVerzekering: any) {
    return this.httpClient.post(`${this.API_URL}/auto-verzekering/`, autoVerzekering);
  }
}