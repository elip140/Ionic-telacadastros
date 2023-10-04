import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-primeiroacesso',
  templateUrl: './primeiroacesso.page.html',
  styleUrls: ['./primeiroacesso.page.scss'],
})
export class PrimeiroacessoPage implements OnInit {
  Rg:any = "";
  Nome:any = "";
  Email:any = "";
  Senha:any = "";
  ConfSenha:any = "";

  rgCount:number = 0;
  ishidden:boolean = true;

  constructor(){}

  ngOnInit() {}

  // Botão para enviar
  OnClickSubmit() {
    let info = {
      Rg: this.Rg,
      Nome: this.Nome,
      Email: this.Email,
      Senha: this.Senha,
      ConfSenha: this.ConfSenha
    };
    alert(JSON.stringify(info));
  }

  // Funções para os Inputs
  OnKeyUpRg(event: any){
    this.Rg = event.target.value;
    this.rgCount = event.target.value.length;

    if(this.rgCount>=9){
      this.ishidden = false;
    }
    else{
      this.ishidden = true;
    }
  }

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
  }
  

}


