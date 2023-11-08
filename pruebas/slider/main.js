let timer = 4000;
let i = 0;
let c = document.querySelector('#c ul');
let lis = c.querySelectorAll('li');
let max = lis.length;

// Función para actualizar la posición de los elementos
function updatePositions(startIndex) {
    lis.forEach(function(li, index) {
        li.classList.remove('active');
        li.style.transitionDelay = '';
        li.style.left = '';
    });

    for (let j = 0; j < 4; j++) {
        if (startIndex + j < max) {
            lis[startIndex + j].classList.add('active');
            lis[startIndex + j].style.left = (25 * j) + '%';
            lis[startIndex + j].style.transitionDelay = (0.25 * (j + 1)) + 's';
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

prev.addEventListener('click', function() {
    i = (i - 4 + max) % max;
    updatePositions(i);
});

next.addEventListener('click', function() {
    i = (i + 4) % max;
    updatePositions(i);
});

// Detener el carrusel cuando el usuario interactúa
prev.addEventListener('mouseenter', function() {
    clearInterval(interval);
});
prev.addEventListener('mouseleave', function() {
    interval = setInterval(function() {
        i = (i + 4) % max;
        updatePositions(i);
    }, timer);
});

next.addEventListener('mouseenter', function() {
    clearInterval(interval);
});
next.addEventListener('mouseleave', function() {
    interval = setInterval(function() {
        i = (i + 4) % max;
        updatePositions(i);
    }, timer);
});