import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Pessoa } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  pessoa: Pessoa;
  public formAdd: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Adicionar Telefone - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Adicionar Telefone - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formAdd = this.formBuilder.group(
        {
          TelefoneTipo: new FormControl("", Validators.compose([
            Validators.required
          ])),
          DDD: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Telefone: new FormControl("", Validators.compose([
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
    DDD: [
      { type: 'required', message: '(DDD é requirido)' }
    ],
    Telefone: [
      { type: 'required', message: '(Telefone é requirido)' }
    ],
  }

}
