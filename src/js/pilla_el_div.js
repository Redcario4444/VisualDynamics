document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('campo');
    let botones = document.getElementsByClassName('botones');
    let seleccion = document.getElementsByClassName('seleccion')[0];
    let score = 0;
    let scoreNumber = document.getElementById('score-number');

    // Agregar el escuchador de clic al contenedor una sola vez
    container.addEventListener('click', function (event) {
        // Verificar si el objetivo del clic tiene la clase 'reboteDiv'
        if (event.target.classList.contains('reboteDiv')) {
            // Eliminar el elemento clicado
            event.target.remove();
            score++;
            scoreNumber.textContent = score;
            // Llamar a la función dificultad con 1 div y la velocidad
            dificultad(1, velocidad);
        }
    });

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', function () {
            seleccion.classList.add('oculto');
            container.classList.remove('oculto');
            if (botones[i].id === 'facil') {
                container.classList.add('fondo-facil');

                setTimeout(function () {
                    dificultad(numeroDeDivs = 5, velocidad = 3);
                }, 1000);

            } else if (botones[i].id === 'normal') {
                container.classList.add('fondo-normal');
            } else if (botones[i].id === 'dificil') {
                container.classList.add('fondo-dificil');
            } else if (botones[i].id === 'infinito') {
                container.classList.add('fondo-infinito');
            }
        });

        function dificultad(divCount, velocidad) {
            const arrayDivs = [];
            const campoJuego = container.getBoundingClientRect();
            const campoHorizontal = campoJuego.left;
            const campoVertical = campoJuego.top;

            for (let i = 0; i < divCount; i++) {
                const div = document.createElement('div');
                div.className = 'reboteDiv';
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
