
/*
FUNCIONES
Las funciones no dejan de ser objetos, ya que tienen metodos, propiedades, atributos, y tambien pueden ser invocadas.
Caoacidades que tienen las funciones al igual que otros objetos.
1. Pasar funciones como argumentos -> CALLBACKS
RETORNAR FUNCIONES.
ASIGNAR FUNCIONES A VARIABLES -> EXPRESIÓN DE FUNCION.
    const a = function (){}
    pueden tener propiedades y métodos.
ANIDAR FUNCIONES -> NESTED FUNCTIONS
    - Es posible almacenar funciones en objetos -> 
FUNCIONES PURAS E IMPURAS.
FUNCIONES PURAS:
    SIDE EFFECTS
    1. Modificar variables globales.
    2. Modificar parametros.
    3. Solicitudes HTTP.
    4. Imprimir mensajes en pantalla o consola.
    5. Manipulación del DOM.
    6. Obtener la hora actual.
*/

//********************************** */
/*
function calculateDiscounterPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100;
    const priceWithDiscount = price - discount;

    return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscounterPrice(originalPrice, discountPercentage);

console.log(finalPrice);
*/

//FUNCION PURA
/**
function sum(a, b){
    return a + b;
}
*/

// FUNCION IMPURA
/**
function sum(a , b){
    console.log("Valor A", a);
    return a + b;
}
*/

//ARROW FUNCTIONS
const greeting = function(name){
    return `Hi, ${name}`;
}

const newGreeting = (name)=>{
    return `Hi, ${name}`;
}

const newGreeting2 = name=> `Hi, ${name}`

//Lexical Binding
const finctionalCharacter = {
    name : 'Uncle Ben',
    messageWithTradicionalFunction: function(message){
        console.log(`${this.name} says: ${message}`)
    },
    
    messageWithArrowFunction: message =>{
        console.log(`${this.name} says: ${message}`)
    }
}

finctionalCharacter.messageWithTradicionalFunction("Hi");


