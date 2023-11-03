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
		console.log('Opción seleccionada:', value);
		document.getElementById('retroPrompt').style.display = 'none';
		afterMemoryCardSelection(value);
	}

	function afterMemoryCardSelection(value) {
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

	function toggleMusic() {
		if (bgMusic.paused) {
			bgMusic.play();
			playPauseBtn.innerHTML = '<span id="pause-emoji">▐▐</span><span id="pause-text">PAUSE</span>';
		} else {
			bgMusic.pause();
			playPauseBtn.innerHTML = '<span id="play-emoji">▶</span><span id="play-text">PLAY</span>';
		}
	}

	playPauseBtn.addEventListener('click', toggleMusic);

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
			titulo[0].style.color = "white";
			startMusic();
			coming.style.display = "inherit";
		}, 850);
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

	window.onkeydown = function (e) {
		if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
			e.preventDefault();
		}

		let delay = 500;
		let playSoundAndMove = function () {
			cursorSound.currentTime = 0;
			cursorSound.play().then(() => {
				setTimeout(() => {
					updateSelection(selectedOptionIndex);
				}, delay - cursorSound.currentTime * 1000);
			}).catch(err => {
				console.error("Error al reproducir el sonido:", err);
			});
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
				break;
			case 'Escape':
				closePrompt();
				break;
		}
	};

	updateSelection(selectedOptionIndex);
});
