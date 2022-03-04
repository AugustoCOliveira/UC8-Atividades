console.log('Bem Vindo ! ');

let idade = 18;
let numerodeInscriçoes = 100;
const datadoEvento = new Date(11, 1, 2016);
let dataAtual = new Date(12, 1, 2016);

if (idade >= 18) {
	console.log('Cadastro permitido');
} else {
	console.log('Cadastro não permitido, data invalida');
}

if (numerodeInscriçoes <= 100) {
	console.log('Cadastro efetuado com sucesso!');
} else {
	console.log('Cadastro nao permitido, limite de inscrições atingido');
}

if (dataAtual < datadoEvento) {
	console.log('Cadastro efetuado com sucesso!');
} else if (dataAtual > datadoEvento) {
	console.log('Cadastro inválido');
}
