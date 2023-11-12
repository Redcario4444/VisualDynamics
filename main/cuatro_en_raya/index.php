<?php
    $descripcion = 'Cuatro en raya, un juego en el que lucharás por la victoria contra la despiadada IA o contra un amigo, si tienes';
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
        <div class="menu" id='menu'>
            <button class='botones-seleccion dificultad' id='ia'>VS IA
                <span class='tooltip-text tooltip-top'>Mídete contra la poderosísima máquina</span></button>
            <button class='botones-seleccion dificultad' id='dosJugadores'>2 Players
                <span class='tooltip-text tooltip-top'>Juega con un amigo, si tienes...</span>
            </button>
            <button class='botones-seleccion reiniciar' id='reiniciar'>Reiniciar
                <span class='tooltip-text tooltip-top'>Reinicia tu partida con 'r'</span>
            </button>
            <button class='botones-seleccion marcador'>Turno: <span id="turno">Nadie</span>
                <span class="tooltip-text tooltip-top">¡Mira los turnos aquí!</span>
            </button>
            <button class='botones-seleccion marcador'>Tiempo: <span id='tiempo'>0</span>
                <span class='tooltip-text tooltip-top'>¡El tiempo corre en tu contra!</span>
            </button>
            <button class='botones-seleccion marcador'>Movimientos: <span id='movimientos'>0</span>
                <span class='tooltip-text tooltip-top'>¡Intenta ganar en la menor<br>cantidad de movimientos!</span>
            </button>
        </div>
    </div>

    <!-- Tablero de Juego -->
    <div id='juego'>
        <table id='tablero'>
            <!-- Las celdas del tablero se generarán con JavaScript -->
        </table>
        <div id='flecha'>&#x2193;</div> <!-- Representa la flecha -->
    </div>

<?php
    include '../../src/footer.php';
?>