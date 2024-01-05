import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PessoaData, Unidade, Telefone, Endereco, Veiculo, Vinculo, Empresa, Agenda } from '../../../models';
import { TestePessoa } from '../TestePessoa';

// MatTable
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// Fotos
import { PhotoService } from 'src/app/services/photo.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  pessoa: PessoaData;
  public formEdit: FormGroup;

  // Unidade
  @ViewChild('unidadePaginator') unidadePaginator: MatPaginator;
  @ViewChild('unidadeTableSort') unidadeSort: MatSort;
  unidadeSource: MatTableDataSource<Unidade> = new MatTableDataSource;
  unidadeColumns: string[] = ['local', 'actions'];

  // Telefone
  @ViewChild('telefonePaginator') telefonePaginator: MatPaginator;
  @ViewChild('telefoneTableSort') telefoneSort: MatSort;
  telefoneSource: MatTableDataSource<Telefone> = new MatTableDataSource;
  telefoneColumns: string[] = ['tipo', 'ddd', 'telefone', 'actions'];

  // Endereço
  @ViewChild('enderecoPaginator') enderecoPaginator: MatPaginator;
  @ViewChild('enderecoTableSort') enderecoSort: MatSort;
  enderecoSource: MatTableDataSource<Endereco> = new MatTableDataSource;
  enderecoColumns: string[] = ['cep', 'tipo', 'endereco', 'numero', 'bairro', 'cidade', 'complemento', 'actions'];

  // Veículos
  @ViewChild('veiculoPaginator') veiculoPaginator: MatPaginator;
  @ViewChild('veiculoTableSort') veiculoSort: MatSort;
  veiculoSource: MatTableDataSource<Veiculo> = new MatTableDataSource;
  veiculoColumns: string[] = ['modelo', 'fabricante', 'cor', 'placa', 'actions'];

  // Vínculos
  @ViewChild('vinculoPaginator') vinculoPaginator: MatPaginator;
  @ViewChild('vinculoTableSort') vinculoSort: MatSort;
  vinculoSource: MatTableDataSource<Vinculo> = new MatTableDataSource;
  vinculoColumns: string[] = ['nome', 'tipo', 'descricao', 'actions'];

  // Empresas
  @ViewChild('empresaPaginator') empresaPaginator: MatPaginator;
  @ViewChild('empresaTableSort') empresaSort: MatSort;
  empresaSource: MatTableDataSource<Empresa> = new MatTableDataSource;
  empresaColumns: string[] = ['nome', 'actions'];

  // Empresas
  @ViewChild('agendaPaginator') agendaPaginator: MatPaginator;
  @ViewChild('agendaTableSort') agendaSort: MatSort;
  agendaSource: MatTableDataSource<Agenda> = new MatTableDataSource;
  agendaColumns: string[] = ['descricao', 'tipo', 'inicio', 'fim', 'actions'];

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, public photoService: PhotoService, private renderer: Renderer2, private titleService: Title) {
    this.titleService.setTitle('Editar Residente - DirectCondo');
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');

      if (id !== null) {
        this.pessoa = TestePessoa(parseInt(id));
      }

      // Card de Editar
      this.formEdit = this.formBuilder.group(
        {
          Nome: new FormControl(this.pessoa.nome, Validators.compose([
            Validators.required
          ])),
          Cpf: new FormControl(this.pessoa.cpf, Validators.compose([
            Validators.required
          ])),
          Rg: new FormControl(this.pessoa.rg, Validators.compose([
            Validators.required
          ])),

          Tipo: new FormControl(this.pessoa.tipo, Validators.compose([
            Validators.required
          ])),
          DataNasc: new FormControl(this.pessoa.datanasc, Validators.compose([
            Validators.required
          ])),
          Email: new FormControl(this.pessoa.email, Validators.compose([
            Validators.required,
            Validators.email
          ])),
          Observacao: new FormControl(this.pessoa.observacao, Validators.compose([
            Validators.required
          ])),
        }
      );

      photoService.photos = {
        filepath: "soon...",
        webviewPath: "./assets/Placeholder.png"
      }

      // Card de Unidade
      var dataUn = this.unidadeSource.data;
      for (var i = 1; i <= 100; i++) {
        dataUn.push({ id: i, pessoaId: 0, local: i + "B" });
      }
      this.unidadeSource.data = dataUn;

      // Card de Telefone
      var tel = this.telefoneSource.data;
      for (var i = 1; i <= 100; i++) {
        tel.push({ id: i, tipo: "CELULAR", ddd: "11", telefone: "3123-3123" + i });
      }
      this.telefoneSource.data = tel;

      // Card de Endereço
      var end = this.enderecoSource.data;
      for (var i = 1; i <= 100; i++) {
        end.push({ id: i, tipo: "RESIDENCIA", cep: "12345-" + i, endereco: "RUA LOREM IPSUM DOLOR SIT AMET", numero: i, bairro: "LOREM IPSUM", cidade: "ITATIBA DO SUL", complemento: "Qtd 1 lt 1" });
      }
      this.enderecoSource.data = end;

      // Card de Veiculos
      var vei = this.veiculoSource.data;
      for (var i = 1; i <= 100; i++) {
        vei.push({ id: i, fabricante: "Teste", modelo: "202" + i, cor: "TESTE", placa: "EEE-2" + i, renavan: "Teste" });
      }
      this.veiculoSource.data = vei;

      // Card de Vinculo
      var vin = this.vinculoSource.data;
      for (var i = 1; i <= 100; i++) {
        vin.push({ id: i, nome: "Teste Teste Teste" + i, tipo: "DEPENDENTE", descricao: "LOREM IPSUM DOLOR SIT AMET" });
      }
      this.vinculoSource.data = vin;

      // Card de Vinculo
      var vin = this.vinculoSource.data;
      for (var i = 1; i <= 100; i++) {
        vin.push({ id: i, nome: "Teste Teste Teste" + i, tipo: "DEPENDENTE", descricao: "LOREM IPSUM DOLOR SIT AMET" });
      }
      this.vinculoSource.data = vin;

      // Card de Empresa
      var emp = this.empresaSource.data;
      for (var i = 1; i <= 100; i++) {
        emp.push({ id: i, nome: "Teste Teste Teste Teste - " + i });
      }
      this.empresaSource.data = emp;

      // Card de Inicio
      var ag = this.agendaSource.data;
      for (var i = 1; i <= 100; i++) {
        ag.push({ id: i, descricao: "Teste Teste Teste Teste - " + i, tipo: "TESTE", inicio: "20/12/202" + i, fim: "21/12/202" + i });
      }
      this.agendaSource.data = ag;


      // Colocar titulo
      this.titleService.setTitle(this.pessoa.nome+' - DirectCondo');

    });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.unidadeSource.paginator = this.unidadePaginator;
    this.unidadeSource.sort = this.unidadeSort;

    this.telefoneSource.paginator = this.telefonePaginator;
    this.telefoneSource.sort = this.telefoneSort;

    this.enderecoSource.paginator = this.enderecoPaginator;
    this.enderecoSource.sort = this.enderecoSort;

    this.veiculoSource.paginator = this.veiculoPaginator;
    this.veiculoSource.sort = this.veiculoSort;

    this.vinculoSource.paginator = this.vinculoPaginator;
    this.vinculoSource.sort = this.vinculoSort;

    this.empresaSource.paginator = this.empresaPaginator;
    this.empresaSource.sort = this.empresaSort;

    this.agendaSource.paginator = this.agendaPaginator;
    this.agendaSource.sort = this.agendaSort;
  }

  SalvarBtn() {
    this.isSubimitted = true;

    if (!this.formEdit.valid)
      return;

    alert("Salvar \n" + JSON.stringify(this.formEdit.value));
  }

  // Variaveis de Validação do formulario
  public isSubimitted: boolean = false;

  // Menssagens de validação customizadas
  public validation_messages = {
    Nome: [
      { type: 'required', message: '(Nome é requirido)' }
    ],
    Cpf: [
      { type: 'required', message: '(Cpf é requirido)' }
    ],
    Rg: [
      { type: 'required', message: '(Rg é requirido)' }
    ],

    Tipo: [
      { type: 'required', message: '(Tipo é requirido)' }
    ],
    DataNasc: [
      { type: 'required', message: '(Data de Nascimento é requirido)' }
    ],
    Email: [
      { type: 'required', message: '(Email é requirido)' },
      { type: 'email', message: '(Email Inválido)' },
      { type: 'special', message: '(O E-mail deve ser cadastrado, entre em contato com a Administração)' }
    ],
    Observacao: [
      { type: 'required', message: '(Tipo é requirido)' }
    ],
  }

  cardshow(event: Event) {
    const ionCard = (event.target as HTMLElement).closest('ion-card');
    
    if (ionCard) {
      if(ionCard.classList.contains('show')){
        this.renderer.removeClass(ionCard, 'show');
        
      }
      else{
        this.renderer.addClass(ionCard, 'show');
      }
    }
  }




  // Funções e variaveis do Modal (Mudar Foto)
  @ViewChild(IonModal) modal: IonModal;

  TirarFoto() {
    this.photoService.addNewToGallery();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss("Teste", 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      alert("Confirmado");
    }
  }
}
