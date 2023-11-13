document.addEventListener('DOMContentLoaded', function () {
    let p1Campo = document.getElementById('p1Campo');
    let p1Disparos = document.getElementById('p1Disparos');
    let p2Campo = document.getElementById('p2Campo');
    let p2Disparos = document.getElementById('p2Disparos');
    let cambiarTableroP1 = document.getElementById('tablerop1');
    let cambiarTableroP2 = document.getElementById('tablerop2');
    let comenzarJuego = document.getElementById('comenzarJuego');
    let turno = document.getElementById('turno');
    let turnoJugador = 1; // Inicializa la variable de turno
    let contadorDeBarcos = 0;
    let cerrarModal = document.getElementById("cerrar-inicio");
    let fondoModal = document.getElementById("fondo-modal-inicio");
    let modalInicio = document.getElementById("modal-inicio");
    let dosJugadores = document.getElementById('dosJugadores');
    let terminadoP1 = document.getElementById('terminadoP1');
    let terminadoP2 = document.getElementById('terminadoP2');
    let tiempoRestanteElement = document.getElementById('time-number');
    let mostrarCampoP1 = document.getElementById('mostrarCampoP1');
    let mostrarCampoP2 = document.getElementById('mostrarCampoP2');

    function gestionarVisibilidadTableros() {
        p1Disparos.style.display = turnoJugador === 1 ? '' : 'none';
        p2Disparos.style.display = turnoJugador === 2 ? '' : 'none';
    }

    function cambiarJugador() {
        turnoJugador = turnoJugador === 1 ? 2 : 1;
        turno.textContent = `Turno del Jugador ${turnoJugador}`;
        gestionarVisibilidadTableros();
    }

    function manejarAtaque(event, campoAtacado) {
        let fila = event.target.dataset.row;
        let columna = event.target.dataset.col;
        let celdaObjetivo = campoAtacado.querySelector(`[data-row="${fila}"][data-col="${columna}"]`);

        if (!celdaObjetivo) return; // Evita errores si la celda objetivo no existe

        if (celdaObjetivo.classList.contains('barco')) {
            marcarComoTocado(celdaObjetivo, event.target);

            if (verificarHundido(celdaObjetivo, campoAtacado)) {
                marcarComoHundido(celdaObjetivo.dataset.barco, campoAtacado);
                if (verificarFinJuego(campoAtacado)) {
                    declararGanador();
                }
            }
        } else {
            event.target.classList.add('agua');
            cambiarJugador();
        }
    }

    function marcarComoTocado(celdaObjetivo, celdaAtacante) {
        celdaObjetivo.classList.add('tocado');
        celdaAtacante.classList.add('tocado');
    }

    function verificarHundido(celdaObjetivo, campoAtacado) {
        let idBarco = celdaObjetivo.dataset.barco;
        let celdasBarco = campoAtacado.querySelectorAll(`[data-barco="${idBarco}"]`);
        return Array.from(celdasBarco).every(celda => celda.classList.contains('tocado'));
    }

    function marcarComoHundido(idBarco, campoAtacado) {
        let celdasBarco = campoAtacado.querySelectorAll(`[data-barco="${idBarco}"]`);
        celdasBarco.forEach(celda => {
            celda.classList.remove('tocado');
            celda.classList.add('hundido');
        });
    }

    function verificarFinJuego(campoAtacado) {
        let celdasBarco = campoAtacado.querySelectorAll('.barco');
        return Array.from(celdasBarco).every(celda => celda.classList.contains('hundido'));
    }

    function declararGanador() {
        // Lógica para declarar el ganador y terminar el juego
        alert('¡El juego ha terminado! Ganador: Jugador X');
    }

    function crearCampoDeJuego(contenedor) {
        for (let i = 0; i < 100; i++) {
            let celda = document.createElement('div');
            celda.className = 'celda';
            celda.dataset.row = Math.floor(i / 10).toString();
            celda.dataset.col = (i % 10).toString();
            contenedor.appendChild(celda);
        }
    }

    function colocarBarcos(contenedor) {
        let barcos = [
            {length: 4, count: 1},
            {length: 3, count: 2},
            {length: 2, count: 3},
            {length: 1, count: 4}
        ];

        barcos.forEach((barco) => {
            for (let i = 0; i < barco.count; i++) {
                colocarBarco(contenedor, barco.length);
            }
        });
    }

    function colocarBarco(contenedor, longitud) {
        let posicion;
        let intento = 0;
        let maximoIntentos = 100;
        contadorDeBarcos++;

        do {
            posicion = cogerPosicionAleatoria(longitud);
            intento++;
        } while ((!comprobarCeldasAdyacentes(contenedor, posicion) || conprobarSuperposicion(contenedor, posicion)) && intento < maximoIntentos);

        if (intento >= maximoIntentos) {
            console.log("No se pudo colocar el barco después de varios intentos.");
            return;
        }

        // Marcar las celdas ocupadas por el barco
        marcarCeldasBarcos(contenedor, posicion, longitud, contadorDeBarcos);
    }

    function cogerPosicionAleatoria(longitud) {
        let direccion = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        let aux = 1;
        let fila, columna;

        if (direccion === 'horizontal') {
            fila = Math.floor(Math.random() * 10);
            columna = Math.floor(Math.random() * (10 - longitud - aux));
        } else {
            fila = Math.floor(Math.random() * (10 - longitud - aux));
            columna = Math.floor(Math.random() * 10);
        }

        return {
            row: fila,
            col: columna,
            direction: direccion,
            length: longitud
        };
    }

    function comprobarCeldasAdyacentes(contenedor, posicion) {
        let aux = 1;
        let finalFila = posicion.direction === 'vertical' ? posicion.row + posicion.length : posicion.row;
        let finalColumna = posicion.direction === 'horizontal' ? posicion.col + posicion.length : posicion.col;

        for (let i = posicion.row - aux; i <= finalFila + aux; i++) {
            for (let j = posicion.col - aux; j <= finalColumna + aux; j++) {
                if (i < 0 || i >= 10 || j < 0 || j >= 10) {
                    continue;
                }

                let celda = contenedor.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                if (celda && celda.classList.contains('barco')) {
                    return false;
                }
            }
        }

        return true;
    }

    function conprobarSuperposicion(contenedor, posicion) {
        for (let i = 0; i < posicion.length; i++) {
            let comprobarfila = posicion.row + (posicion.direction === 'vertical' ? i : 0);
            let comprobarColumna = posicion.col + (posicion.direction === 'horizontal' ? i : 0);

            let celda = contenedor.querySelector(`[data-row="${comprobarfila}"][data-col="${comprobarColumna}"]`);
            if (celda && celda.classList.contains('barco')) {
                return true;
            }
        }

        return false;
    }

    function marcarCeldasBarcos(contenedor, posicion, longitud, contadorDeBarcos) {
        for (let i = 0; i < longitud; i++) {
            let comprobarfila = posicion.row + (posicion.direction === 'vertical' ? i : 0);
            let comprobarColumna = posicion.col + (posicion.direction === 'horizontal' ? i : 0);

            let celda = contenedor.querySelector(`[data-row="${comprobarfila}"][data-col="${comprobarColumna}"]`);
            if (celda) {
                celda.classList.add('barco');
                celda.dataset.barco = contadorDeBarcos;
            }
        }
    }

    cerrarModal.addEventListener('click', cerrarModalInicio);
    dosJugadores.addEventListener('click', iniciarModoDosJugadores);
    terminadoP1.addEventListener('click', finalizarSeleccionP1);
    terminadoP2.addEventListener('click', finalizarSeleccionP2);
    cambiarTableroP1.addEventListener('click', () => cambiarTablero(p1Campo));
    cambiarTableroP2.addEventListener('click', () => cambiarTablero(p2Campo));
    comenzarJuego.addEventListener('click', iniciarJuego);

    function cerrarModalInicio() {
        fondoModal.classList.add('oculto');
        modalInicio.style.display = "none";
        /*bienvenidaSound.currentTime = 0;
        bienvenidaSound.play();*/
    }

    function iniciarModoDosJugadores(event) {
        if (event.target.id === "dosJugadores") {
            /*setTimeout(function () {
            }, 3000);*/
            cambiarTableroP1.classList.remove('oculto');
            terminadoP1.classList.remove('oculto');
            mostrarCampoP1.textContent = "Jugador1";
            mostrarCampoP2.textContent = "Jugador2";
        }
    }

    function finalizarSeleccionP1(event) {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        if (event.target.id === "terminadoP1") {
            cambiarTableroP1.classList.add('oculto');
            cambiarTableroP2.classList.remove('oculto');
            terminadoP1.classList.add('oculto');
            terminadoP2.classList.remove('oculto');
            for (let i = 0; i < celdasP1Campo.length; i++) {
                celdasP1Campo[i].classList.add('oculto');
            }
        }
    }

    function finalizarSeleccionP2(event) {
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        if (event.target.id === "terminadoP2") {
            cambiarTableroP2.classList.add('oculto');
            terminadoP2.classList.add('oculto');
            comenzarJuego.classList.remove('oculto');
            for (let i = 0; i < celdasP2Campo.length; i++) {
                celdasP2Campo[i].classList.add('oculto');
            }
        }
    }

    function cambiarTablero(contenedor) {
        contenedor.innerHTML = '';
        crearCampoDeJuego(contenedor);
        colocarBarcos(contenedor);
    }

    function iniciarJuego() {
        // Lógica para iniciar el juego
        crearCampoDeJuego(p1Disparos);
        crearCampoDeJuego(p2Disparos);
        agregarEventosDeAtaque(p1Disparos, p2Campo, 1);
        agregarEventosDeAtaque(p2Disparos, p1Campo, 2);
        cambiarJugador();
    }

    function agregarEventosDeAtaque(campoAtaque, campoAtacado, jugadorAtacante) {
        campoAtaque.querySelectorAll('.celda').forEach(celda => {
            celda.addEventListener('click', function (event) {
                if (turnoJugador === jugadorAtacante) {
                    manejarAtaque(event, campoAtacado);
                }
            });
        });
    }

// Implementación de las funciones de creación de tablero y colocación de barcos aquí...

    cambiarTableroP2.addEventListener('click', function (event) {
        if (event.target.id === 'tablerop2') {
            p2Campo.innerHTML = '';
            crearCampoDeJuego(p2Campo);
            colocarBarcos(p2Campo);
        }
    });

    comenzarJuego.addEventListener('click', function (event) {
        if (event.target.id === 'comenzarJuego') {
            crearCampoDeJuego(p1Disparos);
            crearCampoDeJuego(p2Disparos);
            cambiarJugador();
        }
    });

    mostrarCampoP1.addEventListener('mouseover', function (event) {
        if (event.target.id === 'comenzarJuego') {
            crearCampoDeJuego(p1Disparos);
            crearCampoDeJuego(p2Disparos);
            cambiarJugador();
        }
    });

    mostrarCampoP1.addEventListener('mouseover', function (event) {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP1') {
            for (let i = 0; i < celdasP1Campo.length; i++) {
                celdasP1Campo[i].classList.remove('oculto');
            }
        }
        eliminarEventListeners(celdasP1Campo);
        eliminarEventListeners(celdasP1Disparos);
    });

    mostrarCampoP1.addEventListener('mouseout', function (event) {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP1') {
            for (let i = 0; i < celdasP1Campo.length; i++) {
                celdasP1Campo[i].classList.add('oculto');
            }
        }
        eliminarEventListeners(celdasP1Campo);
        eliminarEventListeners(celdasP1Disparos);
    });

    mostrarCampoP2.addEventListener('mouseover', function (event) {
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP2') {
            for (let i = 0; i < celdasP2Campo.length; i++) {
                celdasP2Campo[i].classList.remove('oculto');
            }
        }
        eliminarEventListeners(celdasP2Campo);
        eliminarEventListeners(celdasP2Disparos);
    });

    mostrarCampoP2.addEventListener('mouseout', function (event) {
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP2') {
            for (let i = 0; i < celdasP2Campo.length; i++) {
                celdasP2Campo[i].classList.add('oculto');
            }
        }
        eliminarEventListeners(celdasP2Campo);
        eliminarEventListeners(celdasP2Disparos);
    });

    function eliminarEventListeners(elementos) {
        elementos.forEach(elemento => {
            // Clonar el elemento para eliminar el event listener sin afectar el original
            const nuevoElemento = elemento.cloneNode(true);
            elemento.parentNode.replaceChild(nuevoElemento, elemento);
        });
    }

    function ataque(campoAtaque, campoAtacado) {
        for (let i = 0; i < campoAtaque.length; i++) {
            campoAtaque[i].addEventListener('click', function (event) {
                let fila = event.target.dataset.row;
                let columna = event.target.dataset.col;
                if (event.target.classList.contains('celda')) {
                    fila = event.target.dataset.row;
                    columna = event.target.dataset.col;
                    event.target.classList.remove('celda');
                    campoAtacado[i].classList.remove('celda');
                    conseguirMismaCasilla(campoAtaque, campoAtacado, fila, columna);
                } else {
                    /*alert('Ya habias tocado esta casilla');*/
                }
            });
        }
    }

    function conseguirMismaCasilla(campoAtaque, campoAtacado, fila, columna) {
        let sinTocar = 0;
        let probarHundirse;
        for (let i = 0; i < campoAtaque.length; i++) {
            if (campoAtacado[i].dataset.row === fila && campoAtacado[i].dataset.col === columna) {
                probarHundirse = campoAtacado[i].dataset.barco;
                if (campoAtacado[i].classList.contains('barco')) {
                    campoAtacado[i].classList.remove('barco');
                    campoAtacado[i].classList.add('tocado');
                } else {
                    campoAtacado[i].classList.add('agua');
                    campoAtaque[i].classList.add('agua');
                    cambiarJugador();
                    return;
                }
            }
        }
        for (let i = 0; i < campoAtacado.length; i++) {
            if (campoAtacado[i].dataset.barco === probarHundirse && !campoAtacado[i].classList.contains('tocado')) {
                sinTocar++;
            }
        }
        if (sinTocar > 0) {
            tocado(campoAtaque, fila, columna);
        } else {
            for (let i = 0; i < campoAtacado.length; i++) {
                if (campoAtacado[i].dataset.barco === probarHundirse && campoAtacado[i].classList.contains('tocado')) {
                    campoAtacado[i].classList.remove('tocado');
                    campoAtacado[i].classList.add('hundido');
                    campoAtaque[i].classList.remove('tocado');
                    campoAtaque[i].classList.add('hundido');
                }
            }
        }
        ganado(campoAtacado);
    }

    function tocado(campoAtaque, fila, columna) {
        for (let i = 0; i < campoAtaque.length; i++) {
            if (campoAtaque[i].dataset.row === fila && campoAtaque[i].dataset.col === columna) {
                campoAtaque[i].classList.add('tocado');
            }
        }
    }

    function ganado(campoAtacado) {
        let barcosHundidos = 0;
        for (let i = 0; i < campoAtacado.length; i++) {
            if (campoAtacado[i].dataset.barco > -1 && campoAtacado[i].classList.contains("hundido")) {
                barcosHundidos++;
            }
        }
        if (barcosHundidos === 20 && turno.textContent === "Jugador1") {
            alert('Ha ganado el jugador 1')
        }
        if (campoAtacado === 20 && turno.textContent === "Jugador2") {
            alert('Ha ganado el jugador 2')
        }
    }


});