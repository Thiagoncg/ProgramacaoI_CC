//Estrutura de repetição.

//For Incrementando um valor
for (let i = 0; i < 10; i++) {
    console.log("Incremento",i);    
}

//For decrementando um valor
for (let d = 100; d > 0; d--) {
    console.log("Decremento",d);    
}

//for com break
for (let velocity = 0; velocity < 100; velocity++) {
    if (velocity === 50) {
        break;
    }
   console.log("Velocidade",velocity);    
}

//for com continue
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        continue;
    }
    console.log("continue", p);    
}