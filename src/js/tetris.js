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

let juego;
let reiniciar = document.getElementById('reiniciar');

document.addEventListener('DOMContentLoaded', () => {
    juego = new Juego();
    juego.iniciar();
    document.addEventListener('keydown', (event) => control(juego, event));
    reiniciar.addEventListener('click', () => {
        juego.reiniciar();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            juego.reiniciar();
        }
    });
});

class Pieza {
    constructor(forma, color) {
        this.forma = forma;
        this.color = color;
        this.posicion = {x: 0, y: 0};
    }

    mover(direccion) {
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
        console.log(`Moviendo pieza hacia ${direccion}: nueva posición x: ${this.posicion.x}, y: ${this.posicion.y}`);
    }

    rotar() {
        // Crea una copia de la forma actual para revertir si es necesario
        let formaOriginal = this.forma.map(fila => fila.slice());

        // Transpone la matriz de la forma
        for (let y = 0; y < this.forma.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [this.forma[x][y], this.forma[y][x]] = [this.forma[y][x], this.forma[x][y]];
            }
        }

        // Invierte el orden de cada fila para obtener una rotación de 90 grados
        this.forma.forEach(row => row.reverse());

        // Verifica colisión después de la rotación
        if (juego.tablero.verificarColision(this)) {
            // Revertir la forma si hay colisión
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
                    this.cuadricula[y + pieza.posicion.y][x + pieza.posicion.x] = pieza.color;
                }
            });
        });
        console.log(`Pieza agregada al tablero en posición x: ${pieza.posicion.x}, y: ${pieza.posicion.y}`);
    }

    verificarLineaCompleta() {
        for (let y = 0; y < this.filas; y++) {
            if (this.cuadricula[y].every(valor => valor !== 0)) {
                this.cuadricula.splice(y, 1);
                this.cuadricula.unshift(Array(this.columnas).fill(0));
                juego.puntuacion += 10;
            }
        }
    }

    verificarColision(pieza) {
        for (let y = 0; y < pieza.forma.length; y++) {
            for (let x = 0; x < pieza.forma[y].length; x++) {
                if (pieza.forma[y][x] !== 0) {
                    const cuadriculaY = y + pieza.posicion.y;
                    const cuadriculaX = x + pieza.posicion.x;

                    // Verificar colisiones con los bordes del tablero
                    if (cuadriculaX < 0 || cuadriculaX >= this.columnas) {
                        console.log(`Colisión detectada en el borde. X: ${cuadriculaX}, Y: ${cuadriculaY}`);
                        return true;
                    }

                    // Verificar colisiones con el fondo del tablero
                    if (cuadriculaY >= this.filas) {
                        console.log(`Colisión detectada en el fondo. X: ${cuadriculaX}, Y: ${cuadriculaY}`);
                        return true;
                    }

                    // Verificar colisiones con otras piezas
                    if (cuadriculaY >= 0 && this.cuadricula[cuadriculaY][cuadriculaX]) {
                        console.log(`Colisión detectada con otra pieza. X: ${cuadriculaX}, Y: ${cuadriculaY}`);
                        return true;
                    }
                }
            }
        }
        return false;
    }

    limpiarPieza(pieza) {
        // Recorre la cuadricula y elimina las celdas ocupadas por la pieza
        for (let y = 0; y < this.filas; y++) {
            for (let x = 0; x < this.columnas; x++) {
                if (this.cuadricula[y][x] === pieza.color) {
                    this.cuadricula[y][x] = null;
                }
            }
        }
    }

    colocarPieza(pieza) {
        pieza.forma.forEach((row, dy) => {
            row.forEach((value, dx) => {
                if (value !== 0) {
                    let posY = pieza.posicion.y + dy;
                    let posX = pieza.posicion.x + dx;

                    // Verificar que las coordenadas estén dentro del tablero
                    if (posY >= 0 && posY < this.filas && posX >= 0 && posX < this.columnas) {
                        this.cuadricula[posY][posX] = pieza.color;
                    }
                }
            });
        });
    }

    actualizarCuadricula(pieza) {
        this.limpiarPieza(pieza);
        this.colocarPieza(pieza);
    }
}

class Juego {
    constructor() {
        this.tablero = new Tablero(20, 10);
        this.piezaActual = null;
        this.puntuacion = 0;
        this.tiempoUltimoMovimiento = 0;
        this.intervaloMovimiento = 1000; // 1 segundo
        this.iniciar();
    }

    iniciar() {
        crearCuadriculaDOM(this.tablero);
        this.piezaActual = this.generarNuevaPieza();
        requestAnimationFrame(this.actualizar.bind(this));
    }

    reiniciar() {
        this.tablero = new Tablero(20, 10);
        this.piezaActual = null;
        this.puntuacion = 0;
        this.tiempoUltimoMovimiento = 0;
        this.intervaloMovimiento = 3000;
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
        console.log(`Generando nueva pieza de tipo ${color}. Posición inicial x: ${nuevaPieza.posicion.x}, y: ${nuevaPieza.posicion.y}`);
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

        if (this.tablero.verificarColision(this.piezaActual)) {
            // Si hay colisión, coloca la pieza actual en el tablero
            this.tablero.agregarPieza(this.piezaActual);
            this.tablero.verificarLineaCompleta();
            // Genera una nueva pieza
            if (this.piezaActual === null) {
                console.log("No se puede generar una nueva pieza. Fin del juego.");
                // Detener el juego o tomar otras acciones
                return;
            }
            this.piezaActual = this.generarNuevaPieza();
            if (this.piezaActual === null) {
                console.log("Fin del juego. Puntuación final:", this.puntuacion);
                console.log("No se puede generar una nueva pieza. Fin del juego.");
                return; // Detiene el juego si no se puede generar una nueva pieza
            }
            console.log("Pieza colisionó. Generando nueva pieza.");
        }

        console.log("Actualizando juego. Tiempo actual: ", tiempoActual);
        actualizarTableroDOM(this.tablero);
        requestAnimationFrame(this.actualizar.bind(this));
    }

    moverPiezaActual(direccion) {
        // Guarda la posición original de la pieza
        const posicionOriginal = {...this.piezaActual.posicion};

        // Intenta mover la pieza
        this.piezaActual.mover(direccion);

        // Verifica colisión después del movimiento
        if (this.tablero.verificarColision(this.piezaActual)) {
            // Si hay colisión, revierte al estado original
            this.piezaActual.posicion = posicionOriginal;
        } else {
            // Imprimir la posición de la pieza antes de actualizar el tablero
            console.log("Pieza actualizada a", this.piezaActual.posicion);
            // Actualiza el tablero con la nueva posición
            this.tablero.actualizarCuadricula(this.piezaActual);
        }
    }

    rotarPiezaActual() {
        // Rota la pieza actual y verifica colisiones
        this.piezaActual.rotar();
        if (this.tablero.verificarColision(this.piezaActual)) {
            // Si hay colisión, revierte la rotación
            this.piezaActual.rotar(); // Rotar de nuevo para revertir
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

function direccionOpuesta(direccion) {
    if (direccion === 'izquierda') return 'derecha';
    if (direccion === 'derecha') return 'izquierda';
    // Para 'abajo', no necesitamos revertir el movimiento
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
            const celda = fila[x];
            const valor = tablero.cuadricula[y][x];
            celda.style.backgroundColor = valor ? valor : 'transparent';
        }
    }
    console.log("Actualizando el tablero en el DOM");
}

