import {AfterViewInit, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PessoaData {
  id: string;
  nome?:string;
  rg?:string;
  cpf?:string;
  datanasc?:string;
  email?:string;
  tipo?:string;
  data?:string;

  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexPage implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'rg', 'cpf', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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

  TestePessoa(n:number = 1){
    for(var i:number = 0; i<n; i++){
      //this.dataSource.push({id:i, nome:"Teste "+i, rg:"123456789", cpf:"123456789012", datanasc:"10/10/2023", email:"teste@gmail.com",  tipo:"RESIDENTE", data:"28/11/2023"});
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): PessoaData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}

const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
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