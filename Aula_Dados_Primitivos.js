//Dados primitivos.
//String
let fristName = 'Edmarcio'
console.log(fristName, typeof fristName) // comando typeof revela o tipo da variavel.
//Number
let age = 25
console.log(age, typeof age) // comando typeof revela o tipo da variavel.
//Boolean
let isAdult = true
console.log(isAdult, typeof isAdult)
//Null
let address = null
console.log(address, typeof address) // quando a variavel e vazia
//Undefined
let color
console.log(color, typeof color) // quando ainda não foi declarado
//Symbol
let id = Symbol('id')
let Objeto = {
  [id]: 34529047,
}
console.log(Objeto[id])

/*
String: Sequências de caracteres, usadas para representar texto. Ex.: "Olá, mundo!".

Number: Representa tanto números inteiros quanto de ponto flutuante. Ex.: 42, 3.14.

BigInt: Para números inteiros muito grandes que o tipo Number não pode representar.

Boolean: Tem dois valores possíveis, true ou false, usado para lógicas de verdadeiro ou falso.

Undefined: Indica que uma variável foi declarada mas ainda não foi atribuído um valor.

Null: Representa a intencional ausência de valor de objeto.

Symbol: Introduzido no ES6, representa valores únicos que não são iguais a nenhum outro valor.
*/
