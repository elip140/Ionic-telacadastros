import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import '@swimlane/ngx-datatable';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexPage implements OnInit {
  public columns: any;

  rows:any = [];

  constructor() {
    this.TestePessoa(5);
    this.columns = [
      { name: 'Id' },
      { name: 'RG' },
      { name: 'CPF' },
      { name: 'Datanasc' },
      { name: 'Email' },
      { name: 'Tipo' },
      { name: 'Data' },
    ];
  }

  ngOnInit() {
  }

  TestePessoa(n:number = 1){
    for(var i:number = 0; i<n; i++){
      this.rows.push({id:i, nome:"Teste "+i, rg:"123456789", cpf:"123456789012", datanasc:"10/10/2023", email:"teste@gmail.com", tipo:"RESIDENTE", data:"28/11/2023"});
    }
  }

}
