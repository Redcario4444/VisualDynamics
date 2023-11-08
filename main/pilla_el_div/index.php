<?php
    $descripcion = "Pilla el Div, un juego que comprueba tus reflejos y movimientos rápidos";
    $titulo = "Pilla el Div";
    $css = "../../src/css/header_footer.css";
    $css_propio = "../../src/css/pilla_el_div-style.css";
    $js = "../../src/js/header.js";
    $js_propio = "../../src/js/pilla_el_div.js";
    include "../../src/header.php";
?>
<h1>Pilla el Div</h1>

<div id="campo">
</div>
<audio id="rebote" src="/assets/sound/pilla_el_div/rebote.mp3"></audio>

<?php
    include '../../src/footer.php';
?>