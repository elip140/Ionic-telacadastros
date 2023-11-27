import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service.service';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import { Title } from '@angular/platform-browser';

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

  constructor(private formBuilder: FormBuilder, private http: HttpService, private titleService: Title, private router: Router, private user: UsuarioService) {
    this.titleService.setTitle('Login - DirectCondo');
  }

  ngOnInit() {
  }

  OnClickSubmit() {
    this.isSubimitted = true;

    if (!this.formLogin.valid)
      return;

    this.user.Login(this.formLogin.value.Usuario, this.formLogin.value.Senha);
  }

  /*
  (response) => {
        
      },
      (error) => {
        console.error('Error no Request');
        //, JSON.stringify(error)
        return;
      }
  
  */


  // Menssagens de validação customizadas
  public validation_messages = {
    Usuario: [
      { type: 'required', message: '(Usuário é requirido)' }
    ],
    Senha: [
      { type: 'required', message: '(Senha é requirida)' }
    ]
  }

}
