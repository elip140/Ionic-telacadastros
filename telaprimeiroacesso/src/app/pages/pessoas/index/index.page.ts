import { AfterViewInit, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
    const users = Array.from({ length: 100 }, (_, k) => this.TestePessoa(k + 1));
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

  // Gera uma pessoa aleatória para testes
  TestePessoa(id: number = 0): PessoaData {
    const nome = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    const rg = Random(100000000, 999999999).toString();
    const cpf = Random(100000000000, 999999999999).toString();
    const datanasc = (Random(1, 30) + '/' + Random(1, 12) + '/' + Random(1970, 2010));
    const email = nome.toLocaleLowerCase() + "@gmail.com";
    const tipo = "RESIDENTE";
    const data = (Random(1, 30) + '/' + Random(1, 12) + '/' + Random(2022, 2023));

    return {
      id: id,
      nome: nome,
      rg: rg,
      cpf: cpf,
      datanasc: datanasc,
      email: email,
      tipo: tipo,
      data: data,
    };
  }
}

export interface PessoaData {
  id: number;
  nome?: string;
  rg?: string;
  cpf?: string;
  datanasc?: string;
  email?: string;
  tipo?: string;
  data?: string;
}

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

function Random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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