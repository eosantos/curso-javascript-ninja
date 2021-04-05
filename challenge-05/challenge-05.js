/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variave = ['santos', 1, true, null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arry) {
    return arry;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(func(variave)[2]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function func2(arry, test) {
    return arry[test];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variave2 = ['Santos', 1, null, undefined, true];
console.log(variave2[0]);
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(variave2[0]);
console.log(variave2[1]);
console.log(variave2[2]);
console.log(variave2[3]);
console.log(variave2[4]);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(livroName) {
    var obj = {
        'The Batman': {
            quantidadePaginas: 666,
            autor: 'Eduardo Oliveira',
            editora: 'DC'
        },
        'Homem de Ferro': {
            quantidadePaginas: 665,
            autor: 'Eduardo Oliveira',
            editora: 'Marvel'
        },
        'Liga da Justiça': {
            quantidadePaginas: 1001,
            autor: 'Eduardo Oliveira',
            editora: 'Warner'
        },
    }
    return !livroName ? obj : obj[livroName];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livroName = 'The Batman';
console.log('O livro ' + livroName + ' tem ' + book(livroName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + livroName + ' é ' + book(livroName).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + livroName + ' foi publicado pela editora ' + book(livroName).editora + '.');
