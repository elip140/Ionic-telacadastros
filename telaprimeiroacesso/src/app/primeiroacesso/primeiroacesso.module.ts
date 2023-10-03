import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroacessoPageRoutingModule } from './primeiroacesso-routing.module';

import { PrimeiroacessoPage } from './primeiroacesso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimeiroacessoPageRoutingModule
  ],
  declarations: [PrimeiroacessoPage]
})
export class PrimeiroacessoPageModule {}
