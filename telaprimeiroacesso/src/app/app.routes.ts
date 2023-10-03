import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'primeiroacesso',
    loadComponent: () => import('./primeiroacesso/primeiroacesso.page').then( m => m.PrimeiroacessoPage)
  },
];


/*@NgModule({
  imports: [
  RouterModule.forRoot([
    { path: '', loadComponent: () => import('./home/home.page').then((m) => m.HomePage) },
    { path: 'primeiroacesso', loadComponent: () => import('./primeiroacesso/primeiroacesso.page').then( m => m.PrimeiroacessoPage) },
  ])
  ],
  declarations: [
    AppComponent,
    HomePage,
    PrimeiroacessoPage
  ],
})
export class AppRouter{}*/



/*
Original
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'primeiroacesso',
    loadComponent: () => import('./primeiroacesso/primeiroacesso.page').then( m => m.PrimeiroacessoPage)
  },
];*/
