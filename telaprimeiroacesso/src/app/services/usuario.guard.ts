import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { Observable } from 'rxjs';

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
