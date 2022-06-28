/*const  alunos  =  [
	{
		nome : 'João' ,
		nota : 2 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Sófia' ,
		nota : 9 ,
		turma : '1B' ,
	} ,
	{
		nome : 'Paulo' ,
		nota : 6 ,
		turma : '2C' ,
	} ,
] ;

function alunosAprovados(ar, media){
    let aux = [];
    
    for(let i=0; i <= ar.length; i++){
        const {nome, nota} = ar[i];
        if (nota >= media){
            aux.push(nome);
        }
    }

    return(aux);
}

console.log(alunosAprovados(alunos, 5));*/

const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media){
    let aux = [];
    for (let i=0; i <= ar.length; i++){
        if(alunos[i].nota >= media){
            aux.push(alunos[i].nome);
        }
    }
    return aux;
}

console.log(alunosAprovados(alunos, 5));