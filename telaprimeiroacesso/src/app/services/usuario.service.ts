import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

// Funções para manipulação de usuarios
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'http://www.adsportal.com.br/DirectCondoAPI/api/';

  constructor(private http: HttpClient, private router: Router) { }

  Login(email:string, senha:string) {
    var conUrl:string =  "Pessoa/Login";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(this.baseUrl+conUrl+"?email="+email+"&senha="+senha, { headers }).subscribe({
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
    
  }

  Deslogar() {
      localStorage.clear();
      this.router.navigate(['login']).then(() => location.reload());
      
  }

  GetUsuarioLogado(): string{
    let usu = {
      email: localStorage.getItem('usuario') || "",
      token: localStorage.getItem('token') || "",
      logado: localStorage.getItem('logado') || false,
    };
    return JSON.stringify(usu);
  }

  GetUsuarioNomeLogado(): string{
    return localStorage.getItem('usuario') || "";
  }

  GetTokenLogado(): string {
    return localStorage.getItem('token') || "";
  }

  GetLogado(): boolean {
    return localStorage.getItem('logado') ? true : false;
  }
  
  
}
