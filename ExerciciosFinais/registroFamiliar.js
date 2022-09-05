/*
Sistema de gastos familiar

Crie um objeto que ira possuir duas propriedades
* receitas: [] 
* despesas: []
Crie uma funão que calcule o total de receitas e despesas e mostre uma menssagem 
informado se a familia esta com saldo positivo ou negativo
 */

let family = {
    incomes: [2500, 3200, 250, 1670],
    expenses: [320, 1280, 350, 220]
}
function sum(array) {
    let total = 0;

    for (let value of array) {

        total += value;        
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes);
    const calculaExpenses = sum(family.expenses);

    const total = calculateIncomes - calculaExpenses;

    const itsOk = total >= 0;
    let balanceText = "negativo";

    if ( itsOk ) {
        balanceText = "positivo";
    }

    console.log(`Seu saldo é ${ balanceText }: R$ ${ total.toFixed(2) }`);
}

calculateBalance();