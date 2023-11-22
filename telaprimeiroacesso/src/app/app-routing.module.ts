import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'primeiroacesso',
    loadChildren: () => import('./pages/primeiroacesso/primeiroacesso.module').then( m => m.PrimeiroacessoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'residente',
    loadChildren: () => import('./pages/residente/residente.module').then( m => m.ResidentePageModule)
  },
  
  {
    path: 'pessoas',
    loadChildren: () => import('./pages/pessoas/index/index.module').then( m => m.IndexPageModule)
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
