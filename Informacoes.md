############################### 02/08/2022 ############################ 
# A importância da Sintaxe

    * Toda Linguagem tem.
    * É necessario atenção e ter uma boa sintaxe.
    * Representa 82% dos erros de programadores iniciantes

***js
    console.log("Bem vindos ao JS");
    consolelog("Bem vindos ao JS");
***

# Maneiras de executar JS
    * Navegador
    * https://codepen.io
    * VS Code.
    <script>
            console.log("Bem vindos ao JS");
    </script>

# Adicionando arquivos JS
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Aula 02/08/2022</title>
        </head>
        <body>
            <script src="./scripts.js"></script>
        </body>
    </html>

<<<<<<< HEAD
# Comentários
// Aqui eu tenho um tipo de comentário. Tipo linha.
// O código escreve uma msg no console.

/*
    Comentário de blocos
    console.log('Bem vindos a nossa mega blaster aula');
    console.log("Bem vindos ao JS");
*/
console.log('Bem vindos a nossa mega blaster aula');
console.log("Bem vindos ao JS");
=======
############################### 03/08/2022 ############################

# TIPOS DE DADOS

* Conceitos e escrita
    Aprenderemos os tipos de dados mais utilizados na linguagem
        * Aprender 80% do funcionamento de uma linguagem, com cerca de 20 % do vocabulário.

/*
String

    * Cadeia de caracteres (A B C)
    "" // aspas duplas
    '' // aspas simples
    `` // template Literals ou template string
    ${ 1 + 1} // Interpolação

*/


/*
Numbers
    Numeros

    33 // inteiros
    12,5 // reais - float
    console.log(12.5 + 12);
    console.log(12.5 / "thiago"); // Nan

    //infinity
*/

/*
Boolean
    Tem apenas dois valores

    true // verdadeiro
    false // falso
    console.log(true);
    console.log(false);
*/



/*
Undefined vs null

    //Undefined indica que algo é indefinido vs null
    console.log(undefined);

    null
        *Objeto que não possui nada dentro
        * Diferente de indefinido

        console.log(null === undefined);
*/


/*
Object
        *Objeto / cachorro
        *Propriedades(Tamanho, cor, etc) / Atributos.
        *Funcionalidades(latir) / Metodos.

        {Propriedade: "valor"}

        console.log({
            name:"cachorro",
            idade:5,
            andar: function(){
                console.log.log('andar')

            }
        })
    
/*

/*
Array
* Array
    * Uma lista
    * Um agrupamento de dados ou objetos

    console.log(["Gato", 5 ])
    console.log(["ovo", "leite"])

/*

*/
Conclusão

    ECMAScript determina os padrões do JS

    Tipos primitivos
    String = "BCA" , "bca" , "Bca"
    number = 24 32 64
    Boleean = True e false

    *Estruturais
        Objects
        Arrays
        Map
        Set
        Date

    *Function


/*


>>>>>>> 0516ec0a6c3af6900200bd84d8c2fd07ff942ddb
