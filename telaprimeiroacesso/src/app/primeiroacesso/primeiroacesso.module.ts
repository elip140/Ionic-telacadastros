import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimeiroacessoPageRoutingModule } from './primeiroacesso-routing.module';

import { PrimeiroacessoPage } from './primeiroacesso.page';
import { MaskitoModule } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PrimeiroacessoPageRoutingModule,
    MaskitoModule
  ],
  declarations: [PrimeiroacessoPage]
})
export class PrimeiroacessoPageModule {}
