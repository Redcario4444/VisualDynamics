function App() {}

window.onload = function (event) {
	window.app = new App();
	app.initializeCarousel();
	app.startAutoScroll();
}

App.prototype.initializeCarousel = function() {
	this.track = document.getElementById('track');
	this.carruselList = document.getElementById('carrusel-list');
	this.carrusel = this.track.querySelectorAll('.carrusel');
	this.carruselWidth = this.carrusel[0].offsetWidth;
	this.trackWidth = this.track.offsetWidth;
	this.listWidth = this.carruselList.offsetWidth;
	this.leftPosition = 0;
	this.autoScrollTimer = null;
	this.interactionDetected = false;
}

App.prototype.processingButton = function (event) {
	this.interactionDetected = true;
	clearInterval(this.autoScrollTimer);

	const btn = event.currentTarget;
	btn.dataset.button === "button-prev" ? this.prevAction() : this.nextAction();

	this.startAutoScroll(5000);
}

App.prototype.prevAction = function() {
	if (this.leftPosition > 0) {
		this.leftPosition -= this.carruselWidth * 2;
	} else {
		this.leftPosition = -(this.listWidth - this.trackWidth);
	}
	this.updateCarouselPosition();
}

App.prototype.nextAction = function() {
	if (this.leftPosition < (this.trackWidth - this.listWidth)) {
		this.leftPosition += this.carruselWidth * 2;
	} else {
		this.leftPosition = 0;
	}
	this.updateCarouselPosition();
}

App.prototype.updateCarouselPosition = function() {
	this.track.style.left = `${-this.leftPosition}px`;
}

App.prototype.startAutoScroll = function(delay) {
	if (this.interactionDetected) {
		this.interactionDetected = false;
		delay = 5000;
	} else {
		delay = delay || 3000;
	}

	this.autoScrollTimer = setTimeout(() => {
		this.nextAction();
		this.startAutoScroll();
	}, delay);
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('button-prev').addEventListener('click', function () {
		app.processingButton(event);
	})
	document.getElementById('button-next').addEventListener('click', function () {
		app.processingButton(event);
	})

	let botones = document.getElementById("botones").children;
	let adelante = document.getElementById("adelante-parar");
	let atras = document.getElementById("atras-parar");
	let titulocancion = document.getElementById("titulo-cancion");
	let flechas = document.getElementsByClassName("carrusel-arrow");
	for (var i = 0; i < botones.length; i++) {
		botones[i].addEventListener("click", function (event) {
			if (this.id === "parar") {
				this.removeAttribute("id");
				this.setAttribute("id", "continuar");
				this.textContent = "▶";
				adelante.removeAttribute("id");
				adelante.setAttribute("id", "adelante-continuar");
				atras.removeAttribute("id");
				atras.setAttribute("id", "atras-continuar");
				titulocancion.style.color = "#e30b0b";
				titulocancion.style.textShadow = "0.2rem 0.2rem 0.1rem rgba(227, 11, 11, 0.5)";
				for (let i = 0; i < flechas.length; i++) {
					flechas[i].style.color = "#3d07e7";
					flechas[i].style.textShadow = "0.2rem 0.2rem 0.1rem rgba(67, 1, 231, 0.5)";
				}
			} else if (this.id === "continuar") {
				this.removeAttribute("id");
				this.setAttribute("id", "parar");
				this.textContent = "▐▐";
				adelante.removeAttribute("id");
				adelante.setAttribute("id", "adelante-parar");
				atras.removeAttribute("id");
				atras.setAttribute("id", "atras-parar");
				titulocancion.style.color = "#3d07e7";
				titulocancion.style.textShadow = "0.2rem 0.2rem 0.1rem rgba(67, 1, 231, 0.5)";
				for (let i = 0; i < flechas.length; i++) {
					flechas[i].style.color = "#e30b0b";
					flechas[i].style.textShadow = "0.2rem 0.2rem 0.1rem rgba(227, 11, 11, 0.5)";
				}
			} else if (this.id === "adelante-parar" || this.id === "adelante-continuar") {
				alert("Has pasado a la siguiente canción");
			} else if (this.id === "atras-parar" || this.id === "atras-continuar") {
				alert("Has vuelto a la anterior canción");
			}
		});
	}


})
