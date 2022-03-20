//Sistema de controle de alunos

let quantidadeDeAlunos = 10;

for (let i = 0; i <= quantidadeDeAlunos; i++) {
  //console.log(i);

  if (i == 0) {
    console.log("O número atual é zero");
  } else if (i % 2 == 0) {
    console.log("O número " + i + " é par");
  } else {
    console.log("O número " + i + " é impar");
  }
}
