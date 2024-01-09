import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { PessoaData } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  pessoa: PessoaData;
  public formAdd: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService) {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
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
