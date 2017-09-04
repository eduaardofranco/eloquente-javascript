/** incluir aspas dentro de uma string usa o \(backslash) antes
\n quebra a linha **/
console.log("Primeira linha \n'Segunda linha com aspas' ");
// se usar 2 backslash seguidos não significa caracter especial
console.log("Primeira linha \\n'Segunda linha com aspas' ");

//retorna o tipo
console.log(typeof 4.5);
// → number

//retorna o tipo
console.log(typeof "x");
// → string


//conditional operator
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

/** Undefined values */
console.log(8 * null)
// → 0
console.log("5" - 1);
// → 4
console.log("5" + 1);
// → 51
console.log("five" * 2);
// → NaN
console.log(false == 0);
// → true
console.log(null == undefined);
// → true
console.log(null == 0);
// → false
//compara se o zero é igual a string zero, com === ele compara o valor e o tipo
if(0 === '0' ) {
    console.log('true');
} else {
    console.log('false');
}

console.log(null || "user");
// → user
console.log("Karl" || "user");
// → Karl

console.log( true ? 'é v' : 'é f');

/**
    Escreva um programa que faça 7 chamadas a console.log() para retornar o seguinte triângulo.
*/
// var hashtag = '';
// for (i=0; i <= 6; i++) {
//     hashtag += '#';
//     console.log(hashtag);
// }


/**
 Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100, exceto que,
 para números divisíveis por 3, ele imprima Fizz ao invés do número, e para números divisíveis por
 5 (e não 3), ele imprima Buzz.

 Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis por ambos os números 3 e 5.

(Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de candidatos programadores. Então, se você
resolvê-la, você está autorizado de se sentir bem consigo mesmo).

 */
// for (i=0; i <= 100; i++) {
//     if( i % 3 == 0) {
//         console.log('Fizz');
//         if(i % 5 == 0){
//             console.log('FizzBuzz');
//         }
//     } else {
//         console.log(i);
//     }
// }

/**
 Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres.
 A cada posição da grade existe ou um espaço ou um caracter “#”, de forma que estes caracteres formem um tabuleiro de xadrez.
 */
var  tamanho = 8;
for (var i = 1; i <= tamanho; i++) {

  var linha = (i % 2)?'':' ';

  for (var j = 1; j < tamanho; j++) { 
      linha += (j % 2)?'#':' ';
  }

  console.log(linha);
}
/**
  Escreva uma função min que recebe dois argumentos e retorna o menor deles.
 */
var min = function(num1,num2) {
    return Math.min(num1,num2);
};
console.log(min(10,2));

/** Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar,
usando % 2 para verificar se ele é divisível por dois. Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:
- Zero é par.
- Um é ímpar.
- Para todo outro número N, sua paridade é a mesma de N - 2.
Defina uma função recursiva isEven que satisfaça as condições descritas acima. A função deve aceitar um número como 
parâmetro e retornar um valor Booleano.
*/
var isEven = function(num) {
    if( num % 2 === 0 ){
        return;
    }
    else if( num % 2 != 0) {
        return;
    } else {
        isEven(num);
    }
};
isEven(-3);

/**
 Você pode acessar o N-ésimo caractere, ou letra, de uma string escrevendo "string".charAt(N), similar a como você acessa seu tamanho com "s".length.
 O valor retornado será uma string contendo somente um caractere (por exemplo, "b"). O primeiro caractere está na posição zero, o que faz com que 
 o último seja encontrado na posição string.length -1. Em outras palavras, uma string com dois caracteres possui tamanho (length) dois, e suas
  respectivas posições são 0 e 1.

Escreva uma função countBs que receba uma string como único argumento e retorna o número que indica quantos caracteres “B”, em maiúsculo, 
estão presentes na string.

Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs, exceto que ela recebe um segundo argumento 
que indica o caractere que será contado (ao invés de contar somente o caractere “B” em maiúsculo). Reescreva countBs para fazer essa nova funcionalidade.
 */
var countChar = function(word, letter) {
    var counter = 0;
    for( i=0; i <= word.length; i++) {
        if( word.charAt(i) == letter.toUpperCase()) {
            counter = counter + 1;
        }
    }
    return counter;
};
console.log(countChar('Eduardo', 'E'));

/**
 Escreva uma função chamada range que recebe dois argumentos, start (início) e end (fim), e retorna um array contendo todos os números
 a partir do valor start até o valor end (incluindo-o).
 Em seguida, escreva a função sum que recebe um array de números como argumento e retorna a soma desses números. Execute o programa 
 anterior e veja se o resultado retornado é de fato 55.
 */
var range = function(start,end,step) {
    if (!step) { step = 1; }
    var array = [];
    for (var i = start; start <= end ? i <= end : i >= end; i += step) {
        array.push(i);
    }
    return array;
};
var sum = function(array) {
    var s = 0;
    for (var i = 0; i < array.length; i++) { 
        s += array[i];
    }
    return s;
};

console.log(sum(range(1,10)));