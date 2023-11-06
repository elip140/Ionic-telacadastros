import { Component } from '@angular/core';
import { PrimeiroacessoPage } from '../pages/primeiroacesso/primeiroacesso.page';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  component = PrimeiroacessoPage;
  constructor(private titleService: Title) {
    this.titleService.setTitle('Home - DirectCondo');
  }

}
