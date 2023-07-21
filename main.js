


let numeroUsuario;

let numeroAleatorio = Math.round(Math.random() * 20 +1); //genera un numero aleatorio entre 1 y 10

alert("bienvenido al juego de adivinar el numero \n tienes 5 intentos \n el numero misterioso va del 1 al 20 \n suerte!");
let nombreUsuario = prompt("ingrese nombre o apodo");

let intentos = 0;

function pedirNumero(){
    numeroUsuario = parseInt(prompt("ingrese numero"));
    intentos++;
    if (intentos < 4) {
        alert("te quedan " + (5-intentos) +" intentos");
    }
    
    
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
    if (intentos === 4 && numeroAleatorio != numeroUsuario){
    alert("Atento " + nombreUsuario + "! te queda tan solo 1 intento!!");
    }
    else if (intentos === 5 && numeroAleatorio != numeroUsuario) {
        alert("Bueno," + nombreUsuario + " te quedaste sin intentos!, ahora ponete a laburar!");
    }

}

while (numeroAleatorio != numeroUsuario && intentos < 5) {
        pedirNumero();
        verificarNumero(numeroUsuario);
        verificarIntentos();
}

