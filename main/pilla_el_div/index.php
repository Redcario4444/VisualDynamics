<?php
    $descripcion = "Pilla el Div, un juego 5r que comprueba tus reflejos y movimientos rápidos";
    $titulo = "Pilla el Div";
    $css = "../../src/css/header_footer.css";
    $css_propio = "../../src/css/pilla_el_div.css";
    $js = "../../src/js/header.js";
    $js_propio = "../../src/js/pilla_el_div.js";
    $ruta_canciones = '../../';
    include "../../src/header.php";
?>
    <h1>Pilla el Div</h1>

    <div class='container'>
        <!-- Menú de Selección de Dificultad -->
        <div id='menu-dificultad'>
            <button class='botones-seleccion' id='facil'>Fácil
                <span class='tooltip-text'>No puedes perder<br>10 Pops +3 seg<br>5000 Puntos +3 seg</span></button>
            <button class='botones-seleccion' id='medio'>Medio
                <span class='tooltip-text'>3 fallos seguidos YOU LOSE<br>6 fallos en total YOU LOSE<br>10 Pops +1 seg<br>5000 Puntos +1 seg</span></button>
            <button class='botones-seleccion' id='dificil'>Difícil
                <span class='tooltip-text'>3 fallos seguidos YOU LOSE<br>6 fallos en total YOU LOSE<br>Cada clic 100 Puntos</span></button>
            <button class='botones-seleccion' id='hardcore'>Hardcore
                <span class='tooltip-text'>No te lo recomiendo...<br>Nadie ha conseguido hacer 1 punto</span></button>
            <button class='botones-seleccion' id='infinito'>Infinito
                <span class='tooltip-text'>Cada clic pone el tiempo a 10seg<br>Diviértete sin límites</span></button>
        </div>
        <div>
            <button class='botones-seleccion marcador'>Score: <span id='score-number'>0</span></button>
            <button class='botones-seleccion marcador'>Pops: <span id='pop-number'>0</span></button>
            <button class='botones-seleccion marcador'>Tiempo: <span id='time-number'>30</span></button>
        </div>
    </div>
    <div id='importante'>
        <div class='seleccion'></div>
        <div id='campo' class='oculto campo'></div>
    </div>

<audio id="bienvenida" src="/assets/sound/pilla_el_div/welcome.wav"></audio>
<audio id="dificile" src="/assets/sound/pilla_el_div/dificil.wav"></audio>
<audio id="pop" src="/assets/sound/pilla_el_div/pop.mp3"></audio>
<audio id="divNotLie" src="/assets/sound/pilla_el_div/divNotLie.wav"></audio>
<audio id="errorClic" src="/assets/sound/pilla_el_div/errorClic.mp3"></audio>
<audio id="cursor" src="/assets/sound/index/cursor.mp3"></audio>

<?php
    include '../../src/footer.php';
?>