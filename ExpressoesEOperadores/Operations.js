//Expressões;
let number = 1;
console.log(number);

//Unário
let numberA = 1;
//numberA = numberA + 1;
console.log(++numberA);

//Binário
let numberB = 1
console.log(numberB + 1);

//Ternário
// let numberC = 1;
// console.log(true 'alo' : 'nada');

// A determinande new indica um novo Objeto
let nameStudent = new String ('Thiago');
let age = new Number (30);

nameStudent.surName = ('Garcia');
console.log(nameStudent, nameStudent.surName, age );


// Expression delete 
//deleta o nome()
const StudentsCC = {
    nameStudentCC: 'Thiago',
    age: 30,
}
delete StudentsCC.nameStudentCC;
console.log(StudentsCC);

//--------------------------

//Deleta idade
const StudentsCCA = {
    nameStudentCC: 'Thiago',
    age: 30,
}
delete StudentsCCA.age;
console.log(StudentsCCA);

//OPRADORES ARITMÉTICOS

//multiplicação " * "
console.log("multiplicação", 3.2 * 5);

//Divisão " / " 
console.log("Divisão", 12 / 2);

//Soma " + "
console.log("soma", 10 + 10);

//Subtração " - "
console.log("Subtração", 10 - 10);

//Resto da divisão
let remainder
remainder = 11 % 11
console.log("remainder", remainder);

//Exponencial
console.log("Exponencial", 3 ** 3);
console.log("Exponencial", 3 ** 2);

//Increment
let increment = 0;
console.log("Increment A", increment);

console.log("Increment B ", increment++);//Mostra no console depois incrementa
console.log("Increment C ", ++increment);//Incrementa depois mostra no console Obs: ja da o valor atualizado

console.log("Increment D", increment);

//Increment
let decrement = 10;
console.log("decrement A", decrement);

console.log("decrement B ", decrement--);//Mostra no console depois decrementa
console.log("decrement C ", --decrement);//Decrementa depois mostra no console Obs: ja da o valor atualizado

console.log("decrement D", decrement);

//Group Operations ();
let total = 2 + 3 * 5;
console.log("Total",total);

total = (2 + 3) * 5; // Prioridade para os parentes
console.log("Total", total);

let stringOperation = (" Alo Alo " + " Voce ");
console.log(stringOperation);

//OPERADORES DE COMPARAÇÃO
//Compara os valores de retorno

// = Atribuição | // == Comparação // === Comparação do valor e do tipo
let one = 1; 
let two = 2; 

// == Igual
console.log( "Comparação == :", two == 1);
console.log( "Comparação == :", one == "1");

// ===
console.log( "Comparação === :", two === 1);
console.log( "Comparação === :", one === "1");

// != Diferente de
console.log("Diferente", one != two );
console.log("Diferente", one != 1 );
console.log("Diferente", one != "1");

// !== Extritamente Diferente
console.log("Diferente !==", one !== two );
console.log("Diferente !==", one !== 1 );
console.log("Diferente !==", one !== "1");

//OPERADORES DE COMPARAÇÃO
let onee = 1;
let twoo = 2;

console.log("Maior", onee > twoo);
console.log("Menor", onee < twoo);
console.log("Maior=", onee <= twoo);
console.log("Menor=", onee >= twoo);

//Operadores de atribuição

let x;
console.log(x);

//Assingnment
x = 5;
console.log("=", x);
// Assingnment adicionando
x += 1;
console.log("+=",x);

// Assingnment subtraindo
x -= 1;
console.log("-=", x);

//Multiplicação e tribuição
x *= 1;
console.log("*=", x);

//Divisão e atribuição
x /= 1;
console.log("/=", x);

//Divisão e atribuição
x **= 1;
console.log("**=", x);

//OPERADORES LOGICOS

//exemplo café da tarde
let pao = false;
let queijo = true;

//And && deve ter os dois
console.log("Meu cafe da tarde E", pao && queijo);

//Ou || pode ter um ou outro
console.log("Meu cafe da tarde OU ", pao || queijo);

//Not ! nega o verdadeiro ou falso
console.log("Meu cafe da tarde nega o valor", !pao);

//Condição ternaria
// &&
// const meuCafeDaTade = pao && queijo ? 'Cafe da tarde Top' : 'Cafe da tarde ruim';
// console.log(meuCafeDaTade);

//||
const meuCafeDaTade = pao || queijo ? 'Cafe da tarde Top' : 'Cafe da tarde ruim';
console.log(meuCafeDaTade);

let ageDrive = 16;

const canDrive = ageDrive >= 18 ? "Pode Dirigir" : "Não Pode";
console.log("A Pessoa", canDrive);

// Criar uma lista de 10 Carros.
// Na lista, um carro deve ser repetido.
// Verificar se tiver carro repetido - Deletar um dos carros. Pode fazer a verificação por ID.
// Verificar se. Um dos carros tiver a propriedade "isSUbiscribe": como True - informar no console Pode alugar.
// Verificar se. Um dos carros tiver a propriedade "isSUbiscribe": como False - informar no console Não pode alugar.
//Enviar o Arquivo NomeDoArquivo.json para avaliação
