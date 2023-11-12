/* CONSTANTES */
const cartasPoker = [
    {id: 'ace_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/ace_of_clubs.svg'},
    {id: 'ace_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/ace_of_diamonds.svg'},
    {id: 'ace_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/ace_of_hearts.svg'},
    {id: 'ace_of_spades', svg: '../../assets/img/memory_cards/poker_cards/ace_of_spades.svg'},
    {id: '2_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/2_of_clubs.svg'},
    {id: '2_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/2_of_diamonds.svg'},
    {id: '2_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/2_of_hearts.svg'},
    {id: '2_of_spades', svg: '../../assets/img/memory_cards/poker_cards/2_of_spades.svg'},
    {id: '3_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/3_of_clubs.svg'},
    {id: '3_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/3_of_diamonds.svg'},
    {id: '3_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/3_of_hearts.svg'},
    {id: '3_of_spades', svg: '../../assets/img/memory_cards/poker_cards/3_of_spades.svg'},
    {id: '4_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/4_of_clubs.svg'},
    {id: '4_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/4_of_diamonds.svg'},
    {id: '4_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/4_of_hearts.svg'},
    {id: '4_of_spades', svg: '../../assets/img/memory_cards/poker_cards/4_of_spades.svg'},
    {id: '5_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/5_of_clubs.svg'},
    {id: '5_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/5_of_diamonds.svg'},
    {id: '5_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/5_of_hearts.svg'},
    {id: '5_of_spades', svg: '../../assets/img/memory_cards/poker_cards/5_of_spades.svg'},
    {id: '6_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/6_of_clubs.svg'},
    {id: '6_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/6_of_diamonds.svg'},
    {id: '6_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/6_of_hearts.svg'},
    {id: '6_of_spades', svg: '../../assets/img/memory_cards/poker_cards/6_of_spades.svg'},
    {id: '7_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/7_of_clubs.svg'},
    {id: '7_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/7_of_diamonds.svg'},
    {id: '7_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/7_of_hearts.svg'},
    {id: '7_of_spades', svg: '../../assets/img/memory_cards/poker_cards/7_of_spades.svg'},
    {id: '8_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/8_of_clubs.svg'},
    {id: '8_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/8_of_diamonds.svg'},
    {id: '8_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/8_of_hearts.svg'},
    {id: '8_of_spades', svg: '../../assets/img/memory_cards/poker_cards/8_of_spades.svg'},
    {id: '9_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/9_of_clubs.svg'},
    {id: '9_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/9_of_diamonds.svg'},
    {id: '9_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/9_of_hearts.svg'},
    {id: '9_of_spades', svg: '../../assets/img/memory_cards/poker_cards/9_of_spades.svg'},
    {id: '10_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/10_of_clubs.svg'},
    {id: '10_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/10_of_diamonds.svg'},
    {id: '10_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/10_of_hearts.svg'},
    {id: '10_of_spades', svg: '../../assets/img/memory_cards/poker_cards/10_of_spades.svg'},
    {id: 'jack_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/jack_of_clubs.svg'},
    {id: 'jack_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/jack_of_diamonds.svg'},
    {id: 'jack_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/jack_of_hearts.svg'},
    {id: 'jack_of_spades', svg: '../../assets/img/memory_cards/poker_cards/jack_of_spades.svg'},
    {id: 'king_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/king_of_clubs.svg'},
    {id: 'king_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/king_of_diamonds.svg'},
    {id: 'king_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/king_of_hearts.svg'},
    {id: 'king_of_spades', svg: '../../assets/img/memory_cards/poker_cards/king_of_spades.svg'},
    {id: 'queen_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/queen_of_clubs.svg'},
    {id: 'queen_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/queen_of_diamonds.svg'},
    {id: 'queen_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/queen_of_hearts.svg'},
    {id: 'queen_of_spades', svg: '../../assets/img/memory_cards/poker_cards/queen_of_spades.svg'},
    {id: 'black_joker', svg: '../../assets/img/memory_cards/poker_cards/black_joker.svg'},
    {id: 'red_joker', svg: '../../assets/img/memory_cards/poker_cards/red_joker.svg'}
];

const espacioX = espacioY = 30;
const columnas = 8;
const multiplicadorAncho = 1.5;
const multiplicadorGenerico = 0.60;
const uno = 1;
const multiplicadorEspecifico = 0.45;
const maximoAnchorCarta = 200;
const filasFacil = 2;
const filasMedio = 3;
const filasDificil = 4;
const delayCartas = 100;
const timeoutCursor = 500;
const timeoutGenerico = 1000;
const timeoutComprobacion = 1500;
const timeoutBienvenida = 2300;

/* VARIABLES */
let filas;
let altoCarta;
let anchoCarta;
let altoTotal;
let intervalo;
let tiempoInicio;
let primeraCartaSeleccionada = null;
let segundaCartaSeleccionada = null;
let tiempoActualizado = false;
let procesando = false;
let teclasActivadas = true;
let score = 0;
let clicks = 0;
let cartas = [];
let dificultadSeleccionada = 'facil';
let colorSeleccionado = "";
let fondoSeleccionado = "../../assets/img/memory_cards/fondos/fondo0.svg";
let puntuacion = {
    facil: [],
    medio: [],
    dificil: []
};

/* ELEMENTOS DEL DOM */
let spanScore = document.getElementById('score');
let spanClicks = document.getElementById('clicks');
let spanTiempo = document.getElementById('tiempo');
let reiniciar = document.getElementById('reiniciar');
let canvas = document.getElementById('memory-cards');
let ctx = canvas.getContext('2d');

/* CONSTANTES DEL DOM */
const botonFacil = document.getElementById('facil');
const botonMedio = document.getElementById('medio');
const botonDificil = document.getElementById('dificil');

/* VARIABLES DEL DOM */
let modal = document.getElementById('modal-fondos');
let botonSeleccionFondo = document.getElementById('boton-seleccion-fondo');
let cerrarModal = document.getElementById('cerrar-modal');
let fondoModal = document.getElementById('fondo-modal');
let fondoModalInicio = document.getElementById('fondo-modal-inicio');
let modalInicio = document.getElementById('modal-inicio');
let cerrarModalInicio = document.getElementById('cerrar-inicio');
let divsObjetoSVG = document.querySelectorAll('.objetoSVG');
let colorOptions = document.querySelectorAll('.color-option');

/* EVENT LISTENER PRINCIPAL - DOMCONTENTLOADED */
document.addEventListener('DOMContentLoaded', () => {

    /* ONLICK DEL BOTÓN QUE ABRE EL MODAL DE SELECCIÓN DE FONDOS */
    botonSeleccionFondo.onclick = function () {
        modal.style.display = 'block';
        fondoModal.style.display = 'block';
        cerrarModal.classList.add('abierto');
        playSound("cursor");
    }

    /* ONMOUSEOVER DEL BOTÓN ABRE EL MODAL DE SELECCIÓN DE FONDOS */
    botonSeleccionFondo.onmouseover = function () {
        playSound("cursor");
    }

    /* ONCLICK DEL BOTÓN QUE CIERRA EL MODAL DE SELECCIÓN DE FONDOS */
    cerrarModal.onclick = function () {
        modal.style.display = 'none';
        fondoModal.style.display = 'none';
        cerrarModal.classList.remove('abierto');
        playSound("cursor");
    }

    /* ONMOUSEOVER DEL BOTÓN QUE CIERRA EL MODAL DE SELECCIÓN DE FONDOS */
    cerrarModal.onmouseover = function () {
        playSound("cursor");
    }

    /* ONCLICK DEL BOTÓN QUE CIERRA EL MODAL DE INICIO / BIENVENIDA */
    cerrarModalInicio.onclick = function () {
        modalInicio.style.display = 'none';
        fondoModalInicio.style.display = 'none';
        playSound("cursor");
        setTimeout(() => {
            playSound("welcome");
        }, timeoutCursor);
        setTimeout(() => {
            playSound("modem");
            setTimeout(() => {
                setDificultad(dificultadSeleccionada);
                iniciarOReiniciarJuego();
            }, timeoutBienvenida);
        }, timeoutBienvenida);
    };

    /* ONCLICK DE LA VENTANA */
    window.onclick = function (event) {
        if (event.target === fondoModal) {
            /* SI EL TARGET ES EL FONDO DEL MODAL DE SELECCIÓN DE FONDOS */
            modal.style.display = 'none';
            fondoModal.style.display = 'none';
            cerrarModal.classList.remove('abierto');
        } else if (event.target === fondoModalInicio) {
            /* SI EL TARGET ES EL FONDO DEL MODAL DE INICIO / BIENVENIDA */
            modalInicio.style.display = 'none';
            fondoModalInicio.style.display = 'none';
            playSound("welcome");
            setTimeout(() => {
                playSound("modem");
                setTimeout(() => {
                    setDificultad(dificultadSeleccionada);
                    iniciarOReiniciarJuego();
                }, timeoutBienvenida);
            }, timeoutBienvenida);
        }
    }

    /* KEYPRESS DE LA VENTANA */
    window.addEventListener('keypress', (event) => {
        /* DESACTIVACIÓN DEL KEYPRESS EN MOMENTOS DE LA EJECUCIÓN */
        if (!teclasActivadas) {
            return;
        }

        /* SHORTCUT DEL BOTÓN REINICIAR */
        if (event.key === 'r') {
            playSound("cursor");
            iniciarOReiniciarJuego();
        }

        /* SHORTCUT DEL BOTÓN FÁCIL */
        if (event.key === 'f') {
            playSound("cursor");
            setDificultad('facil');
        }

        /* SHORTCUT DEL BOTÓN MEDIO */
        if (event.key === 'm') {
            playSound("cursor");
            setDificultad('medio');
        }

        /* SHORTCUT DEL BOTÓN DIFÍCIL */
        if (event.key === 'd') {
            playSound("cursor");
            setDificultad('dificil');
        }

        /* SHORTCUT DEL BOTÓN SELECCIÓN DE FONDOS */
        if (event.key === 'e') {
            playSound("cursor");
            modal.style.display = 'block';
            fondoModal.style.display = 'block';
            cerrarModal.classList.add('abierto');
        }

        /* SHORTCUT DE LOS BOTONES DE CERRAR MODAL */
        if (event.key === 'c') {
            if (cerrarModal.classList.contains('abierto')) {
                /* SI EL MODAL DE SELECCIÓN DE FONDOS ESTÁ ABIERTO */
                playSound("cursor");
                modal.style.display = 'none';
                fondoModal.style.display = 'none';
                cerrarModal.classList.remove('abierto');
            } else if (cerrarModalInicio.classList.contains('abierto')) {
                /* SI EL MODAL DE INICIO / BIENVENIDA ESTÁ ABIERTO */
                modalInicio.style.display = 'none';
                fondoModalInicio.style.display = 'none';
                playSound("cursor");
                setTimeout(() => {
                    playSound("welcome");
                }, timeoutCursor);
                setTimeout(() => {
                    playSound("modem");
                    setTimeout(() => {
                        setDificultad(dificultadSeleccionada);
                        iniciarOReiniciarJuego();
                    }, timeoutBienvenida);
                }, timeoutBienvenida);
            }
        }
    });

    /* EVENTO RESIZE DE LA VENTANA TODO Hay que mejorarlo */
    window.addEventListener('resize', () => dibujarTablero(dificultadSeleccionada));

    /* ONCLICK DEL BOTÓN DE REINICIAR */
    reiniciar.addEventListener('click', () => {
        playSound("cursor");
        iniciarOReiniciarJuego()
    });

    /* ONMOUSEOVER DEL BOTÓN DE REINICIAR */
    reiniciar.onmouseover = function () {
        playSound("cursor");
    }

    /* ONCLICK DEL CANVAS*/
    canvas.addEventListener('click', function (event) {
        /* DESACTIVACIÓN DEL CLICK EN MOMENTOS DE LA EJECUCIÓN */
        if (procesando) {
            return;
        }

        /* DESACTIVACIÓN DURANTE LA COMPROBACIÓN DE COINCIDENCIAS */
        if (primeraCartaSeleccionada && segundaCartaSeleccionada) {
            return;
        }

        clicks++;
        spanClicks.textContent = "" + clicks;

        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        let filaSeleccionada = Math.floor(y / (altoCarta + espacioY));
        let columnaSeleccionada = Math.floor(x / (anchoCarta + espacioX));
        let indiceSeleccionado = filaSeleccionada * columnas + columnaSeleccionada;

        if (indiceSeleccionado < cartas.length) {
            manejarSeleccion(cartas[indiceSeleccionado]);
        }
        verificarFinDelJuego();
    });

    /* ONCLICK DEL BOTÓN DE FÁCIL */
    botonFacil.addEventListener('click', () => {
        playSound("cursor");
        setDificultad('facil');
    });

    /* ONCLICK DEL BOTÓN DE MEDIO */
    botonMedio.addEventListener('click', () => {
        playSound("cursor");
        setDificultad('medio');
    });

    /* ONCLICK DEL BOTÓN DE DIFÍCIL */
    botonDificil.addEventListener('click', () => {
        playSound("cursor");
        setDificultad('dificil');
    });

    /* ONMOUSEOVER DEL BOTÓN DE FÁCIL */
    botonFacil.onmouseover = function () {
        playSound("cursor");
    }

    /* ONMOUSEOVER DEL BOTÓN DE MEDIO */
    botonMedio.onmouseover = function () {
        playSound("cursor");
    }

    /* ONMOUSEOVER DEL BOTÓN DE DIFÍCIL */
    botonDificil.onmouseover = function () {
        playSound("cursor");
    }

    /* ONCLICK DE LOS BOTONES DE SELECCIÓN DE COLOR */
    colorOptions.forEach(colorDiv => {
        colorDiv.addEventListener('click', function () {
            colorOptions.forEach(cd => cd.classList.remove('seleccionado'));
            colorDiv.classList.add('seleccionado');
            colorSeleccionado = colorDiv.querySelector('.color').style.backgroundColor;
            // Cambiar el color de todos los SVG
            colorizarSVG();
            dibujarTablero(dificultadSeleccionada);
        });
    });

    /* ONCLICK DE LOS FONDOS */
    divsObjetoSVG.forEach(div => {
        div.addEventListener('click', function () {
            divsObjetoSVG.forEach(svgDiv => {
                svgDiv.classList.remove('seleccionado');
                svgDiv.querySelector('.tooltip-text').style.visibility = 'hidden';
                svgDiv.style.border = '';
            });

            div.classList.add('seleccionado');
            let tooltip = div.querySelector('.tooltip-text');
            tooltip.style.visibility = 'visible';
            div.style.border = '0.2rem solid #e30b0b';
            fondoSeleccionado = div.querySelector('object').getAttribute('data');
            dibujarTablero(dificultadSeleccionada);
        });
    });

    /**
     * Función que inicia o reinicia el juego dependiendo del momento de la ejecución en que se llame.
     * @returns {void}
     */
    function iniciarOReiniciarJuego() {
        resetearJuego();
        desactivarBotonesYTeclas();
        cartas = seleccionarYMezclarCartas();
        dibujarTablero(dificultadSeleccionada);
    }

    /**
     *Función que dibuja el tablero aplicando parámetros distintos según el modo que se le pase.
     * @param modo {string} - Modo de juego.
     * @returns {void}
     */
    function dibujarTablero(modo) {
        /* CÁLCULO DEL ANCHO Y EL ALTO MÁXIMOS */
        const porcentajeAncho = multiplicadorGenerico;
        let porcentajeAlto = multiplicadorGenerico;

        if (modo === 'facil') {
            filas = filasFacil;
        } else if (modo === 'medio') {
            porcentajeAlto = multiplicadorEspecifico;
            filas = filasMedio;
        } else if (modo === 'dificil') {
            porcentajeAlto = multiplicadorEspecifico;
            filas = filasDificil;
        } else {
            console.log('Modo no válido');
            return;
        }

        const maxAnchoContenedor = window.innerWidth * porcentajeAncho;
        const maxAltoContenedor = window.innerHeight * porcentajeAlto;

        /* CÁLCULO DEL TAMAÑO ÓPTIMO DE LAS CARTAS CON EL ANCHO DISPONIBLE */
        anchoCarta = Math.min((maxAnchoContenedor - (columnas + uno) * espacioX) / columnas, maximoAnchorCarta);
        altoCarta = anchoCarta * multiplicadorAncho;
        altoTotal = filas * (altoCarta + espacioY) + espacioY;

        /* AJUSTE DEL TAMAÑO SEGÚN EL ALTO TOTAL SI ESTE EXCEDE EL ALTO DISPONIBLE */
        if (altoTotal > maxAltoContenedor) {
            altoCarta = (maxAltoContenedor - (filas + uno) * espacioY) / filas;
            anchoCarta = altoCarta / multiplicadorAncho;
        }

        /* AJUSTE DEL TAMAÑO DEL CANVAS TRAS LOS CÁLCULOS */
        canvas.width = columnas * (anchoCarta + espacioX) + espacioX;
        canvas.height = filas * (altoCarta + espacioY) + espacioY;

        dibujarCartas();
    }

    /**
     * Función que se encarga de seleccionar las cartas y mezclarlas.
     * @returns {*[]}
     */
    function seleccionarYMezclarCartas() {
        let totalCartas = filas * columnas;
        let cartasSeleccionadas = [];
        while (cartasSeleccionadas.length < totalCartas) {
            let cartaAleatoria = cartasPoker[Math.floor(Math.random() * cartasPoker.length)];
            /* SI EN EL ARRAY DE CARTAS SELECCIONADAS YA HAY UNA COINCIDENCIA CON LA CARTA ALEATORIA
            SE SIGUEN SACANDO CARTAS ALEATORIAS, SINO SE INTRODUCE AL ARRAY DE CARTAS SELECCIONADAS */
            if (!cartasSeleccionadas.some(carta => carta.id === cartaAleatoria.id)) {
                cartasSeleccionadas.push({...cartaAleatoria, revelada: false}, {...cartaAleatoria, revelada: false});
            }
        }

        /* SE MEZCLAN LAS CARTAS */
        for (let i = cartasSeleccionadas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + uno));
            [cartasSeleccionadas[i], cartasSeleccionadas[j]] = [cartasSeleccionadas[j], cartasSeleccionadas[i]];
        }

        return cartasSeleccionadas;
    }

    /**
     * Función que maneja la selección de una carta y su posterior comprobación.
     *
     * @param cartaSeleccionada {object} - Objeto de la carta seleccionada.
     * @returns {void}
     */
    function manejarSeleccion(cartaSeleccionada) {
        /* INICIA EL CONTADOR DE TIEMPO SI NO ESTABA INICIADO */
        if (!tiempoActualizado) {
            tiempoInicio = Date.now();
            intervalo = setInterval(actualizarTiempo, timeoutGenerico);
            tiempoActualizado = true;
        }

        cartaSeleccionada.revelada = true;

        if (!primeraCartaSeleccionada) {
            primeraCartaSeleccionada = cartaSeleccionada;
        } else if (!segundaCartaSeleccionada && cartaSeleccionada !== primeraCartaSeleccionada) {
            segundaCartaSeleccionada = cartaSeleccionada;
            comprobarCoincidencia();
        }
        dibujarCartas();
    }

    /**
     * Función que se encarga de hacer los cálculos de la posición de las cartas y dibujarlas.
     * @returns {void}
     */
    function dibujarCartas() {
        for (let i = 0; i < cartas.length; i++) {
            let fila = Math.floor(i / columnas);
            let columna = i % columnas;
            let x = columna * (anchoCarta + espacioX) + espacioX;
            let y = fila * (altoCarta + espacioY) + espacioY;
            if (cartas[i].revelada) {
                /* SI LA CARTA ESTÁ REVELADA, DIBUJARLA */
                cargarYDibujarImagenGradualmente(cartas[i].svg, x, y, anchoCarta, altoCarta);
            } else {
                /* SI LA CARTA NO ESTÁ REVELADA, DIBUJAR EL FONDO DEPENDIENDO DE SU ORIGEN */
                if (fondoSeleccionado.includes('fondo0.svg')) {
                    cargarYDibujarImagenGradualmente(fondoSeleccionado, x, y, anchoCarta, altoCarta);
                } else {
                    cargarSVGGradualmente(fondoSeleccionado, colorSeleccionado, x, y, anchoCarta, altoCarta);
                }
            }
        }
    }

    /**
     * Función que se encarga de cargar una imagen y llamar a la función que la dibuja gradualmente.
     * @param url {string} - URL de la imagen.
     * @param x {number} - Posición X de la carta calculada en dibujarCartas().
     * @param y {number} - Posición Y de la carta calculada en dibujarCartas().
     * @param ancho {number} - Ancho calculado.
     * @param alto {number} - Alto calculado.
     * @see cargarImagenGradualmente()
     * @see dibujarCartas()
     * @see dibujarTablero()
     * @returns {void}
     */
    function cargarYDibujarImagenGradualmente(url, x, y, ancho, alto) {
        let imagen = new Image();
        imagen.src = url;
        imagen.onload = function () {
            cargarImagenGradualmente(imagen, x, y, ancho, alto);
        };
    }

    /**
     * Función que se encarga de cargar un SVG y llamar a la función que lo dibuja gradualmente.
     * Utiliza fetch para cargar el SVG y DOMParser para parsearlo y poder modificarlo.
     * Lo reserializa y lo carga en un objeto Image para poder dibujarlo en el canvas.
     * Además, lo introduce en el atributo src como un 'data URI' para poder cargarlo en el DOM.
     * @param svgURL {string} - URL del SVG.
     * @param color {string} - Color seleccionado del SVG en colorizarSVG().
     * @param x {number} - Posición X de la carta calculada en dibujarCartas().
     * @param y {number} - Posición Y de la carta calculada en dibujarCartas().
     * @param ancho {number} - Ancho calculado.
     * @param alto {number} - Alto calculado.
     * @see cargarImagenGradualmente()
     * @see dibujarCartas()
     * @see colorizarSVG()
     * @returns {void}
     */
    function cargarSVGGradualmente(svgURL, color, x, y, ancho, alto) {
        fetch(svgURL)
            .then(response => response.text())
            .then(data => {
                let parseador = new DOMParser();
                let svgEnTexto = parseador.parseFromString(data, "image/svg+xml");
                let paths = svgEnTexto.querySelectorAll('path');
                paths.forEach(path => path.style.fill = color);

                let svgReserializado = new XMLSerializer().serializeToString(svgEnTexto.documentElement);
                let imagen = new Image();

                imagen.onload = function () {
                    cargarImagenGradualmente(imagen, x, y, ancho, alto);
                };
                imagen.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgReserializado);
            })
            .catch(error => console.error('Error al cargar y colorizar el SVG:', error));
    }

    /**
     * Función que se encarga de dibujar gradualmente una imagen.
     * Recibe las imágenes preparadas de los métodos cargarYDibujarImagenGradualmente() y cargarSVGGradualmente() y
     * las dibuja gradualmente en el canvas en pasos de 10 segmentos.
     * @param imagen {object} - Objeto Image de la imagen a dibujar.
     * @param x {number} - Posición X de la carta calculada en dibujarCartas().
     * @param y {number} - Posición Y de la carta calculada en dibujarCartas().
     * @param ancho {number} - Ancho calculado.
     * @param alto {number} - Alto calculado.
     * @see cargarYDibujarImagenGradualmente()
     * @see cargarSVGGradualmente()
     * @see dibujarCartas()
     * @returns {void}
     */
    function cargarImagenGradualmente(imagen, x, y, ancho, alto) {
        procesando = true;
        let segmentos = 10; // Cantidad de segmentos en los que dividir la carta
        let alturaSegmento = imagen.naturalHeight / segmentos;
        for (let i = 0; i < segmentos; i++) {
            setTimeout(function () {
                ctx.drawImage(imagen, 0, 0, imagen.naturalWidth, alturaSegmento * (i + uno), x, y, ancho, alto * (i + uno) / segmentos);

                if (i === segmentos - 1) {
                    procesando = false;
                    reactivarBotonesYTeclas();
                }
            }, delayCartas * i); // Retraso incremental para cada segmento
        }
    }

    /**
     * Función que comprueba si las cartas seleccionadas coinciden.
     * Si coinciden, se puntúa y se resetea la selección.
     * Si no coinciden, se dan la vuelta y se resetea la selección.
     * @see resetearSeleccion()
     * @returns {void}
     */
    function comprobarCoincidencia() {
        let min = 200;
        let max = 500;
        if (primeraCartaSeleccionada.id === segundaCartaSeleccionada.id) {
            score += Math.floor((Math.random() * (max - min) + min));
            spanScore.textContent = score;
            resetearSeleccion();
        } else {
            setTimeout(() => {
                primeraCartaSeleccionada.revelada = false;
                segundaCartaSeleccionada.revelada = false;
                resetearSeleccion();
            }, timeoutComprobacion);
        }
    }

    /**
     * Función que resetea la selección de las cartas.
     * @see dibujarCartas()
     * @returns {void}
     */
    function resetearSeleccion() {
        primeraCartaSeleccionada = null;
        segundaCartaSeleccionada = null;
        dibujarCartas();
    }

    /**
     * Función que desactiva los botones y las teclas en ciertos momentos de la ejecución.
     * @returns {void}
     */
    function desactivarBotonesYTeclas() {
        botonFacil.disabled = true;
        botonMedio.disabled = true;
        botonDificil.disabled = true;
        reiniciar.disabled = true;
        teclasActivadas = false;
    }

    /**
     * Función que reactiva los botones y las teclas en ciertos momentos de la ejecución.
     * @returns {void}
     */
    function reactivarBotonesYTeclas() {
        botonFacil.disabled = false;
        botonMedio.disabled = false;
        botonDificil.disabled = false;
        reiniciar.disabled = false;
        teclasActivadas = true;
    }

    /**
     * Función que se encarga de establecer la dificultad del juego y de establecer las filas correspondientes.
     * @param dificultad {string} - Dificultad seleccionada.
     * @see iniciarOReiniciarJuego()
     * @returns {void}
     */
    function setDificultad(dificultad) {
        const dificultades = {
            facil: filasFacil,
            medio: filasMedio,
            dificil: filasDificil
        };
        dificultadSeleccionada = dificultad;
        filas = dificultades[dificultad] || filasFacil;
        iniciarOReiniciarJuego();
    }

    /**
     * Función que se encarga de cambiar el color de los SVG.
     * @returns {void}
     */
    function colorizarSVG() {
        let imgs = ['fondo1', 'fondo2', 'fondo3', 'fondo4', 'fondo5'];
        imgs.forEach(svgId => {
            let objetoSvg = document.getElementById(svgId);
            if (objetoSvg.contentDocument) {
                let contenidoSvg = objetoSvg.contentDocument;
                let paths = contenidoSvg.querySelectorAll('path');
                paths.forEach(path => {
                    path.style.fill = colorSeleccionado;
                });
            } else {
                console.error("No se ha podido cargar el SVG:", svgId);
            }
        });
    }

    /**
     * Función que se encarga de actualizar el tiempo transcurrido en la partida.
     * @returns {void}
     */
    function actualizarTiempo() {
        let tiempoTranscurrido = Date.now() - tiempoInicio;
        let minutos = Math.floor(tiempoTranscurrido / 60000);
        let segundos = Math.floor((tiempoTranscurrido % 60000) / 1000).toFixed(0);
        spanTiempo.textContent = minutos + ":" + (segundos < 10 ? '0' : '') + segundos;
    }

    /**
     * Función que se encarga de verificar si se han revelado todas las cartas e iniciar la secuencia de fin de juego.
     * @see actualizarYGuardarPuntuacion()
     * @see resetearJuego()
     * @returns {void}
     */
    function verificarFinDelJuego() {
        if (cartas.every(carta => carta.revelada)) {
            actualizarYGuardarPuntuacion();
            alert("GL");
            resetearJuego();
        }
    }

    /**
     * Función que maneja las reproducciones de sonido.
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
     * Función que se encarga de resetear los marcadores.
     * @see actualizarTiempo()
     * @see clearInterval()
     * @returns {void}
     */
    function resetearJuego() {
        score = 0;
        spanScore.textContent = '0';
        clicks = 0;
        spanClicks.textContent = '0';
        clearInterval(intervalo);
        tiempoInicio = Date.now();
        actualizarTiempo();
    }

    /**
     * Función que se encarga de actualizar la puntuación y guardarla en LocalStorage.
     * Parsea la puntuación actual del LocalStorage, si existe, o usa la estructura inicial.
     * Añade la nueva puntuación a un array y lo ordena de mayor a menor.
     * Se queda con las tres mejores puntuaciones y las vuelve a guardar en el LocalStorage.
     * @returns {void}
     */
    function actualizarYGuardarPuntuacion() {
        let puntuacionGuardada = JSON.parse(localStorage.getItem("puntuacion")) || puntuacion;

        puntuacionGuardada[dificultadSeleccionada].push({
            score: score,
            clicks: clicks,
            tiempo: spanTiempo.textContent
        });

        puntuacionGuardada[dificultadSeleccionada].sort((a, b) => b.score - a.score);
        puntuacionGuardada[dificultadSeleccionada] = puntuacionGuardada[dificultadSeleccionada].slice(0, 3);
        localStorage.setItem("puntuacion", JSON.stringify(puntuacionGuardada));
    }

    /**
     * Función que se encarga de recuperar, formatear y mostrar la puntuación guardada en LocalStorage.
     * @returns {void}
     */
    function mostrarEstadisticas() {
        let puntuacionGuardada = JSON.parse(localStorage.getItem("puntuacion")) || {facil: [], medio: [], dificil: []};
        let contenidoModal = '';

        for (const [modo, puntuacion] of Object.entries(puntuacionGuardada)) {
            contenidoModal += `<h3>${modo.charAt(0).toUpperCase() + modo.slice(1)}</h3>`;

            if (puntuacion.length === 0) {
                contenidoModal += `<p>No hay puntuación guardada para el modo ${modo}.</p>`;
                continue;
            }

            puntuacion.forEach((puntaje, index) => {
                contenidoModal += `
            <div>
                <h4>Puesto ${index + 1}:</h4>
                <ul>
                    <li>Score: ${puntaje.score}</li>
                    <li>Clicks: ${puntaje.clicks}</li>
                    <li>Tiempo: ${puntaje.tiempo}</li>
                </ul>
            </div>
        `;
            });
        }

        document.getElementById("modalEstadisticas").innerHTML = contenidoModal;
    }
});