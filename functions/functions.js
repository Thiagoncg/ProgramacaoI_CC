//Aplicativo de frases de amor ou motivacionais
//declaration - declaração da função
//FUNÇOES
function createPhrases(){//novo escopo
    console.log('Aprenda a amar o desconforto');
    console.log('Quem quer faz! Quem não quer da uma desculpa');
    console.log('É assim mesmo só');
    console.log('Antes tarde do que nunca');
    console.log('Seja cara de pau');
}
// ao rodar nada irá funcionar
// devo chamar a função da seguinte forma:

//Executar função
//rodar, chamr, invocar
//execute, run, call, invoke.
createPhrases();

// Posso usar quantas vezes eu quizer.
createPhrases();
createPhrases();
createPhrases();


console.log("Início do programa");

//Agrupamento de código, reutilização de códigos de dar significado a um bloco de códigos

//ARGUMENTOS E PARAMETROS
//function expression ou function anonymous (uma função anomima)
const sum = function(){
    
}

sum();

const summ = function(number1, number2){
    console.log(number1 + number2);

}
summ(2, 3); // deve retornar 5 // arguments - argumentos
summ(5, 6);
summ(5, 5);

//RETORNAR VALORES DENTRO DA FUNÇÃO
let total = 0;
const summm = function(number1, number2) {
    let total = number1 + number1;
    return total
}

let number1 = 10;
let number2 = 5;
console.log(`o numero 1 é ${number1}`);
console.log(`o numero 2 é ${number2}`);
console.log(`a soma é  ${summm(number1, number2)}`);
// OU
console.log(`A soma é`, total);

//FUNCTION SCOPE

let object
function createObject(object) {
    object = 'table';
    return object
}
console.log(object);
console.log(createObject(object));
console.log(object);


//FUNCTION HOISTING
sayMayName();
function sayMayName(params) {
    console.log("thiago garcia Function hosting");
}


//ARROW FUNCTIONS
const sayMayName1 = () => {
    console.log("Thiago Garcia");
}
sayMayName1();

//-----------------------------------------------

const sayMayName2 = ( name ) => {
    console.log( name );
}
sayMayName2('Thiago Garcia');

//CALLBACK FUNCTION
//FUNÇÕES CONSTRUTORAS.
