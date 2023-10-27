import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formLogin: FormGroup = this.formBuilder.group(
    {
      Usuario: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Senha: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Lembrar: new FormControl(false, Validators.compose([])),
    }
  );

  isSubimitted = false;

  constructor(private formBuilder:FormBuilder, private http:HttpService) { }

  ngOnInit() {
  }

  OnClickSubmit(){
    this.isSubimitted = true;

    alert(JSON.stringify(this.formLogin.value));

    if(!this.formLogin.valid)
      return;

    alert("Form Enviado");
  }


  // Menssagens de validação customizadas
  public validation_messages = {
    Usuario: [
      {type:'required', message:'(Usuário é requirido)'}
    ],
    Senha: [
      {type:'required', message:'(Senha é requirida)'}
    ]
  }

}
