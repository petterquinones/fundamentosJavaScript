// --- Reto 1: Función que retorna un saludo ---
// Recibe "nombre" (string). Retorna un string con template literal: "Hola, {nombre}".
// Ejemplo: saludar('Óscar') → "Hola, Óscar"

// function saludar(nombre) {
//      console.log(`Hola, ${nombre}`)
// }
// const name = "Sara";
// saludar(name);

// --- Reto 2: Función que crea un objeto usuario (parámetros y retorno) ---
// Recibe "nombre" (string) y "edad" (número). Retorna un objeto { nombre, edad }.
// Los parámetros son las variables; los argumentos son los valores al invocar.

function crearUsuario(nombre, edad) {
     console.log(`Usuario ingresado Nombre:${nombre} tiene ${edad} años.`);
}

const name = "Sara";
const edad = 32;

crearUsuario(name, edad);