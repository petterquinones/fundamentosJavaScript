//**Javascript Engine:
// - Memory heap: guarda variables, funciones, Objetos
// - Call Stack: Pila donde se guardan cada una de las funciones que tenemos en nuestro programa. (Se le conoce como programación sincrona), se trabaja una tarea a la vez.
// (Programación Asincrona) => WebApi es lo que permite que js se comporte de forma asincrona.
// Promesas: es lo que nos va a permitir que nuestro codigo pase de codigo sincrono a un codigo Asincrono, tienen 3 estados:
// Pending -> Pendiente.
// fullfilled -> Viene cuando el estado se resuelva.
// Rejected -> La promesa no se resolvio por algun punto.
//  Las promesas trabajan 2 tipos de callbacks: Resove y reject
// Metodos que tienen las promesas:
// then() -> Se ejecuta cuando la promesa se resuelve.
//  y el catch() -> Sirve para capturar errores. */

//************************************************************************** */
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let operationSuccessful = true;
//         if (!operationSuccessful) {
//             resolve("Operación fue exitosa!");
//         } else {
//             reject("Fallo la operación!");
//         }
//     }, 3000);
// });

// promise
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });

//************************************************************************** */
//**Promesas Asincronas Async/Await */
// Devuelve una promesa, (Las promesas existieron despues de los callbacks).
//fetch: es una función nativa del navegador(webApi), sirve para hacer peticiones HTTP(traer datos de una API), viene del entorno browser

// function fetchData() {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then((response) => response.json())
//         .then((data)=>{ console.log(data)})
//         .catch((err)=>{console.log(err)})
// }

//** Importante para hacer peticiones HTTP -> Vale la pena repasar bien esta logica para hacer peticiones */
async function fetchData(){
    try{
        let response = await fetch("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

// console.log(fetchData())

const urls = [
  "https://rickandmortyapi.com/api/character",
  "https://rickandmortyapi.com/api/location",
  "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {
    try {
        for await (url of urls) {
            let response = await fetch(url);
            let data = response.json();
            console.log(data);
        }
    } catch (err) {
        console.log(err);
    }
    
}

console.log(fetchNewData());