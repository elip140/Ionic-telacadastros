import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl2 = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF';

  constructor(private http: HttpClient) {}

  postData(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, data, { headers });
  }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.apiUrl2, { headers });
  }
}
