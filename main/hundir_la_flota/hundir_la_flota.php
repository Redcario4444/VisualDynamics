<?php
    $descripcion = 'Hundir la flota, un clasíco de Hasbro en tu navegador. Juega contra la máquina o contra un amigo.';
    $titulo = 'Hundir la flota';
    $css = '../../src/css/header_footer.css';
    $css_propio = '../../src/css/hundir_la_flota.css';
    $js = '../../src/js/header.js';
    $js_propio = '../../src/js/hundir_la_flota.js';
    $ruta_canciones = '../../';
    include '../../src/header.php';
?>
    <h1>Hundir la flota #GC4</h1>

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
            <button class='botones-seleccion marcador'>Movimientos: <span id='movimientos-number'>0</span></button>
        </div>
    </div>


    <div class='game-container'>
        <div>
            <h2>Jugador 1</h2>
            <div id='p1-campo' class='campoJuego'></div>
            <br><br><br>
            <div id='p1-disparos' class='campoJuego'></div>
        </div>
        <div>
            <h2>Jugador 2</h2>
            <div id='p2-campo' class='campoJuego'></div>
            <br><br><br>
            <div id='p2-disparos' class='campoJuego'></div>
        </div>
    </div>


<?php
    include '../../src/footer.php';
?>