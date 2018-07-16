import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoVerzekeringService {
  API_URL = environment.apiUrl;
  
  constructor(private httpClient: HttpClient) {}
  
  createAutoVerzekering(autoVerzekering: any) {
    return this.httpClient.post(`${this.API_URL}/auto-verzekering/`, autoVerzekering);
  }
}
