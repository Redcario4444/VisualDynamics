let canvas = document.getElementById('memory-cards');
let reiniciar = document.getElementById('reiniciar');
let colorSeleccionado = "";
let fondoSeleccionado = "../../assets/img/memory_cards/fondos/fondo0.svg";
let dificultadSeleccionada = 'facil';
let primeraCartaSeleccionada = null;
let segundaCartaSeleccionada = null;
let filas;
let altoCarta;
let anchoCarta;
let altoTotal;
const espacioX = espacioY = 30;
const columnas = 8;
const multiplicadorAncho = 1.5;
const multiplicadorGenerico = 1;
const multiplicadorEspecifico = 0.58;
const maximoAnchorCarta = 200;
const filasFacil = 2;
const filasMedio = 3;
const filasDificil = 4;
const delayCartas = 100;
const timeoutGenerico = 1000;
let cartas = [];
let score = 0;
let clicks = 0;
let intervalo;
let tiempoInicio;
let tiempoActualizado = false;
let procesando = false;

let spanScore = document.getElementById('score');
let spanClicks = document.getElementById('clicks');
let spanTiempo = document.getElementById('tiempo');

// Este es el objeto donde se dibuja
let ctx = canvas.getContext('2d');

// Se carga un array de imágenes
const cartasPoker = [
    {id: '10_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/10_of_clubs.svg'},
    {id: '10_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/10_of_diamonds.svg'},
    {id: '10_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/10_of_hearts.svg'},
    {id: '10_of_spades', svg: '../../assets/img/memory_cards/poker_cards/10_of_spades.svg'},
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
    {id: 'ace_of_clubs', svg: '../../assets/img/memory_cards/poker_cards/ace_of_clubs.svg'},
    {id: 'ace_of_diamonds', svg: '../../assets/img/memory_cards/poker_cards/ace_of_diamonds.svg'},
    {id: 'ace_of_hearts', svg: '../../assets/img/memory_cards/poker_cards/ace_of_hearts.svg'},
    {id: 'ace_of_spades', svg: '../../assets/img/memory_cards/poker_cards/ace_of_spades.svg'},
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

document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => {
        iniciarOReiniciarJuego();
    }

    reiniciar.addEventListener('click', () => {
        iniciarOReiniciarJuego();
    });

    window.addEventListener('keypress', (event) => {
        if (event.key === 'r') {
            iniciarOReiniciarJuego();
        }

        if (event.key === 'f') {
            setDificultad('facil');
        }

        if (event.key === 'm') {
            setDificultad('medio');
        }

        if (event.key === 'd') {
            setDificultad('dificil');
        }

        if (event.key === 'e') {
            modal.style.display = 'block';
            fondoModal.style.display = 'block';
        }

        if (event.key === 'c') {
            modal.style.display = 'none';
            fondoModal.style.display = 'none';
        }
    });

    window.addEventListener('resize', () => dibujarTablero(dificultadSeleccionada));

    setDificultad(dificultadSeleccionada);

    canvas.addEventListener('click', function (event) {
        if (procesando) {
            return;
        }

        if (primeraCartaSeleccionada && segundaCartaSeleccionada) {
            // Ya se seleccionaron dos cartas, no hacer nada
            return;
        }

        clicks++;
        spanClicks.textContent = "" + clicks;

        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;

        // Determinar qué carta fue seleccionada
        let filaSeleccionada = Math.floor(y / (altoCarta + espacioY));
        let columnaSeleccionada = Math.floor(x / (anchoCarta + espacioX));
        let indiceSeleccionado = filaSeleccionada * columnas + columnaSeleccionada;

        if (indiceSeleccionado < cartas.length) {
            manejarSeleccionCarta(cartas[indiceSeleccionado]);
        }
        verificarFinDelJuego();
    });

    function dibujarTablero(modo) {
        // Cálculo del ancho y alto máximos disponibles
        const porcentajeAncho = multiplicadorGenerico;
        let porcentajeAlto = multiplicadorGenerico

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

        // Calcular el tamaño de las cartas con el ancho disponible
        anchoCarta = Math.min((maxAnchoContenedor - (columnas + multiplicadorGenerico) * espacioX) / columnas, maximoAnchorCarta);
        altoCarta = anchoCarta * multiplicadorAncho;
        altoTotal = filas * (altoCarta + espacioY) + espacioY;

        // Ajustar el tamaño de las cartas si el alto total excede el alto disponible
        if (altoTotal > maxAltoContenedor) {
            altoCarta = (maxAltoContenedor - (filas + multiplicadorGenerico) * espacioY) / filas;
            anchoCarta = altoCarta / multiplicadorAncho;
        }

        // Ajustar el tamaño del canvas
        canvas.width = columnas * (anchoCarta + espacioX) + espacioX;
        canvas.height = filas * (altoCarta + espacioY) + espacioY;

        dibujarCartas();
    }

    function iniciarOReiniciarJuego() {
        cartas = seleccionarYMezclarCartas();
        dibujarTablero(dificultadSeleccionada);
    }

    function seleccionarYMezclarCartas() {
        let totalCartas = filas * columnas;
        let cartasSeleccionadas = [];
        while (cartasSeleccionadas.length < totalCartas) {
            let cartaAleatoria = cartasPoker[Math.floor(Math.random() * cartasPoker.length)];
            if (!cartasSeleccionadas.some(carta => carta.id === cartaAleatoria.id)) {
                // Duplicar cada carta seleccionada para tener pares
                cartasSeleccionadas.push({...cartaAleatoria, revelada: false}, {...cartaAleatoria, revelada: false});
            }
        }

        // Mezclar las cartas
        for (let i = cartasSeleccionadas.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + multiplicadorGenerico));
            [cartasSeleccionadas[i], cartasSeleccionadas[j]] = [cartasSeleccionadas[j], cartasSeleccionadas[i]];
        }

        return cartasSeleccionadas;
    }

    function manejarSeleccionCarta(cartaSeleccionada) {
        // Iniciar el tiempo si no se ha iniciado
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

    function dibujarCartas() {
        for (let i = 0; i < cartas.length; i++) {
            let fila = Math.floor(i / columnas);
            let columna = i % columnas;
            let x = columna * (anchoCarta + espacioX) + espacioX;
            let y = fila * (altoCarta + espacioY) + espacioY;
            if (cartas[i].revelada) {
                // Dibujar el anverso de la carta
                cargarYDibujarImagenGradualmente(cartas[i].svg, x, y, anchoCarta, altoCarta);
            } else {
                if (fondoSeleccionado.includes('fondo0.svg')) {
                    cargarYDibujarImagenGradualmente(fondoSeleccionado, x, y, anchoCarta, altoCarta);
                } else {
                    cargarSVGGradualmente(fondoSeleccionado, colorSeleccionado, x, y, anchoCarta, altoCarta);
                }
            }
        }
    }

    function cargarYDibujarImagenGradualmente(url, x, y, ancho, alto) {
        let imagen = new Image();
        imagen.src = url;
        imagen.onload = function () {
            cargarImagenGradualmente(imagen, x, y, ancho, alto);
        };
    }

    function cargarSVGGradualmente(svgURL, color, x, y, ancho, alto) {
        fetch(svgURL)
            .then(response => response.text())
            .then(data => {
                let parser = new DOMParser();
                let doc = parser.parseFromString(data, "image/svg+xml");
                let paths = doc.querySelectorAll('path');
                paths.forEach(path => path.style.fill = color);

                let serializedSVG = new XMLSerializer().serializeToString(doc.documentElement);
                let imagen = new Image();

                imagen.onload = function () {
                    cargarImagenGradualmente(imagen, x, y, ancho, alto);
                };
                imagen.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(serializedSVG);
            })
            .catch(error => console.error('Error al cargar y colorizar el SVG:', error));
    }

    function cargarImagenGradualmente(imagen, x, y, ancho, alto) {
        procesando = true;
        let segmentos = 10; // Cantidad de segmentos en los que dividir la carta
        let alturaSegmento = imagen.naturalHeight / segmentos;
        for (let i = 0; i < segmentos; i++) {
            setTimeout(function () {
                ctx.drawImage(imagen, 0, 0, imagen.naturalWidth, alturaSegmento * (i + multiplicadorGenerico), x, y, ancho, alto * (i + multiplicadorGenerico) / segmentos);

                if (i === segmentos - 1) {
                    procesando = false;
                }
            }, delayCartas * i); // Retraso incremental para cada segmento
        }
    }

    function comprobarCoincidencia() {
        //Coinciden, se puntúa y se resetea
        let min = 200;
        let max = 500;
        if (primeraCartaSeleccionada.id === segundaCartaSeleccionada.id) {
            score += Math.floor((Math.random() * (max - min) + min));
            spanScore.textContent = score;
            resetearSeleccion();
        } else {
            // Las cartas no coinciden y se dan la vuelta
            setTimeout(() => {
                primeraCartaSeleccionada.revelada = false;
                segundaCartaSeleccionada.revelada = false;
                resetearSeleccion();
            }, timeoutGenerico); // 1 segundo de retraso
        }
    }

    function resetearSeleccion() {
        primeraCartaSeleccionada = null;
        segundaCartaSeleccionada = null;
        dibujarCartas();
    }

    const botonFacil = document.getElementById('facil');
    const botonMedio = document.getElementById('medio');
    const botonDificil = document.getElementById('dificil');

    botonFacil.addEventListener('click', () => setDificultad('facil'));
    botonMedio.addEventListener('click', () => setDificultad('medio'));
    botonDificil.addEventListener('click', () => setDificultad('dificil'));

    function setDificultad(dificultad) {
        console.log("=>(memory_cards.js:170) dificultad", dificultad);
        dificultadSeleccionada = dificultad;
        dibujarTablero(dificultadSeleccionada);
    }

    let modal = document.getElementById('modal-fondos');
    let botonFondo = document.getElementById('boton-fondo');
    let cerrarModal = document.getElementById('cerrar-modal');
    let fondoModal = document.getElementById('fondo-modal');

    // Abrir
    botonFondo.onclick = function () {
        modal.style.display = 'block';
        fondoModal.style.display = 'block';
    }

    // Cerrar con botón
    cerrarModal.onclick = function () {
        modal.style.display = 'none';
        fondoModal.style.display = 'none';
    }

    // Cerrar al hacer click fuera del modal
    window.onclick = function (event) {
        if (event.target === fondoModal) {
            modal.style.display = 'none';
            fondoModal.style.display = 'none';
        }
    }

    function colorizarSVG() {
        let imgs = ['fondo1', 'fondo2', 'fondo3', 'fondo4', 'fondo5'];
        imgs.forEach(svgId => {
            let objetoSvg = document.getElementById(svgId);
            // Verificar que el objeto SVG tiene contenido cargado
            if (objetoSvg.contentDocument) {
                let contenidoSvg = objetoSvg.contentDocument;
                let paths = contenidoSvg.querySelectorAll('path');
                paths.forEach(path => {
                    path.style.fill = colorSeleccionado;
                });
            }
        });
    }

    // Cambiar color del fondo del svg
    let colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(colorDiv => {
        colorDiv.addEventListener('click', function () {
            colorOptions.forEach(cd => cd.classList.remove('seleccionado'));
            colorDiv.classList.add('seleccionado');
            colorSeleccionado = colorDiv.querySelector('.color').style.backgroundColor;
            // Cambiar el color de todos los SVG
            colorizarSVG();
        });
    });

    let divsObjetoSVG = document.querySelectorAll('.objetoSVG');
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

    function actualizarTiempo() {
        let tiempoTranscurrido = Date.now() - tiempoInicio;
        let minutos = Math.floor(tiempoTranscurrido / 60000);
        let segundos = Math.floor((tiempoTranscurrido % 60000) / 1000).toFixed(0);
        spanTiempo.textContent = minutos + ":" + (segundos < 10 ? '0' : '') + segundos;
    }

    function verificarFinDelJuego() {
        // Comprobar si todas las cartas están reveladas
        if (cartas.every(carta => carta.revelada)) {
            clearInterval(intervalo);
            alert("GL");
        }
    }
})