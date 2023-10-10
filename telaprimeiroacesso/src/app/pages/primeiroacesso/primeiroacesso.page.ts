import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { DataService } from '../../shared/data.service';

declare var $:any;

@Component({
  selector: 'app-primeiroacesso',
  templateUrl: './primeiroacesso.page.html',
  styleUrls: ['./primeiroacesso.page.scss'],
})
export class PrimeiroacessoPage implements OnInit {

  // Criação e inicialização do formulario
  public formPAcesso: FormGroup = this.formBuilder.group(
    {
      Cpf: new FormControl('', Validators.compose([
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

  CpfCount:number = 0;
  ishidden:boolean = false;

  public isSubimitted:boolean = false;
  apiURL:string;

  constructor(private formBuilder:FormBuilder, private alertController:AlertController, private http:HttpClient){
    this.apiURL = "";
    this.makeAjaxRequest();
  }

  teste(){
    var cpf:string = "45123415874"
    this.http.get(`${ this.apiURL }?CPF=${cpf}`)
           .subscribe(
              resultado =>{
                console.log(resultado)
              },
              error =>{

              });
    alert("Teste realizado");
  }

  makeAjaxRequest() {
    const url = "https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF";

    var cpf = {
      CPF:"45123415874"
    };

    $.ajax({
      type: "POST",
      url: "https://www.adsportal.com.br/DirectCondoAPI/api/Pessoa/VerificaCPF",
      contentType:"application/json",
      dataType: "json",
      data:cpf,
      success: (data: any) => {
        alert("Response: "+JSON.stringify(data));
        // You can handle the response data here
      },
      error: (error: any) => {
        alert("Failed to load data ->"+JSON.stringify(error));
      }
    });
  }


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
  OnKeyUpCpf(event: any){
    this.CpfCount = event.target.value.length;

    if(this.CpfCount>=9){
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
    Cpf: [
      {type:'required', message:'(Cpf é requirido)'}
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

  /*readonly rgMask: MaskitoOptions = {
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-' , /\d/],
  };  [maskito]="rgMask" [maskitoElement]="maskPredicate" XX.XXX.XXX-X*/

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
}


