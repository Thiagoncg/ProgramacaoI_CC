// Conversores
let string = "500";

let totalString = string + 500;
console.log(totalString);

totalString = Number(string) + 500;
console.log(totalString);

// Contagem de caracteres
let frase = "Essa é a sala de programadores loucos";
console.log(frase.length);

//Contagem de caracteres numéricos convertido
let quantAlunos = 130;
console.log(quantAlunos.length);
console.log(String(quantAlunos).length);

// Casas Decimais
let longitude = 321.0000000;
console.log(longitude.toFixed(2));

// Toca de informações por Replace
let numeroReplace = 321.0000000;
console.log(numeroReplace.toFixed(2).replace(".", "😉"));

console.log(numeroReplace.toFixed(2).replace(".", " Students "));

//UperCase e LowCase
let nomeMaiusculo = "Frederico";
console.log(nomeMaiusculo.toUpperCase()); 

let nomeMinusculo = "JOSHUA";
console.log(nomeMinusculo.toLowerCase());

//Buscar uma determinada palavra
let fraseEncontrar = "As boiadeira não da pra encara";
console.log(fraseEncontrar.includes("boiadeira"));

//Array criando com construtor
let listaDeAlunos = ["Rodrigo", "Rafaela", "Mirela"];
console.log(listaDeAlunos); 

let listaDeAlunosConst = new Array ('thiago', 'josé', 'Laura');
console.log(listaDeAlunosConst);

//Contagem em array
console.log(['a', 'b', 'c'].length);

console.log(['a', {type:"array"}, function(){return "a"},].length);

//String para array
let manipulacaArray = "paralelepipedo";
console.log(Array.from(manipulacaArray));