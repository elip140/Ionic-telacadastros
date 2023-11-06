import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service.service';

//import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.page.html',
  styleUrls: ['./residente.page.scss'],
})
export class ResidentePage implements OnInit {

  pessoa:any = {
    Nome:"",
    Rg:"",
    Cpf:"",
    DataNasc:"",
    Email:"",
    Tipo:""
  }

  visitas:any = [];

  vinculos:any = [];

  entregas:any = [];

  constructor(private http:HttpService, private titleService: Title){
    this.titleService.setTitle('Residente - DirectCondo'); 
    //12100795007	
    //45123415874
    this.RequestInfo("12100795007");
    this.ColocarVinculos([{Nome:"TesteV2", Tipo:"Teste", Agenda:"02"}]);
    this.ColocarEntregas([{Nome:"TesteV2", Agenda:"02"}]);
  }

  ngOnInit() {
  }

  OnKeyUpCpf(event: any){
    var input:String = event.target.value;
    // Remove todos os caracteres com exceção dos números
    var cpf:string = input.replace(/[^0-9]/g, '');

    var cpfCount:number = cpf.length;
    
    if(cpfCount>=10){
      this.RequestInfo(cpf);
    }

  }

  RequestInfo(cpf:any){
    this.http.PessoaDados(cpf).subscribe(
      (response) => {
        console.log('POST PessoaDados request was successful', JSON.stringify(response));
        this.ColocarDados(response);

        this.http.MeusVisitantes(response.PessoaID).subscribe(
          (response) => {
            console.log('POST MeusVisitantes request was successful', JSON.stringify(response));
            var dateHoje = new Date(Date.now());
            var hoje = new Date(dateHoje.getFullYear(), dateHoje.getMonth(), dateHoje.getDate());

            response.forEach((e:any) => {
              //e.Data = '26/10/2023';
              var partesData = e.Data.split('/');
              var data = new Date(parseInt(partesData[2], 10), parseInt(partesData[1], 10)-1, parseInt(partesData[0], 10));

              if(!(hoje<data || hoje>data)){
                let newItem = { Nome: e.NomeVisitante, Data: e.Data, Hora: e.Hora };
                this.visitas.push(newItem);
              }
            });
          },
          (error) => {
            console.error('Error no Request');
            //, JSON.stringify(error)
            return;
          }
        );
      },
      (error) => {
        console.error('Error no Request');
        //, JSON.stringify(error)
        return;
      }
    );
  }

  ColocarDados(json:any){
    this.pessoa.Nome = json.Nome;
    this.pessoa.Rg = json.RG;
    this.pessoa.Cpf = json.CPF;
    this.pessoa.DataNasc = json.DataNasc;
    this.pessoa.Email = json.Email;
    this.pessoa.Tipo = json.Tipo;
  }

  ColocarVinculos(json:any){
    this.vinculos = [];
    json.forEach((e:any) => {
      let newItem = { Nome: e.Nome, Tipo: e.Tipo, Agenda: e.Agenda };
      this.vinculos.push(newItem);
    });
  }

  ColocarEntregas(json:any){
    this.entregas = [];
    json.forEach((e:any) => {
      let newItem = { Nome: e.Nome, Agenda: e.Agenda };
      this.entregas.push(newItem);
    });
  }

}
