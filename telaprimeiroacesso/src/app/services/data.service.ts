import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF'; 

  constructor(private http: HttpClient) { }

  getWithParameters(CPF: string): Observable<any> {
    const url = `${this.apiUrl}?CPF=${CPF}`;

    return this.http.get<any>(url);
  }
}