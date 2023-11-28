import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  pessoas:any = [];

  constructor() {
    this.TestePessoa(5)
  }

  ngOnInit() {
  }

  TestePessoa(n:number = 1){
    for(var i:number = 0; i<n; i++){
      this.pessoas.push({id:i, nome:"Teste "+i, rg:"123456789", cpf:"123456789012", datanasc:"10/10/2023", email:"teste@gmail.com", tipo:"RESIDENTE", data:"28/11/2023"});
    }
  }

}
