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
const summm = function(number1, number2) {
    total = number1 + number2;
    return total
}

let number1 = 5;
let number2 = 5;
console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é  ${summm(number1, number2)}`);
// OU
console.log(`A soma é`, total);
