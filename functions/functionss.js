// FUNÇÃO
// function createPhrases(){//novo escopo
//     console.log('Aprenda a amar o desconforto');
//     console.log('Quem quer faz! Quem não quer da uma desculpa');
//     console.log('É assim mesmo só');
//     console.log('Antes tarde do que nunca');
//     console.log('Seja cara de pau');
// }
// createPhrases();

//argumentos e parametros nulos
// const sum = function(){ // dECLARAÇÃO DE UMA VARIÁVEL COMO FUNÇÃO
// 	console.log("teste");  
// }
// sum();

//--------------------------------------------------

// const summ = function(number1, number2){
//     console.log(number1 + number2);    
// }
// summ(2, 3);
// summ(5, 3);
// summ(1, 3);
// summ(0, 3);

//---------------------------------------------------
// const summm = function(number1, number2) {
//     total = number1 + number2;
//     return total
// }

// let number1 = 5;
// let number2 = 5;
// console.log(`o numero 1 é ${number1}`);
// console.log(`o numero 2 é ${number2}`);
// console.log(`a soma é  ${summm(number1, number2)}`);
// // OU
// console.log(`A soma é`, total);

//--------------------------------------------------------------------

// let total = 0;
// const summm = function(number1, number2) {
//     let total = number1 + number1;
//     return total
// }

// let number1 = 10;
// let number2 = 5;
// console.log(`o numero 1 é ${number1}`);
// console.log(`o numero 2 é ${number2}`);
// console.log(`a soma é  ${summm(number1, number2)}`);
// // OU
// console.log(`A soma é`, total); // retornou 0 devido ao valor fora do escopo


//Function Scope
// let object = 'computer'
// function createObject() { // Sem parametro
//     object = 'table';
//     return object
// }
// console.log(createObject(object));
// console.log(object);
//-------------------------------------------------------
// let object = 'computer'
// function createObject(object) { // Com parametro
//     object = 'table';
//     return object
// }
// console.log(createObject(object));
// console.log(object);




//Função hosting
// sayName()

// function sayName(){
// console.log('Thiago Garcia')
// }

// Este tipo de função sofre elevação de forma automática

// sayName()

// const sayName = function(){
// console.log('Thiago Garcia')
// } // erro não sofre elevação, ao atribuir um valor de variável

//------------------------------------------------------------------


//Arrow function sem parametros
// const sayMayName = () => {
//     console.log("Thiago Garcia");
// }
// sayMayName();

//-----------------------------------------------

//Arrow functions com parametros
// const sayMayName = (namePar) => {
//     console.log(namePar);
// }
// sayMayName('thiago garcia');

//--------------------------------------------------

//Call Back functions
// function myNameIs(name) {
//     console.log('Antes de executar a função call back');
//     name();
//     console.log('Depois da função');
// }

// myNameIs(
//     () => {
//         console.log('estou em uma função call Back');
//     }
// )

//---------------------------------------------------------

//FUNÇÃO CONSTRUTORA
// function Person(name, cpf, idade){
//     this.name = name
//     this.cpf = cpf
//     this.idade = idade
// }
//     const jose = new Person("José", "311.283.738-07", 39);
//     const mariana = new Person("Mariana", "311.283.738-07", 26);
//     console.log(jose);
//     console.log(mariana);

//--------------------------------------------------------------------

//FUNÇÕES DO JS
// let nameString = new String("Thiago Nicola Cajuela Garcia");
// console.log(nameString);

//  let numerInteger = new Number(1934);
//  console.log(numerInteger);

//let date = new Date();
//console.log(date);

//let randomNumber =  Math.random();
//console.log(randomNumber);

//EXEMPLO
// function randomIntervalNumber(number1, number2) {
//     return Math.floor(Math.random() * (number2 - number1 + 1)) + number1;    
// }
// console.log(randomIntervalNumber(0, 150));
// console.log(randomIntervalNumber(0, 1));
// console.log(randomIntervalNumber(5, 10));






