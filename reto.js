//** Reto:
// requerimietos:
// - El usuario debe poder ingresar Usuario y contraseña.
// - El sistema debe ser capaz de validar si el usuario y contraseña ingresados existe en la BD.
// - Si el usuari y contraseña son correctos el sistema debe mostrar un mensaje de bienvenida y mostrar el timeLine del usuario.
// - Si son incorrectos el sistema debe mostrar un mensaje de error y no mostrar ningun TimeLine.
//   */

// Base de datos

const datosUsuarios = [
    {
        usuario: "manuel",
        clave: "manuel123"
    },
    {
        usuario: "andres",
        clave: "andres123'"
    },
    {
        usuario: "ana",
        clave: "ana123",
    }
];


const usersTimeline = [
    {
        username: "Estefany",
        timeline: "Me encata Javascript!",
    },
    {
        username: "Oscar",
        timeline: "Bebeloper es lo mejor!",
    },
    {
        username: "Mariana",
        timeline: "A mi me gusta más el café que el té",
    },
    {
        username: "Andres",
        timeline: "Yo hoy no quiero trabajar",
    },
];

const username = prompt("Cual es tu usuario.");
const password = prompt("Ingrese su contraseña.")

function usuarioExiste(username, password){
    for(let i = 0; i < datosUsuarios.length; i++){
        if(datosUsuarios[i].usuario === username && datosUsuarios[i].clave === password){
            console.log("* Login es Correcto *");
            return true;
    }
}
return false;
}

function signIn(username, password){
    if(usuarioExiste(username, password)){
        alert(`Sesión iniciada ${username}`);
        console.log(usersTimeline)
    }
    else{
        alert("Usuario o contraseña Incorrecto.")
    }
}

signIn(username,password);
