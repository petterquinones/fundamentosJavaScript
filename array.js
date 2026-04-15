
//*************************************************************** */
// Forma 2. Array literal syntax.
// const numbers = [1,2,3,4];
// console.log(numbers);

// const sports = ['Voleibol', 'soccer', 'basket'];
// console.log(sports);

// const ingredientes = ['azucar', true, 2, {ingredientes: 'milk', cantidad: '1 cup'}, false]
// console.log(ingredientes);

// const firstSport = sports[0];
// console.log(firstSport);

// const fruits = Array('Apple', 'Banana', 'Orange');
// console.log(fruits);
//*************************************************************** */
//Mutabilidad
// fruits.push('Sandia');
// console.log(fruits);
// const tamanioArray = fruits.length;
// console.log('Tamaño array frutas: ' + tamanioArray);
//*************************************************************** */
//Inmutabilidad
// no modifica el array original, crea una copia con los datos del anterior.
// const newFruits = fruits.concat(['Piña', 'Cereza']);
// console.log(newFruits);
//Saber si un array es un array, da como respuesta un boolean.
// const isArray = Array.isArray(fruits);
// console.log(isArray); 
//*************************************************************** */
//Suma de todos los elementos de un Array, recorrido de un array con incremento.
// let sum = 0;
// const numbers = [1,2,3,4,5,6,7,8];
// for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
// }
// console.log('Sumatoria: ' + sum);
//*************************************************************** */
//Metodo push
// const countries = ['Colombia', 'España', 'Inglaterra']
// console.log(countries);

// countries.push('Portugal');
// countries.push('Estados Unidos');
// countries.push('Italia');
// countries.push('Francia');
// console.log(countries);
//*************************************************************** */
//Pop, elimina el ultimo elemento y lo devuelve como valor.

// const country = countries.pop();
// console.log(country);
// console.log(countries);
//*************************************************************** */
//Transformando con Map(): Permite transformar una lista de datos en una nueva lista si alterar el original
// const numbers = [1,2,3,4,5,6,7,8];
// const squaredNumbers =  numbers.map(num => num * num);
// console.log(numbers);
// console.log(squaredNumbers);
//*************************************************************** */
//ForEach: Imprime los datos con el console.log()
// const iterarNumbers = numbers.forEach( num => console.log(num));
// console.log(iterarNumbers);

//Pasar de Farenheit a Celcius (Conversión de temperaturas).
// const temperaturaFarenheit = [32, 68, 95, 104, 212];
// const temperatureCelsius = temperaturaFarenheit.map(temp =>(5/9)*(temp-32))
// console.log('Temperatura Farenheit : ' + temperaturaFarenheit);
// console.log('Temperatura Celsius: ' + temperatureCelsius);
//*************************************************************** */
//Sumatoria con ForEach
// const numbers = [ 2,3,4,5,6,7,8,9,1];
// let sum = 0;
// const sumatoria = numbers.forEach(num =>{   
//     sum += num;
// })
// console.log(sum);
//*************************************************************** */
//FILTER: Crea un nuevo array con elementos que cumplen una condicióndada por una función.
//Numeros pares
//const numbers = [ 2,3,4,5,6,7,8,9,1];
// const numberFilter = numbers.filter( number => number % 2 === 0)
// console.log('Array completo: ', numbers);
// console.log('Pares', numberFilter);
//*************************************************************** */
//REDUCE:  Ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un unico valor.
//Caso 1: Reducir los elementos de un array, algo como una sumatoria.
// const numbers = [ 2,3,4,5,6,7,8,9,1];
// const numberReduce = numbers.reduce((acumulador, valorActual) => acumulador + valorActual, 0) ;
// console.log(numberReduce);
//*************************************************************** */
//caso 2.
// const words = ['apple', 'banana','uva','uva','uva'];
// const wordFrecuency = words.reduce((acu, current) => {
//     if(acu[current]){
//         acu[current]++;
//     }else{
//         acu[current] = 1;
//     }
//     return acu
// }, {})
// console.log(wordFrecuency)
//*************************************************************** */
//find(): devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
//findIndex(): devuelve la posición donde esta el elemento que satisface la función.
// const numberMultiple05 = [5,10,15,20];
/* 
const firstNumberGreaterThan10 = numberMultiple05.filter( number =>{
    if(number > 15)
    {
        return number;
    }
});

console.log('Array: ', numberMultiple05);
console.log('Mayor 15: ', firstNumberGreaterThan10);

const randoNumber = [2,3,4,6,3,8,9,0];
const indexNumber = randoNumber.findIndex(number => number > 4);

console.log('Array: ', randoNumber);
console.log('FindIndex', indexNumber); */

//*************************************************************** */
/** Segmentación con Slice(): Crea una copia superficial de una porción del array, especificada por indices de inicio y fin, (fin no incluido).
Con un solo parametro , devuelve desde la posición indicada hasta el final.
const animalesUno = animales.slice(3);
cuando se usan 2 parametros, el primer parametro es de donde inicia la recolección de datos, y el ultimo no se inluye.
Cuando tenemos muchos datos, y queremos capturar desde el final, podemos contar con numeros negativos.

const animales = ["Hormiga","Elefante", "Perro", "Gato", "Tigre", "raton", "Vaca", "Caballo", "Camello"];

const animalesUno = animales.slice(3);
const animalesDos = animales.slice(2,7);

console.log(animalesUno);
imprime: [ 'Gato', 'Tigre', 'raton', 'Vaca', 'Caballo', 'Camello' ]

console.log(animalesDos);
imprime: [ 'Perro', 'Gato', 'Tigre', 'raton', 'Vaca' ]
*/

//*************************************************************** */
/**
 * Spread Operator: Abre la puerta a manipular array de forma limpia, segura y expresiva, con solo tres puntos (...) puedes copiar arrays sin mutar los originales, combinar varios en 1 solo, crear nuevos arrays con elementos adicionales e incluso pasar valores directamente como parametros.
 */
// Copiar array sin mutar los originales:
// const originalArray = [1,2,3,4,5];
// const copyOriginalArray = [...originalArray];

// console.log(originalArray);
// console.log(copyOriginalArray);

//Combinar Arrays y agregar elementos extras.
// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,0];

// const mixArray = [...array1, ...array2];
// console.log(mixArray);
//Adicionarle elemenos a un array desde otro array.
// const arrayWithAdditionalElements = [...array1, 6,7,8];
// console.log(arrayWithAdditionalElements);

//Pasar varios argumentos a una función

// function suma (a,b,c){
//     return a + b + c;
// }

// const numbers = [1,2,3];

// const result = suma(...numbers);

// console.log(result);

