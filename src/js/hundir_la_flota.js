document.addEventListener('DOMContentLoaded', function () {
    let p1Campo = document.getElementById('p1Campo');
    let p1Disparos = document.getElementById('p1Disparos');
    let p2Campo = document.getElementById('p2Campo');
    let p2Disparos = document.getElementById('p2Disparos');
    let cambiarTableroP1 = document.getElementById('tablerop1');
    let cambiarTableroP2 = document.getElementById('tablerop2');
    let comenzarJuego = document.getElementById('comenzarJuego');
    let turno = document.getElementById('turno');
    let clic = -1;
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

    cerrarModal.addEventListener('click', function () {
        fondoModal.classList.add('oculto');
        modalInicio.style.display = "none";
        /*bienvenidaSound.currentTime = 0;
        bienvenidaSound.play();*/
    });

    dosJugadores.addEventListener('click', function (event){
        if (event.target.id === "dosJugadores"){
            /*setTimeout(function () {
            }, 3000);*/
            cambiarTableroP1.classList.remove('oculto');
            terminadoP1.classList.remove('oculto');
            mostrarCampoP1.textContent = "Jugador1";
            mostrarCampoP2.textContent = "Jugador2";
        }
    });

    terminadoP1.addEventListener('click', function (event){
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        if (event.target.id === "terminadoP1"){
            cambiarTableroP1.classList.add('oculto');
            cambiarTableroP2.classList.remove('oculto');
            terminadoP1.classList.add('oculto');
            terminadoP2.classList.remove('oculto');
            for (let i = 0; i < celdasP1Campo.length; i++){
                celdasP1Campo[i].classList.add('oculto');
            }
        }
    });

    terminadoP2.addEventListener('click', function (event){
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        if (event.target.id === "terminadoP2"){
            cambiarTableroP2.classList.add('oculto');
            terminadoP2.classList.add('oculto');
            comenzarJuego.classList.remove('oculto');
            for (let i = 0; i < celdasP2Campo.length; i++){
                celdasP2Campo[i].classList.add('oculto');
            }
        }
    });


    let tiempo = 5;
    function actualizarTiempo() {
        tiempo++;
        tiempoRestanteElement.textContent = tiempo.toString();
        setTimeout(actualizarTiempo, 1000);
    }

    cambiarTableroP1.addEventListener('click', function (event) {
        if (event.target.id === 'tablerop1'){
            p1Campo.innerHTML = '';
            crearCampoDeJuego(p1Campo);
            colocarBarcos(p1Campo);
        }
    });

    cambiarTableroP2.addEventListener('click', function (event) {
        if (event.target.id === 'tablerop2'){
            p2Campo.innerHTML = '';
            crearCampoDeJuego(p2Campo);
            colocarBarcos(p2Campo);
        }
    });

    comenzarJuego.addEventListener('click', function (event) {
        if (event.target.id === 'comenzarJuego'){
            actualizarTiempo();
            crearCampoDeJuego(p1Disparos);
            crearCampoDeJuego(p2Disparos);
            cambiarJugador();
        }
    });

    mostrarCampoP1.addEventListener('mouseover', function (event) {
        if (event.target.id === 'comenzarJuego'){
            actualizarTiempo();
            crearCampoDeJuego(p1Disparos);
            crearCampoDeJuego(p2Disparos);
            cambiarJugador();
        }
    });

    /*mostrarCampoP1.addEventListener('mouseover', function (event) {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP1'){
            for (let i = 0; i < celdasP1Campo.length; i++){
                celdasP1Campo[i].classList.remove('oculto');
            }
        }
        eliminarEventListeners(celdasP1Campo);
        eliminarEventListeners(celdasP1Disparos);
    });

    mostrarCampoP1.addEventListener('mouseout', function (event) {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP1'){
            for (let i = 0; i < celdasP1Campo.length; i++){
                celdasP1Campo[i].classList.add('oculto');
            }
        }
        eliminarEventListeners(celdasP1Campo);
        eliminarEventListeners(celdasP1Disparos);
    });

    mostrarCampoP2.addEventListener('mouseover', function (event) {
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP2'){
            for (let i = 0; i < celdasP2Campo.length; i++){
                celdasP2Campo[i].classList.remove('oculto');
            }
        }
        eliminarEventListeners(celdasP2Campo);
        eliminarEventListeners(celdasP2Disparos);
    });

    mostrarCampoP2.addEventListener('mouseout', function (event) {
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');
        if (event.target.id === 'mostrarCampoP2'){
            for (let i = 0; i < celdasP2Campo.length; i++){
                celdasP2Campo[i].classList.add('oculto');
            }
        }
        eliminarEventListeners(celdasP2Campo);
        eliminarEventListeners(celdasP2Disparos);
    });*/

    function eliminarEventListeners(elementos) {
        elementos.forEach(elemento => {
            // Clonar el elemento para eliminar el event listener sin afectar el original
            const nuevoElemento = elemento.cloneNode(true);
            elemento.parentNode.replaceChild(nuevoElemento, elemento);
        });
    }

    cambiarJugador();

    function cambiarJugador() {
        let celdasP1Campo = p1Campo.querySelectorAll('.celda');
        let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
        let celdasP2Campo = p2Campo.querySelectorAll('.celda');
        let celdasP2Disparos = p2Disparos.querySelectorAll('.celda');

        clic++;
        if (clic === 0){

        }else{
            if (clic %2 === 0){
                turno.textContent = 'Jugador2';
                for (let i = 0; i < celdasP1Disparos.length; i++){
                    celdasP1Disparos[i].classList.add('oculto');
                }
                for (let i = 0; i < celdasP2Disparos.length; i++){
                    celdasP2Disparos[i].classList.remove('oculto');
                }
                ataque(celdasP2Disparos, celdasP1Campo);
            }else {
                turno.textContent = 'Jugador1';
                for (let i = 0; i < celdasP2Disparos.length; i++){
                    celdasP2Disparos[i].classList.add('oculto');
                }
                for (let i = 0; i < celdasP1Disparos.length; i++){
                    celdasP1Disparos[i].classList.remove('oculto');
                }
                ataque(celdasP1Disparos, celdasP2Campo);
            }
        }
    }

    function ataque(campoAtaque, campoAtacado){
        for (let i = 0; i < campoAtaque.length; i++) {
            campoAtaque[i].addEventListener('click', function (event) {
                let fila = event.target.dataset.row;
                let columna = event.target.dataset.col;
                if (event.target.classList.contains('celda')) {
                    fila = event.target.dataset.row;
                    columna = event.target.dataset.col;
                    event.target.classList.remove('celda');
                    campoAtacado[i].classList.remove('celda');
                    conseguirMismaCasilla(campoAtaque ,campoAtacado, fila, columna);
                }else {
                    /*alert('Ya habias tocado esta casilla');*/
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
                    cambiarJugador();
                    return;
                }
            }
        }
        for (let i = 0; i < campoAtacado.length; i++) {
            if (campoAtacado[i].dataset.barco === probarHundirse && !campoAtacado[i].classList.contains('tocado')){
                sinTocar++;
            }
        }
        if (sinTocar > 0){
            tocado(campoAtaque, fila, columna);
        }else {
            for (let i = 0; i < campoAtacado.length; i++) {
                if (campoAtacado[i].dataset.barco === probarHundirse && campoAtacado[i].classList.contains('tocado')){
                    campoAtacado[i].classList.remove('tocado');
                    campoAtacado[i].classList.add('hundido');
                    campoAtaque[i].classList.remove('tocado');
                    campoAtaque[i].classList.add('hundido');
                }
            }
        }
        ganado(campoAtacado);
    }

    function tocado(campoAtaque, fila, columna){
        for (let i = 0; i < campoAtaque.length; i++) {
            if (campoAtaque[i].dataset.row === fila && campoAtaque[i].dataset.col === columna){
                campoAtaque[i].classList.add('tocado');
            }
        }
    }

    function ganado(campoAtacado){
        let barcosHundidos = 0;
        for (let i = 0; i < campoAtacado.length; i++) {
            if (campoAtacado[i].dataset.barco > -1 && campoAtacado[i].classList.contains("hundido")){
                barcosHundidos++;
            }
        }
        if (barcosHundidos === 20 && turno.textContent === "Jugador1"){
            alert('Ha ganado el jugador 1')
        }
        if (campoAtacado === 20 && turno.textContent === "Jugador2"){
            alert('Ha ganado el jugador 2')
        }
    }

    function crearCampoDeJuego(contenedor) {
        for (let i = 0; i < 100; i++) {
            let celda = document.createElement('div');
            celda.className = 'celda';
            celda.dataset.row = Math.floor(i / 10);
            celda.dataset.col = i % 10;
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

});