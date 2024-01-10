import { AfterViewInit, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Pessoa } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  animations: [],
})
export class IndexPage implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'rg', 'cpf', 'datanasc', 'email', 'tipo', 'data', 'actions'];
  columnsToDisplayWithExpand = ['expand', ...this.displayedColumns];
  expandedElement: Pessoa | null;

  dataSource: MatTableDataSource<Pessoa>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private titleService: Title, private pessoaService: PessoaService) {
    this.titleService.setTitle('Listagem Pessoas - DirectCondo');

    const users = pessoaService.GetPessoas();
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