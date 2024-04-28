/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor verdadeiro"
*/

/* 
Valores considerados falsos:
false
0
'' "" ``
null / undefined
NaN
 */

console.log(!![]) // avalia se é false ou true

console.log(false && true) // retorna false
console.log(true || false) // retorna true
console.log(0 && 'String') // retorna 0
console.log('String' || null) // retorna 'String'

