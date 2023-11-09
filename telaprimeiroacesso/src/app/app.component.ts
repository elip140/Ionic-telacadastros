import { Component, ViewChild } from '@angular/core';
import { IonMenu, IonToggle, ToggleChangeEventDetail } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('leftmenu') menu!: IonMenu;
  @ViewChild('darktoggle') toggle!: IonToggle;

  constructor() {
  }

  OnClickLeftMenu(){
    this.menu.close();
  }

  toggleDarkMode(){
    document.body.classList.toggle('dark', this.toggle.checked);
    document.getElementById('sun')?.classList.toggle('ion-hide', this.toggle.checked);
    document.getElementById('moon')?.classList.toggle('ion-hide', !(this.toggle.checked));
  }


  
}
