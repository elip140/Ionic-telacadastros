import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IndexPageRoutingModule } from './index-routing.module';
import { IndexPage } from './index.page';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,

    MatFormFieldModule, 
    MatInputModule, 
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule { }
