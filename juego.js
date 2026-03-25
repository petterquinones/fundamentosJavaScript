const numeroSecreto = Math.floor(Math.random() *10 + 1);

const numeroJugador = parseInt(prompt("Adivina el número secreto entre el 1 al 10"));

console.log(`${numeroJugador}`)

if(numeroJugador === numeroSecreto){
    console.log("Felicidades adivinaste el numero secreto.");
}else if(numeroJugador < numeroSecreto){
    console.log("Número demasiado menor al numero secreto");
}else{
    console.log("Número mucho mayor.");
}
