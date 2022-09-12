//Criar a lista de 10 carros
let cars = [
    {
        brand: 'Fordka',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Mercedes',
        year: 1983,
        color: 'red',
        isSubscribed: true,

    },
    {
        brand: 'BMW',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Fordka',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Fiat Mobi',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Fiat Uno',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Scort',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Chevrolet',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Lambor',
        year: 1983,
        color: 'red',
        isSubscribed: true,
    },
    {
        brand: 'Alfa romeu',
        year: 1983,
        color: 'red',
        isSubscribed: false,
    }]

    //Verifica se o carro é igual - Função do JS
    const isObjectEqual = (objA, objB) => {
        return JSON.stringify(objA) === JSON.stringify(objB);
    };
    carDelete = isObjectEqual(cars[0], cars[3]) ? 'Carro repetido' : 'Carro diferente';
    console.log("Carro repetido", carDelete);

    console.log("Carro a ser deletado",cars.splice(3,1)); // corta o carro da posição 3 em diante, apenas uma posição
    console.log(cars); // Mostra a lista de carro sem o carro repetido


    for (let i = 0; i < cars.length; i++) {

        let cantRent = cars[i].isSubscribed;
        
        if (cantRent === true) 
        {
            // Mostra que o carro não pode alugar
            console.log("O carro", cars[i], "pode alugar");
        }
        else
        {
            //Mostra que o carro pode ser alugado
            console.log("O carro", cars[i], "Não Pode Alugar");
        }        
    }

