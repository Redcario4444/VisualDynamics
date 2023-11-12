document.addEventListener('DOMContentLoaded', function () {
    const p1Campo = document.getElementById('p1Campo');
    const p1Disparos = document.getElementById('p1Disparos');
    const p2Campo = document.getElementById('p2Campo');
    const p2Disparos = document.getElementById('p2Disparos');
    let contadorDeBarcos = 0;

    crearCampoDeJuego(p1Campo);
    colocarBarcos(p1Campo);
    crearCampoDeJuego(p1Disparos);

    crearCampoDeJuego(p2Campo);
    colocarBarcos(p2Campo);
    crearCampoDeJuego(p2Disparos);

    let celdasP1Campo = p1Campo.querySelectorAll('.celda');
    let celdasP1Disparos = p1Disparos.querySelectorAll('.celda');
    let celdasP2Campo = p2Campo.querySelectorAll('.celda');
    let celdasP2Disparos = p1Disparos.querySelectorAll('.celda');
    let clic = 0;

    p1Ataque(celdasP2Disparos, celdasP2Campo);

    /*cambiarJugador();

    function cambiarJugador() {
        clic++;
        if (clic %2 === 0){
            p1Ataque(celdasP1Disparos, celdasP2Campo);
        }else {
            p1Ataque(celdasP2Disparos, celdasP1Campo);
        }
    }*/

    function p1Ataque(campoAtaque, campoAtacado){
        for (let i = 0; i < campoAtaque.length; i++) {
            campoAtaque[i].addEventListener('click', function (event) {
                let fila = event.target.dataset.row;
                let columna = event.target.dataset.col;
                if (event.target.classList.contains('celda')) {
                    fila = event.target.dataset.row;
                    columna = event.target.dataset.col;
                    event.target.classList.remove('celda');
                    conseguirMismaCasilla(campoAtaque ,campoAtacado, fila, columna);
                }else {
                    alert('Ya habias tocado esta casilla');
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
                    /*cambiarJugador();*/
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
    }

    function tocado(campoAtaque, fila, columna){
        for (let i = 0; i < campoAtaque.length; i++) {
            if (campoAtaque[i].dataset.row === fila && campoAtaque[i].dataset.col === columna){
                campoAtaque[i].classList.add('tocado');
            }
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