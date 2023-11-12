const fichaAmarilla = "../../assets/img/cuatro_en_raya/moneda_amarilla.svg";
const fichaRoja = "../../assets/img/cuatro_en_raya/moneda_roja.svg";
const tablero = document.getElementById('tablero');
const flecha = document.getElementById('flecha');
const margen = 30;
let columnaActual = 0;
let temporizadorAntirrebote;


document.addEventListener('DOMContentLoaded', () => {
    actualizarTableroYFlecha();

    window.addEventListener('resize', () => {
        clearTimeout(temporizadorAntirrebote); // Limpia el temporizador existente
        temporizadorAntirrebote = setTimeout(() => {
            actualizarTableroYFlecha();
        }, 250); // Espera 250 ms después de la última llamada para ejecutar la función
    });

    // Mover la flecha con las flechas del teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && columnaActual > 0) {
            columnaActual--;
            actualizarFlecha();
        } else if (e.key === 'ArrowRight' && columnaActual < 7) {
            columnaActual++;
            actualizarFlecha();
        } else if (e.key === ' ') {
            soltarFicha(columnaActual);
        }
    });
});

function calcularEspacioDisponible() {
    const alturaVentana = window.innerHeight;
    const elementosExcluidos = document.querySelectorAll('.header, footer, .container, h1');

// Calcula la altura total ocupada por los elementos excluidos
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
    const alturaCelda = Math.floor(espacioDisponible / 8);

    // Aquí puedes ajustar el tamaño de la celda en base a la variable 'tamañoCelda'
    for (let i = 0; i < 8; i++) {
        let fila = tablero.insertRow();
        for (let j = 0; j < 8; j++) {
            let celda = fila.insertCell();
            celda.id = `celda-${i}-${j}`;
            // Ajustar el tamaño de cada celda según el cálculo
            celda.style.width = `${alturaCelda}px`;
            celda.style.height = `${alturaCelda}px`;
            celda.addEventListener('click', () => soltarFicha(j));
        }
    }

    // Actualiza la flecha después de que el tamaño del tablero haya sido establecido
    actualizarFlecha();
}

function actualizarTableroYFlecha() {
    // Limpiar el tablero existente
    while (tablero.firstChild) {
        tablero.removeChild(tablero.firstChild);
    }
    crearTablero(); // Crea el tablero con nuevas dimensiones
    actualizarFlecha(); // Asegúrate de que la flecha esté correctamente posicionada
}

function actualizarFlecha() {
    const celdaBase = document.getElementById('celda-0-0');
    const anchoCelda = celdaBase.getBoundingClientRect().width;
    // Obtener el ancho de la flecha, en este caso, utilizando la variable CSS como ejemplo.
    const anchoFlecha = parseFloat(window.getComputedStyle(flecha).width);

    const mitadAnchoFlecha = anchoFlecha / 2;
    const mitadAnchoCelda = anchoCelda / 2;

    // Calcular la nueva posición izquierda de la flecha
    const posicionIzquierdaFlecha = (columnaActual * anchoCelda) + mitadAnchoCelda - mitadAnchoFlecha;

    flecha.style.left = `${posicionIzquierdaFlecha}px`;
}


function dibujarFicha(fila, col, jugador) {
    let ficha = document.createElement('img');
    ficha.className = 'ficha-img';
    ficha.src = jugador === 1 ? fichaAmarilla : fichaRoja;
    ficha.style.top = '0'; // Comienza en la primera fila

    // Añade la ficha al DOM en la primera fila de la columna seleccionada
    let celdaInicio = document.getElementById(`celda-0-${col}`);
    celdaInicio.appendChild(ficha);

    // Función para mover la ficha de una fila a la siguiente
    function caerFicha(filaActual) {
        let siguienteCelda = document.getElementById(`celda-${filaActual}-${col}`);
        siguienteCelda.appendChild(ficha); // Mueve la ficha a la siguiente fila

        if (filaActual < fila) {
            setTimeout(() => caerFicha(filaActual + 1), 100); // Espera un poco antes de mover a la siguiente fila
        }
    }

    // Comienza la animación
    setTimeout(() => caerFicha(0), 50);
}

let turnoJugador = 1;

function soltarFicha(col) {
    for (let i = 7; i >= 0; i--) {
        let celda = document.getElementById(`celda-${i}-${col}`);
        if (!celda.hasChildNodes()) {
            dibujarFicha(i, col, turnoJugador);
            turnoJugador = turnoJugador === 1 ? 2 : 1;
            break;
        }
    }
}