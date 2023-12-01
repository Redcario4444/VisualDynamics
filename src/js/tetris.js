/* TODO BARRA ESPACIADORA QUE CAIGA ABAJO*/

const I = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

const O = [
    [1, 1],
    [1, 1]
];

const T = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
];

const J = [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
];

const L = [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];

const S = [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
];

const Z = [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
];

const COLORES = {
    I: "cyan",
    O: "yellow",
    T: "purple",
    J: "blue",
    L: "orange",
    S: "green",
    Z: "red"
};

const PIEZAS = [
    [I, COLORES.I],
    [O, COLORES.O],
    [T, COLORES.T],
    [J, COLORES.J],
    [L, COLORES.L],
    [S, COLORES.S],
    [Z, COLORES.Z]
];

class Pieza {
    constructor(forma, color) {
        this.forma = forma;
        this.color = color;
        this.posicion = {x: 0, y: 0};
    }

    mover(direccion) {
        console.log(`Moviendo pieza desde x: ${this.posicion.x}, y: ${this.posicion.y}`);
        switch (direccion) {
            case 'izquierda':
                this.posicion.x -= 1;
                break;
            case 'derecha':
                this.posicion.x += 1;
                break;
            case 'abajo':
                this.posicion.y += 1;
                break;
        }
        console.log(`Pieza movida a x: ${this.posicion.x}, y: ${this.posicion.y}`);
    }

    rotar() {
        let formaOriginal = this.forma.map(fila => fila.slice());

        for (let y = 0; y < this.forma.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [this.forma[x][y], this.forma[y][x]] = [this.forma[y][x], this.forma[x][y]];
            }
        }

        this.forma.forEach(row => row.reverse());

        if (juego.tablero.verificarColision(this)) {
            this.forma = formaOriginal;
        } else {
            console.log("Rotando pieza");
        }
        console.log(`Rotación completada. Nueva forma de la pieza: ${this.forma}`);
    }
}

class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.cuadricula = this.iniciarCuadricula();
    }

    iniciarCuadricula() {
        return Array.from({length: this.filas}, () => Array(this.columnas).fill(null));
    }

    agregarPieza(pieza) {
        pieza.forma.forEach((fila, y) => {
            fila.forEach((valor, x) => {
                let cuadriculaY = y + pieza.posicion.y;
                let cuadriculaX = x + pieza.posicion.x;

                if (valor !== 0 && cuadriculaY >= 0 && cuadriculaY < this.filas && cuadriculaX >= 0 && cuadriculaX < this.columnas) {
                    if (!this.cuadricula[cuadriculaY][cuadriculaX]) {
                        this.cuadricula[cuadriculaY][cuadriculaX] = pieza.color;
                    }
                }
            });
        });
        console.log(`Pieza agregada al tablero en posición x: ${pieza.posicion.x}, y: ${pieza.posicion.y}`);
    }

    verificarLineaCompleta() {
        let lineasCompletadas = 0;
        for (let y = 0; y < this.filas; y++) {
            if (this.cuadricula[y].every(valor => valor !== null)) {
                this.cuadricula.splice(y, 1);
                this.cuadricula.unshift(Array(this.columnas).fill(null));
                lineasCompletadas++;
            }
        }

        if (lineasCompletadas > 0) {
            switch (lineasCompletadas) {
                case 1:
                    juego.puntuacion += 100;
                    break;
                case 2:
                    juego.puntuacion += 300;
                    break;
                case 3:
                    juego.puntuacion += 500;
                    break;
                case 4:
                    juego.puntuacion += 800;
                    break;
            }

            juego.actualizarNivel();
            actualizarPuntuacionYnivel();
        }
    }


    verificarColision(pieza) {
        console.log("Verificando colisión para pieza en posición x: " + pieza.posicion.x + ", y: " + pieza.posicion.y);
        console.log("Forma de la pieza: ", pieza.forma);
        for (let y = 0; y < pieza.forma.length; y++) {
            for (let x = 0; x < pieza.forma[y].length; x++) {
                if (pieza.forma[y][x] !== 0) {
                    const cuadriculaY = y + pieza.posicion.y;
                    const cuadriculaX = x + pieza.posicion.x;

                    if (cuadriculaY < 0) continue;

                    if (cuadriculaX < 0 || cuadriculaX >= this.columnas || cuadriculaY >= this.filas) {
                        console.log(`Colisión detectada en el borde. X: ${cuadriculaX}, Y: ${cuadriculaY}`);
                        return true;
                    }

                    if (this.cuadricula[cuadriculaY] && this.cuadricula[cuadriculaY][cuadriculaX]) {
                        console.log(`Colisión detectada con otra pieza. X: ${cuadriculaX}, Y: ${cuadriculaY}`);
                        return true;
                    }
                }
            }
        }
        return false;
    }
}

class Juego {
    constructor() {
        this.tablero = new Tablero(20, 10);
        this.piezaActual = null;
        this.puntuacion = 0;
        this.nivel = 1;
        this.tiempoUltimoMovimiento = 0;
        this.intervaloMovimiento = 1000;
        this.iniciar();
    }

    iniciar() {
        crearCuadriculaDOM(this.tablero);
        this.piezaActual = this.generarNuevaPieza();
        mostrarSiguientePieza(this.piezaActual);
        requestAnimationFrame(this.actualizar.bind(this));
        iniciarContadorTiempo();
    }

    reiniciar() {
        this.tablero = new Tablero(20, 10);
        actualizarTableroDOM(this.tablero);
        this.piezaActual = null;
        this.puntuacion = 0;
        this.nivel = 1;
        this.tiempoUltimoMovimiento = 0;
        this.intervaloMovimiento = 1000;
        detenerContadorTiempo();
        this.iniciar();
    }

    generarNuevaPieza() {
        const indiceAleatorio = Math.floor(Math.random() * PIEZAS.length);
        const [forma, color] = PIEZAS[indiceAleatorio];
        const nuevaPieza = new Pieza(forma, color);

        nuevaPieza.posicion.x = Math.floor(this.tablero.columnas / 2) - Math.floor(forma[0].length / 2);
        nuevaPieza.posicion.y = 0;

        if (this.tablero.verificarColision(nuevaPieza)) {
            console.log("Fin del juego. Puntuación final:", this.puntuacion);
            return null;
        }

        const indiceSiguiente = (indiceAleatorio + 1) % PIEZAS.length;
        const [siguienteForma, siguienteColor] = PIEZAS[indiceSiguiente];
        mostrarSiguientePieza(new Pieza(siguienteForma, siguienteColor));

        return nuevaPieza;
    }

    actualizar(tiempoActual) {
        if (!this.tiempoUltimoMovimiento) {
            this.tiempoUltimoMovimiento = tiempoActual;
        }

        const deltaTiempo = tiempoActual - this.tiempoUltimoMovimiento;
        if (this.piezaActual && deltaTiempo > this.intervaloMovimiento) {
            this.moverPiezaActual('abajo');
            this.tiempoUltimoMovimiento = tiempoActual;
        }

        actualizarTableroDOM(this.tablero);
        requestAnimationFrame(this.actualizar.bind(this));
    }

    moverPiezaActual(direccion) {
        const posicionOriginal = {...this.piezaActual.posicion};
        this.piezaActual.mover(direccion);
        actualizarTableroDOM(this.tablero);

        if (this.tablero.verificarColision(this.piezaActual)) {
            this.piezaActual.posicion = posicionOriginal;

            if (direccion === 'abajo') {
                this.tablero.agregarPieza(this.piezaActual);
                actualizarTableroDOM(this.tablero);
                this.tablero.verificarLineaCompleta();
                this.piezaActual = this.generarNuevaPieza();
                actualizarTableroDOM(this.tablero);
            }
        }
    }

    rotarPiezaActual() {
        this.piezaActual.rotar();
        if (this.tablero.verificarColision(this.piezaActual)) {
            this.piezaActual.rotar();
        }
    }

    actualizarNivel() {
        let nivelAnterior = this.nivel;
        this.nivel = Math.floor(this.puntuacion / 1000) + 1;

        if (this.nivel > nivelAnterior) {
            this.intervaloMovimiento = Math.max(200, this.intervaloMovimiento - 100);
        }
    }
}

function control(juego, event) {
    if (juego.piezaActual) {
        if (event.key === 'ArrowLeft') {
            juego.moverPiezaActual('izquierda');
        } else if (event.key === 'ArrowRight') {
            juego.moverPiezaActual('derecha');
        } else if (event.key === 'ArrowDown') {
            juego.moverPiezaActual('abajo');
        } else if (event.key === 'ArrowUp') {
            juego.rotarPiezaActual();
        }
    }
}

function actualizarPuntuacionYnivel() {
    document.getElementById('puntuacion').textContent = `Puntuación: ${juego.puntuacion}`;
    document.getElementById('nivel').textContent = `Nivel: ${juego.nivel}`;
}


function crearCuadriculaDOM(tablero) {
    const tableroDOM = document.getElementById('tablero-tetris');
    tableroDOM.innerHTML = ''; // Limpiar el tablero existente

    for (let y = 0; y < tablero.filas; y++) {
        const fila = document.createElement('div');
        fila.classList.add('fila-tetris');

        for (let x = 0; x < tablero.columnas; x++) {
            const celda = document.createElement('div');
            celda.classList.add('celda-tetris');
            fila.appendChild(celda);
        }

        tableroDOM.appendChild(fila);
    }
}

function actualizarTableroDOM(tablero) {
    const tableroDOM = document.getElementById('tablero-tetris').children;

    for (let y = 0; y < tablero.filas; y++) {
        const fila = tableroDOM[y].children;
        for (let x = 0; x < tablero.columnas; x++) {
            fila[x].style.backgroundColor = 'transparent';
        }
    }

    for (let y = 0; y < tablero.filas; y++) {
        const fila = tableroDOM[y].children;
        for (let x = 0; x < tablero.columnas; x++) {
            if (tablero.cuadricula[y][x]) {
                fila[x].style.backgroundColor = tablero.cuadricula[y][x];
            }
        }
    }

    if (juego.piezaActual) {
        juego.piezaActual.forma.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value !== 0) {
                    let posY = juego.piezaActual.posicion.y + dy;
                    let posX = juego.piezaActual.posicion.x + dx;
                    if (posY >= 0 && posY < tablero.filas && posX >= 0 && posX < tablero.columnas) {
                        tableroDOM[posY].children[posX].style.backgroundColor = juego.piezaActual.color;
                    }
                }
            });
        });
    }
}

function mostrarSiguientePieza(pieza) {
    const contenedor = document.getElementById('siguiente-pieza');
    contenedor.innerHTML = '';

    pieza.forma.forEach(fila => {
        const filaDiv = document.createElement('div');
        fila.forEach(valor => {
            const celdaDiv = document.createElement('div');
            celdaDiv.classList.add('celda-miniatura');
            if (valor) {
                celdaDiv.style.backgroundColor = pieza.color;
            }
            filaDiv.appendChild(celdaDiv);
        });
        contenedor.appendChild(filaDiv);
    });
}

Juego.prototype.actualizar = function (tiempoActual) {
    if (!juegoPausado) {
        if (!this.tiempoUltimoMovimiento) {
            this.tiempoUltimoMovimiento = tiempoActual;
        }

        const deltaTiempo = tiempoActual - this.tiempoUltimoMovimiento;
        if (this.piezaActual && deltaTiempo > this.intervaloMovimiento) {
            this.moverPiezaActual('abajo');
            this.tiempoUltimoMovimiento = tiempoActual;
        }

        actualizarTableroDOM(this.tablero);
        requestAnimationFrame(this.actualizar.bind(this));
    }
};

let juego;
let reiniciar = document.getElementById('reiniciar');
let juegoPausado = false;
let tiempoTranscurrido = 0;
let intervaloTiempo;
let tiempo = document.getElementById('tiempo');
let theme = document.getElementById('theme');

tiempo.addEventListener('click', () => {

});

function actualizarTiempo() {
    tiempoTranscurrido++;
    let minutos = Math.floor(tiempoTranscurrido / 60);
    let segundos = tiempoTranscurrido % 60;
    document.getElementById('tiempo').textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function iniciarContadorTiempo() {
    intervaloTiempo = setInterval(actualizarTiempo, 1000);
}

function detenerContadorTiempo() {
    clearInterval(intervaloTiempo);
}

document.addEventListener('DOMContentLoaded', () => {
    juego = new Juego();
    juego.iniciar();
    actualizarPuntuacionYnivel();
    document.addEventListener('keydown', (event) => control(juego, event));
    reiniciar.addEventListener('click', () => {
        juego.reiniciar();
        actualizarPuntuacionYnivel();
    });
    let song = false;
    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            juego.reiniciar();
            actualizarPuntuacionYnivel();
        }
        if (event.key === ' ') {
            if (!song) {
                let audio = new Audio(theme.src);
                audio.play();
                song = true;
            } else {
                audio.stop();
                song = false;
            }
        }
    });

    document.getElementById('pausar').addEventListener('click', function () {
        juegoPausado = !juegoPausado;
        if (juegoPausado) {
            this.textContent = 'Reanudar';
        } else {
            this.textContent = 'Pausar';
            requestAnimationFrame(juego.actualizar.bind(juego));
        }
    });

    /*    document.getElementById('volumen').addEventListener('input', function (event) {
            let volumen = event.target.value;
        });*/
});
