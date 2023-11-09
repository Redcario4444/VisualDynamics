document.addEventListener('DOMContentLoaded', function () {
    let selectedOptionIndex = 0;
    let memoryCardOptions = document.querySelectorAll('.memory-card-option');

    function updateSelection(index) {
        // Quitar el foco de todas las opciones
        memoryCardOptions.forEach(option => option.classList.remove('selected'));
        // Añadir foco a la opción seleccionada
        memoryCardOptions[index].classList.add('selected');
        memoryCardOptions[index].focus();
    }

    function closePrompt() {
        document.getElementById('retroPrompt').style.display = 'none';
        document.getElementById('no-memory').style.display = 'inline-flex';
    }

    function handleMemoryCardSelection(value) {
        //console.log('Opción seleccionada:', value);
        if (value === 'card1') {
            let sonido = new Audio("/assets/sound/index/memory1.wav");
            sonido.play();
        } else if (value === 'card2') {
            let sonido = new Audio("/assets/sound/index/memory2.wav");
            sonido.play();
        }
        document.getElementById('retroPrompt').style.display = 'none';
        afterMemoryCardSelection(value);
    }

    function afterMemoryCardSelection() {
        window.removeEventListener('keydown', presionarTeclas);
        const textoOculto = document.querySelector(".texto-oculto");
        textoOculto.classList.add("mostrar-texto");

        // Inicia la secuencia de animación y sonido
        setTimeout(function () {
            let sonido = new Audio("/assets/sound/index/mario-coin.mp3");
            sonido.play();
            toYellow();
        }, 7000);
    }

    let playPauseBtn = document.getElementById('play-pause-btn');
    let bgMusic = document.getElementById('bgm');

    function toggleMusic(state) {
        if (state === 1) {
            if (!bgMusic.paused) {
                bgMusic.pause();
                playPauseBtn.innerHTML = '<span id="play-emoji">▶</span><span id="play-text">PLAY</span>';
            }
        } else {
            if (bgMusic.paused) {
                bgMusic.play();
                playPauseBtn.innerHTML = '<span id="pause-emoji">▐▐</span><span id="pause-text">PAUSE</span>';
            } else {
                bgMusic.pause();
                playPauseBtn.innerHTML = '<span id="play-emoji">▶</span><span id="play-text">PLAY</span>';
            }
        }
    }

    function startMusic() {
        toggleMusic();
        playPauseBtn.style.display = 'inline-flex';
    }

    function toYellow() {
        let titulo = document.getElementsByClassName("titulo");
        titulo[0].classList.add("titulo-animado");
        toWhite();
    }

    function toWhite() {
        setTimeout(function () {
            let titulo = document.getElementsByClassName("titulo");
            let coming = document.getElementById("coming");
            let play = document.getElementById("play");
            titulo[0].style.color = "white";
            startMusic();
            coming.style.display = "inherit";
            play.innerHTML = '<div id="link" class="titulo texto-oculto mostrar-texto titulo-animado" style="color: white; cursor: pointer;">PRESS START!</div>';
        }, 850);
        setTimeout(function () {
            toHome();
        }, 851);
    }

    function toHome() {
        let link = document.getElementById("link");
        let glados = document.getElementById("welcome");
        document.addEventListener("keydown", function (e) {
            if (e.key === "Home" || e.code === "Home" || e.key === "Enter" || e.code === "Enter") {
                toggleMusic(1);
                glados.play();
                setTimeout(function () {
                    window.location.href = "../../main/main.php";
                }, 3000);
            }
        });
        link.addEventListener("click", function () {
            toggleMusic(1);
            glados.play();
            setTimeout(function () {
                window.location.href = "../../main/main.php";
            }, 3000);
        });
        playPauseBtn.addEventListener('click', toggleMusic);
        document.addEventListener('keydown', function (e) {
            if (e.key === " " || e.code === "Space") {
                toggleMusic();
            }
        });
    }

    document.getElementById('closePrompt').onclick = closePrompt;

    memoryCardOptions.forEach((option, index) => {
        option.onclick = function () {
            handleMemoryCardSelection(option.dataset.value);
        };
        option.onfocus = function () {
            selectedOptionIndex = index;
        };
    });

    let cursorSound = new Audio("/assets/sound/index/cursor.mp3");
    cursorSound.load();

    function presionarTeclas(e) {
        if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
        }

        let playSoundAndMove = function () {
            cursorSound.currentTime = 0;
            cursorSound.play();
            updateSelection(selectedOptionIndex);
        };

        switch (e.key) {
            case 'ArrowUp':
                selectedOptionIndex = (selectedOptionIndex > 0) ? selectedOptionIndex - 1 : memoryCardOptions.length - 1;
                playSoundAndMove();
                break;
            case 'ArrowDown':
                selectedOptionIndex = (selectedOptionIndex < memoryCardOptions.length - 1) ? selectedOptionIndex + 1 : 0;
                playSoundAndMove();
                break;
            case 'Enter':
                handleMemoryCardSelection(memoryCardOptions[selectedOptionIndex].dataset.value);
                playSoundAndMove();
                break;
            case 'Escape':
                closePrompt();
                break;
        }
    }

    window.addEventListener('keydown', presionarTeclas);
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('memory-card-option')) {
            cursorSound.play();
        }
    });

    updateSelection(selectedOptionIndex);
});