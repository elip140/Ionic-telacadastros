import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-primeiroacesso',
  templateUrl: './primeiroacesso.page.html',
  styleUrls: ['./primeiroacesso.page.scss'],
})
export class PrimeiroacessoPage implements OnInit {

  // Criação e inicialização do formulario
  public formPAcesso: FormGroup = this.formBuilder.group(
    {
      Rg: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Nome: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      Senha: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ConfSenha: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    },
    {
      validator: this.confirmedValidator('Senha', 'ConfSenha')
    }
  );

  rgCount:number = 0;
  ishidden:boolean = false;

  public isSubimitted:boolean = false;

  constructor(private formBuilder:FormBuilder, private alertController:AlertController){}


  ngOnInit() {}

  // Botão para enviar
  async OnClickSubmit() {
    this.isSubimitted = true;

    if(!this.formPAcesso.valid)
      return;

    // Valor do formulario -> this.formPAcesso.value
    alert(JSON.stringify(this.formPAcesso.value));
    
  }

  // Funções para os Inputs
  OnKeyUpRg(event: any){
    this.rgCount = event.target.value.length;

    if(this.rgCount>=9){
      this.ishidden = false;
    }
    else{
      this.ishidden = true;
    }
  }

  /*(ionInput)="OnKeyUpConfSenha($event)"
  OnKeyUpNome(event: any){
    this.Nome = event.target.value;
  }

  OnKeyUpEmail(event: any){
    this.Email = event.target.value;
  }

  OnKeyUpSenha(event: any){
    this.Senha = event.target.value;
  }

  OnKeyUpConfSenha(event: any){
    this.ConfSenha = event.target.value;
  }*/

  // Menssagens de validação customizadas
  public validation_messages = {
    Rg: [
      {type:'required', message:'(Rg é requirido)'}
    ],
    Nome: [
      {type:'required', message:'(Nome é requirido)'}
    ],
    Email: [
      {type:'required', message:'(Email é requirido)'},
      {type:'email', message:'(Email Inválido)'},
      {type:'special', message:'(O E-mail deve ser cadastrado, entre em contato com a Administração)'}
    ],
    Senha: [
      {type:'required', message:'(Senha é requirida)'}
    ],
    ConfSenha: [
      {type:'required', message:'(Confirmação de Senha é requirida)'},
      {type:'confirmedValidator', message:'(Senha e Confirmação de Senha devem ser iguais)'},
    ]

  }

  // Validação para verificar se as duas senhas são iguais
  confirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];

      const matchingControl = formGroup.controls[matchingControlName];

      if(matchingControl.errors)
        return;

      if(control.value!== matchingControl.value){
        matchingControl.setErrors({ 'confirmedValidator':true });
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }

  readonly rgMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-' , /\d/],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}


