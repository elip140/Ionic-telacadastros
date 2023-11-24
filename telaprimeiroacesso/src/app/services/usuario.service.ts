import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl = 'https://www.adsportal.com.br/DirectCondoAPI/api/';

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
        this.router.navigate(['']);
      },
      error: () => {
        console.error('Error no Request');
        return;
      },
    })
    
  }
}
