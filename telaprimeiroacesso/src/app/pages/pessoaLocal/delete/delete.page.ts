import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Local, Pessoa, Telefone } from 'src/app/models';
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
  local: Local;

  public formDel: FormGroup;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Remover Local - DirectCondo'); 
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = this.pessoaService.GetPessoa(parseInt(id));
        this.local = this.pessoaService.GetLocal(parseInt(id));
        this.titleService.setTitle(this.pessoa.nome+' - Remover Local - DirectCondo'); 
      }

      // Form de Adicionar pessoaTelefone
      this.formDel = this.formBuilder.group(
        {
          Local: new FormControl(this.local.local, Validators.compose([
            Validators.required
          ])),
        }
      );
    });
  }

  ngOnInit() {
  }

  // Deletar LocalPessoa
  DeleteBtn() {
    this.isSubimitted = true;

    if (!this.formDel.valid)
      return;

    alert("Deletar LocalPessoa \n" + JSON.stringify(this.formDel.value));
  }



  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    Local: [
      { type: 'required', message: '(O Local é requirido)' }
    ],
  }

}