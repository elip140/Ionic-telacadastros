import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http-service.service';

//import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { JsonPipe } from '@angular/common';
import { Pessoa, Telefone } from 'src/app/models';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.page.html',
  styleUrls: ['./residente.page.scss'],
})
export class ResidentePage implements OnInit {

  pessoa: Pessoa = {
    id: 0,
    nome: "",
    rg: "",
    cpf: "",
    datanasc: "",
    email: "",
    tipo: ""
  }

  visitas: any = [];
  vinculos: any = [];
  entregas: any = [];
  telefones:Telefone[] = [];

  constructor(private titleService: Title, private http: HttpService, private pessoaService:PessoaService, private usuario:UsuarioService) {
    this.titleService.setTitle('Residente - DirectCondo');

    this.pessoa.id = this.usuario.GetPessoaId();
    this.RequestInfo(this.pessoa.id);
    this.ColocarVinculos([{ Nome: "TesteV2", Tipo: "Teste", Agenda: "02" }]);
    this.ColocarEntregas([{ Nome: "TesteV2", Agenda: "02" }]);
  }

  ngOnInit() {
  }

  RequestInfo(id: number) {
    this.http.VerificaID(id).subscribe({
      next: (response: any) => {
        console.log('POST PessoaDados request was successful', JSON.stringify(response));
        this.ColocarDados(response);

        this.http.MeusVisitantes(response.pessoaID).subscribe({
          next: (response: any) => {
            var dateHoje = new Date(Date.now());
            var hoje = new Date(dateHoje.getFullYear(), dateHoje.getMonth(), dateHoje.getDate());

            response.forEach((e: any) => {
              //e.data = '23/01/2024';
              var partesData = e.data.split('/');
              var data = new Date(parseInt(partesData[2], 10), parseInt(partesData[1], 10) - 1, parseInt(partesData[0], 10));

              if (!(hoje < data || hoje > data)) {
                let newItem = { Nome: e.nomeVisitante, Data: e.data, Hora: e.hora };
                this.visitas.push(newItem);
              }
            });
          },
          error: () => {
            console.error('Erro no Request');
            //, JSON.stringify(error)
            return;
          },
        });

        this.pessoaService.GetPessoaTelefones(response.pessoaID).then(e => {
          this.telefones = e;
        });
      },
      error: () => {
        console.error('Erro no Request');
        //, JSON.stringify(error)
        return;
      },
    });
  }

  ColocarDados(json: any) {
    console.log(json);
    this.pessoa.id = json.pessoaID;
    this.pessoa.nome = json.nome;
    this.pessoa.rg = json.rg;
    this.pessoa.cpf = json.cpf;
    //this.pessoa.DataNasc = json.DataNasc;
    this.pessoa.email = json.email;
    //this.pessoa.Tipo = json.Tipo;
  }

  ColocarVinculos(json: any) {
    this.vinculos = [];
    json.forEach((e: any) => {
      let newItem = { Nome: e.Nome, Tipo: e.Tipo, Agenda: e.Agenda };
      this.vinculos.push(newItem);
    });
  }

  ColocarEntregas(json: any) {
    this.entregas = [];
    json.forEach((e: any) => {
      let newItem = { Nome: e.Nome, Agenda: e.Agenda };
      this.entregas.push(newItem);
    });
  }

}
