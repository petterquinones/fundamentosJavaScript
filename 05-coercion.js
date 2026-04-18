//Coerción implicita.
//Pasa que con string el signo más es interpretado como una signo para concatenar.
//** 
// console.log("5" + 3 ); 
// console.log("5" - 3); 
// */

//Conversión explicita.
const numero = "42";
const num = Number(numero);

console.log(typeof num, num);