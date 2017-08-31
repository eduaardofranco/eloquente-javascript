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