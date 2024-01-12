import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SelectFilterComponent } from './selectfilter.component';

@NgModule({
  declarations: [SelectFilterComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [SelectFilterComponent],
})
export class SelectFilterModule {}