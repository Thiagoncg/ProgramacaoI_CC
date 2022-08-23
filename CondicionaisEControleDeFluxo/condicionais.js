//Control flow
// Toda aplicação tem um fluxo padrão
//Executa a ação linha a linha

//COPO
//se estiver sujo
console.log('lavar copo'); // se não estiver sujo serve o café diretor

//servir café
console.log('servir café');

//IF ... ELSE...
// if (true) {
//     console.log('condição verdadeira');
// } else {
//     console.log('condição falsa');
// }

let temperature = 39;// temperatura da pessoa

// if (temperature >= 37 ) 
//     {
//         console.log('febre');
//     }
//     else 
//     {
//         console.log('Sem febre');
//     }
//MULTIPLAS CONDICIONAIS
if (temperature >= 37.5) {
    console.log('Febre alta');
}
else if (temperature < 37.5 && temperature >= 37) {
    console.log('febre moderrada');
}
else {
    console.log("Sem febre");
}

//sWITCH - PARECIDO COM O IF, MAS POSSUI OUTRA ESTRUTURA
// let expression = 'c';
// switch (expression) {
//     case 'a':
//         //codigo
//         console.log('a');
//         break

//     case 'b':
//         console.log('b');
//         break

//     case 'c':
//         console.log('c');
//         break

//     default:
//         break;
// }

//CALCULADORA
function calculate(number1, operator, number2) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break

        case '-':
            result = number1 - number2;
            break

        case '*':
            result = number1 * number2;
            break
        case '/':
            result = number1 / number2;
            break

        default:
            console.log('sem implementação erro');
            break;
    }
    return result;

}

console.log("O resultado é: ", calculate(5, '/', 5));

//THROW
// TRY ... CATCH
