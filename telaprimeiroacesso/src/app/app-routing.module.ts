import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './services/usuario.guard';
import { NaologadoGuard } from './services/naologado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'primeiroacesso',
    loadChildren: () => import('./pages/primeiroacesso/primeiroacesso.module').then( m => m.PrimeiroacessoPageModule),
    canActivate: [NaologadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NaologadoGuard]
  },
  {
    path: 'residente',
    loadChildren: () => import('./pages/residente/residente.module').then( m => m.ResidentePageModule),
    canActivate: [UsuarioGuard]
  },
  
  {
    path: 'pessoas',
    loadChildren: () => import('./pages/pessoas/index/index.module').then( m => m.IndexPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoas/index',
    redirectTo: 'pessoas',
    pathMatch: 'full'
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
