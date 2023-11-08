document.addEventListener('DOMContentLoaded', function () {

    let canciones = document.getElementById("canciones").children;
    let contador = 0;
    let botones = document.getElementById("botones").children;
    let adelante = document.getElementById("adelante-continuar");
    let atras = document.getElementById("atras-continuar");
    let titulocancion = document.getElementById("titulo-cancion");

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
                canciones[contador].pause();
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
                canciones[contador].play();
                titulocancion.textContent = canciones[contador].textContent;
            } else if (this.id === "adelante-parar" || this.id === "adelante-continuar") {
                canciones[contador].pause();
                if (contador+1 < canciones.length){
                    contador++;
                }else {
                    contador = 0;
                }
                if (botones[1].id === "parar"){
                    canciones[contador].play();
                }
                titulocancion.textContent = canciones[contador].textContent;
            } else if (this.id === "atras-parar" || this.id === "atras-continuar") {
                canciones[contador].pause();
                if (contador-1 > -1){
                    contador--;
                }else {
                    contador = canciones.length-1;
                }
                if (botones[1].id === "parar"){
                    canciones[contador].play();
                }
                titulocancion.textContent = canciones[contador].textContent;
            }
        });
    }
});
