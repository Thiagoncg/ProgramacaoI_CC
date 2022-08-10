function createPhrases() {
    let phrases = (
        [{
            phrase: "O verdadeiro amor nunca se desgasta. Quando mais se dá, mais se tem.",
            author: "Antoine de Saint-Exupéry"
        },
        {
            phrase: "Eu te amo é uma frase muito forte para ser dita em vão. Ame primeiro, diga depois.",
            author: "Renato Russo",
        },
        {
            phrase: "Cada qual sabe amar a seu modo; o modo, pouco importa; o essencial é que saiba amar.",
            author: "Renato Russo",
        },
        {
            phrase: "Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.",
            author: "William Shakespeare",
        },
        {
            phrase: "O amor é o espaço e o tempo tornados sensíveis ao coração.",
            author: "Marcel Proust",
        },
        {
            phrase: "Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.",
            author: "Toquinho e Mutinho",
        }]
    );

    //Mostra a frase na posição 2 do array
    console.log(phrases[2]);
    //alert(phrases[2].phrase); 

    //listSize (tamanho da lista) recebe o tamanho total da lista
    let listSize = phrases.length;
    console.log(`O tamanho da lista é, ${listSize}`);

    //frase sorteada Algoritimo que sorteia um numero do tamanho da lista
    let drawPhrase = Math.floor(Math.random() * (listSize - 0 + 1)) ;
    console.log(`Valor sorteado, ${drawPhrase}`);

    //Mostra a frase sorteada(ListaDaFrase[]
    console.log('A frase sorteada é',phrases[drawPhrase]);
}
createPhrases();



