import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/';

  constructor(private http: HttpClient) {}

  VerificaCPF(cpf:string): Observable<any> {
    var conUrl:string =  "Pessoa/VerificaCPF?CPF=";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.baseUrl+conUrl+cpf, { headers });
  }

  CriarUsuario(email:string, senha:string): Observable<any> {
    var conUrl:string =  "Pessoa/CriarUsuario";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    var params:any = {
      email: email,
      senha: senha
    };

    const body = JSON.stringify(params);

    return this.http.post(this.baseUrl+conUrl+"?email="+email+"&senha="+senha, { headers });
  }

  /*getData(): Observable<any> {/Pessoa/CriarUsuario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.apiUrl2, { headers });
  }*/
}
