const opciones = ["piedra", "papel", "tijera"];
const botonesJugada = document.querySelectorAll(".boton-jugada");

const tablaResultados = document.getElementById("resultados")
let contadorJugador = 0
let contadorMaquina = 0
const contadorHTMLjugador = document.getElementById("contador-usuario")

const contadorHTMLpc = document.getElementById("contador-ordenador")


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
            contadorJugador ++

        }
        else {
            resultado = "Has perdido"
            contadorMaquina ++
            

        }
        
        tablaResultados.innerHTML = resultado + ". Has elegido " + eleccionJugador + " y la máquina ha elegido " + eleccionPC + "."
        contadorHTMLjugador.innerText = "Tus puntos: " + contadorJugador
        contadorHTMLpc.innerText = "Puntos de la máquina: " + contadorMaquina
    });
});

