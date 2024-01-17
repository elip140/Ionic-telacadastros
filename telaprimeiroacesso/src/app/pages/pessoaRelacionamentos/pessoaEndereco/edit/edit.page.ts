import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Endereco, Pessoa } from 'src/app/models';
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
  endereco: Endereco;
  public formEdit: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Editar Endereço - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.endereco = this.pessoaService.GetPessoaEndereco(parseInt(id));
        
        this.titleService.setTitle(this.pessoa.nome+' - Editar Endereço - DirectCondo'); 
      }

      // Form de Adicionar pessoaEndereco
      this.formEdit = this.formBuilder.group(
        {
          EnderecoTipo: new FormControl(this.endereco.tipo, Validators.compose([
            Validators.required
          ])),
          CEP: new FormControl(this.endereco.cep, Validators.compose([
            Validators.required
          ])),
          Endereco: new FormControl(this.endereco.endereco, Validators.compose([
            Validators.required
          ])),
          Numero: new FormControl(this.endereco.numero, Validators.compose([])),
          Complemento: new FormControl(this.endereco.complemento, Validators.compose([])),
          Bairro: new FormControl(this.endereco.bairro, Validators.compose([])),
          Cidade: new FormControl(this.endereco.cidade, Validators.compose([
            Validators.required
          ])),
          Estado: new FormControl(this.endereco.estado, Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Editar endereçoPessoa
  EditarBtn() {
    this.isSubimitted = true;

    if (!this.formEdit.valid)
      return;

    alert("Editar endereçoPessoa \n" + JSON.stringify(this.formEdit.value));
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

