// Crie uma função para verificar se um valor é Truthy

function checkTruth(value) {
  return !!value;
}

console.log(checkTruth(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimeterSquare(side) {
  return side * 4;
}

console.log(perimeterSquare(2));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function completeName(nome, sobrenome) {
  return `meu nome é ${nome} ${sobrenome}`;
}

console.log(completeName("erivelto", "filho"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", () => {
  console.log(completeName("erivelto", "filho"));
});

// Crie uma função que verifica se um número é par

function checkEvenNumber(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(checkEvenNumber(2));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeOfData(data) {
  return typeof data;
}

console.log(typeOfData("hi"));

// Corrija o erro abaixo
// totalPaises estava em escopo da funcao precisoVisitar

const totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
