document.addEventListener('DOMContentLoaded', function () {
    let dificilSound = document.getElementById('dificile');
    let bienvenidaSound = document.getElementById('bienvenida');
    let popSound = document.getElementById('pop');
    let imposibleSound = document.getElementById('divNotLie');
    let errorClic = document.getElementById('errorClic');
    let container = document.getElementById('campo');
    let botones = document.getElementsByClassName('botones');
    let seleccion = document.getElementsByClassName('seleccion')[0];
    let score = 0;
    let realScore = 0;
    let scoreNumber = document.getElementById('score-number');
    let pop = 0;
    let realPop = 0;
    let aux = 0;
    let fallos = 0;
    let fallosConsecutivos = 0;
    let popNumber = document.getElementById('pop-number');
    let tiempoRestante = 31; // Tiempo en segundos
    let tiempoRestanteElement = document.getElementById('time-number');

    // Función para actualizar el tiempo restante en el elemento HTML
    function actualizarTiempo() {
        tiempoRestanteElement.textContent = tiempoRestante;
    }

    // Función para detener el juego cuando el tiempo se agota
    function finalizarJuego() {
        container.removeEventListener('click', clicGame);
        if (aux === -1){container.innerHTML = "<div id='finDelJuego'><ul><p class='final'>Has explotado "+realPop+" Divs!!!</p><p class='final'>Has conseguido "+realScore+" puntos!!!</p><p class='final'>Has cometido demasiados<br>fallos :c</p><p class='final' id='empezarDeNuevo' tabindex='0'>Vuelve a escoger dificultad!!!</p></ul></div>";
        }else {
            container.innerHTML = "<div id='finDelJuego'><ul><p class='final'>Has explotado "+realPop+" Divs!!!</p><p class='final'>Has conseguido "+realScore+" puntos!!!</p><p class='final' id='empezarDeNuevo' tabindex='0'>Vuelve a escoger dificultad!!!</p></ul></div>";
        }
        let empezarDeNuevo = document.getElementById('empezarDeNuevo');
        empezarDeNuevo.focus();
        empezarDeNuevo.addEventListener('click', function () {
            location.reload();
        }, false);
    }

    // Función para disminuir el tiempo restante y verificar si el juego debe finalizar
    function actualizarTiempoRestante() {
        tiempoRestante--;
        actualizarTiempo();
        if (tiempoRestante <= 0) {
            finalizarJuego();
        } else {
            // Llamar recursivamente después de 1 segundo
            setTimeout(actualizarTiempoRestante, 1000);
        }
    }

    // Agregar el escuchador de clic al contenedor una sola vez
    container.addEventListener('click', clicGame);

    function clicGame(event){
        // Verificar si el objetivo del clic tiene la clase 'reboteDiv'
        if (event.target.classList.contains(reboteDivClase)) {
            popSound.currentTime = 0;
            popSound.play();
            // Eliminar el elemento clicado
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
                tiempoRestante = 0;
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
            finalizarJuego();
        }else if (velocidad === 6){
            fallosConsecutivos = 0;
            fallos = 0;
            tiempoRestante = 10;
        }
    }

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function () {
            seleccion.classList.add('oculto');
            container.classList.remove('oculto');
            tiempoRestanteElement.classList.remove('oculto');
            if (botones[i].id === 'facil') {
                container.classList.add('fondo-facil');
                bienvenidaSound.currentTime = 0;
                bienvenidaSound.play();
                setTimeout(function () {
                    dificultad(numeroDeDivs = 7, velocidad = 3, reboteDivClase = "reboteDivFacil");
                    actualizarTiempoRestante(); // Comenzar el contador regresivo
                }, 2300);
            } else if (botones[i].id === 'normal') {
                container.classList.add('fondo-normal');
                bienvenidaSound.currentTime = 0;
                bienvenidaSound.play();
                setTimeout(function () {
                    dificultad(numeroDeDivs = 5, velocidad = 5, reboteDivClase = "reboteDivNormal");
                    actualizarTiempoRestante(); // Comenzar el contador regresivo
                }, 2300);
            } else if (botones[i].id === 'dificil') {
                container.classList.add('fondo-dificil');
                dificilSound.currentTime = 0;
                dificilSound.play();
                setTimeout(function () {
                    dificultad(numeroDeDivs = 3, velocidad = 7, reboteDivClase = "reboteDivDificil");
                    actualizarTiempoRestante(); // Comenzar el contador regresivo
                }, 4700);
            } else if (botones[i].id === 'hardcore') {
                container.classList.add('fondo-hardcore');
                imposibleSound.currentTime = 0;
                imposibleSound.play();
                setTimeout(function () {
                    dificultad(numeroDeDivs = 1000, velocidad = 10, reboteDivClase = "reboteDivImposible");
                    actualizarTiempoRestante(); // Comenzar el contador regresivo
                }, 2300);
            } else if (botones[i].id === 'infinito') {
                container.classList.add('fondo-infinito');
                bienvenidaSound.currentTime = 0;
                bienvenidaSound.play();
                setTimeout(function () {
                    dificultad(numeroDeDivs = Math.random() * (10 - 5) + 5, velocidad = 6, reboteDivClase = "reboteDivInfinito");
                    actualizarTiempoRestante(); // Comenzar el contador regresivo
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

                // Velocidad fija (puedes ajustarla)
                fixedSpeed = velocidad;

                // Direcciones aleatorias
                const angulo = Math.random() * Math.PI * 2;
                const velocidadHorizontal = Math.cos(angulo) * fixedSpeed;
                const velocidadVertical = Math.sin(angulo) * fixedSpeed;

                // Posiciones aleatorias dentro de "campo" teniendo en cuenta el tamaño del div
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
