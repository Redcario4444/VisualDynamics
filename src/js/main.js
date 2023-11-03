document.addEventListener('DOMContentLoaded', function() {
	var selectedOptionIndex = 0;
	var memoryCardOptions = document.querySelectorAll('.memory-card-option');

	function updateSelection(index) {
		// Remove focus from all options
		memoryCardOptions.forEach(option => option.classList.remove('selected'));

		// Add focus to the selected option
		memoryCardOptions[index].classList.add('selected');
		memoryCardOptions[index].focus();
	}

	function closePrompt() {
		document.getElementById('retroPrompt').style.display = 'none';
	}

	document.getElementById('closePrompt').onclick = closePrompt;

	// Click handling for options
	memoryCardOptions.forEach((option, index) => {
		option.onclick = function() {
			console.log('Selected:', option.dataset.value);
			closePrompt();
		};
		option.onfocus = function() {
			selectedOptionIndex = index;
		};
	});

	// Keyboard navigation
	window.onkeydown = function(e) {
		switch(e.key) {
			case 'ArrowUp':
				selectedOptionIndex = (selectedOptionIndex > 0) ? selectedOptionIndex - 1 : memoryCardOptions.length - 1;
				updateSelection(selectedOptionIndex);
				break;
			case 'ArrowDown':
				selectedOptionIndex = (selectedOptionIndex < memoryCardOptions.length - 1) ? selectedOptionIndex + 1 : 0;
				updateSelection(selectedOptionIndex);
				break;
			case 'Enter':
				memoryCardOptions[selectedOptionIndex].click();
				break;
			case 'Escape':
				closePrompt();
				break;
		}
	};

	// Initialize selection
	updateSelection(selectedOptionIndex);
});

document.addEventListener("DOMContentLoaded", function() {
	const textoOculto = document.querySelector(".texto-oculto");
	const mariocoin = document.getElementById("miAudio");
	textoOculto.classList.add("mostrar-texto");
	setTimeout(function() {
		var sonido = new Audio("/assets/sound/index/mario-coin.mp3");
		sonido.play();
		cambioamarillo();
	}, 7000);
	function cambioamarillo() {
		setTimeout(function () {
			let titulo = document.getElementsByClassName("titulo");
			titulo[0].style.color = "gold";
			cambioblanco();
		}, 500);
	}
	function cambioblanco(){
		setTimeout(function() {
			let titulo = document.getElementsByClassName("titulo");
			titulo[0].style.color = "white";
			ponermusica();
		}, 850);
	}
	function ponermusica() {
		var sonido = new Audio("/assets/sound/index/bgm.mp3");
		sonido.play();
	}
});
