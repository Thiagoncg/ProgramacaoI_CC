// no cosole web
// Tranformar string em numero e numeros em string.
//No console web
//Converte string em numero
// let string = "500";

// let totalString = string + 500;
// console.log(totalString);

// totalString  = Number(string) + 500;
// console.log(totalString);


//Converte numero em string
// let number = 100;

// let totalNumber = number + 100;
// console.log(totalNumber);

// totalNumber = String(number) + 100;
// console.log(totalNumber);

//Conta quantos caracteres tem uma palavra, conta quantos digitos de um numero;
// let palavra = "Paralelepipedo";
// console.log(palavra.length);

// let numer0 = 123456;
// console.log(String(numer0).length);

// let numer1 = 123456789123456789;
// console.log(String(numer1).length);

// conta a quantidade de caracteres
// let asBoiadeira = "As Boiadeira Não Da Pra Encarar";//😒
// console.log(asBoiadeira.length);

//Casas decimais
// let numberDecimal = 321.00000000;
// console.log(numberDecimal.toFixed(2));

//replace troca os valores
// let numberDecimalReplace = 321.00000000;
// console.log(numberDecimalReplace.toFixed(2).replace(".", ","));

// Converte maiuscúla em minúscula
let nameL = "Thiago";
console.log(nameL.toLowerCase());

let nameU = "THIAGO";
console.log(nameU.toUpperCase());

// Separa um texto que contem espaços
let phrase = "As boiadeira não da pa encara 😉";
let myArray = phrase.split("-");
console.log(myArray);

//Encontra uma determinada palavra no texto
let fraseEncontrar = "A boideira estão na sala de aula";
console.log(fraseEncontrar.includes("boideira"));

// Criar array com construtor
let minhaArray = new Array('thiago', 'nicolas', 'cajuela', 'garcia')
console.log(minhaArray);

// o mesmo que
let minhaArrayNormal = ['thiago', 'nicolas', 'cajuela', 'garcia']
console.log(minhaArrayNormal);

// Contar elentos de um array
console.log(["a", "b", "c"]);

console.log(["a", {type:"array"}, function(){return "a"},].length);

//converte palavras em arrays
let manipulacao = "manipulação";
console.log(Array.from(manipulacao));


exercicio
let techs = ["html", "css", "js"]

//Adicionando um item no fim
console.log(techs());