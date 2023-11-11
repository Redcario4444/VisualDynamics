document.addEventListener('DOMContentLoaded', function () {
    let dificilSound = document.getElementById('dificile');
    let bienvenidaSound = document.getElementById('bienvenida');
    let popSound = document.getElementById('pop');
    let imposibleSound = document.getElementById('divNotLie');
    let cursorSound = document.getElementById('cursor');
    let facilSound = document.getElementById('facils');
    let normalSound = document.getElementById('medios');
    let infinitoSound = document.getElementById('infinitos');
    let winSound = document.getElementById('victoria');
    let errorClic = document.getElementById('errorClic');
    let container = document.getElementById('campo');
    let botonesSeleccion = document.getElementsByClassName('botones-seleccion');
    let seleccion = document.getElementsByClassName('seleccion')[0];
    let pop = 0;
    let realPop = 0;
    let aux = 0;
    let fallos = 0;
    let fallosConsecutivos = 0;
    let score = 0;
    let realScore = 0;
    let tiempoRestante = 31;
    let scoreNumber = document.getElementById('score-number');
    let popNumber = document.getElementById('pop-number');
    let tiempoRestanteElement = document.getElementById('time-number');
    let facil = document.getElementById("facil");
    let medio = document.getElementById("medio");
    let dificil = document.getElementById("dificil");
    let hardcore = document.getElementById("hardcore");
    let infinito = document.getElementById("infinito");
    let cerrarModal = document.getElementById("cerrar-inicio");
    let fondoModal = document.getElementById("fondo-modal-inicio");
    let modalInicio = document.getElementById("modal-inicio");

    function actualizarTiempo() {
        tiempoRestanteElement.textContent = tiempoRestante;
    }

    function finalizarJuego() {
        container.removeEventListener('mousedown', clicGame);
        if (aux === -1){
            container.innerHTML = "<div id='finDelJuego'><ul><p class='final'>Has explotado "+realPop+" Divs!!!</p><p class='final'>Has conseguido "+realScore+" puntos!!!</p><p class='final'>Has cometido demasiados<br>fallos :c</p></ul></div>";
        }else {
            container.innerHTML = "<div id='finDelJuego'><ul><p class='final'>Has explotado "+realPop+" Divs!!!</p><p class='final'>Has conseguido "+realScore+" puntos!!!</p></ul></div>";
        }
    }

    function actualizarTiempoRestante() {
        tiempoRestante--;
        actualizarTiempo();
        if (tiempoRestante <= 0) {
            finalizarJuego();
            facil.classList.remove('oculto');
            medio.classList.remove('oculto');
            dificil.classList.remove('oculto');
            hardcore.classList.remove('oculto');
            infinito.classList.remove('oculto');
            winSound.currentTime = 0;
            winSound.play();
        } else {
            setTimeout(actualizarTiempoRestante, 1000);
        }
    }

    function clicGame(event){
        if (event.target.classList.contains(reboteDivClase)) {
            popSound.currentTime = 0;
            popSound.play();
            event.target.remove();
            aux = Math.floor(Math.random() * 1000);
            score += aux;
            realScore += aux;
            fallosConsecutivos = 0;
            aux = 0;
            pop++;
            realPop++;
            fallosConsecutivos = 0;
            scoreNumber.textContent = score;
            popNumber.textContent = pop;
            dificultad(1, velocidad, reboteDivClase);
        }else {
            errorClic.currentTime = 0;
            errorClic.play();
            fallos++;
            fallosConsecutivos++;
            if (fallosConsecutivos === 3 || fallos === 6){
                tiempoRestante = 1;
                aux = -1;
            }
        }
        if(velocidad === 3){
            if (pop === 10){
                tiempoRestante = tiempoRestante + 3;
                pop = 0;
            }
            if (score >= 5000){
                score = score - 5000;
                tiempoRestante = tiempoRestante + 3;
            }
            fallosConsecutivos = 0;
            fallos = 0;
        }else if (velocidad === 5){
            if (pop === 10){
                tiempoRestante = tiempoRestante + 1;
                pop = 0;
            }
            if (score >= 5000){
                score = score - 5000;
                tiempoRestante = tiempoRestante + 1;
            }
        }else if (velocidad === 7){
            score = score - 100;
        }else if (velocidad === 10){
            tiempoRestante = 1;
            finalizarJuego();
        }else if (velocidad === 6){
            fallosConsecutivos = 0;
            fallos = 0;
            tiempoRestante = 10;
        }
    }

    function reiniciarVariables(){
        pop = 0;
        realPop = 0;
        aux = 0;
        fallos = 0;
        fallosConsecutivos = 0;
        score = 0;
        realScore = 0;
        tiempoRestante = 31;
        container.textContent = "";
        scoreNumber.textContent = "0";
        popNumber.textContent = "0";
        tiempoRestanteElement.textContent = "30";
        facil.classList.add('oculto');
        medio.classList.add('oculto');
        dificil.classList.add('oculto');
        hardcore.classList.add('oculto');
        infinito.classList.add('oculto');
    }

    cerrarModal.addEventListener('click', function () {
        fondoModal.classList.add('oculto');
        modalInicio.style.display = "none";
        bienvenidaSound.currentTime = 0;
        bienvenidaSound.play();
    });

    for (let i = 0; i < botonesSeleccion.length; i++){
        botonesSeleccion[i].addEventListener('mouseover', function () {
            cursorSound.currentTime = 0;
            cursorSound.play();
        });
        botonesSeleccion[i].addEventListener('mousedown', function () {
            if (botonesSeleccion[i].id === 'facil') {
                reiniciarVariables();
                seleccion.classList.add('oculto');
                container.classList.remove('oculto');
                container.classList.remove('fondo-normal');
                container.classList.remove('fondo-dificil');
                container.classList.remove('fondo-hardcore');
                container.classList.remove('fondo-infinito');
                container.classList.add('fondo-facil');
                facilSound.currentTime = 0;
                facilSound.play();
                container.addEventListener('mousedown', clicGame);
                setTimeout(function () {
                    dificultad(numeroDeDivs = 7, velocidad = 3, reboteDivClase = "reboteDivFacil");
                    actualizarTiempoRestante();
                }, 2700);
            } else if (botonesSeleccion[i].id === 'medio') {
                reiniciarVariables();
                seleccion.classList.add('oculto');
                container.classList.remove('oculto');
                container.classList.remove('fondo-facil');
                container.classList.remove('fondo-dificil');
                container.classList.remove('fondo-hardcore');
                container.classList.remove('fondo-infinito');
                container.classList.add('fondo-normal');
                normalSound.currentTime = 0;
                normalSound.play();
                container.addEventListener('mousedown', clicGame);
                setTimeout(function () {
                    dificultad(numeroDeDivs = 5, velocidad = 5, reboteDivClase = "reboteDivNormal");
                    actualizarTiempoRestante();
                }, 2800);
            } else if (botonesSeleccion[i].id === 'dificil') {
                reiniciarVariables();
                seleccion.classList.add('oculto');
                container.classList.remove('oculto');
                container.classList.remove('fondo-facil');
                container.classList.remove('fondo-normal');
                container.classList.remove('fondo-hardcore');
                container.classList.remove('fondo-infinito');
                container.classList.add('fondo-dificil');
                dificilSound.currentTime = 0;
                dificilSound.play();
                container.addEventListener('mousedown', clicGame);
                setTimeout(function () {
                    dificultad(numeroDeDivs = 3, velocidad = 7, reboteDivClase = "reboteDivDificil");
                    actualizarTiempoRestante();
                }, 4700);
            } else if (botonesSeleccion[i].id === 'hardcore') {
                reiniciarVariables();
                seleccion.classList.add('oculto');
                container.classList.remove('oculto');
                container.classList.remove('fondo-facil');
                container.classList.remove('fondo-normal');
                container.classList.remove('fondo-dificil');
                container.classList.remove('fondo-infinito');
                container.classList.add('fondo-hardcore');
                imposibleSound.currentTime = 0;
                imposibleSound.play();
                container.addEventListener('mousedown', clicGame);
                setTimeout(function () {
                    dificultad(numeroDeDivs = 1000, velocidad = 10, reboteDivClase = "reboteDivImposible");
                    actualizarTiempoRestante();
                }, 2300);
            } else if (botonesSeleccion[i].id === 'infinito') {
                reiniciarVariables();
                seleccion.classList.add('oculto');
                container.classList.remove('oculto');
                container.classList.remove('fondo-facil');
                container.classList.remove('fondo-normal');
                container.classList.remove('fondo-dificil');
                container.classList.remove('fondo-hardcore');
                container.classList.add('fondo-infinito');
                infinitoSound.currentTime = 0;
                infinitoSound.play();
                container.addEventListener('mousedown', clicGame);
                setTimeout(function () {
                    dificultad(numeroDeDivs = Math.random() * (10 - 5) + 5, velocidad = 6, reboteDivClase = "reboteDivInfinito");
                    actualizarTiempoRestante();
                }, 2300);
            }
            });

        function dificultad(divCount, velocidad, reboteDivClase) {
            const arrayDivs = [];
            const campoJuego = container.getBoundingClientRect();
            const campoHorizontal = campoJuego.left;
            const campoVertical = campoJuego.top;

            for (let i = 0; i < divCount; i++) {
                const div = document.createElement('div');
                if (reboteDivClase === "reboteDivInfinito"){
                    div.addEventListener('mouseover', function () {
                        div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
                    });
                }
                if (reboteDivClase === "reboteDivInfinito"){
                    let randomDimension = Math.floor(Math.random() * (100 - 50) + 50) + 'px';
                    div.style.height = randomDimension;
                    div.style.width = randomDimension;
                    div.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)+')';
                    div.style.hover = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)+')';
                }
                div.className = reboteDivClase;
                container.appendChild(div);

                let fixedSpeed = velocidad;

                const angulo = Math.random() * Math.PI * 2;
                const velocidadHorizontal = Math.cos(angulo) * fixedSpeed;
                const velocidadVertical = Math.sin(angulo) * fixedSpeed;
                const generacionHorizontal = Math.random() * (campoJuego.width - div.clientWidth);
                const generacionVertical = Math.random() * (campoJuego.height - div.clientHeight);

                arrayDivs.push({
                    element: div,
                    x: generacionHorizontal,
                    y: generacionVertical,
                    dx: velocidadHorizontal,
                    dy: velocidadVertical,
                    maxX: campoJuego.width - div.clientWidth,
                    maxY: campoJuego.height - div.clientHeight,
                });
            }

            function animarRebote() {
                arrayDivs.forEach((divData) => {
                    const { element, x, y, dx, dy, maxX, maxY } = divData;
                    let newX = x + dx;
                    let newY = y + dy;

                    if (newX < 0 || newX > maxX) {
                        divData.dx = -dx;
                    }

                    if (newY < 0 || newY > maxY) {
                        divData.dy = -dy;
                    }

                    element.style.left = (campoHorizontal + newX) + 'px';
                    element.style.top = (campoVertical + newY) + 'px';

                    divData.x = newX;
                    divData.y = newY;
                });

                requestAnimationFrame(animarRebote);
            }
            animarRebote();
        }
    }
});
