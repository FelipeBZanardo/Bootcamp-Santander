/*function soma(a: number, b: number){
    return a+b;
}

soma('a','b')*/

/*interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    //executarRugido(alturaEmDecibeis: number): void;
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'médio' | 'grande';
 }

 type IDomestico = IFelino | ICanino;

/*const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'terrestre',
    domestico: true
}*/

/*const animal: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'médio',
    tipo: "terrestre",
}

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false
}

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});


function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceALista(['A','B','C'],'d');

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor';
}



function redirecione(usuario: IUsuario){
    if (usuario.cargo){
        //redirecionar(usuario, cargo)
    }
    //redirecionar para a área do usuário
}

interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements Cachorro{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade = 8;

console.log(cao);

import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();*/

interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{
    
}



