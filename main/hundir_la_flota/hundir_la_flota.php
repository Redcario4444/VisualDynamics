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
            <button class='botones-seleccion marcador oculto' id='tablerop1'>Cambiar tablero P1</button>
            <button class='botones-seleccion marcador oculto' id='tablerop2'>Cambiar tablero P2</button>
            <button class='botones-seleccion marcador oculto' id='terminadoP1'>Tablero escogido</button>
            <button class='botones-seleccion marcador oculto' id='terminadoP2'>Tablero escogido</button>
            <button class='botones-seleccion marcador oculto' id='comenzarJuego'>Comenzar Juego</button>
        </div>
    </div>


    <div class='game-container'>
        <div>
            <h2 id="mostrarCampoP1"></h2>
            <div id='p1Campo' class='campoJuego'></div>
            <br><br><br>
            <div id='p1Disparos' class='campoJuego'></div>
        </div>
        <div>
            <h2 id='mostrarCampoP2'></h2>
            <div id='p2Campo' class='campoJuego'></div>
            <br><br><br>
            <div id='p2Disparos' class='campoJuego'></div>
        </div>
    </div>


    <div class='fondo-modal-inicio' id='fondo-modal-inicio'></div>
    <div class='modal-inicio' id='modal-inicio'>
        <div class='interior-modal-inicio'>
            <h2>¡Bienvenido a Hundir la flota!</h2>
            <h3>¡Disfruta de un verdadero clásico en formato digital!</h3>
            <ul>
                <li>Puedes elegir jugar con un amigo o medirte contra la IA GlaDOS.</li>
                <li>Si no puedes ganar a GlaDOS...ÚNETE A ELLA y déjate ganar.</li>
                <li>Un entretenido juego de estrategia naval.</li>
            </ul>

            <p>¡Buena suerte!</p>
            <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio'>Cerrar
            </button>
        </div>
    </div>


<?php
    include '../../src/footer.php';
?>