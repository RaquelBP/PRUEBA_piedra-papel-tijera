const opciones = ["piedra", "papel", "tijera"];
const botonesJugada = document.querySelectorAll(".boton-jugada");

const tablaResultados = document.getElementById("resultados")



botonesJugada.forEach(function(elemento) {
    elemento.addEventListener("click", function() {
        let eleccionJugador= this.dataset.jugada
        console.log(eleccionJugador)

        

        let randomNumber = Math.floor(Math.random() * 3)
        let eleccionPC=opciones[randomNumber]

        

        let resultado
        if (eleccionJugador === eleccionPC){
            resultado = "Empate"
        }
        else if (eleccionJugador === "piedra" && eleccionPC === "tijera" || eleccionJugador === "papel" && eleccionPC === "piedra" || eleccionJugador === "tijera" && eleccionPC === "papel"){
            resultado = "Has ganado"
        }
        else {
            resultado = "Has perdido"
        }
        
        tablaResultados.innerHTML = resultado + ". Has elegido " + eleccionJugador + " y la máquina ha elegido " + eleccionPC
    });
});

