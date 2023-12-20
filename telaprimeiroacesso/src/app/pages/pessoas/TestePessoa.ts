import { PessoaData } from "../../models/PessoaData";

// Gera uma pessoa aleatória para testes
export function TestePessoa(id: number = 0): PessoaData {
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
