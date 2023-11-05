function App() {}

window.onload = function (event) {
	window.app = new App();
	app.initializeCarousel(); // Inicializa el carrusel
	app.startAutoScroll(); // Inicia el desplazamiento automático con un intervalo de 3 segundos al cargar la página
}

App.prototype.initializeCarousel = function() {
	this.track = document.getElementById('track');
	this.carruselList = document.getElementById('carrusel-list');
	this.carrusel = this.track.querySelectorAll('.carrusel');
	this.carruselWidth = this.carrusel[0].offsetWidth;
	this.trackWidth = this.track.offsetWidth;
	this.listWidth = this.carruselList.offsetWidth;
	this.leftPosition = 0;
	this.autoScrollTimer = null; // Agregar el temporizador para el desplazamiento automático
	this.interactionDetected = false; // Indicador de interacción del usuario
}

App.prototype.processingButton = function (event) {
	// Detener el temporizador cuando el usuario interactúa
	this.interactionDetected = true;
	clearInterval(this.autoScrollTimer);

	const btn = event.currentTarget;
	btn.dataset.button === "button-prev" ? this.prevAction() : this.nextAction();

	// Volver a iniciar el desplazamiento automático después de 5 segundos de inactividad
	this.startAutoScroll(5000);
}

App.prototype.prevAction = function() {
	if (this.leftPosition > 0) {
		this.leftPosition -= this.carruselWidth * 2; // Avanza 2 elementos hacia atrás
	} else {
		// Si llegamos al primer elemento y se presiona "prev", vamos al último elemento
		this.leftPosition = -(this.listWidth - this.trackWidth);
	}
	this.updateCarouselPosition();
}

App.prototype.nextAction = function() {
	if (this.leftPosition < (this.trackWidth - this.listWidth)) {
		this.leftPosition += this.carruselWidth * 2; // Avanza 2 elementos hacia adelante
	} else {
		// Si llegamos al último elemento y se presiona "next", volvemos al primer elemento
		this.leftPosition = 0;
	}
	this.updateCarouselPosition();
}

App.prototype.updateCarouselPosition = function() {
	this.track.style.left = `${-this.leftPosition}px`;
}

App.prototype.startAutoScroll = function(delay) {
	if (this.interactionDetected) {
		// Si se detectó interacción del usuario, inicia el temporizador después de 5 segundos
		this.interactionDetected = false;
		delay = 5000; // 5 segundos
	} else {
		// En caso contrario, inicia el temporizador después de 3 segundos
		delay = delay || 3000; // 3 segundos
	}

	// Iniciar el temporizador para el desplazamiento automático
	this.autoScrollTimer = setTimeout(() => {
		this.nextAction(); // Simula un clic en el botón "Next"
		this.startAutoScroll(); // Volver a iniciar el desplazamiento automático
	}, delay);
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('button-prev').addEventListener('click', function () {
		app.processingButton(event);
	})
	document.getElementById('button-next').addEventListener('click', function () {
		app.processingButton(event);
	})
})
