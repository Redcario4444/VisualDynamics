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
                    <li>Puedes elegir entre los modos <em>PVIa</em> y <em>PVP</em>.
                    </li>
                    <li>En el menú de
                        <span style='text-decoration: underline'>Fondos</span>
                        puedes elegir entre varios fondos y colores.
                    </li>
                    <li>Selecciona reiniciar para volver a empezar.</li>
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

<?php
    include '../../src/footer.php';
?>