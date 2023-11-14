<?php
    $descripcion = 'Cuatro en raya, un juego en el que lucharás por la victoria contra la despiadada IA o contra un amigo, si tienes...';
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
        <!-- Menú de Selección de dificultad, reinicio y estadísticas-->
        <div class="menu" id='menu'>
            <button class='botones-seleccion dificultad' id='ia'>VS IA
                <span class='tooltip-text tooltip-top'>Mídete contra la poderosísima máquina</span></button>
            <button class='botones-seleccion dificultad' id='pvp'>2 Players
                <span class='tooltip-text tooltip-top'>Juega con un amigo, si tienes...</span>
            </button>
            <button class='botones-seleccion reiniciar' id='reiniciar'>Reiniciar
                <span class='tooltip-text tooltip-top'>Reinicia tu partida con 'r'</span>
            </button>
            <button class='botones-seleccion marcador' id='velocidad'><span id='valor-velocidad'
                ><span style='font-size: 1.1rem'>⚡</span>1x</span>
                <span class='tooltip-text tooltip-top'>¡Cambia la velocidad de caída con 'v'!</span>
            </button>
            <button class='botones-seleccion marcador'>Turno: <span id="turno"></span>
                <span class="tooltip-text tooltip-top">¡Mira los turnos aquí!</span>
            </button>
            <button class='botones-seleccion marcador'>Tiempo: <span id='tiempo'>00:00</span>
                <span class='tooltip-text tooltip-top'>¡El tiempo corre en tu contra!</span>
            </button>
        </div>

        <!-- Modal de inicio -->
        <div class='fondo-modal-inicio' id='fondo-modal-inicio'></div>
        <div class='modal-inicio' id='modal-inicio'>
            <div class='interior-modal-inicio'>
                <h2>¡Bienvenido a las Cuatro en Raya!</h2>
                <h3>¡Un clásico al alcance de todos!</h3>
                <ul>
                    <li>Puedes elegir entre los modos <em style="text-decoration: underline">PVAi</em> y <em
                                style="text-decoration: underline">PVP</em>. <span style="font-size: .45rem">La disponibilidad del modo PVAi está sujeta a que no me dé un infarto cerebral antes de mañana...</span>
                    </li>
                    <li>En cualquier momento de la partida puedes reiniciar con el botón de reinicio o con la tecla
                        'r'.
                    </li>
                    <li>Controles:
                        <ul>
                            <li>Lanzar ficha: ⌨️ barra espaciadora o 🖱️ click izquierdo</li>
                            <li>Moverse: ⌨️ flechas de direccion o 🖱️ desplazar el mouse</li>
                        </ul>
                    </li>
                    <li>Al acabar la partida, ¡sólamente se puede reiniciar!</li>
                    <li>¡El tiempo es orientativo, pero si el temporizador se da la vuelta, háztelo mirar...</li>
                    <li>¡DISFRUTA!</li>
                </ul>

                <p>¡Buena suerte!</p>
                <button class='botones-seleccion cerrar-inicio abierto' id='cerrar-inicio'>Cerrar
                    <span class='tooltip-text  tooltip-right'>Ciérrame con 'c'</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Tablero de Juego -->
    <div id='juego'>
        <table id='tablero'></table>
        <div id='flecha'>&#x2193;</div>
    </div>

    <!-- Modal de victoria -->
    <div class="container">
        <div class="menu">
            <div class='fondo-modal-victoria' id='fondo-modal-victoria'></div>
            <div class='modal-victoria menu' id='modal-victoria'>
                <div class='interior-modal-victoria'>
                    <h2 id='ganador'></h2>
                    <h3 id='tiempo-final'></h3>
                    <p>¡No todos los héroes tienen capa!</p>
                    <button class='botones-seleccion cerrar-victoria' id='cerrar-victoria'>Cerrar
                        <span class='tooltip-text  tooltip-top'>Ciérrame con 'c'</span>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Archivos de audio -->
    <audio id='welcome' src='../../assets/sound/cuatro_en_raya/welcome.mp3' preload='auto'></audio>
    <audio id='cursor' src='../../assets/sound/cuatro_en_raya/cursor.mp3' preload='auto'></audio>
    <audio id='up' src='../../assets/sound/cuatro_en_raya/up.mp3' preload='auto'></audio>
    <audio id='down' src='../../assets/sound/cuatro_en_raya/down.mp3' preload='auto'></audio>

<?php
    $src = '../../assets/img/main/back.svg';
    include '../../src/footer.php';
?>