// noinspection SpellCheckingInspection

const fichaAmarilla = "../../assets/img/cuatro_en_raya/moneda_amarilla.svg";
const fichaRoja = "../../assets/img/cuatro_en_raya/moneda_roja.svg";
const tablero = document.getElementById('tablero');
const flecha = document.getElementById('flecha');
const turno = document.getElementById('turno');
const botonReiniciar = document.getElementById('reiniciar');
const margen = 30;
const multiplicadorFlecha = 0.6;
const numeroFilasYColumnasTotales = 9;
const espacioEntreCeldas = 5;
const timeoutCaidaInicial = 0;
const timeoutCaida = 0;
let columnaActual = 4;
let turnoJugador = 1;
let temporizadorAntirrebote;
let estadoJuego = Array.from({length: numeroFilasYColumnasTotales}, () => new Array(numeroFilasYColumnasTotales).fill(null));
let fichaCayendo = false;
let juegoIniciado = false;
let juegoActivo = true;
let tiempoTranscurrido = 0;
let temporizador;

flecha.classList.add('flecha-jugador1');
turno.textContent = "Player 1";
turno.style.color = "#f4c12f";
turno.style.textShadow = "0.3rem 0.25rem 0.15rem rgba(242, 138, 11, 0.5)";

document.addEventListener('DOMContentLoaded', () => {
    actualizar();
    actualizarFlecha();

    window.addEventListener('resize', () => {
        clearTimeout(temporizadorAntirrebote); // Limpia el temporizador existente
        temporizadorAntirrebote = setTimeout(() => {
            actualizar();
            actualizarFlecha();
        }, 250); // Espera 250 ms después de la última llamada para ejecutar la función
    });

    botonReiniciar.addEventListener('click', reiniciarJuego);

    // Mover la flecha con las flechas del teclado
    document.addEventListener('keydown', (e) => {
        if (!juegoActivo && e.key !== 'r') return; // No hacer nada si el juego no está activo (excepto para reiniciar)

        if (fichaCayendo && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return; // No hacer nada si una ficha ya está cayendo, excepto para las flechas de movimiento

        if (!fichaCayendo && e.key === 'r') {
            reiniciarJuego();
        }

        if (e.key === 'ArrowLeft' && columnaActual > 0) {
            columnaActual--;
            console.log("=>(cuatro_en_raya.js:55) columnaActual", columnaActual);
            actualizarFlecha();
        } else if (e.key === 'ArrowRight' && columnaActual < numeroFilasYColumnasTotales - 1) {
            columnaActual++;
            actualizarFlecha();
        } else if (e.key === ' ' && !fichaCayendo) {
            if (!hayEspacioEnColumna(columnaActual)) {
                alert("Columna llena, prueba con otra");
                return;
            }
            soltarFicha(columnaActual);
            if (esEmpate()) {
                alert("Empate");
                juegoActivo = false;
            }
        }
    });

});

function calcularEspacioDisponible() {
    const alturaVentana = window.innerHeight;
    const elementosExcluidos = document.querySelectorAll('.header, footer, .container, h1');

    let alturaExcluidos = 0;
    elementosExcluidos.forEach(elemento => {
        const estilos = window.getComputedStyle(elemento);
        const margenSuperior = parseFloat(estilos.marginTop);
        const margenInferior = parseFloat(estilos.marginBottom);
        const alturaTotalElemento = elemento.offsetHeight + margenSuperior + margenInferior;

        // Imprime la información detallada de cada elemento
        //console.log(`Elemento: ${elemento.tagName} - Clase: ${elemento.className} - Altura: ${elemento.offsetHeight} - Margen superior: ${margenSuperior} - Margen inferior: ${margenInferior}`);

        alturaExcluidos += alturaTotalElemento;
    });

    console.log(`Altura total excluida: ${alturaExcluidos}`);
    return alturaVentana - alturaExcluidos;
}

function crearTablero() {
    const espacioDisponible = calcularEspacioDisponible() - margen;
    const alturaCelda = Math.floor(espacioDisponible / numeroFilasYColumnasTotales) - espacioEntreCeldas;

    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        let fila = tablero.insertRow();
        for (let j = 0; j < numeroFilasYColumnasTotales; j++) {
            let celda = fila.insertCell();
            celda.id = `celda-${i}-${j}`;
            celda.style.width = `${alturaCelda}px`;
            celda.style.height = `${alturaCelda}px`;
            celda.style.position = 'relative';

            // Crear el div para el SVG negativo
            let svgNegativo = document.createElement('div');
            svgNegativo.className = 'svg-negativo';
            svgNegativo.style.backgroundImage = 'url(../../assets/img/cuatro_en_raya/moneda_negativo.svg)';
            svgNegativo.style.width = '100%';
            svgNegativo.style.height = '100%';
            celda.appendChild(svgNegativo);
            celda.addEventListener('mouseover', () => {
                if (juegoActivo) {
                    columnaActual = j;
                    actualizarFlecha();
                }
                columnaActual = j;
                actualizarFlecha();
            });

            celda.addEventListener('click', () => {
                if (!fichaCayendo && juegoActivo) {
                    soltarFicha(j);
                }
            });

            // Colocar la ficha si hay una en esta posición
            if (estadoJuego[i][j]) {
                colocarFicha(i, j, estadoJuego[i][j]);
            }
        }
    }
}

function actualizar() {
    // Limpiar el tablero existente
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
    crearTablero(); // Crea el tablero con nuevas dimensiones
    actualizarFichas();
    ajustarProporcionFlecha();
    actualizarFlecha();// Asegúrate de que la flecha esté correctamente posicionada
}

function actualizarFlecha() {
    flecha.style.visibility = 'hidden';
    requestAnimationFrame(() => {
        // Aquí dentro, el navegador ya ha terminado el proceso de layout y pintado
        const celdaBase = document.getElementById('celda-0-0');
        const anchoCelda = celdaBase.getBoundingClientRect().width;
        const alturaCelda = celdaBase.getBoundingClientRect().height;

        const anchoFlecha = parseFloat(window.getComputedStyle(flecha).width);
        const mitadAnchoFlecha = anchoFlecha / 2;
        const mitadAnchoCelda = anchoCelda / 2;

        // Ajuste para el cálculo de la posición izquierda de la flecha
        // Añade el espacio entre celdas para cada columna a la izquierda de la columna actual
        const espacioTotal = espacioEntreCeldas * columnaActual + 5;
        const posicionIzquierdaFlecha = (columnaActual * anchoCelda) + espacioTotal + mitadAnchoCelda - mitadAnchoFlecha;

        flecha.style.width = `${anchoCelda}px`;
        flecha.style.left = `${posicionIzquierdaFlecha}px`;

        // Colocar la flecha un poco por encima de la parte superior del tablero
        const margenVertical = -alturaCelda * 0.7; // 70% de la altura de la celda
        flecha.style.top = `${tablero.offsetTop + margenVertical}px`;

        // Hacer visible la flecha después de calcular su posición
        flecha.style.visibility = 'visible';
        console.log("Posición izquierda de la flecha calculada:", posicionIzquierdaFlecha);
        console.log("Top del tablero:", tablero.offsetTop);
        console.log("Altura de la celda:", alturaCelda);
        console.log("Margen vertical calculado:", margenVertical);
    });
}

function ajustarProporcionFlecha() {
    const celdaBase = document.getElementById('celda-0-0');
    const alturaCelda = celdaBase.getBoundingClientRect().height;
    const proporcionFuenteRem = alturaCelda / parseFloat(getComputedStyle(document.documentElement).fontSize) * multiplicadorFlecha;
    flecha.style.fontSize = `${proporcionFuenteRem}rem`; // Ajustar el tamaño en REM
}

function actualizarFichas() {
    const fichas = document.querySelectorAll('.ficha-img');
    fichas.forEach(ficha => {
        const col = ficha.getAttribute('data-col');
        const jugadorFicha = ficha.getAttribute('data-jugador'); // Obtener el jugador de la ficha

        // Encuentra la fila correcta para esta ficha
        let filaActual = -1;
        for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
            if (estadoJuego[i][col] == jugadorFicha) { // Usa == para comparar strings con números
                filaActual = i;
                break;
            }
        }
        if (filaActual === -1) return; // Si no hay fichas en esta columna, no hacer nada

        // Dentro de actualizarFichas, para cada ficha
        const celda = document.getElementById(`celda-${filaActual}-${col}`);
        ficha.style.top = '0'; // La ficha debería estar al principio de la celda
        ficha.style.left = '0';
        ficha.style.height = `${celda.offsetHeight}px`;
        ficha.style.width = `${celda.offsetWidth}px`;
    });
}


function dibujarFicha(fila, col, jugador, callback) {
    let ficha = document.createElement('img');
    ficha.className = 'ficha-img';
    ficha.src = jugador === 1 ? fichaAmarilla : fichaRoja;
    ficha.setAttribute('data-col', col);
    ficha.setAttribute('data-jugador', jugador);
    ficha.style.width = '100%';
    ficha.style.height = '100%';

    // Añade la ficha al DOM en la primera fila de la columna seleccionada
    let celdaInicio = document.getElementById(`celda-0-${col}`);
    celdaInicio.appendChild(ficha);

    // Función para mover la ficha de una fila a la siguiente
    function caerFicha(filaActual) {
        let siguienteCelda = document.getElementById(`celda-${filaActual}-${col}`);
        siguienteCelda.appendChild(ficha); // Mueve la ficha a la siguiente fila

        if (filaActual < fila) {
            setTimeout(() => caerFicha(filaActual + 1, callback), timeoutCaida); // Espera un poco antes de mover a la siguiente fila
        } else {
            let ganador = verificarVictoria();
            if (ganador) {
                console.log(`El jugador ${ganador} ha ganado!`);
                juegoActivo = false;
            }

            if (callback) callback(); // Llamar al callback una vez que la ficha ha terminado de caer
        }
    }

    // Comienza la animación
    setTimeout(() => caerFicha(0, callback), timeoutCaidaInicial);
}

function soltarFicha(col) {
    if (fichaCayendo || !hayEspacioEnColumna(col)) {
        return;
    }

    if (!juegoIniciado) {
        iniciarTemporizador();
        juegoIniciado = true;
    }

    fichaCayendo = true; // Establecer que una ficha está cayendo
    for (let i = numeroFilasYColumnasTotales - 1; i >= 0; i--) {
        let celda = document.getElementById(`celda-${i}-${col}`);
        if (!celda.querySelector('.ficha-img')) { // Si no hay una ficha en esta celda
            dibujarFicha(i, col, turnoJugador, () => {
                fichaCayendo = false; // Restablecer el estado una vez que la ficha ha caído
                cambiarTurno();
            });
            estadoJuego[i][col] = turnoJugador; // Actualiza el estado del juego
            break;
        }
    }
}

function hayEspacioEnColumna(col) {
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        if (!estadoJuego[i][col]) { // Si no hay una ficha en esta celda
            return true;
        }
    }
    return false;
}

function esEmpate() {
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales; j++) {
            if (!estadoJuego[i][j]) {
                return false; // Si encuentra una celda vacía, no es empate
            }
        }
    }
    return true; // Todas las celdas están llenas, es empate
}

function cambiarTurno() {
    turnoJugador = turnoJugador === 1 ? 2 : 1;
    // Actualizar la clase de la flecha según el jugador actual
    if (turnoJugador === 1) {
        flecha.classList.remove('flecha-jugador2');
        flecha.classList.add('flecha-jugador1');
        turno.textContent = "Player 1";
        turno.style.color = "#f4c12f";
        turno.style.textShadow = "0.3rem 0.25rem 0.15rem rgba(242, 138, 11, 0.5)";
    } else {
        flecha.classList.remove('flecha-jugador1');
        flecha.classList.add('flecha-jugador2');
        turno.textContent = "Player 2";
        turno.style.color = "#cf1546";
        turno.style.textShadow = "0.3rem 0.25rem 0.15rem rgba(157, 22, 57, 0.5)";
    }
}

function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tiempoTranscurrido++;
        let minutos = Math.floor(tiempoTranscurrido / 60);
        let segundos = tiempoTranscurrido % 60;

        // Formatea los minutos y segundos para mostrar dos dígitos
        minutos = minutos.toString().padStart(2, '0');
        segundos = segundos.toString().padStart(2, '0');

        document.getElementById('tiempo').textContent = `${minutos}:${segundos}`;
    }, 1000); // Actualiza cada segundo
}

function detenerTemporizador() {
    clearInterval(temporizador);
    tiempoTranscurrido = 0; // Reinicia el contador
}


function colocarFicha(fila, col, jugador) {
    let celda = document.getElementById(`celda-${fila}-${col}`);
    let ficha = document.createElement('img');
    ficha.className = 'ficha-img svg-border';
    ficha.src = jugador === 1 ? fichaAmarilla : fichaRoja;
    ficha.setAttribute('data-col', col);
    ficha.setAttribute('data-jugador', jugador);
    ficha.style.position = 'absolute';
    ficha.style.top = '0';
    ficha.style.left = '0';
    ficha.style.height = `${celda.offsetHeight}px`;
    ficha.style.width = `${celda.offsetWidth}px`;
    celda.appendChild(ficha);
}

function reiniciarJuego() {
    // Restablecer el tablero y el estado del juego
    estadoJuego = Array.from({length: numeroFilasYColumnasTotales}, () => new Array(numeroFilasYColumnasTotales).fill(null));
    actualizar();
    // Restablecer la columna actual y actualizar la flecha
    columnaActual = 4;
    actualizarFlecha();

    // Restablecer el turno y actualizar la visualización del turno
    turnoJugador = 1;
    flecha.classList.remove('flecha-jugador2');
    flecha.classList.add('flecha-jugador1');
    turno.textContent = "Player 1";
    turno.style.color = "#f4c12f";
    turno.style.textShadow = "0.3rem 0.25rem 0.15rem rgba(242, 138, 11, 0.5)";

    // Detener y reiniciar el temporizador
    detenerTemporizador();
    tiempoTranscurrido = 0;
    document.getElementById('tiempo').textContent = "00:00";

    // Hemos dejado de jugar...
    juegoIniciado = false;
    juegoActivo = true;
}

function verificarVictoria() {
    // Verificar horizontalmente
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i][j + 2] && estadoJuego[i][j] === estadoJuego[i][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Verificar verticalmente
    for (let j = 0; j < numeroFilasYColumnasTotales; j++) {
        for (let i = 0; i < numeroFilasYColumnasTotales - 3; i++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i + 1][j] &&
                estadoJuego[i][j] === estadoJuego[i + 2][j] && estadoJuego[i][j] === estadoJuego[i + 3][j]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Verificar diagonalmente (de izquierda a derecha)
    for (let i = 0; i < numeroFilasYColumnasTotales - 3; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i + 1][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i + 2][j + 2] && estadoJuego[i][j] === estadoJuego[i + 3][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Verificar diagonalmente (de derecha a izquierda)
    for (let i = 3; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i - 1][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i - 2][j + 2] && estadoJuego[i][j] === estadoJuego[i - 3][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }

    return null; // No hay ganador todavía
}
