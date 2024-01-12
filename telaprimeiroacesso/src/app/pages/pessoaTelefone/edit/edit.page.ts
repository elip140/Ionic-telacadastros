import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Pessoa, Telefone } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  pessoa: Pessoa;
  pessoaTelefone: Telefone;
  public formEdit: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Editar Telefone - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.pessoaTelefone = this.pessoaService.GetPessoaTelefone(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Editar Telefone - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formEdit = this.formBuilder.group(
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

  // Editar telefonePessoa
  EditBtn() {
    this.isSubimitted = true;

    if (!this.formEdit.valid)
      return;

    alert("Editar telefonePessoa \n" + JSON.stringify(this.formEdit.value));
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

