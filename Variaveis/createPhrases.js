function createLovePhrases() {
    let phrases = (
        [{
            phrase: " Frase1",
            author: "Autor1",
        },
        {
            phrase: " Frase2",
            author: "Autor2",
        },
        {
            phrase: " Frase3",
            author: "Autor3",
        },
        {
            phrase: " Frase4",
            author: "Autor4",
        }]
    );

    console.log(phrases[2]);

    let listSize = phrases.length;
    console.log(`Tamanho da lista ${listSize}`);

    let drawPhrase = Math.floor(Math.random() * listSize - 0 + 1);
    console.log(drawPhrase);

    console.log('A frase sorteada é', phrases[drawPhrase]);
}

createLovePhrases();