const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: 'desenvolvedora' 
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor' 
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora' 
}

enum profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ['matemática discreta', 'programação']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 28,
    materias: ['matemática discreta', 'programação']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log(' - ', item);
    }
}

listar(monica.materias);