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
            {length: 4, count: 1},
            {length: 3, count: 2},
            {length: 2, count: 3},
            {length: 1, count: 4}
        ];

        ships.forEach((ship) => {
            for (let i = 0; i < ship.count; i++) {
                colocarBarco(contenedor, ship.length);
            }
        });
    }

    function colocarBarco(contenedor, length) {
        let position;
        let attempt = 0;
        const maxAttempts = 100;

        do {
            position = getRandomPosition(length);
            attempt++;
        } while ((!checkSurroundingCells(contenedor, position) || isOverlap(contenedor, position)) && attempt < maxAttempts);

        if (attempt >= maxAttempts) {
            console.log("No se pudo colocar el barco después de varios intentos.");
            return;
        }

        // Marcar las celdas ocupadas por el barco
        markShipCells(contenedor, position, length);
    }

    function getRandomPosition(length) {
        const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const buffer = 1;
        let row, col;

        if (direction === 'horizontal') {
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * (10 - length - buffer));
        } else {
            row = Math.floor(Math.random() * (10 - length - buffer));
            col = Math.floor(Math.random() * 10);
        }

        return {
            row,
            col,
            direction,
            length
        };
    }

    function checkSurroundingCells(contenedor, position) {
        const buffer = 1;
        const endRow = position.direction === 'vertical' ? position.row + position.length : position.row;
        const endCol = position.direction === 'horizontal' ? position.col + position.length : position.col;

        for (let i = position.row - buffer; i <= endRow + buffer; i++) {
            for (let j = position.col - buffer; j <= endCol + buffer; j++) {
                if (i < 0 || i >= 10 || j < 0 || j >= 10) {
                    continue;
                }

                const cell = contenedor.querySelector(`[data-row="${i}"][data-col="${j}"]`);
                if (cell && cell.classList.contains('ship')) {
                    return false;
                }
            }
        }

        return true;
    }

    function isOverlap(contenedor, position) {
        for (let i = 0; i < position.length; i++) {
            const checkRow = position.row + (position.direction === 'vertical' ? i : 0);
            const checkCol = position.col + (position.direction === 'horizontal' ? i : 0);

            const cell = contenedor.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
            if (cell && cell.classList.contains('ship')) {
                return true;
            }
        }

        return false;
    }

    function markShipCells(contenedor, position, length) {
        for (let i = 0; i < length; i++) {
            const checkRow = position.row + (position.direction === 'vertical' ? i : 0);
            const checkCol = position.col + (position.direction === 'horizontal' ? i : 0);

            const cell = contenedor.querySelector(`[data-row="${checkRow}"][data-col="${checkCol}"]`);
            if (cell) {
                cell.classList.add('ship');
            }
        }
    }

    crearCampoDeJuego(p1Campo);
    colocarBarcos(p1Campo);
    crearCampoDeJuego(p1Disparos);

    crearCampoDeJuego(p2Campo);
    colocarBarcos(p2Campo);
    crearCampoDeJuego(p2Disparos);
});
