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
      this.titleService.setTitle('Adicionar Endereço - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Adicionar Endereço - DirectCondo'); 
      }

      // Form de Adicionar pessoaEndereco
      this.formAdd = this.formBuilder.group(
        {
          EnderecoTipo: new FormControl("", Validators.compose([
            Validators.required
          ])),
          CEP: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Endereco: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Numero: new FormControl("", Validators.compose([])),
          Complemento: new FormControl("", Validators.compose([])),
          Bairro: new FormControl("", Validators.compose([])),
          Cidade: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Estado: new FormControl("", Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Criar endereçoPessoa
  CreateBtn() {
    this.isSubimitted = true;

    if (!this.formAdd.valid)
      return;

    alert("Criar endereçoPessoa \n" + JSON.stringify(this.formAdd.value));
  }



  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  

  public validation_messages = {
    EnderecoTipo: [
      { type: 'required', message: '(Tipo do Endereço é requirido)' }
    ],
    CEP: [
      { type: 'required', message: '(CEP é requirido)' }
    ],
    Endereco: [
      { type: 'required', message: '(Endereço é requirido)' }
    ],
    Numero: [
      { type: 'required', message: '(Número é requirido)' }
    ],
    Complemento: [
      { type: 'required', message: '(Complemento é requirido)' }
    ],
    Bairro: [
      { type: 'required', message: '(Bairro é requirido)' }
    ],
    Cidade: [
      { type: 'required', message: '(Cidade é requirido)' }
    ],
    Estado: [
      { type: 'required', message: '(Estado é requirido)' }
    ],
  }

}
