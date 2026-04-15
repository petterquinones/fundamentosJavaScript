/**Objetos:
 * Es una estructura de datos que almacena información mediante propiedad y valor.
 * y que ademas puede contener funciones internas llamadas metodos, para generar interacciones.
 * objeto{
 * propiedad: Valor,
 * propiedad: Valor,
 * propiedad: valor,
 * Metodos: funciones (acciones).
 * }
 * 
 * Podemos borrar propiedades y métodos: 
 * delete object.propiedad.
 */

// const persona = {
//     nombre: "John",
//     edad: 30,
//     direccion: {
//         calle: "Calle del hospital",
//         numero: 14,
//         ciudad: "Madrid",
//         codPostal: 28012},
//     saludar(){
//         console.log("Hola Mi nombre es: ", this.nombre)
//     }
// }
// persona.saludar();

//Agregar propiedad o método
// persona.telefono = "555-55-55";
// persona.despedir = ()=>{
//     console.log("Adios...");
// }

//console.log(persona) 
//Llamar un metodo para imprimir:
// persona.despedir();

//Eliminar una propiedad o método:
// delete persona.saludar;
// delete persona.despedir;
// console.log(persona);

//************************************************************ */
// Función Constructora: Función que me construye objetos, cada vez que desee construir un objeto utilizo la palabra new (Muy importante)
// function Persona(nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// } 
// Podemos agregar luego mas propiedades o metodos a nuestra función constructora utilizando el prototype, el prototype es un objeto que vive dentro de la función constructora
//

// function Persona(nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// const persona1 = new Persona("Pedro", "Quiñones", 37);
// const persona2 = new Persona("Sara", "Londoño", 32);

// console.log(persona1)
// console.log(persona2)

//Prototype
// Persona.prototype.telefono = "555-55-5555"

//** ******************************************************** */
// Clases en Js: Son una forma de crear objetos en js por medio de una plantilla, js funciona con objetos y prototipos, mientras que POO funciona con herencia.
//La propiedad prototipo solo existe en funciones de objetos.

// class Persona {
//     constructor(nombre, apellido, edad){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }

//     saludar(){
//         console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`)
//     }

// }

// const persona1 = new Persona("Sara", "Lodoño", 32);
// persona1.saludar();

class Animal {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    emitirSonido(){
        console.log("El animal emite un sonido...  ");
    }
}

//Herencia en js 
class Perro extends Animal {
    constructor(nombre, tipo, raza){
        super(nombre, tipo);
        this.raza = raza;
    }

    emitirSonido(){
        console.log("El perro Ladra...");
    }

    correr(){
        console.log(`El perro ${this.nombre} corre Alegremente.`);
    }
}

const perrito = new Perro("Agustina", "Pequeñito", "Criollito");

console.log(perrito);
perrito.emitirSonido();
perrito.correr();

//Agregar un nuevo método

perrito.dormi = function(){
    console.log("El perrito ya esta durmiendo...")
}

perrito.dormi();