<?php
    $descripcion = "Prueba Slider";
    $titulo = "Slider";
    $css = "../../src/css/header_footer.css";
    $css_propio = "style.css";
    $js = "../../src/js/header.js";
    $js_propio = "main.js";
    $ruta_canciones = "../../";
    include "../../src/header.php";
?>
<div class="container">
    <ul id='c'>
        <li><p><strong>1</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>2</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>3</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>4</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>5</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>6</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>7</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>8</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
        <li><p><strong>9</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
    </ul>
    <button id='prev'>←</button>
    <button id='next'>→</button>
</div>
<?php
    include '../../src/footer.php';
?>