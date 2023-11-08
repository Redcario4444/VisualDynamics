<?php
    $descripcion = "Pilla el Div, un juego que comprueba tus reflejos y movimientos rápidos";
    $titulo = "Pilla el Div";
    $css = "../../src/css/pilla_el_div.css";
    $js = "../../src/js/pilla_el_div.css";
    include "templates/header.php";
?>


<div id="campo">
</div>
<audio id="rebote" src="/assets/sound/pilla_el_div/rebote.mp3"></audio>

<?php
    include '../../src/footer.php';
?>