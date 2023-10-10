import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimeiroacessoPage } from './primeiroacesso.page';

const routes: Routes = [
  {
    path: '',
    component: PrimeiroacessoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimeiroacessoPageRoutingModule {}
