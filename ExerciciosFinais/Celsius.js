/*
Crie uma funçao que receba uma string em celsius ou fahrenheit e faça 
a transformação de uma unidade para outra

C = (F - 32) * 5/9
F = C * 9/5 +32
*/

// transformDegree ('50F');
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F'); 

    if (!celsiusExists && !fahrenheitExists) {
        throw new Error (" Grau não identificado");
    }

    //Caminho Padrão / fluxo ideal F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => ((fahrenheit - 32) * 5/9);
    let degreeSign = 'C';

    //Caminho Alternativo / C -> F
    if(celsiusExists) {
         updateDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = (celsius) => ((celsius * 9/5 + 32));
         degreeSign = 'F';
    }

    return formula(updateDegree) + degreeSign;
}

try {
    //transformDegree('50F');
    //transformDegree('50Z');
    console.log(transformDegree('50F'));
    console.log(transformDegree('18C'));

} catch (error) {
    //console.log(error.message);
    console.log(error);
}