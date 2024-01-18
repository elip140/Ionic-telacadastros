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
      this.titleService.setTitle('Adicionar Vínculo - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Adicionar Vínculo - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formAdd = this.formBuilder.group(
        {
          Fabricante: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Modelo: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Placa: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Cor: new FormControl("", Validators.compose([
            Validators.required
          ])),
          Renavan: new FormControl("", Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Criar veiculoPessoa
  CreateBtn() {
    this.isSubimitted = true;

    if (!this.formAdd.valid)
      return;

    alert("Criar veiculoPessoa \n" + JSON.stringify(this.formAdd.value));
  }



  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    Fabricante: [
      { type: 'required', message: '(Fabricante é requirido)' }
    ],
    Modelo: [
      { type: 'required', message: '(Modelo é requirido)' }
    ],
    Placa: [
      { type: 'required', message: '(Placa é requirido)' }
    ],
    Cor: [
      { type: 'required', message: '(Cor é requirido)' }
    ],
    Renavan: [
      { type: 'required', message: '(Renavan é requirido)' }
    ],
  }
}