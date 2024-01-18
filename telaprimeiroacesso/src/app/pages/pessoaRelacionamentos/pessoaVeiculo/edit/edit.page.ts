import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Pessoa, Telefone, Veiculo } from 'src/app/models';
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
  pessoaVeiculo: Veiculo;
  public formEdit: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Editar Veículo - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.pessoaVeiculo = this.pessoaService.GetPessoaVeiculo(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Editar Veículo - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formEdit = this.formBuilder.group(
        {
          Fabricante: new FormControl(this.pessoaVeiculo.fabricante, Validators.compose([
            Validators.required
          ])),
          Modelo: new FormControl(this.pessoaVeiculo.modelo, Validators.compose([
            Validators.required
          ])),
          Placa: new FormControl(this.pessoaVeiculo.placa, Validators.compose([
            Validators.required
          ])),
          Cor: new FormControl(this.pessoaVeiculo.cor, Validators.compose([
            Validators.required
          ])),
          Renavan: new FormControl(this.pessoaVeiculo.renavan, Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Editar veiculoPessoa
  EditBtn() {
    this.isSubimitted = true;

    if (!this.formEdit.valid)
      return;

    alert("Editar VeiculoPessoa \n" + JSON.stringify(this.formEdit.value));
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


