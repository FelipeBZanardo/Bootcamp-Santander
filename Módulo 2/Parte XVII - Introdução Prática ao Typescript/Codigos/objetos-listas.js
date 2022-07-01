"use strict";
const pessoa = {
    nome: "Mariana",
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var profissao;
(function (profissao) {
    profissao[profissao["Professora"] = 0] = "Professora";
    profissao[profissao["Atriz"] = 1] = "Atriz";
    profissao[profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    profissao[profissao["JogadoraFutebol"] = 3] = "JogadoraFutebol";
})(profissao || (profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.Desenvolvedora
};
const maria = {
    nome: 'Maria',
    idade: 23,
    profissao: profissao.Desenvolvedora
};
const jessica = {
    nome: 'Jéssica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ['matemática discreta', 'programação']
};
const monica = {
    nome: 'Mônica',
    idade: 28,
    materias: ['matemática discreta', 'programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' - ', item);
    }
}
listar(monica.materias);
