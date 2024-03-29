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
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaTelefone/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaTelefone/edit/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaTelefone/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaTelefone/delete/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaTelefone/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

  // Telas PessoaLocal
  {
    path: 'pessoaLocal/create/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaLocal/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaLocal/edit/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaLocal/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaLocal/delete/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaLocal/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

  // Telas PessoaEndereço
  {
    path: 'pessoaEndereco/create/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaEndereco/create/create.module').then( m => m.CreatePageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaEndereco/edit/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaEndereco/edit/edit.module').then( m => m.EditPageModule),
    canActivate: [UsuarioGuard]
  },
  {
    path: 'pessoaEndereco/delete/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaEndereco/delete/delete.module').then( m => m.DeletePageModule),
    canActivate: [UsuarioGuard]
  },

  // Telas PessoaVeiculos
  {
    path: 'pessoaVeiculo/create/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVeiculo/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'pessoaVeiculo/edit/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVeiculo/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'pessoaVeiculo/delete/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVeiculo/delete/delete.module').then( m => m.DeletePageModule)
  },

  // Telas PessoaVinculo
  {
    path: 'pessoaVinculo/create/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVinculo/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'pessoaVinculo/edit/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVinculo/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'pessoaVinculo/delete/:id',
    loadChildren: () => import('./pages/pessoaRelacionamentos/pessoaVinculo/delete/delete.module').then( m => m.DeletePageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
