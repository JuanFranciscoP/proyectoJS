


let numeroUsuario;

let numeroAleatorio = Math.round(Math.random() * 10 +1); //genera un numero aleatorio entre 1 y 10

alert("bienvenido al juego de adivinar el numero \n tienes 3 intentos \n el numero misterioso va del 1 al 10 \n suerte!");
let nombreUsuario = prompt("ingrese nombre de usuario");

let intentos = 0;

function pedirNumero(){
    numeroUsuario = parseInt(prompt("ingrese numero"));

    intentos++;

    alert("te quedan " + (3-intentos) +" intentos");
}

function verificarNumero (numeroIngresado) {
    
    if (numeroAleatorio > numeroIngresado) {
        alert("no!! el numero misterioso es mayor al ingresado");
    } 
    else if (numeroAleatorio < numeroIngresado) {
        alert("el numero misterioso es menor al ingresado");
    }
    else {
        alert("Felicitaciones, " + nombreUsuario + " ganaste un Yate!, has acertado el numero en " + intentos + " intentos");
    };
}


function verificarIntentos() {
    if (intentos === 3){
        alert("lo siento " + nombreUsuario + " se te terminaron los cartuchos, mejor ponete a laburar");
    }
}

while (numeroAleatorio != numeroUsuario && intentos < 3) {
        pedirNumero();
        verificarNumero(numeroUsuario);
        verificarIntentos();
}