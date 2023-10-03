import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppComponent } from './app.component';
import { HomePage } from './home/home.page';
import { PrimeiroacessoPage } from './primeiroacesso/primeiroacesso.page';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot([]), IonicModule.forRoot({})],
  declarations: [AppComponent, HomePage, PrimeiroacessoPage],
  bootstrap: [AppComponent],
})
export class AppModule {}