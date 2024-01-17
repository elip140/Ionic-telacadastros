import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Endereco, Pessoa } from 'src/app/models';
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
  endereco: Endereco;
  public formDel: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Deletar Endereço - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.endereco = this.pessoaService.GetPessoaEndereco(parseInt(id));
        
        this.titleService.setTitle(this.pessoa.nome+' - Deletar Endereço - DirectCondo'); 
      }

      // Form de Adicionar pessoaEndereco
      this.formDel = this.formBuilder.group(
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

  // Deletar endereçoPessoa
  DeleteBtn() {
    this.isSubimitted = true;

    if (!this.formDel.valid)
      return;

    alert("Deletar endereçoPessoa \n" + JSON.stringify(this.formDel.value));
  }



  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

}
