import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Local, Pessoa } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  host: {'tipo': 'pessoaLocal'},
})
export class CreatePage implements OnInit {

  pessoa: Pessoa;
  public formAdd: FormGroup;

  locais: Array<Local> = [];

  // Variaveis Para o SelectFilter 
  locaisSel: Array<any> = []; // Todos os locais formatado para o select
  selectedLocal: Local; // Todos os locais selecionados
  selectedLocalItem: any; // Local Atualmente selecionado no Items em formato de Item

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Adicionar Local - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Adicionar Local - DirectCondo'); 
        
        this.locais = this.pessoaService.GetLocals();
        this.locaisSel = this.locais.map(e => {
          return { value:e.id, text:e.local };
        });
        
      }

      // Form de Adicionar pessoaTelefone
      this.formAdd = this.formBuilder.group(
        {
          Local: new FormControl("", Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Criar pessoaLocal
  CreateBtn() {
    this.isSubimitted = true;

    if (!this.formAdd.valid)
      return;

    if(!this.selectedLocal==null)
      return;

    alert("Criar pessoaLocal \n" + JSON.stringify(this.selectedLocal));
  }

  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    Local: [
      { type: 'required', message: '(O Local é requirido)' }
    ],
  }


  // Funções para o uso do SelectFilter
  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectionChanged(item: any) {
    this.selectedLocalItem = item;
    this.selectedLocal = {id: item.value, local:item.text};

    this.formAdd.patchValue({Local: this.selectedLocal.local});

    this.modal.dismiss();
  }
}
