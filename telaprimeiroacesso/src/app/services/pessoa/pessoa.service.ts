import { Injectable } from '@angular/core';
import { HttpService } from '../http-service.service';

import { PessoaData, Telefone } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  GetPessoa(id:number): PessoaData {
    return TestePessoa(id);
  }

  GetPessoas(): Array<PessoaData>{
    return Array.from({ length: 100 }, (_, k) => TestePessoa(k + 1));
  }

  GetPessoaTelefone(id: number): Telefone{
    const TIPOS: string[] = ['RESIDENCIAL', 'COMERCIAL', 'CELULAR',];
    var Telefone = {id:id, tipo:TIPOS[Random(0, 2)], ddd:Random(10, 99).toString(), telefone:Random(1000000, 9999999).toString()};
    return Telefone;
  }

  GetPessoaTelefones(): Array<Telefone>{
    return Array.from({ length: 100 }, (_, k) => this.GetPessoaTelefone(k + 1));
  }


}

// Funções para Mockup de UI
// Gera uma pessoa aleatória para testes
function TestePessoa(id: number = 0): PessoaData {
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
