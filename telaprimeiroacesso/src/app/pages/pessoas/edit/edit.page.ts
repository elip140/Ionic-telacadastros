import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PessoaData } from '../PessoaData';
import { TestePessoa } from '../TestePessoa';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  pessoa:PessoaData;
  public formEdit: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder:FormBuilder) {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = TestePessoa(parseInt(id));
      }


      this.formEdit = this.formBuilder.group(
        {
          Nome: new FormControl(this.pessoa.nome, Validators.compose([
            Validators.required
          ])),
          Cpf: new FormControl(this.pessoa.cpf, Validators.compose([
            Validators.required
          ])),
          Rg: new FormControl(this.pessoa.rg, Validators.compose([
            Validators.required
          ])),
    
          Tipo: new FormControl(this.pessoa.tipo, Validators.compose([
            Validators.required
          ])),
          DataNasc: new FormControl(this.pessoa.datanasc, Validators.compose([
            Validators.required
          ])),
          Email: new FormControl(this.pessoa.email, Validators.compose([
            Validators.required,
            Validators.email
          ])),
          Observacao: new FormControl(this.pessoa.observacao, Validators.compose([
            Validators.required
          ])),
        }
      );
    });
    

   
  }

  ngOnInit() {
  }

  SalvarBtn(){
    this.isSubimitted = true;

    if(!this.formEdit.valid)
      return;

    alert("Salvar \n"+JSON.stringify(this.formEdit.value));
  }

  // Variaveis de Validação do formulario
  public isSubimitted:boolean = false;

  

  // Menssagens de validação customizadas
  public validation_messages = {
    Nome: [
      {type:'required', message:'(Nome é requirido)'}
    ],
    Cpf: [
      {type:'required', message:'(Cpf é requirido)'}
    ],
    Rg: [
      {type:'required', message:'(Rg é requirido)'}
    ],

    Tipo: [
      {type:'required', message:'(Tipo é requirido)'}
    ],
    DataNasc: [
      {type:'required', message:'(Data de Nascimento é requirido)'}
    ],
    Email: [
      {type:'required', message:'(Email é requirido)'},
      {type:'email', message:'(Email Inválido)'},
      {type:'special', message:'(O E-mail deve ser cadastrado, entre em contato com a Administração)'}
    ],
    Observacao: [
      {type:'required', message:'(Tipo é requirido)'}
    ],
  }
}
