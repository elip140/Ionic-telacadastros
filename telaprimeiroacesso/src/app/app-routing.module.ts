import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsuarioGuard } from './services/guard/usuario.guard';
import { NaologadoGuard } from './services/guard/naologado.guard';

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
  
  // Telas Pessoas
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
  {
    path: 'pessoas/edit/:id',
    loadChildren: () => import('./pages/pessoas/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
 
  // Telas PessoaTelefone
  {
    path: 'pessoaTelefone/create/:id',
    loadChildren: () => import('./pages/pessoaTelefone/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaTelefone/edit/:id',
    loadChildren: () => import('./pages/pessoaTelefone/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaTelefone/delete/:id',
    loadChildren: () => import('./pages/pessoaTelefone/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

  // Telas PessoaLocal
  {
    path: 'pessoaLocal/create/:id',
    loadChildren: () => import('./pages/pessoaLocal/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaLocal/edit/:id',
    loadChildren: () => import('./pages/pessoaLocal/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaLocal/delete/:id',
    loadChildren: () => import('./pages/pessoaLocal/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

  // Telas PessoaEndereço
  {
    path: 'pessoaEndereco/create/:id',
    loadChildren: () => import('./pages/pessoaEndereco/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaEndereco/edit/:id',
    loadChildren: () => import('./pages/pessoaEndereco/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaEndereco/delete/:id',
    loadChildren: () => import('./pages/pessoaEndereco/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
