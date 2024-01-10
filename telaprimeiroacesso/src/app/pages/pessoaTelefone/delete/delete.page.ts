import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Pessoa, Telefone } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {

  pessoa: Pessoa;
  pessoaTelefone: Telefone;
  public formDel: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Remover Telefone - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.pessoaTelefone = this.pessoaService.GetPessoaTelefone(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Remover Telefone - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formDel = this.formBuilder.group(
        {
          TelefoneTipo: new FormControl(this.pessoaTelefone.tipo, Validators.compose([
            Validators.required
          ])),
          DDD: new FormControl(this.pessoaTelefone.ddd, Validators.compose([
            Validators.required
          ])),
          Telefone: new FormControl(this.pessoaTelefone.telefone, Validators.compose([
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

    if (!this.formDel.valid)
      return;

    alert("Deletar telefonePessoa \n" + JSON.stringify(this.formDel.value));
  }



  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    TelefoneTipo: [
      { type: 'required', message: '(Tipo do Telefone é requirido)' }
    ],
    DDD: [
      { type: 'required', message: '(DDD é requirido)' }
    ],
    Telefone: [
      { type: 'required', message: '(Telefone é requirido)' }
    ],
  }

}