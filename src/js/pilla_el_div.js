document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementById('campo');
    let rebote = document.getElementById("rebote");
    let divCount = 4;
    let divs = [];
    let campoRect = container.getBoundingClientRect();
    let campoX = campoRect.left;
    let campoY = campoRect.top;

    for (let i = 0; i < divCount; i++) {
        let div = document.createElement('div');
        div.className = 'reboteDiv';
        container.appendChild(div);

        let fixedSpeed = 5;

        let angle = Math.random() * Math.PI * 2;
        let dx = Math.cos(angle) * fixedSpeed;
        let dy = Math.sin(angle) * fixedSpeed;

        const x = Math.random() * campoRect.width;
        const y = Math.random() * campoRect.height;

        divs.push({
            element: div,
            x,
            y,
            dx,
            dy,
            maxX: campoRect.width - div.clientWidth +10,
            maxY: campoRect.height - div.clientHeight +10
        });
    }

    function animarRebote() {
        divs.forEach((divData) => {
            const { element, x, y, dx, dy, maxX, maxY } = divData;
            let newX = x + dx;
            let newY = y + dy;

            if (newX < 0 || newX > maxX) {
                divData.dx = -dx;
                rebote.play();
            }else if (newY < 0 || newY > maxY) {
                divData.dy = -dy;
                rebote.play();
            }

            element.style.left = (campoX + newX) + 'px';
            element.style.top = (campoY + newY) + 'px';

            divData.x = newX;
            divData.y = newY;
        });

        requestAnimationFrame(animarRebote);
    }

    animarRebote();
});
