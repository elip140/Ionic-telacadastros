import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonMenu, IonToggle, ToggleChangeEventDetail, IonList, IonItem, IonInput } from '@ionic/angular';
import { UsuarioService } from './services/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('leftmenu') menu!: IonMenu;
  @ViewChild('darktoggle') toggle!: IonToggle;

  @ViewChild('PesquisaMenu') searchMenu!: IonInput;
  @ViewChildren('ListaMenu') ionItems: QueryList<IonItem>;

  pesquisa:any = new Map();


  email: string = "";
  logado: boolean = false;

  constructor(private usu: UsuarioService) {
    this.email = usu.GetUsuarioNomeLogado();
    this.logado = usu.GetLogado();

    // Todos os links para eles serem pesquisados
    this.pesquisa.set('home', {value:false});
    this.pesquisa.set('residente', {value:false});
    this.pesquisa.set('pessoas', {value:false});
  }


  OnClickLeftMenu() {
    this.menu.close();
  }

  Deslogar() {
    this.usu.Deslogar();
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark', this.toggle.checked);
    document.getElementById('sun')?.classList.toggle('ion-hide', this.toggle.checked);
    document.getElementById('moon')?.classList.toggle('ion-hide', !(this.toggle.checked));
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();

    this.pesquisa.forEach((element:any, key:any) => {
      if(key.includes(query))
        element.value = false;
      else
        element.value = true;
    });
  }

}
