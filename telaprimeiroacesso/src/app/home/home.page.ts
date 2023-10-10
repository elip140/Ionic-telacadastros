import { Component } from '@angular/core';
import { PrimeiroacessoPage } from '../pages/primeiroacesso/primeiroacesso.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  component = PrimeiroacessoPage;
  constructor() {
    
  }

}
