import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Local, Pessoa, PessoaLocal } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public formAdd: FormGroup;

  pessoa: Pessoa;
  pessoaLocal: PessoaLocal;


  locais: Array<Local> = [];

  // Variaveis Para o SelectFilter 
  locaisSel: Array<any> = []; // Todos os locais formatado para o select
  selectedLocal: Local; // Todos os locais selecionados
  selectedLocalItem: any; // Local Atualmente selecionado no Items em formato de Item

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private pessoaService: PessoaService, private titleService: Title) {
    this.route.paramMap.subscribe(params => {
      this.titleService.setTitle('Editar Local - DirectCondo'); 
      let localid = params.get('id');

      if (localid !== null) {

        this.pessoaLocal = this.pessoaService.GetPessoaLocal(parseInt(localid));

        this.pessoa = this.pessoaService.GetPessoa(this.pessoaLocal.pessoaId);
        this.titleService.setTitle(this.pessoa.nome+' - Editar Local - DirectCondo'); 
        
        this.locais = this.pessoaService.GetLocals();

        var sl = this.locais.find(e => e.id==this.pessoaLocal.localId);
        if(sl!=null){
          this.selectedLocal = sl;
        }

        this.locaisSel = this.locais.map(e => {
          return { value:e.id, text:e.local };
        });
      }

      // Form de Adicionar pessoaTelefone
      this.formAdd = this.formBuilder.group(
        {
          Local: new FormControl("", Validators.compose([
            Validators.required
          ])),
        }
      );

      this.formAdd.patchValue({Local: this.selectedLocal.local});
    });
  }

  ngOnInit() {
    var sl = this.locaisSel.find(e => e.value==this.selectedLocal.id);
    this.selectedLocalItem = sl;
  }

  // Editar pessoaLocal
  EditBtn() {
    this.isSubimitted = true;

    if (!this.formAdd.valid)
      return;

    if(!this.selectedLocal==null)
      return;

    alert("Criar pessoaLocal \n" + JSON.stringify(this.selectedLocal));
  }

  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    Local: [
      { type: 'required', message: '(O Local é requirido)' }
    ],
  }


  // Funções para o uso do SelectFilter
  @ViewChild('modal', { static: true }) modal!: IonModal;

  selectionChanged(item: any) {
    this.selectedLocalItem = item;
    this.selectedLocal = {id: item.value, local:item.text};

    this.formAdd.patchValue({Local: this.selectedLocal.local});

    this.modal.dismiss();
  }
}