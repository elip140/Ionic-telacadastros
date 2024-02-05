import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

// Funções para manipulação de usuarios
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'https://www.adsportal.com.br:5000/api/Account/Login';

  constructor(private http: HttpClient, private router: Router) {

  }

  Login(email: string, senha: string) {
    const body = {
      "id": 0,
      "email": email,
      "password": senha,
      "roles": [
        "admin"
      ]
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      })
    }

    this.http.post(this.baseUrl, body, httpOptions).subscribe({
      next: (response: any) => {
        console.log('POST Login request was successful', JSON.stringify(response));

        /*if(!response.success){
          alert("Teste"+response.message);
          return;
        }*/

        localStorage.setItem('token', response.tokenDescriptor);
        localStorage.setItem('usuario', email);
        localStorage.setItem('logado', JSON.stringify(true));
        localStorage.setItem('pessoaId', response.id);
        this.router.navigate(['/residente']).then(() => location.reload());
      },
      error: () => {
        console.error('Error no Request');
        return;
      },
    });
  }

  Deslogar() {
    localStorage.clear();
    this.router.navigate(['login']).then(() => location.reload());
  }

  GetUsuarioLogado(): string {
    let usu = {
      email: localStorage.getItem('usuario') || "",
      token: localStorage.getItem('token') || "",
      logado: localStorage.getItem('logado') || false,
    };
    return JSON.stringify(usu);
  }

  GetUsuarioNomeLogado(): string {
    return localStorage.getItem('usuario') || "";
  }

  GetTokenLogado(): string {
    return localStorage.getItem('token') || "";
  }

  GetLogado(): boolean {
    return localStorage.getItem('logado') ? true : false;
  }

  GetPessoaId(): number {
    return parseInt(localStorage.getItem('pessoaId')|| "0"); 
  }

  /*GetToken(): string {

  }*/


}
