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
<div class="seleccion">
    <ul>
        <li class="botones" id='facil'>Fácil</li>
        <li class='botones' id='normal'>Normal</li>
        <li class='botones' id='dificil'>Difícil</li>
        <li class='botones' id='infinito'>Infinito</li>
    </ul>
</div>
<div id="campo" class="oculto campo">
    <div id='score'>
        <p>Score: <span id='score-number'>0</span></p>
    </div>
</div>
<audio id="rebote" src="/assets/sound/pilla_el_div/rebote.mp3"></audio>
<audio id="bienvenida" src="/assets/sound/pilla_el_div/welcome.wav"></audio>
<audio id="dificil" src="/assets/sound/pilla_el_div/dificil.wav"></audio>

<?php
    include '../../src/footer.php';
?>