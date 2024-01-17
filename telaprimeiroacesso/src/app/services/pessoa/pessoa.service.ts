import { Injectable } from '@angular/core';
import { HttpService } from '../http-service.service';

import { Local, Pessoa, Telefone, PessoaLocal, Endereco, Veiculo } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  GetPessoa(id:number): Pessoa {
    return TestePessoa(id);
  }

  GetPessoas(): Array<Pessoa>{
    return Array.from({ length: 100 }, (_, k) => TestePessoa(k + 1));
  }


  // Relacionamento Pessoa - Telefone
  GetPessoaTelefone(id: number): Telefone{
    const TIPOS: string[] = ['RESIDENCIAL', 'COMERCIAL', 'CELULAR',];
    var Telefone = {id:id, tipo:TIPOS[Random(0, 2)], ddd:Random(10, 99).toString(), telefone:Random(1000000, 9999999).toString()};
    return Telefone;
  }
  GetPessoaTelefones(): Array<Telefone>{
    return Array.from({ length: 100 }, (_, k) => this.GetPessoaTelefone(k + 1));
  }
  

  // Funções que provalvemente serão movidas para um LocalService
  GetLocal(lid:number): Local{
    var local = {id:lid, local:Random(1,20)+"A"};
    return local;
  }
  GetLocals(): Array<Local>{
    return Array.from({ length: 100 }, (_, k) => this.GetLocal(k + 1));
  }


  // Relacionamento Pessoa - Local
  GetPessoaLocal(plid:number): PessoaLocal{
    var plocal = {id:plid, pessoaId:Random(1,100), localId:Random(1,10)};
    return plocal;
  }
  GetPessoaLocals(): Array<PessoaLocal>{
    return Array.from({ length: 100 }, (_, k) => this.GetPessoaLocal(k + 1));
  }


  // Relacionamento Pessoa - Endereco
  GetPessoaEndereco(peid:number): Endereco{
    const TIPOS: string[] = ['RESIDENCIAL', 'COMERCIAL', 'OUTROS',];
    const ESTADO: string[] = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'DF']

    var end = { id: peid, tipo: TIPOS[Random(0, 2)], cep: Random(10000, 200000).toString(), endereco: "Rua Teste", numero: Random(1, 200).toString(), complemento: "Teste", bairro: "Teste2", cidade: "ITATIBA", estado: ESTADO[Random(0, (ESTADO.length - 1))] } as unknown as Endereco;
    return end;
  }
  GetPessoaEnderecos(): Array<Endereco>{
    return Array.from({ length: 100 }, (_, k) => this.GetPessoaEndereco(k + 1));
  }


  // Relacionamento Pessoa - Veiculo
  GetPessoaVeiculo(pvid:number): Veiculo{
    var veiculo = {id:pvid, fabricante:"Teste de 1", modelo:"Teste", placa:"EEE-"+Random(1000, 9999), cor:"Vermelho", renavan:"ALGO???"};
    return veiculo;
  }
  GetPessoaVeiculos(): Array<Veiculo>{
    return Array.from({ length: 100 }, (_, k) => this.GetPessoaVeiculo(k + 1));
  }
  

}

// Funções para Mockup de UI
// Gera uma pessoa aleatória para testes
function TestePessoa(id: number = 0): Pessoa {
  const nome = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const rg = Random(100000000, 999999999).toString();
  const cpf = Random(100000000000, 999999999999).toString();
  const datanasc = (Random(1, 30) + '/' + Random(1, 12) + '/' + Random(1970, 2010));
  const email = nome.toLocaleLowerCase() + "@gmail.com";
  const tipo = "RESIDENTE";
  const data = (Random(1, 30) + '/' + Random(1, 12) + '/' + Random(2022, 2023));
  const img = Random(10000, 20100).toString();
  const observacao = (nome + " - " +tipo);

  return {
      id: id,
      nome: nome,
      rg: rg,
      cpf: cpf,
      datanasc: datanasc,
      email: email,
      tipo: tipo,
      data: data,
      img: img,
      observacao: observacao,
  };
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
