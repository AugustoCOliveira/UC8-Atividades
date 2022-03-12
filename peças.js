let peso = 50;

if (peso < 100) {
  console.log("A peca deve pesar no minimo 100g");
} else {
  console.log("Cadastro efetuado com sucesso!");
}

let ListaDePecas = ["Amortecedor", "motor", "filtro de ar"];

if (ListaDePecas.length < 10) {
  console.log("É possivel cadastrar mais peças");
} else {
  console.log("Limite excedido");
}
let peçaExemplo = "carburador";

if (peçaExemplo.length > 3) {
  console.log("aceito");
} else if (peçaExemplo.length == 0) {
  console.log("o nome da peça nao pode ser vazio");
} else {
  console.log("o nome deve ter mais de 3 caracteres, digite novamente");
}
