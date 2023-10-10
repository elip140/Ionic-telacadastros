import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  // Modify the method to accept parameters
  getWithParameters(CPF: string): Observable<any> {
    // Construct the URL with parameters
    const url = `${this.apiUrl}?CPF=${CPF}`;

    return this.http.get<any>(url);
  }
}