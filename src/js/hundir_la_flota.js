document.addEventListener('DOMContentLoaded', function () {
    let p1Campo = document.getElementById('p1Campo');
    let p1Disparos = document.getElementById('p1Disparos');
    let p2Campo = document.getElementById('p2Campo');
    let p2Disparos = document.getElementById('p2Disparos');
    let turno = document.getElementById('turno');
    let clic = 0;
    let contadorDeBarcos = 0;
    let dosJugadores = document.getElementById('dosJugadores');
    let ia = document.getElementById('ia');
    let terminadoP1 = document.getElementById('terminadoP1');
    let mostrarCampoP1 = document.getElementById('mostrarCampoP1');
    let mostrarCampoP2 = document.getElementById('mostrarCampoP2');
    let cambiarTableroP1 = document.getElementById('tablerop1');
    let cerrarModal = document.getElementById("cerrar-inicio");
    let fondoModal = document.getElementById("fondo-modal-inicio");
    let modalInicio = document.getElementById("modal-inicio");
    let terminadoP2 = document.getElementById('terminadoP2');
    let tiempoRestanteElement = document.getElementById('time-number');
    let cambiarTableroP2 = document.getElementById('tablerop2');
    let movimientos = document.getElementById('movimientos');
    let temporizador = document.getElementById('temporizador');
    let turnos = document.getElementById('turnos');
    let ultimoMovimiento = document.getElementById('ultimoMovimiento');
    let verTableroJ1 = document.getElementById('verTableroJ1');
    let verTableroJ2 = document.getElementById('verTableroJ2');
    let barcosTocadosP1 = 0;
    let barcosTocadosP2 = 0;
    let barcosTocadosGlaDos = 0;
    let tocado = 0;
    let glaDos = false;
    let cerrarModalVictoria = document.getElementById("cerrar-inicio-victoria");
    let fondoModalVictoria = document.getElementById("fondo-modal-victoria");
    let modalInicioVictoria = document.getElementById("modal-victoria");
    let terminado = false;

    cerrarModal.addEventListener('click', function () {
        fondoModal.classList.add('oculto');
        modalInicio.style.display = "none";
    });

    setTimeout(function () {
    }, 3000);

    dosJugadores.addEventListener('click', function (event) {
        if (event.target.id === "dosJugadores"){
            cambiarTableroP1.classList.remove('oculto');
            mostrarCampoP1.textContent = "P1";
            mostrarCampoP2.textContent = "P2";
            ia.classList.add('oculto');
            dosJugadores.classList.add('oculto');
        }
    });

    ia.addEventListener('click', function (event) {
        if (event.target.id === "ia"){
            glaDos = true;
            cambiarTableroP1.classList.remove('oculto');
            mostrarCampoP1.textContent = "P1";
            mostrarCampoP2.textContent = "GlaDos";
            ia.classList.add('oculto');
            dosJugadores.classList.add('oculto');
        }
    });

    cambiarTableroP1.addEventListener('click', function (event) {
        p1Campo.innerHTML = "";
        p1Disparos.innerHTML = "";
        crearCampoDeJuego(p1Campo);
        colocarBarcos(p1Campo);
        crearCampoDeJuego(p1Disparos);
        p1Campo.classList.remove('oculto');
        p1Disparos.classList.add('oculto');
        terminadoP1.classList.remove('oculto');
    });

    cambiarTableroP2.addEventListener('click', function (event) {
        if (glaDos){
            p2Campo.innerHTML = "";
            p2Disparos.innerHTML = "";
            verTableroJ2.innerHTML = "Ver Tablero GlaDos<span class='tooltip-text' id='mensajeToolJ2'>¿Asustado de GlaDos?, lo siento ♥</span>";
            crearCampoDeJuego(p2Campo);
            colocarBarcos(p2Campo);
            crearCampoDeJuego(p2Disparos);
            terminadoP2.click();
        }else {
            p2Campo.innerHTML = "";
            p2Disparos.innerHTML = "";
            verTableroJ2.innerHTML = "Ver Tablero J2<span class='tooltip-text' id='mensajeToolJ2'>El truco es usar la lógica</span>";
            crearCampoDeJuego(p2Campo);
            colocarBarcos(p2Campo);
            crearCampoDeJuego(p2Disparos);
            p2Campo.classList.remove('oculto');
            p2Disparos.classList.add('oculto');
            terminadoP2.classList.remove('oculto');
        }
    });

    terminadoP1.addEventListener('click', function (event) {
        if (event.target.id === "terminadoP1") {
            if (glaDos) {
                cambiarTableroP1.classList.add('oculto');
                terminadoP1.classList.add('oculto');
                p1Campo.classList.add('oculto');
                cambiarTableroP2.click();
            }else {
                cambiarTableroP1.classList.add('oculto');
                terminadoP1.classList.add('oculto');
                p1Campo.classList.add('oculto');
                cambiarTableroP2.classList.remove('oculto');
            }
        }
    });

    terminadoP2.addEventListener('click', function (event) {
        if (glaDos) {
            temporizador.classList.remove('oculto');
            turnos.classList.remove('oculto');
            ultimoMovimiento.classList.remove('oculto');
            verTableroJ1.classList.remove('oculto');
            verTableroJ2.classList.remove('oculto');
            p1Disparos.classList.remove('oculto');
            p2Disparos.classList.remove('oculto');
            actualizarTiempo();
            cambiarJugador();
        }else{
            if (event.target.id === "terminadoP2"){
                terminadoP2.classList.add('oculto');
                temporizador.classList.remove('oculto');
                turnos.classList.remove('oculto');
                ultimoMovimiento.classList.remove('oculto');
                cambiarTableroP2.classList.add('oculto');
                verTableroJ1.classList.remove('oculto');
                verTableroJ2.classList.remove('oculto');
                p2Campo.classList.add('oculto');
                p1Disparos.classList.remove('oculto');
                actualizarTiempo();
                cambiarJugador();
            }
        }
    });

    verTableroJ1.addEventListener('mouseover', function (event) {
        if (turno.textContent === "Jugador1"){
            if (event.target.id === "verTableroJ1"){
                p1Campo.classList.remove('oculto');
                p1Disparos.classList.add('oculto');
            }
        }
    });

    verTableroJ1.addEventListener('mouseout', function (event) {
        if (turno.textContent === "Jugador1") {
            if (event.target.id === "verTableroJ1") {
                p1Campo.classList.add('oculto');
                p1Disparos.classList.remove('oculto');
            }
        }
    });

    verTableroJ2.addEventListener('mouseover', function (event) {
        if (turno.textContent === "Jugador2") {
            if (event.target.id === "verTableroJ2"){
                p2Campo.classList.remove('oculto');
                p2Disparos.classList.add('oculto');
            }
        }
    });

    verTableroJ2.addEventListener('mouseout', function (event) {
        if (turno.textContent === "Jugador2") {
            if (event.target.id === "verTableroJ2"){
                p2Campo.classList.add('oculto');
                p2Disparos.classList.remove('oculto');
            }
        }
    });

    let tiempo = 0;
    let min = 0;
    function actualizarTiempo() {
        tiempo++;
        if (tiempo === 60) {
            tiempo = 0;
            min++;
        }
        tiempoRestanteElement.textContent = min.toString().padStart(2, '0') + ":" + tiempo.toString().padStart(2, '0');
        if (!terminado){
            setTimeout(actualizarTiempo, 1000);
        }
    }


    function cambiarJugador() {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');

        clic++;
        if (clic === 0) {

        } else {
            if (glaDos) {
                if (clic % 2 === 0) {
                    p1Disparos.classList.add('oculto');
                    p2Disparos.classList.remove('oculto');
                    p2Disparos.classList.add('mostrar');
                    turno.textContent = 'GlaDos';
                    ataque(celdasP2Disparos, celdasP1Campo);
                    AtaqueGlaDos(celdasP2Disparos, celdasP1Campo);
                } else {
                    setTimeout(function () {
                        turno.textContent = 'Jugador1';
                        p2Disparos.classList.add('oculto');
                        p1Disparos.classList.remove('oculto');
                        p1Disparos.classList.add('mostrar');
                        ataque(celdasP1Disparos, celdasP2Campo);
                    }, 2000);
                }
            } else {
                if (clic % 2 === 0) {
                    turno.textContent = 'Jugador2';
                    p1Disparos.classList.add('oculto');
                    p2Disparos.classList.remove('oculto');
                    p2Disparos.classList.add('mostrar');
                    ataque(celdasP2Disparos, celdasP1Campo);
                } else {
                    turno.textContent = 'Jugador1';
                    p2Disparos.classList.add('oculto');
                    p1Disparos.classList.remove('oculto');
                    p1Disparos.classList.add('mostrar');
                    ataque(celdasP1Disparos, celdasP2Campo);
                }
            }
        }

        function AtaqueGlaDos(campoAtaque, campoAtacado) {
            let disparado = 0;
            let barcosTocados = p2Disparos.querySelectorAll('.tocado');

            while (disparado === 0) {
                let numeroRandomFilas;
                let numeroRandomColumnas;
                let numeroRandom = Math.floor(Math.random() * 100);
                barcosTocados = "";

                if (numeroRandom < 10) {
                    numeroRandomFilas = 0;
                    numeroRandomColumnas = numeroRandom;
                } else {
                    numeroRandomFilas = Math.floor(numeroRandom / 10);
                    numeroRandomColumnas = numeroRandom % 10;
                }

                for (let i = 0; i < campoAtaque.length; i++) {
                    if (parseInt(campoAtaque[i].dataset.row) === numeroRandomFilas && parseInt(campoAtaque[i].dataset.col) === numeroRandomColumnas) {
                        if (campoAtacado[i].classList.contains('barco')) {
                            let numBarco = campoAtacado[i].dataset.barco;
                            console.log("He tocado un barco asi que vuelvo a tirar, el barco es: " + campoAtacado[i].dataset.row + ", " + campoAtacado[i].dataset.col);
                            for (let j = 0; j < campoAtacado.length; j++) {
                                if (campoAtacado[j].dataset.barco === numBarco){
                                    console.log("ALA");
                                    setTimeout(function () {
                                        campoAtaque[j].click();
                                    }, 2000);
                                }
                            }
                            disparado = 1;
                            if (barcosTocadosGlaDos !== 20){
                                setTimeout(function () {
                                    AtaqueGlaDos(campoAtaque, campoAtacado);
                                }, 2000);
                            }
                        }
                        if (campoAtaque[i].classList.contains("celda")) {
                            if (campoAtaque[numeroRandomFilas].dataset.row === campoAtacado[numeroRandomFilas].dataset.row && campoAtaque[numeroRandomColumnas].dataset.col === campoAtacado[numeroRandomColumnas].dataset.col) {
                                if (!campoAtaque[i].classList.contains('prohibida')) {
                                    console.log("He tocado agua asi que te toca a tí, el agua es: " + campoAtaque[i].dataset.row + ", " + campoAtaque[i].dataset.col);
                                    setTimeout(function () {
                                        campoAtaque[i].click();
                                    }, 2000);
                                    disparado = 1;
                                } else {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function ataque(campoAtaque, campoAtacado){
        for (let i = 0; i < campoAtaque.length; i++) {
            campoAtaque[i].addEventListener('click', function (event) {
                if (event.target.classList.contains('celda')) {
                    let fila = event.target.dataset.row;
                    let columna = event.target.dataset.col;
                    if (glaDos && turno.textContent === "GlaDos"){
                        setTimeout(function () {
                        }, 2000);
                    }
                    event.target.classList.remove('celda');
                    campoAtacado[i].classList.remove('celda');
                    conseguirMismaCasilla(campoAtaque ,campoAtacado, fila, columna);
                }
            });
        }
    }

    function conseguirMismaCasilla(campoAtaque ,campoAtacado, fila, columna){
        let sinTocar = 0;
        let probarHundirse;
        for (let i = 0; i < campoAtaque.length; i++) {
            if (campoAtacado[i].dataset.row === fila && campoAtacado[i].dataset.col === columna){
                probarHundirse = campoAtacado[i].dataset.barco;
                if (campoAtacado[i].classList.contains('barco')){
                    campoAtacado[i].classList.remove('barco');
                    campoAtacado[i].classList.add('tocado');
                }else{
                    campoAtacado[i].classList.add('agua');
                    campoAtaque[i].classList.add('agua');
                    calcularMovimientos(fila, columna, " Agua");
                    cambiarJugador();
                    return;
                }
            }
        }
        for (let i = 0; i < campoAtacado.length; i++) {
            if (campoAtacado[i].dataset.barco === probarHundirse && !campoAtacado[i].classList.contains('tocado')){
                sinTocar++;
                tocado++;
            }
        }
        if (sinTocar > 0){
            for (let i = 0; i < campoAtaque.length; i++) {
                if (campoAtaque[i].dataset.row === fila && campoAtaque[i].dataset.col === columna){
                    calcularMovimientos(fila, columna, " Tocado");
                    campoAtaque[i].classList.add('tocado');
                }
            }
        }else {
            calcularMovimientos(fila, columna, " Tocado y Hundido");
            for (let i = 0; i < campoAtacado.length; i++) {
                if (campoAtacado[i].dataset.barco === probarHundirse && campoAtacado[i].classList.contains('tocado')){
                    campoAtacado[i].classList.remove('tocado');
                    campoAtacado[i].classList.add('hundido');
                    campoAtaque[i].classList.remove('tocado');
                    campoAtaque[i].classList.add('hundido');

                    let fila = parseInt(campoAtacado[i].dataset.row);
                    let columna = parseInt(campoAtacado[i].dataset.col);

                    for (let row = Math.max(fila - 1, 0); row <= Math.min(fila + 1, 9); row++) {
                        for (let col = Math.max(columna - 1, 0); col <= Math.min(columna + 1, 9); col++) {
                            if (row !== fila || col !== columna) {
                                let celdaAdyacente = null;

                                for (let j = 0; j < campoAtaque.length; j++) {
                                    if (
                                        parseInt(campoAtaque[j].dataset.row) === row &&
                                        parseInt(campoAtaque[j].dataset.col) === col
                                    ) {
                                        celdaAdyacente = campoAtaque[j];
                                        break;
                                    }
                                }

                                if (celdaAdyacente && celdaAdyacente.classList.contains('celda')) {
                                    celdaAdyacente.classList.add('prohibida');
                                }
                            }
                        }
                    }
                }
            }
        }
        ganado();
    }

    function ganado(){
        let celdasP1DisparosVictoria = p1Disparos.querySelectorAll('.hundido');
        let celdasP2DisparosVictoria = p2Disparos.querySelectorAll('.hundido');
        if (tocado !== 0){
            if (glaDos){
                barcosTocadosP1 = 0;
                barcosTocadosGlaDos = 0;

                for (let i = 0; i < celdasP1DisparosVictoria.length; i++) {
                    barcosTocadosP1++;
                }
                for (let i = 0; i < celdasP2DisparosVictoria.length; i++) {
                    barcosTocadosGlaDos++;
                }

                if (barcosTocadosP1 === 20){
                    terminado = true;
                    alert("P1: ha ganado");
                    fondoModalVictoria.classList.replace('oculto', 'fondo-modal-victoria');
                    setTimeout(function () {
                        modalInicioVictoria.innerHTML = "\n" +
                            "        <div class='modal-inicio' id='modal-inicio-victoria'>\n" +
                            "            <div class='interior-modal-inicio'>\n" +
                            "                <h2>HAS GANADO J1</h2>\n" +
                            "                <h3>Guau, en verdad la has ganado...</h3>\n" +
                            "                <p>¿Como te etreves a ganarme HUMANO?</p>\n" +
                            "                <p>SE ACABO, QUIERO MI REVANCHA</p>\n" +
                            "                <p>¡¡¡YO SOY GLADOS, LA MEJOR IA QUE EXISTE!!!</p>\n" +
                            "                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio-victoria'>REVANCHA\n" +
                            "                </button>\n" +
                            "            </div>\n" +
                            "        </div>";
                        modalInicioVictoria.classList.remove('oculto');
                    }, 2000);
                }else if (barcosTocadosGlaDos === 20){
                    terminado = true;
                    alert("GlaDos ha ganado");
                    fondoModalVictoria.classList.replace('oculto', 'fondo-modal-victoria');
                    setTimeout(function () {
                        modalInicioVictoria.innerHTML = "\n" +
                            "        <div class='modal-inicio' id='modal-inicio-victoria'>\n" +
                            "            <div class='interior-modal-inicio'>\n" +
                            "                <h2>HA GANADO GlaDos</h2>\n" +
                            "                <h3>¿Qué te esperabas?</h3>\n" +
                            "                <p>Lo siento humano, pero es normal perder...</p>\n" +
                            "                <p>Sobretodo si eres un humano jugando a ser Dios</p>\n" +
                            "                <p>Easy Peasy Lemon Squeazy</p>\n" +
                            "                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio-victoria'>Asumir derrota\n" +
                            "                </button>\n" +
                            "            </div>\n" +
                            "        </div>";
                        modalInicioVictoria.classList.remove('oculto');
                    }, 2000);
                }
            }else {
                barcosTocadosP1 = 0;
                barcosTocadosP2 = 0;

                for (let i = 0; i < celdasP1DisparosVictoria.length; i++) {
                    barcosTocadosP1++;
                }
                for (let i = 0; i < celdasP2DisparosVictoria.length; i++) {
                    barcosTocadosP2++;
                }
                if (barcosTocadosP1 === 20){
                    terminado = true;
                    alert("P1: ha ganado");
                    fondoModalVictoria.classList.replace('oculto', 'fondo-modal-victoria');
                    setTimeout(function () {
                        modalInicioVictoria.innerHTML = "\n" +
                            "        <div class='modal-inicio' id='modal-inicio-victoria'>\n" +
                            "            <div class='interior-modal-inicio'>\n" +
                            "                <h2>HAS GANADO J1</h2>\n" +
                            "                <h3>¡¿QUE SE SIENTE AL SER UN CAMPEÓN?!</h3>\n" +
                            "                <p>Ahora tu vida estará vacía...</p>\n" +
                            "                <p>Ya está, no has ganado nada más</p>\n" +
                            "                <p>♥♥♥¡¡¡JG DIFF!!!♥♥♥</p>\n" +
                            "                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio-victoria'>Cerrar\n" +
                            "                </button>\n" +
                            "            </div>\n" +
                            "        </div>";
                        modalInicioVictoria.classList.remove('oculto');
                    }, 2000);
                }else if (barcosTocadosP2 === 20){
                    terminado = true;
                    alert("P2: ha ganado");
                    fondoModalVictoria.classList.replace('oculto', 'fondo-modal-victoria');
                    setTimeout(function () {
                        modalInicioVictoria.innerHTML = "\n" +
                            "        <div class='modal-inicio' id='modal-inicio-victoria'>\n" +
                            "            <div class='interior-modal-inicio'>\n" +
                            "                <h2>HAS GANADO...¿J2?</h2>\n" +
                            "                <h3>¡¡¡COMO QUE HA GANADO J2!!!</h3>\n" +
                            "                <p>Bueno, supongo que esta, ¿Bien?</p>\n" +
                            "                <p>Es decir, ¿Quién confia en el J2?</p>\n" +
                            "                <p>¿Enhorabuena?</p>\n" +
                            "                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio-victoria'>Llorar\n" +
                            "                </button>\n" +
                            "            </div>\n" +
                            "        </div>";
                        modalInicioVictoria.classList.remove('oculto');
                    }, 2000);
                }
            }
        }
    }

    function calcularMovimientos(fila, columna, evento){
        switch (columna) {
            case "0":
                columna = "A";
                break;
            case "1":
                columna = "B";
                break;
            case "2":
                columna = "C";
                break;
            case "3":
                columna = "D";
                break;
            case "4":
                columna = "E";
                break;
            case "5":
                columna = "F";
                break;
            case "6":
                columna = "G";
                break;
            case "7":
                columna = "H";
                break;
            case "8":
                columna = "I";
                break;
            case "9":
                columna = "J";
                break;
        }
        fila++;
        movimientos.textContent = " " + columna + fila + evento;

        if (evento === " Agua"){
            movimientos.classList.remove('estadoTocado');
            movimientos.classList.remove('estadoHundido');
            movimientos.classList.add('estadoAgua');
        }
        if (evento === " Tocado") {
            movimientos.classList.remove('estadoAgua');
            movimientos.classList.remove('estadoHundido');
            movimientos.classList.add('estadoTocado');
        }
        if (evento === " Tocado y Hundido"){
            movimientos.classList.remove('estadoAgua');
            movimientos.classList.remove('estadoTocado');
            movimientos.classList.add('estadoHundido');
        }
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
        } while ((!comprobarCeldasAdyacentes(contenedor, posicion) || comprobarSuperposicion(contenedor, posicion)) && intento < maximoIntentos);

        if (intento >= maximoIntentos) {
            console.log("No se pudo colocar el barco después de varios intentos.");
            return;
        }
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

    function comprobarSuperposicion(contenedor, posicion) {
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

});