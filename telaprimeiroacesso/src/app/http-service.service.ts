import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF?CPF=';

  constructor(private http: HttpClient) {}

  postData(cpf:string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl+cpf, { headers });
  }

  /*getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.apiUrl2, { headers });
  }*/
}
