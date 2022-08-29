/*Expressões e operadores
    -Expressions
    -Operators
        Binary
        Unary
        Ternary
*/
//Expresssões são bem tranquilas, porque expressões são qualquer linha de código que resolve alguma coisa no JavaScript, um exemplo é a expressão:
let number = 1;

//UNÁRIO
let numberA = 1;
console.log(++numberA);

//BINÁRIO
let numberB = 1;
console.log(numberB + 1);

let numberC = 1;
console.log(true ? 'alo' : 'nada');

//Expression NEW; A determinante New identifica que o conteúdo da variável é um novo objeto
//let nameStudent = new String ('Thiago');
//let ageStudent = new Number (25);
//console.log(nameStudent, ageStudent);

//---------------------------------------
//let nameStudent = new String ('Thiago');
//nameStudent.surName = "Garcia";
//let ageStudent = new Number (25);
//console.log(nameStudent.surName, ageStudent);

/*
    Operadores unários
    typeof
    deleter
 */

const Students = {
    nameStudent: 'Thiago',
    age: 25,
}
delete Students.age; // Se o identificar age existir ele será deletado
console.log(Students);

//OPERADORES ARITMÉTICOS


//multiplicação
console.log(3.2 * 5);

//divisão
console.log(12 / 2);

//soma
console.log(34 + 67);

//subtração
console.log(34 - 23);


//resto da divisão % (Resto)
let remainder
remainder = 11 % 9;
console.log(remainder);

//incremento ++ 
let increment = 0;
increment++;
console.log(increment);
console.log(increment++);
console.log(++increment);
console.log(increment);


//decremento --
let decrement = 4;
console.log(decrement);

console.log(decrement--);
console.log(--decrement);

console.log(decrement);

//exponencial
console.log(3 ** 3); // 27
console.log(3 ** 2); // 9



//GROUP OPERATIPON
//OPERADOR QUE AGRUPA EXPRESSÕES. ()

let total = 2 + 3 * 5;
console.log(total);

total = (2 + 3) * 5;
console.log(total);

let stringOperation = (" Alo Alo " + " Voce ");
console.log(stringOperation);

//OPERADORES DE COMPARAÇÃO
//Irá comparar valores e retornar um bollean como resposta de comparação

let one = 1;
let two = 2;
// == igual a
// = recebe 1

console.log(two == 1); // retorna ?
console.log(one == "1"); // retorna ?

// != diferente de 
console.log(one != two);
console.log(one != 1);
console.log(one != "1");

// == estritamente igual a
console.log(one === "1"); // false
console.log(one === 1); // true


// !=== estritamenter diferente de 
console.log(two !== "2"); // true
console.log(two !== 2); // false


//Operadores de comparação
let onee = 1;
let twoo = 2;

// > Maior que
console.log(onee > twoo);

// >= Maior igual a 
console.log(onee >= 1);
console.log(twoo >= 1);

// Menor que
console.log(onee < twoo);

//Menor = que
console.log(onee <= twoo);
console.log(twoo <= 1);
console.log(twoo <= 0);

//Operadores de atribuição:
let x

console.log(x);

//assinment
x = 1;

//addtion assigment
x += 2;

//subtraction assignment
x -= 1;

//multiplication assignment
x *= 2;

// division assignment 
x /= 2;

// exponetiation assignment 
x **= 2;


// OPERADORES LOGICOS
let pao = true;
let queijo = true;

//AND &&
console.log(pao && queijo);

// OR ||
console.log(pao || queijo);

//NOT !
console.log(!pao); // Operação de negação / Nega o valor da variavel

//CONDIÇÃO TERNARIA VALOR1 SENÃO VALOR 2
//condition ? value1 : value2;

const meuCafeDaManha = pao && queijo ? 'café da manhã top' : 'Café da manhã ruim'; // Trocar as condições || ou &&
console.log(meuCafeDaManha);

let ageDriver = 16;
const canDrive = ageDriver >= 18 ? "Can Drive" : "Can't drive"; // Posso dirigir, não posso dirigir
console.log(canDrive);








