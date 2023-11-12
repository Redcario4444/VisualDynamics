document.addEventListener('DOMContentLoaded', function () {
    const p1Campo = document.getElementById('p1-campo');
    const p1Disparos = document.getElementById('p1-disparos');
    const p2Campo = document.getElementById('p2-campo');
    const p2Disparos = document.getElementById('p2-disparos');

    function crearCampoDeJuego(contenedor) {
        for (let i = 0; i < 100; i++) {
            const celda = document.createElement('div');
            celda.className = 'celda';
            celda.dataset.row = Math.floor(i / 10);
            celda.dataset.col = i % 10;
            contenedor.appendChild(celda);
        }
    }

    function colocarBarcos(contenedor) {
        const ships = [
            { length: 4, count: 1 },
            { length: 3, count: 2 },
            { length: 2, count: 3 },
            { length: 1, count: 4 }
        ];

        ships.forEach((ship) => {
            for (let i = 0; i < ship.count; i++) {
                colocarBarco(contenedor, ship.length);
            }
        });
    }

    function colocarBarco(contenedor, length) {
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

        let position;
        do {
            position = getRandomPosition(length, direction);
        } while (!checkSurroundingCells(contenedor, position, length, direction) || isOverlap(contenedor, position, length, direction));

        const ship = document.createElement('div');
        ship.className = 'ship';
        ship.style.width = direction === 'horizontal' ? `${length * 40}px` : '40px';
        ship.style.height = direction === 'vertical' ? `${length * 40}px` : '40px';

        ship.dataset.position = JSON.stringify(position);
        contenedor.appendChild(ship);

        // Marcar las celdas ocupadas por el barco
        markShipCells(contenedor, position, length, direction);
    }

    function getRandomPosition(length, direction) {
        const row = direction === 'vertical' ? Math.floor(Math.random() * (10 - length + 1)) : Math.floor(Math.random() * 10);
        const col = direction === 'horizontal' ? Math.floor(Math.random() * (10 - length + 1)) : Math.floor(Math.random() * 10);

        return {
            row,
            col,
            direction,
            length,
        };
    }

    function isOverlap(contenedor, position, length, direction) {
        const cells = contenedor.querySelectorAll('.ship');
        const { row, col } = position;

        for (let i = 0; i < length; i++) {
            const checkRow = row + (direction === 'vertical' ? i : 0);
            const checkCol = col + (direction === 'horizontal' ? i : 0);

            if (
                checkRow < 0 ||
                checkRow >= 10 ||
                checkCol < 0 ||
                checkCol >= 10
            ) {
                return true; // Fuera de los límites del tablero
            }

            const cell = contenedor.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
            if (cell && cell.classList.contains('ship')) {
                return true;
            }
        }

        return false;
    }

    function markShipCells(contenedor, position, length, direction) {
        const { row, col } = position;

        for (let i = 0; i < length; i++) {
            const cell = contenedor.querySelector(`[data-row="${row + (direction === 'vertical' ? i : 0)}"][data-col="${col + (direction === 'horizontal' ? i : 0)}"]`);
            cell.classList.add('ship');
        }
    }

    function checkSurroundingCells(contenedor, position, length, direction) {
        const { row, col } = position;
        const buffer = 1; // Tamaño de la franja en blanco alrededor de los barcos

        for (let i = -buffer; i <= length + buffer; i++) {
            for (let j = -buffer; j <= buffer; j++) {
                const checkRow = row + i;
                const checkCol = col + (direction === 'horizontal' ? i : j);

                if (
                    checkRow < 0 ||
                    checkRow >= 10 ||
                    checkCol < 0 ||
                    checkCol >= 10
                ) {
                    continue; // Fuera de los límites del tablero
                }

                const cell = contenedor.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
                if (cell && cell.classList.contains('ship')) {
                    return false;
                }
            }
        }

        return true;
    }

    crearCampoDeJuego(p1Campo);
    colocarBarcos(p1Campo);
    crearCampoDeJuego(p1Disparos);

    crearCampoDeJuego(p2Campo);
    colocarBarcos(p2Campo);
    crearCampoDeJuego(p2Disparos);
});
