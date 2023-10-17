import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { HttpService } from 'src/app/http-service.service';
import { IonInput } from '@ionic/angular';


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

  isformhidden:boolean = true;
  islisthidden:boolean = true;

  public isSubimitted:boolean = false;

  items: any[] = [];

  constructor(private formBuilder:FormBuilder, private http:HttpService){
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

  // Função para o INPUT de CPF 
  // - Quando chaga em 10 números ou maior manda uma Request que retorna os cadastros com o CPF, 
  // - Transforma o Resultado em uma lista
  OnKeyUpCpf(event: any){
    var input:String = event.target.value;

    // Remove todos os caracteres com exceção dos números
    var cpf:string = input.replace(/[^0-9]/g, '');

    var cpfCount:number = cpf.length;
    
    if(cpfCount>=10){
      this.islisthidden = false;

      this.http.postData(cpf).subscribe(
        (response) => {
          console.log('POST request was successful', JSON.stringify(response));
          this.items = [];

          if(response.length>=1){
            response.forEach((e:any) => {
              let newItem = { Nome: e.Nome, Email: e.Email };
              this.items.push(newItem);
            });
          }
        },
        (error) => {
          console.error('Error no Request');
          //, JSON.stringify(error)
          return;
        }
      );
    }
    else{
      this.islisthidden = false;
    }
  }

  @ViewChild('Nome', { static: true }) NomeInput!: IonInput;
  @ViewChild('Email', { static: true }) EmailInput!: IonInput;

  OnClickLista(pessoa:any){
    this.formPAcesso.get('Nome')!.setValue(pessoa.Nome);
    this.formPAcesso.get('Email')!.setValue(pessoa.Email);

    this.isformhidden = false;
    this.islisthidden = true;
    this.items = [];

    this.formPAcesso.updateValueAndValidity();
  }

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


