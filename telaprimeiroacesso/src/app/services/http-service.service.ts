import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';

import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'https://www.adsportal.com.br:5000/api/';
  private headers = {};

  constructor(private http: HttpClient, private user: UsuarioService) {
    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      })
    }
  }

  VerificaCPF(cpf:string): Observable<any> {
    var conUrl:string =  "Pessoa/VerificaCPF";

    return this.http.post(this.baseUrl+conUrl+"?CPF="+cpf,  this.headers ).pipe(
      catchError((error) => this.HandlePostError(error))
    );
  }

  CriarUsuario(email:string, senha:string): Observable<any> {
    var conUrl:string =  "Pessoa/CriarUsuario";

    var params:any = {
      email: email,
      senha: senha
    };

    return this.http.post(this.baseUrl+conUrl+"?email="+email+"&senha="+senha,  this.headers ).pipe(
      catchError((error) => this.HandlePostError(error))
    );
  }

  PessoaDados(cpf:string): Observable<any> {
    console.log("Teste de REQUEST PessoaDados + "+cpf);
    var conUrl:string =  "Pessoa/PessoaDados";

    return this.http.post(this.baseUrl+conUrl+"?CPF="+cpf, this.headers).pipe(
      catchError((error) => this.HandlePostError(error))
    );
  }

  MeusVisitantes(id:string): Observable<any> {
    var conUrl:string =  "Pessoa/MeusVisitantes";

    return this.http.post(this.baseUrl+conUrl+"?id="+id, this.headers).pipe(
      catchError((error) => this.HandlePostError(error))
    );
  }

  MeusTelefones(id:string): Observable<any> {
    var conUrl:string =  "Pessoa/MeusTelefones";

    return this.http.post(this.baseUrl+conUrl+"?id="+id, this.headers).pipe(
      catchError((error) => this.HandlePostError(error))
    );
  }

  HandlePostError(error:any){
    if (error.status === 401) {
      console.log('Usuário não autorizado.');

      this.user.Deslogar();
    }
    
    return throwError(()=>error);
  }

  /*getData(): Observable<any> {/Pessoa/CriarUsuario
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.apiUrl2, { headers });
  }*/
}
