import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-residente',
  templateUrl: './residente.page.html',
  styleUrls: ['./residente.page.scss'],
})
export class ResidentePage implements OnInit {

  pessoa:any = {
    Nome:"Eliandro Panacci Cotrim",
    Rg:"561493121",
    Cpf:"45123415874",
    DataNasc:"",
    Email:"epcotrim@gmial.com",
    Tipo:"Residente"
  }

  visitas:any = [];

  constructor(private http:HttpService){
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
            
            response.forEach((e:any) => {
              let newItem = { Nome: e.NomeVisitante, Data: e.Data, Hora: e.Hora };
              this.visitas.push(newItem);
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

}
