import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';

// Guard para permitir usuarios não logados de entrar na tela mesmo sem login (Usado apenas para telas especificas)
@Injectable({
  providedIn: 'root'
})
export class NaologadoGuard implements CanActivate {
  constructor(private usu: UsuarioService, private router: Router) { }
  canActivate(){
    if (this.usu.GetLogado()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}
