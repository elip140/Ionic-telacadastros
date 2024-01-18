import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Pessoa, Telefone, Veiculo } from 'src/app/models';
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
  pessoaVeiculo: Veiculo;
  public formDel: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Deletar Veículo - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.pessoaVeiculo = this.pessoaService.GetPessoaVeiculo(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Deletar Veículo - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formDel = this.formBuilder.group(
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

  // Deletar veiculoPessoa
  DeleteBtn() {
    this.isSubimitted = true;

    if (!this.formDel.valid)
      return;

    alert("Deletar VeiculoPessoa \n" + JSON.stringify(this.formDel.value));
  }


  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

}

