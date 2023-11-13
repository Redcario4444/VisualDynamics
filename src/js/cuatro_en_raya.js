// noinspection SpellCheckingInspection
/* VARIABLES Y CONSTANTES DE CONFIGURACIÓN */
const fichaAmarilla = "../../assets/img/cuatro_en_raya/moneda_amarilla.svg";
const fichaRoja = "../../assets/img/cuatro_en_raya/moneda_roja.svg";
const margen = 30;
const multiplicadorFlecha = 0.6;
const numeroFilasYColumnasTotales = 9;
const factorAltura = 0.7;
const timeoutRepintado = 250;
const espacioEntreCeldas = 5;
let timeoutCaidaInicial = 50;
let timeoutCaida = 150;
const emojiVelocidad = "⚡";

/* ELEMENTOD DEL DOM*/
const tablero = document.getElementById('tablero');
const flecha = document.getElementById('flecha');
const turnoTexto = document.getElementById('turno');
const botonReiniciar = document.getElementById('reiniciar');
const botonCerrarInicio = document.getElementById('cerrar-inicio');
const botonCerrarVictoria = document.getElementById('cerrar-victoria');
const modalInicio = document.getElementById('modal-inicio');
const fondoModalInicio = document.getElementById('fondo-modal-inicio');
const modalVictoria = document.getElementById('modal-victoria');
const fondoModalVictoria = document.getElementById('fondo-modal-victoria');
const botones = document.querySelectorAll('.botones-seleccion');

/* VARIABLES DE ESTADO */
let fichaCayendo;
let factorVelocidadCaida;
let estadoJuego;
let columnaActual;
let turnoJugador;
let juegoIniciado;
let juegoActivo;
let tiempoTranscurrido;

/* TEMPORIZADORES */
let temporizador;
let temporizadorAntirrebote;

/**
 * Función que actualiza la posición de la flecha hacia la izquierda.
 * @returns {void}
 */
function flechaIzquierda() {
    playSound('cursor');
    if (columnaActual > 0) {
        columnaActual--;
        actualizarFlecha();
    }
}

/**
 * Función que actualiza la posición de la flecha hacia la derecha.
 * @returns {void}
 */
function flechaDerecha() {
    playSound('cursor');
    if (columnaActual < numeroFilasYColumnasTotales - 1) {
        columnaActual++;
        actualizarFlecha();
    }
}

/**
 * Función que suelta la ficha en la columna actual.
 * Está bloqueada si ya hay una ficha cayendo o si la columna está llena.
 * Verifica si hay empate después de soltar la ficha.
 * @returns {void}
 */
function barraEspaciadora() {
    if (!fichaCayendo && hayEspacioEnColumna(columnaActual)) {
        soltarFicha(columnaActual);
        // Verificar si hay empate después de soltar la ficha
        if (esEmpate()) {
            alert("Empate");
            juegoActivo = false;
        }
    } else {
        alert("Columna llena, prueba con otra");
    }
}

/**
 * Función que reinicia el juego si no hay una ficha cayendo.
 * @returns {void}
 */
function manejoReinicio() {
    if (!fichaCayendo) {
        playSound('cursor');
        reiniciarJuego();
    }
}

/**
 * Función que cambia el turno del jugador de forma alterna y actualiza el contexto del turno.
 * @returns {void}
 */
function cambiarTurno() {
    turnoJugador = turnoJugador === 1 ? 2 : 1;
    turnoTexto.textContent = `Player ${turnoJugador}`;
    flecha.className = `flecha-jugador${turnoJugador}`;
    actualizarEstiloFlecha(turnoJugador);
}

/**
 * Función que actualiza el estilo de la flecha según el jugador.
 * @param jugador - número del jugador actual.
 * @returns {void}
 */
function actualizarEstiloFlecha(jugador) {
    flecha.className = `flecha-jugador${jugador}`;
    const colores = ['#f4c12f', '#cf1546'];
    const sombras = ['0.3rem 0.25rem 0.15rem rgba(242, 138, 11, 0.5)', '0.3rem 0.25rem 0.15rem rgba(157, 22, 57, 0.5)'];
    turnoTexto.style.color = colores[jugador - 1];
    turnoTexto.style.textShadow = sombras[jugador - 1];
}

/**
 * Función que muestra el modal de victoria.
 * @param ganador - número del jugador ganador.
 * @param tiempo - tiempo total de la partida.
 * @returns {void}
 */
function mostrarModalVictoria(ganador, tiempo) {
    document.getElementById('ganador').textContent = `¡Felicidades Player ${ganador}!`;
    document.getElementById('tiempo-final').textContent = `Tiempo Total: ${tiempo}`;
    document.getElementById('fondo-modal-victoria').style.display = 'block';
    document.getElementById('modal-victoria').style.display = 'block';
}

/**
 * Función que maneja la reproducción de sonidos.
 * @param soundId {string} - ID del elemento de audio.
 * @returns {void}
 */
function playSound(soundId) {
    let audioElement = document.getElementById(soundId);
    if (audioElement) {
        audioElement.play().catch(e => console.error("Error al reproducir el audio:", e));
    } else {
        console.error("Elemento de audio no encontrado:", soundId);
    }
}

/**
 * Función que verifica si hay espacio vertical en la columna.
 * @param col - número de la columna que se comprueba
 * @returns {boolean} - true si hay espacio, false si no lo hay.
 */
function hayEspacioEnColumna(col) {
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        if (!estadoJuego[i][col]) {
            return true;
        }
    }
    return false;
}

/**
 * Función que verifica si todas las celdas están llenas.
 * @returns {boolean} - true si todas las celdas están llenas, false si no lo están.
 */
function esEmpate() {
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales; j++) {
            if (!estadoJuego[i][j]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * Función que inicia el temporizador y forma el texto del tiempo.
 * @returns {void}
 */
function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tiempoTranscurrido++;
        let minutos = Math.floor(tiempoTranscurrido / 60);
        let segundos = tiempoTranscurrido % 60;

        minutos = minutos.toString().padStart(2, '0');
        segundos = segundos.toString().padStart(2, '0');

        document.getElementById('tiempo').textContent = `${minutos}:${segundos}`;
    }, 1000);
}

/**
 * Función que detiene el temporizador y reinicia el tiempo transcurrido.
 * @returns {void}
 */
function detenerTemporizador() {
    clearInterval(temporizador);
    tiempoTranscurrido = 0;
}

/**
 * Función que cambia la velocidad de caída de las fichas según el factor de velocidad de caída establecido. Además, da feedback sonoro al usuario e imprime el factor de velocidad de caída en el DOM.
 * @returns {void}
 */
function cambioVelocidad() {
    switch (factorVelocidadCaida) {
        case 1:
            factorVelocidadCaida = 2;
            playSound('up');
            break;
        case 2:
            factorVelocidadCaida = 4;
            playSound('up');
            break;
        case 4:
            factorVelocidadCaida = 0;
            playSound('up');
            break;
        case 0:
            factorVelocidadCaida = 0.5;
            playSound('down');
            break;
        default:
            factorVelocidadCaida = 1;
            playSound('up');
            break;
    }

    document.getElementById('valor-velocidad').innerHTML = factorVelocidadCaida === 0 ? "Infinity" :
        `<span style="font-size: 1.1rem">${emojiVelocidad}</span>${factorVelocidadCaida}x`;
}

/**
 * Función que inicia el juego y todos sus parámetros y listeners generales.
 * @returns {void}
 */
function iniciar() {
    juegoActivo = true;
    juegoIniciado = false;
    fichaCayendo = false;
    turnoJugador = 1;
    columnaActual = 4;
    tiempoTranscurrido = 0;
    factorVelocidadCaida = 1;
    estadoJuego = Array.from({length: numeroFilasYColumnasTotales}, () => new Array(numeroFilasYColumnasTotales).fill(null));
    actualizar();
    actualizarFlecha();
    actualizarEstiloFlecha(turnoJugador);
    detenerTemporizador();
    document.getElementById('tiempo').textContent = "00:00";
    botones.forEach(boton => {
        if (boton.id !== 'velocidad' && boton.id !== 'reiniciar') {
            boton.addEventListener('click', () => {
                playSound('cursor');
            });
        } else {
            if (boton.id === 'velocidad') {
                boton.addEventListener('click', () => {
                    cambioVelocidad();
                });
            }
            if (boton.id === 'reiniciar') {
                boton.addEventListener('click', () => {
                    manejoReinicio();
                });
            }
        }
        boton.addEventListener('mouseover', () => {
            playSound('cursor');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    iniciar();

    window.addEventListener('resize', () => {
        clearTimeout(temporizadorAntirrebote);
        temporizadorAntirrebote = setTimeout(() => {
            actualizar();
            actualizarFlecha();
        }, timeoutRepintado);
    });

    botonCerrarInicio.addEventListener('click', function () {
        modalInicio.style.display = 'none';
        fondoModalInicio.style.display = 'none';
        playSound('welcome');
    });

    botonCerrarVictoria.addEventListener('click', function () {
        modalVictoria.style.display = 'none';
        fondoModalVictoria.style.display = 'none';
        playSound('cursor');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'c') {
            if (juegoActivo) {
                modalInicio.style.display = 'none';
                fondoModalInicio.style.display = 'none';
                playSound('welcome');
            }
            modalVictoria.style.display = 'none';
            fondoModalVictoria.style.display = 'none';
            playSound('cursor');
        }

        if (!juegoActivo && e.key !== 'r') return;

        if (fichaCayendo && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

        switch (e.key) {
            case 'ArrowLeft':
                flechaIzquierda();
                break;
            case 'ArrowRight':
                flechaDerecha();
                break;
            case ' ':
                barraEspaciadora();
                break;
            case 'r':
                manejoReinicio();
                break;
            case 'v':
                cambioVelocidad();
                break;
            default:
                break;
        }
    });
});

/**
 * Función que calcula el espacio disponible para el tablero.
 * Calcula la altura de la ventana y resta la altura de los elementos fijos en el DOM, como el header, footer, etc.
 * @returns {number} - altura disponible para el tablero en píxeles.
 */
function calcularEspacioDisponible() {
    const alturaVentana = window.innerHeight;
    const elementosExcluidos = document.querySelectorAll('.header, footer, .container, h1');

    let alturaExcluidos = 0;
    elementosExcluidos.forEach(elemento => {
        const estilos = window.getComputedStyle(elemento);
        const margenSuperior = parseFloat(estilos.marginTop);
        const margenInferior = parseFloat(estilos.marginBottom);
        const alturaTotalElemento = elemento.offsetHeight + margenSuperior + margenInferior;
        alturaExcluidos += alturaTotalElemento;
    });
    return alturaVentana - alturaExcluidos;
}

/**
 * Función que crea el tablero con las dimensiones calculadas.
 * Itera sobre el número de filas y columnas totales y crea las celdas con sus dimensiones, estilos e imágenes.
 * @returns {void}
 */
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
            });

            celda.addEventListener('click', () => {
                if (!fichaCayendo && juegoActivo) {
                    soltarFicha(j);
                }
            });

            if (estadoJuego[i][j]) {
                colocarFicha(i, j, estadoJuego[i][j]);
            }
        }
    }
}

/**
 * Función que actualiza el tablero y las fichas.
 * Limpia el tablero existente, crea uno nuevo con las dimensiones actualizadas y reinicializa el estado del juego.
 * @returns {void}
 */
function actualizar() {
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
    crearTablero();
    actualizarFichas();
    ajustarProporcionFlecha();
    actualizarFlecha();
}

/**
 * Función que actualiza la posición de la flecha.
 * Calcula la posición de la flecha en función de la columna actual y la posición de la celda base.
 * @returns {void}
 */
function actualizarFlecha() {
    flecha.style.visibility = 'hidden';
    requestAnimationFrame(() => {
        const celdaBase = document.getElementById('celda-0-0');
        const anchoCelda = celdaBase.getBoundingClientRect().width;
        const alturaCelda = celdaBase.getBoundingClientRect().height;

        const anchoFlecha = parseFloat(window.getComputedStyle(flecha).width);
        const mitadAnchoFlecha = anchoFlecha / 2;
        const mitadAnchoCelda = anchoCelda / 2;

        const espacioTotal = espacioEntreCeldas * columnaActual + 5;
        const posicionIzquierdaFlecha = (columnaActual * anchoCelda) + espacioTotal + mitadAnchoCelda - mitadAnchoFlecha;

        flecha.style.width = `${anchoCelda}px`;
        flecha.style.left = `${posicionIzquierdaFlecha}px`;

        const margenVertical = -alturaCelda * factorAltura;
        flecha.style.top = `${tablero.offsetTop + margenVertical}px`;

        flecha.style.visibility = 'visible';
        actualizarEstiloFlecha(turnoJugador);
    });
}

/**
 * Función que ajusta las proporciones de la flecha en función de la celda base tras el redimensionamiento de la ventana.
 * @returns {void}
 */
function ajustarProporcionFlecha() {
    const celdaBase = document.getElementById('celda-0-0');
    const alturaCelda = celdaBase.getBoundingClientRect().height;
    const proporcionFuenteRem = alturaCelda / parseFloat(getComputedStyle(document.documentElement).fontSize) * multiplicadorFlecha;
    flecha.style.fontSize = `${proporcionFuenteRem}rem`;
}

/**
 * Función que actualiza las fichas en función de la celda base tras el redimensionamiento de la ventana.
 * @returns {void}
 */
function actualizarFichas() {
    const fichas = document.querySelectorAll('.ficha-img');
    fichas.forEach(ficha => {
        const col = ficha.getAttribute('data-col');
        const jugadorFicha = ficha.getAttribute('data-jugador');

        let filaActual = -1;
        for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
            // Es necesaria la coerción de tipos
            if (estadoJuego[i][col] == jugadorFicha) {
                filaActual = i;
                break;
            }
        }
        if (filaActual === -1) return;

        const celda = document.getElementById(`celda-${filaActual}-${col}`);
        ficha.style.top = '0';
        ficha.style.left = '0';
        ficha.style.height = `${celda.offsetHeight}px`;
        ficha.style.width = `${celda.offsetWidth}px`;
    });
}

/**
 * Función que dibuja la ficha en el tablero.
 * Crea un elemento img con la imagen de la ficha y la añade al DOM junto con todos sus estilos y atributos. Dentro contiene una función recursiva que hace caer la ficha hasta la posición final.
 * @param fila - número de la fila en la que se dibuja la ficha.
 * @param col - número de la columna en la que se dibuja la ficha.
 * @param jugador - número del jugador que ha soltado la ficha.
 * @param callback - función que se ejecuta una vez que la ficha ha terminado de caer.
 * @see caerFicha
 * @returns {void}
 */
function dibujarFicha(fila, col, jugador, callback) {
    let ficha = document.createElement('img');
    ficha.className = 'ficha-img';
    ficha.src = jugador === 1 ? fichaAmarilla : fichaRoja;
    ficha.setAttribute('data-col', col);
    ficha.setAttribute('data-jugador', jugador);
    ficha.style.width = '100%';
    ficha.style.height = '100%';

    let celdaInicio = document.getElementById(`celda-0-${col}`);
    celdaInicio.appendChild(ficha);

    /**
     * Función que hace caer la ficha hasta la posición final llamándose a sí misma de forma recursiva.
     * @param filaActual - número de la fila actual en la que se encuentra la ficha.
     * @see dibujarFicha
     * @returns {void}
     */
    function caerFicha(filaActual) {
        let siguienteCelda = document.getElementById(`celda-${filaActual}-${col}`);
        siguienteCelda.appendChild(ficha);

        if (filaActual < fila) {
            let velocidadCaida = factorVelocidadCaida === 0 ? 0 : timeoutCaida / factorVelocidadCaida;
            setTimeout(() => caerFicha(filaActual + 1), velocidadCaida);
        } else {
            let ganador = verificarVictoria();
            if (ganador) {
                detenerTemporizador();
                mostrarModalVictoria(ganador, document.getElementById('tiempo').textContent);
                juegoActivo = false;
            }
            if (callback) callback();
        }
    }

    let velocidadInicial = factorVelocidadCaida === 0 ? 0 : timeoutCaidaInicial / factorVelocidadCaida;
    setTimeout(() => caerFicha(0), velocidadInicial);
}

/**
 * Función que suelta la ficha en la columna actual.
 * Está bloqueada si ya hay una ficha cayendo o si la columna está llena.
 * Inicializa el temporizador si es la primera ficha que se suelta.
 * @see dibujarFicha
 * @see cambiarTurno
 * @param col - número de la columna en la que se suelta la ficha.
 */
function soltarFicha(col) {
    if (fichaCayendo || !hayEspacioEnColumna(col)) return;

    if (!juegoIniciado) {
        iniciarTemporizador();
        juegoIniciado = true;
    }

    fichaCayendo = true;
    for (let i = numeroFilasYColumnasTotales - 1; i >= 0; i--) {
        let celda = document.getElementById(`celda-${i}-${col}`);
        if (!celda.querySelector('.ficha-img')) {
            dibujarFicha(i, col, turnoJugador, () => {
                fichaCayendo = false;
                cambiarTurno();
            });
            estadoJuego[i][col] = turnoJugador;
            break;
        }
    }
}

/**
 * Función que coloca la ficha en la celda correspondiente y setea todos sus atributos y estilos.
 * @param fila - número de la fila en la que se coloca la ficha.
 * @param col - número de la columna en la que se coloca la ficha.
 * @param jugador - número del jugador que ha soltado la ficha.
 */
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

/**
 * Función que reinicia el juego.
 * Reinicia todos los parámetros y el estado del juego a sus valores iniciales.
 * @returns {void}
 */
function reiniciarJuego() {
    playSound('welcome');
    estadoJuego = Array.from({length: numeroFilasYColumnasTotales}, () => new Array(numeroFilasYColumnasTotales).fill(null));
    columnaActual = 4;
    actualizar();
    actualizarFlecha();
    turnoJugador = 1;
    flecha.className = 'flecha-jugador1';
    turnoTexto.textContent = "Player 1";
    actualizarEstiloFlecha(turnoJugador);
    detenerTemporizador();
    tiempoTranscurrido = 0;
    document.getElementById('tiempo').textContent = "00:00";
    juegoIniciado = false;
    juegoActivo = true;
}

/**
 * Función que verifica si hay victoria en el tablero.
 * Comprueba las combinaciones ganadoras en horizontal, vertical y diagonal.
 * @returns {*|null} - número del jugador ganador o null si no hay ganador.
 */
function verificarVictoria() {
    // Horizontales
    for (let i = 0; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i][j + 2] && estadoJuego[i][j] === estadoJuego[i][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Verticales
    for (let j = 0; j < numeroFilasYColumnasTotales; j++) {
        for (let i = 0; i < numeroFilasYColumnasTotales - 3; i++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i + 1][j] &&
                estadoJuego[i][j] === estadoJuego[i + 2][j] && estadoJuego[i][j] === estadoJuego[i + 3][j]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Diagonales de izquierda a derecha
    for (let i = 0; i < numeroFilasYColumnasTotales - 3; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i + 1][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i + 2][j + 2] && estadoJuego[i][j] === estadoJuego[i + 3][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }

    // Diagonales de derecha a izquierda
    for (let i = 3; i < numeroFilasYColumnasTotales; i++) {
        for (let j = 0; j < numeroFilasYColumnasTotales - 3; j++) {
            if (estadoJuego[i][j] && estadoJuego[i][j] === estadoJuego[i - 1][j + 1] &&
                estadoJuego[i][j] === estadoJuego[i - 2][j + 2] && estadoJuego[i][j] === estadoJuego[i - 3][j + 3]) {
                return estadoJuego[i][j];
            }
        }
    }
    return null;
}