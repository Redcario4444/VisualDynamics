<?php
    $descripcion = "¡Memory cards! Pon a prueba tu memoria con este juego de cartas.";
    $titulo = "¡Memory Cards!";
    $css = "../../src/css/header_footer.css";
    $css_propio = "../../src/css/memory_cards.css";
    $js = "../../src/js/header.js";
    $js_propio = "../../src/js/memory_cards.js";
    $ruta_canciones = "../../";
    include "../../src/header.php";
?>
    <h1>Memory cards #GC2</h1>

    <div class="container">
        <!-- Menú de Selección de Dificultad -->
        <div id='menu-dificultad'>
            <button class="botones-seleccion dificultad" id='facil'>Fácil
                <span class='tooltip-text tooltip-top'>Seleccióname con la tecla 'f'</span></button>
            <button class='botones-seleccion dificultad' id='medio'>Medio
                <span class='tooltip-text  tooltip-top'>Seleccióname con la tecla 'm'</span></button>
            <button class='botones-seleccion dificultad' id='dificil'>Difícil
                <span class='tooltip-text  tooltip-top'>Seleccióname con la tecla 'd'</span></button>
        </div>

        <!-- Menú de puntuación de usuario -->

        <button class="botones-seleccion marcador">Score:
            <span id="score"></span>
            <span class="tooltip-text tooltip-bottom">¡Intenta conseguir la mayor puntuación!</span>
        </button>
        <button class='botones-seleccion marcador'>Clicks:
            <span id='clicks'></span>
            <span class="tooltip-text tooltip-bottom">¡Intenta hacer la menor cantidad de clicks posible!</span>
        </button>
        <button class='botones-seleccion marcador'>Tiempo:
            <span id='tiempo'></span>
            <span class='tooltip-text tooltip-bottom'>¡Intenta resolverlo en el menor tiempo posible!</span>
        </button>

        <!-- Botón de reinicio -->
        <button class='botones-seleccion reiniciar' id='reiniciar'>Reiniciar
            <span class="tooltip-text tooltip-top">Seleccióname con la tecla 'r'</span></button>

        <!-- Menú de selección de fondos -->
        <button class="botones-seleccion seleccion-fondo" id='boton-seleccion-fondo'>Elegir fondo
            <span class='tooltip-text  tooltip-top'>Seleccióname con la tecla 'e'</span></button>

        <!-- Modal de selección de fondos -->
        <div class='fondo-modal' id='fondo-modal'></div>
        <div class='modal-fondos' id="modal-fondos">
            <div class="interior-modal">
                <div class='seleccion-colores' id="seleccion-colores">
                    <p>Elige un color:</p>
                    <div class='color-option'>
                        <div class='color' style='background-color: #000000;'>
                            <span class='tooltip-text tooltip-bottom'>NEGRO</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #00ff00;'>
                            <span class="tooltip-text tooltip-bottom">VERDE</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #0000ff;'>
                            <span class="tooltip-text tooltip-bottom">AZUL</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #00ffff;'>
                            <span class='tooltip-text tooltip-bottom'>CYAN</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ff0000;'>
                            <span class='tooltip-text tooltip-bottom'>ROJO</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ff00ff;'>
                            <span class='tooltip-text tooltip-bottom'>MAGENTA</span>
                        </div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ffff00;'>
                            <span class='tooltip-text tooltip-bottom'>AMARILLO</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="imagenes">
                <div class='objetoSVG'>
                    <object id='fondo0' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo0.svg'></object>
                    <span class="tooltip-text tooltip-top">DEFAULT</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo1' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo1.svg'></object>
                    <span class='tooltip-text tooltip-top'>JAPÓN</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo2' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo2.svg'></object>
                    <span class='tooltip-text tooltip-top'>ÁFRICA</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo3' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo3.svg'></object>
                    <span class='tooltip-text tooltip-top'>MOROCCO</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo4' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo4.svg'></object>
                    <span class='tooltip-text tooltip-top'>ESPAÑA</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo5' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo5.svg'></object>
                    <span class='tooltip-text tooltip-top'>KANTO</span>
                </div>
            </div>
            <button class="botones-seleccion" id='cerrar-modal'>Cerrar
                <span class='tooltip-text  tooltip-right'>Ciérrame con 'c'</span>
            </button>
        </div>

        <!-- Modal de inicio -->
        <div class="fondo-modal-inicio" id="fondo-modal-inicio"></div>
        <div class="modal-inicio" id="modal-inicio">
            <div class="interior-modal-inicio">
                <h2>¡Bienvenido a Memory Cards!</h2>
                <h3>¡Pon a prueba tu memoria con este juego de cartas!</h3>
                <ul>
                    <li>Puedes elegir entre los modos <em>Fácil</em>, <em>Medio</em> y
                        <em>Difícil</em>.
                    </li>
                    <li>En el menú de
                        <span style="text-decoration: underline">Fondos</span>
                        puedes elegir entre varios fondos y colores.
                    </li>
                    <li>Selecciona reiniciar para volver a empezar.</li>
                </ul>

                <p>¡Buena suerte!</p>
                <button class="botones-seleccion cerrar-inicio abierto" id='cerrar-inicio'>Cerrar
                    <span class='tooltip-text  tooltip-right'>Ciérrame con 'c'</span>
                </button>
            </div>
        </div>

        <!-- Modal de estadísticas -->
        <!-- TODO QUITAR EL DISPLAY NONE! -->
        <div class='fondo-modal-estadisticas' id='fondo-modal-estadisticas' style="display: none"></div>
        <div class='modal-estadisticas' id='modal-estadisticas' style="display: none">
            <div class='interior-modal-estadisticas'>
                <button class='botones-seleccion cerrar-estadisticas abierto' id='cerrar-inicio'>Cerrar
                    <span class='tooltip-text  tooltip-right'>Ciérrame con 'c'</span>
                </button>
            </div>
        </div>

        <!-- Modal de victoria -->
        <div class='container'>
            <div class='menu'>
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
    </div>


    <!-- Canvas para el juego -->
    <canvas id='memory-cards'></canvas>

    <!-- Archivos de audio -->
    <audio id='modem' src='../../assets/sound/memory_cards/modem.mp3' preload="auto"></audio>
    <audio id='welcome' src='../../assets/sound/memory_cards/welcome.mp3' preload="auto"></audio>
    <audio id='cursor' src='../../assets/sound/memory_cards/cursor.mp3' preload="auto"></audio>

<?php
    $src = '../../assets/img/main/back.svg';
    include '../../src/footer.php';
?>