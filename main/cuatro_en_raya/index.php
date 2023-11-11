<?php
    $descripcion = 'Cuatro en raya, un juego en el que lucharas por la victoria contra la IA';
    $titulo = 'Cuatro en raya';
    $css = '../../src/css/header_footer.css';
    $css_propio = '../../src/css/cuatro_en_raya.css';
    $js = '../../src/js/header.js';
    $js_propio = '../../src/js/cuatro_en_raya.js';
    $ruta_canciones = '../../';
    include '../../src/header.php';
?>
    <h1>Cuatro en Raya #GC3</h1>

    <div class='container'>
        <!-- Menú de Selección de Dificultad -->
        <div id='menu-dificultad'>
            <button class='botones-seleccion' id='ia'>VS IA
                <span class='tooltip-text'>Mídete contra la máquina</span></button>
            <button class='botones-seleccion' id='dosJugadores'>2 Players
                <span class='tooltip-text'>Juega con un amigo, si tienes</span>
            </button>
            <button class='botones-seleccion' id='reiniciar'>Reiniciar
                <span class='tooltip-text'>Reinicia tu partida</span>
            </button>
        </div>
        <div>
            <button class='botones-seleccion marcador'>Turno: <span id="turno">Nadie</span></button>
            <button class='botones-seleccion marcador'>Tiempo: <span id='time-number'>0</span></button>
        </div>
    </div>

    <div id='importante'>
        <div class='seleccion'>⬇</div>
        <div id='campo' class='campo'></div>
    </div>


<?php
    include '../../src/footer.php';
?>