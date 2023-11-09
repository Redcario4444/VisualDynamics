document.addEventListener('DOMContentLoaded', function() {
    let timer = 4000;
    let i = 0;
    let c = document.getElementById('c');
    let lis = c.querySelectorAll('li');
    let max = lis.length;

    function updatePositions(startIndex) {
        lis.forEach(function (li, index) {
            li.classList.remove('active');
            li.style.transitionDelay = '0s'; // Inicializar con 0s para evitar retrasos innecesarios al principio
            li.style.left = '100%'; // Mueve todos fuera de la vista al principio
        });

        // Asegúrate de que el primer conjunto de elementos sea visible inmediatamente
        for (let j = 0; j < 4; j++) {
            if (startIndex + j < max) {
                lis[startIndex + j].classList.add('active');
                lis[startIndex + j].style.left = (25 * j) + '%';
                // Retraso inicial puede ser 0s si no quieres la animación al principio
                lis[startIndex + j].style.transitionDelay = '0s';
            }
        }
    }

    // Inicializar posiciones
    updatePositions(i);

    // Configurar intervalo
    let interval = setInterval(function () {
        i = (i + 4) % max;
        updatePositions(i);
    }, timer);

    // Control adelante y atrás
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    prev.addEventListener('click', function () {
        i = (i - 4 + max) % max;
        updatePositions(i);
    });

    next.addEventListener('click', function () {
        i = (i + 4) % max;
        updatePositions(i);
    });

    // Detener el carrusel cuando el usuario interactúa
    prev.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });
    prev.addEventListener('mouseleave', function () {
        interval = setInterval(function () {
            i = (i + 4) % max;
            updatePositions(i);
        }, timer);
    });

    next.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });
    next.addEventListener('mouseleave', function () {
        interval = setInterval(function () {
            i = (i + 4) % max;
            updatePositions(i);
        }, timer);
    });
});