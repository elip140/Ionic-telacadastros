import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import '@swimlane/ngx-datatable';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexPage implements OnInit {
  @ViewChild('Table') table: any;
  expanded: any = {};
  timeout: any;
  public columns: any;

  rows:any = [];

  constructor() {
    this.TestePessoa(20);

    /*this.columns = [
      { name: 'Name' },
      { name: 'Gender' },
      { name: 'Age' }
    ];*/
    this.columns = [
      { name: 'Id' },
      { name: 'Nome' },
      { name: 'RG' },
      { name: 'CPF' },
      { name: 'Datanasc' },
      { name: 'Data' },
    ];
    /*
    { name: 'Email' },
      { name: 'Tipo' },
    
    */
  }

  ngOnInit() {
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

  TestePessoa(n:number = 1){
    for(var i:number = 0; i<n; i++){/**   */
      this.rows.push({id:i, nome:"Teste "+i, rg:"123456789", cpf:"123456789012", datanasc:"10/10/2023", email:"teste@gmail.com",  tipo:"RESIDENTE", data:"28/11/2023"});
    }
  }

  Teste(n:number = 1){
    for(var i:number = 0; i<n; i++){
      this.rows.push({ name:"Teste "+i, gender:"123456789", age:"123456789012" });
    }
  }

}
