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
})
export class CreatePage implements OnInit {

  pessoa: Pessoa;
  public formAdd: FormGroup;

  locais: Array<Local> = [];

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Adicionar Local - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Adicionar Local - DirectCondo'); 
        
        this.locais = this.pessoaService.GetPessoaLocals(parseInt(id));
        this.locaisSel = this.locais.map(e => {
          return { value:e.id, text:e.local };
        });
      }

      // Form de Adicionar pessoaTelefone
      this.formAdd = this.formBuilder.group(
        {
          TelefoneTipo: new FormControl("", Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Criar telefonePessoa
  CreateBtn() {
    this.isSubimitted = true;

    if (!this.formAdd.valid)
      return;

    alert("Criar telefonePessoa \n" + JSON.stringify(this.formAdd.value));
  }

  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    TelefoneTipo: [
      { type: 'required', message: '(Tipo do Telefone é requirido)' }
    ],
  }


  // Funções Para o SelectFilter 
  locaisSel: Array<any> = []; // Todos os locais formatado para o select
  selectedLocal: string = ""; // Todos os locais selecionados
  selectedLocalText: string = 'Nenhum Local Selecionado'; // Texto do da seleção do Local

  @ViewChild('modal', { static: true }) modal!: IonModal;

  private formatData(data: string) {
    if (data!=null) {
      const local = this.locais.find((l) => l.id.toString() == data);
      if(local!=null && local.local!=null){
        return local.local;
      }
    }

    return "Local Invalido Selecionado";
  }

  selectionChanged(local: string) {
    this.selectedLocal = local;
    this.selectedLocalText = this.formatData(this.selectedLocal);
    this.modal.dismiss();
  }
}

export interface Item {
  text: string;
  value: string;
}
