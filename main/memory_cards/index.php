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
    <h1>Memory cards</h1>

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
        <button class="botones-seleccion seleccion-fondo" id='boton-fondo'>Elegir fondo
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
    </div>
    <!-- Canvas para el juego -->
    <canvas id='memory-cards'></canvas>

<?php
    include '../../src/footer.php';
?>