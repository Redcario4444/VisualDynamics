function procesarSpritesheet(imagen, numFilas, numColumnas) {
    const anchoFrame = imagen.width / numColumnas;
    const altoFrame = imagen.height / numFilas;
    const frames = [];

    for (let fila = 0; fila < numFilas; fila++) {
        for (let columna = 0; columna < numColumnas; columna++) {
            frames.push({
                x: columna * anchoFrame,
                y: fila * altoFrame,
                width: anchoFrame,
                height: altoFrame
            });
        }
    }
    return frames;
}

function animarSpritesheetConDiv(elemento, imagenUrl, frames, duracionFrame) {
    let frameActual = 0;
    let contadorTiempo = 0;

    elemento.style.width = `${frames[0].width}px`;
    elemento.style.height = `${frames[0].height}px`;
    elemento.style.backgroundImage = `url('${imagenUrl}')`;
    elemento.style.backgroundRepeat = 'no-repeat';

    function actualizar() {
        setTimeout(() => {
            requestAnimationFrame(actualizar);

            contadorTiempo++;
            if (contadorTiempo >= duracionFrame) {
                const frame = frames[frameActual];
                elemento.style.backgroundPosition = `-${frame.x}px -${frame.y}px`;

                frameActual = (frameActual + 1) % frames.length; // Avanza al siguiente frame y vuelve al inicio si es necesario
                contadorTiempo = 0; // Resetea el contador
            }
        }, 1000 / 60); // 60 FPS
    }

    actualizar(); // Inicia la animación
}

// Ejemplo de uso
const miDiv = document.getElementById('pruebas');
const frames = procesarSpritesheet('Space-Key.png', 4, 6); // Asume que tienes los frames del spritesheet
animarSpritesheetConDiv(miDiv, 'Space-Key.png', frames, 10); // Ajusta los parámetros según tus necesidades


