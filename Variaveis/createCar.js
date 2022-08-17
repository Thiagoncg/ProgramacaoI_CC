// 1. Declare uma variável de nome weight
let weight;

// 2. Que tipo de dado é a variavel acima
console.log(typeof weight);

//3. Declare uma váriável e atribua os valores para cada um dos dados
let carBrand = "BMW x3";
let year = 2020;
let km = 15.500;
let color = "branco";
let isSubscribed = false;

//4. a variavel car abaixo é de que tipo de dado
let car = {}
console.log(typeof car);

//4.1 Atribua a ela (car) as mesmas propriedades do exercício 3
let cars = { // Coloquei cars apenas para não conflitar
    carBrand: "BMW x3",
    year: 2020,
    km:15.500,
    color: "branco",
    isSubscribed: false,
};
console.log(cars);

//4.2 Mostre no console a seguinte menssagem
//O <carBrand> selecionado possui a <color> e é do ano <year>
console.log(`O ${carBrand} selecionado possui cor ${color} e é do ano ${year}`);

//5 = Declare uma variável do tipo arrray, de nome cars e
//atribua a ela nenhum valor, ou seja, somente um array
//vazio.
let carss = [];
console.log(typeof carss);


//6 Reatribua valor para a variável acima, colocando
//dentro dela o objeto car da questão 4
carss = [
    cars
]
console.log("Resultado do 5", carss);


//7 Coloque no console o valor da posição zero do
//array acima
console.log(carss[0]);

//8 Crie um novo car e coloque na posição 1 do array
//student
const forKa = {
    carBrand: "Ford Ka 1.5",
    year: 2020,
    km:20.500,
    color: "Azul",
    isSubscribed: true,
}
// Atribuindo dados
carss = [
    cars,
    forKa
]
console.log("Lista de carros", carss);
// outra forma de cadastrar o carro
//carss[1] = forKa;

//9 Sem testar o código responda. Qual a resposta do
//código abaixo e porque?

console.log(a);
var a = 1;
//Undefined pois ele sofre hoisting
// var a
// console.log(a);
// =  a
// // variavel var sofre hoisting