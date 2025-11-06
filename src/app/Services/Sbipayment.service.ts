import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Sbipayment {
  private apiUrl = 'https://localhost:44361/api/SBIPay'; // change to your backend URL

  constructor(private http: HttpClient) {}

  initiate(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/initiate`, payload);
  }

  postResponse(formData: any) {
    return this.http.post(`${this.apiUrl}/response`, formData);
  }
}
