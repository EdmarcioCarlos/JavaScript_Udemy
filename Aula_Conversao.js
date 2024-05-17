//Static
//C, C++, Java, TypeScript
//Dynamic
//Pyton, Javascript, Ruby, PHP

let age = '25',
  age_F = '25.5'
console.log(age, typeof age)

// parseInt() converte a varivei antiga para int
age = parseInt(age)
console.log(age, typeof age)

// parseFloat() converte a varivei antiga para float
age_F = parseFloat(age_F)
console.log(age_F, typeof age_F)

//Unario(+) exetuda tanto int como float
age = +age
console.log(age, typeof age)
age_F = +age_F
console.log(age_F, typeof age_F)

//Number (Numero) exetuda tanto int como float
age = Number(age)
console.log(age, typeof age)

/*
 * Usar int e flot somente quando tiver certeza que os valores precisão ser assim.
 * Number para String
 * age = age.toString()
 * age = String(age)
 * Converter Número para Boolean em JavaScript qual quer numero diferente de 0 e igual a true
 */
