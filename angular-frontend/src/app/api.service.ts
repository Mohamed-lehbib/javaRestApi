// src/app/api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './person.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:2222/person'; // Adjust to your API URL

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.baseUrl);
  }

  getPersonByNni(nni: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${nni}`);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.baseUrl, person);
  }

  updatePerson(nni: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/${nni}`, person);
  }

  deletePerson(nni: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${nni}`);
  }
}
