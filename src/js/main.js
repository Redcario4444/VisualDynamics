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

document.getElementById('button-prev').addEventListener('click', function () {
	app.processingButton(event);
})
document.getElementById('button-next').addEventListener('click', function () {
	app.processingButton(event);
})

document.addEventListener('DOMContentLoaded', function () {

	let flecha = document.getElementsByClassName("carrusel-arrow");
	let botones = document.getElementById("botones").children;

	for (let i = 0; i < botones.length; i++) {
		botones[i].addEventListener("click", function (event) {
			if (this.id === "parar") {
				for (let i = 0; i < flecha.length; i++) {
					flecha[i].style.color = "#e30b0b";
					flecha[i].style.textShadow = "0.2rem 0.2rem 0.1rem rgba(227, 11, 11, 0.5)";
				}
			} else if (this.id === "continuar") {
				for (let i = 0; i < flecha.length; i++) {
				flecha[i].style.color = "#3d07e7";
				flecha[i].style.textShadow = "0.2rem 0.2rem 0.1rem rgba(67, 1, 231, 0.5)";
				}
			}
		});
	}
});
