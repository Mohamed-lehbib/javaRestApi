import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:2222'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/person`); // Specify <any> if the response type is not certain
  }
}
