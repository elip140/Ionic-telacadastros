import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

// Funções para manipulação de usuarios
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://www.adsportal.com.br:5000/api/Account/Login';

  constructor(private http: HttpClient, private router: Router) {

  }

  Login(email: string, senha: string) {
    const body = {
      "id": 0,
      "email": "teste@gmail.com",
      "password": "123456",
      "roles": [
        "admin"
      ]
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Length': 0,
      })
    }

    localStorage.setItem('token', "TOKEN");
    localStorage.setItem('usuario', email);
    localStorage.setItem('logado', JSON.stringify(true));
    this.router.navigate(['/home']).then(() => location.reload());

    /*this.http.post<any>(this.baseUrl, body, httpOptions).subscribe(data => {
      alert(data);
    });*/


  }

  /*Login(email:string, senha:string) {
    const headers = new HttpHeaders({
      'Content-Length': 97,
      'Content-Type': 'application/json',
    });

    const body = {
      "id": 0,
      "email": "teste@gmail.com",
      "password": "123456",
      "roles": [
        "admin"
      ]
    };

    this.http.post(this.baseUrl, body, { headers }).subscribe({
      next: (response: any) => {
        console.log('POST Login request was successful', JSON.stringify(response));
        if(!response.success){
          alert(response.message);
          return;
        }

        localStorage.setItem('token', "TOKEN");
        localStorage.setItem('usuario', email);
        localStorage.setItem('logado', JSON.stringify(true));
        this.router.navigate(['/home']).then(() => location.reload());
      },
      error: () => {
        console.error('Error no Request');
        return;
      },
    })
    
  }*/

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


}
