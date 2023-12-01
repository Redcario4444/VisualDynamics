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
            <button class='botones-seleccion' id='ia'>Player VS GlaDos
                <span class='tooltip-text'>Mídete contra la IA Final</span></button>
            <button class='botones-seleccion' id='dosJugadores'>Player VS Player
                <span class='tooltip-text'>Juega con un amigo, si tienes</span>
            </button>
            <button class='botones-seleccion oculto' id='reiniciar'>Reiniciar
                <span class='tooltip-text'>Reinicia tu partida</span>
            </button>
            <button class='botones-seleccion oculto' id='verTableroJ1'>Ver Tablero J1
                <span class='tooltip-text'>¿Vas ganando?, espero que sí...</span>
            </button>
            <button class='botones-seleccion oculto' id='verTableroJ2'>Ver Tablero J2
                <span class='tooltip-text' id='mensajeToolJ2'>El truco es usar la lógica</span>
            </button>
        </div>
        <div>
            <button class='botones-seleccion marcador oculto' id="turnos">Turno: <span id="turno">Nadie</span></button>
            <button class='botones-seleccion marcador oculto' id="temporizador">Tiempo: <span id='time-number'>0</span></button>
            <button class='botones-seleccion marcador oculto' id="ultimoMovimiento">Movimientos: <span id='movimientos'></span></button>
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
            <div id='p1Campo' class='campoJuego oculto'></div>
            <div id='p1Disparos' class='campoJuego oculto'></div>
        </div>
        <div>
            <h2 id='mostrarCampoP2'></h2>
            <div id='p2Campo' class='campoJuego oculto'></div>
            <div id='p2Disparos' class='campoJuego oculto'></div>
        </div>
    </div>


    <div id="modal-reutilizable">
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
    </div>

    <div class='oculto' id='fondo-modal-victoria'></div>
    <div id="modal-victoria" class="oculto">
        <div class='modal-inicio' id='modal-inicio-victoria'>
            <div class='interior-modal-inicio'>
                <h2>HAS GANADO J1</h2>
                <h3>¡¿QUE SE SIENTE AL SER UN CAMPEÓN?!</h3>
                <p>Ahora tu vida estará vacía...</p>
                <p>Ya está, no has ganado nada más</p>
                <p>♥♥♥¡¡¡JG DIFF!!!♥♥♥</p>
                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio-victoria'>Cerrar
                </button>
            </div>
        </div>
    </div>


<?php
    $src = '../../assets/img/main/back.svg';
    include '../../src/footer.php';
?>