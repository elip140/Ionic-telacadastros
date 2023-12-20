import { AfterViewInit, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PessoaData } from 'src/app/models';
import { TestePessoa } from '../TestePessoa';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class IndexPage implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'rg', 'cpf', 'datanasc', 'email', 'tipo', 'data', 'actions'];
  columnsToDisplayWithExpand = ['expand', ...this.displayedColumns];
  expandedElement: PessoaData | null;

  dataSource: MatTableDataSource<PessoaData>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const users = Array.from({ length: 100 }, (_, k) => TestePessoa(k + 1));
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/*@ViewChild('Table') table: any;
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
  ];*
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
  
  *
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
  for(var i:number = 0; i<n; i++){/
    this.rows.push({id:i, nome:"Teste "+i, rg:"123456789", cpf:"123456789012", datanasc:"10/10/2023", email:"teste@gmail.com",  tipo:"RESIDENTE", data:"28/11/2023"});
  }
}

Teste(n:number = 1){
  for(var i:number = 0; i<n; i++){
    this.rows.push({ name:"Teste "+i, gender:"123456789", age:"123456789012" });
  }
}

}*/