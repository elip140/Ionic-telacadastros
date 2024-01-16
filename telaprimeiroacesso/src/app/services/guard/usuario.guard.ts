import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Observable } from 'rxjs';

// Guard para redirecionar usuarios não logados para a tela de login, impedindo de entrar nas telas (Usado na maioria das telas)
@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {
  constructor(private router: Router, private usu:UsuarioService) { }

  canActivate(){
    if (this.usu.GetLogado()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
