/*
Buscando e contando dados doArray
Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

I) Contar o numero de categorias e o numero de livros em cada categoria
II) Contar o numero de autores
III)Mostrar livros do autor Augusto Cury
Tranformar a função em uma função que ira receber o no do autor e devolver os livros desse autor
 */


const booksByCategory = [
    {
        category: "Riqueza",
        books:[
            {
                title: "Nome do Livro 1",
                author: "Augusto Cury",
            },
            {
                title: "Nome do Livro 2",
                author: "Author do Livro 2",
            },
            {
                title: "Nome do Livro 3",
                author: "Author do Livro 3",
            },
        ],
    },
    {
        category: "Inteligencia emocional",
        books:[
            {
                title: "Nome do Livro 4",
                author: "Author do Livro 1",
            },
            {
                title: "Nome do Livro 5",
                author: "Author do Livro 5",
            },
            {
                title: "Nome do Livro 6",
                author: "Augusto Cury",
            },
        ],
    },
];

const totalCategories = booksByCategory.length;
console.log("Toda de Cadegorias", totalCategories);

for (let category of booksByCategory) {
    console.log("Tota de Livros por Categoria", category.category);
    console.log(category.books.length);
}

function contAuthors() {
    let authors = [];

    for (let category of booksByCategory) {
        for(let books of category.books) {
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author);
            }
        }        
    }
    console.log("Total de autores: ",  authors.length);
}
contAuthors();

function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title);
            }
        }        
    }
    console.log(`Livros do Autor ${author}: ${books.join(", ")}`);
}
booksOfAuthor('Augusto Cury');
