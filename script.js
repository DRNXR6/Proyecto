

const contadores = document.getElementById("contadores");

const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");

const btnReset = document.getElementById("btnReset");
const mensajeGane = document.getElementById("mensajeGane");

let listaBotonesDisponibles = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];
let BtnTotales = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];

let victorias = 0;
let derrotas = 0;
let empate = 0;

let listaVictorias = JSON.parse(localStorage.getItem('victorias')) || [];
let listaDerrotas = JSON.parse(localStorage.getItem('derrotas')) || [];


// Lógica para que la máquina haga su movimiento
function maquina() {
    setTimeout(() => {
        // Elige un botón aleatorio de los disponibles

        // btnRandom = 0;
        // if(listaBotonesDisponibles != "") {

        // }
        let btnRandom = listaBotonesDisponibles[Math.floor(Math.random() * listaBotonesDisponibles.length)];


        // Asigna la 'O' al botón elegido por la máquina
        btnRandom.textContent = "O";
        
        // Elimina el botón de la lista de botones disponibles
        listaBotonesDisponibles = listaBotonesDisponibles.filter(btn => btn !== btnRandom);


        QuienGana();
    }, 400);
}

function QuienGana() {

    const combinaciones = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columnas
        [0, 4, 8], [2, 4, 6] // diagonales
    ];

    // Verificar para el jugador 'X'
    for (let comb of combinaciones) {
        if (BtnTotales[comb[0]].textContent === "X" && BtnTotales[comb[1]].textContent === "X" && BtnTotales[comb[2]].textContent === "X") {
            
            victorias++;
            
            localStorage.setItem("victorias", JSON.stringify(listaVictorias));

            for (let indexV = 0; indexV < listaVictorias.length; indexV++) {
                const element = listaVictorias[indexV];
                
                contadores.textContent = element;
                mensajeGane.textContent = "¡Has ganado!";
                return;
            }
        }
    }

    // Verificar para el jugador 'O'
    for (let comb of combinaciones) {
        if (BtnTotales[comb[0]].textContent === "O" && BtnTotales[comb[1]].textContent === "O" && BtnTotales[comb[2]].textContent === "O") {
            derrotas++;

            localStorage.setItem("derrotas", JSON.stringify(listaDerrotas));

            mensajeGane.textContent = "¡Has perdido!";
            return;
        }
    }

    // Comprobar si hay empate (todas las casillas están llenas)
    if (listaBotonesDisponibles.length === 0) {
        empate++;
        mensajeGane.textContent = "¡Has empatado!";
    }
}

// Agregar evento de clic en cada botón
for (let index = 0; index < BtnTotales.length; index++) {
    const element = BtnTotales[index];

    element.addEventListener("click", function () {

        // Asegurarse de que el botón esté vacío antes de jugar
        if (element.textContent.trim() === '') {
            element.textContent = "X";

            listaBotonesDisponibles = listaBotonesDisponibles.filter(btn => btn !== element);

            // Llamar a la función para que la máquina haga su movimiento
            maquina();
        }
    });
}

// Función para reiniciar el juego
btnReset.addEventListener("click", function () {

    for (let btn of BtnTotales) {
        btn.textContent = "";
    }
    
    listaBotonesDisponibles = [btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];
    mensajeGane.textContent = "";
});
