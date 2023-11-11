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
            <button class="botones-seleccion" id='facil'>Fácil
                <span class='tooltip-text'>Dif. Fácil con 'f'</span></button>
            <button class='botones-seleccion' id='medio'>Medio
                <span class='tooltip-text'>Dif. Media con 'm'</span></button>
            <button class='botones-seleccion' id='dificil'>Difícil
                <span class='tooltip-text'>Max. Dif. con 'd'</span></button>
        </div>

        <button class="botones-seleccion marcador">Score: <span id="score"></span></button>
        <button class='botones-seleccion marcador'>Clicks: <span id='clicks'></span></button>
        <button class='botones-seleccion marcador'>Tiempo: <span id='tiempo'></span></button>

        <button class='botones-seleccion' id='reiniciar'>Reiniciar
            <span class="tooltip-text">Reinicia con 'r'</span></button>

        <button class="botones-seleccion" id='boton-fondo'>Elegir fondo
            <span class='tooltip-text'>Elige con 'e'</span></button>

        <!-- Modal de selección de fondo -->
        <div class='fondo-modal' id='fondo-modal'></div>
        <div id='modal-fondos'>
            <div class="interior-modal">
                <div id='seleccion-colores'>
                    <p>Elige un color:</p>
                    <div class='color-option'>
                        <div class='color' style='background-color: #000000;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #00ff00;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #0000ff;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #00ffff;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ff0000;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ff00ff;'></div>
                    </div>
                    <div class='color-option'>
                        <div class='color' style='background-color: #ffff00;'></div>
                    </div>
                </div>
            </div>
            <div class="imagenes">
                <div class='objetoSVG'>
                    <object id='fondo0' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo0.svg'></object>
                    <span class="tooltip-text">DEFAULT</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo1' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo1.svg'></object>
                    <span class='tooltip-text'>CHINA</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo2' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo2.svg'></object>
                    <span class='tooltip-text'>ÁFRICA</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo3' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo3.svg'></object>
                    <span class='tooltip-text'>PÍXEL</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo4' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo4.svg'></object>
                    <span class='tooltip-text'>FLOR</span>
                </div>
                <div class='objetoSVG'>
                    <object id='fondo5' type='image/svg+xml'
                            data='../../assets/img/memory_cards/fondos/fondo5.svg'></object>
                    <span class='tooltip-text'>POKÉ<br>BALL</span>
                </div>
            </div>
            <button class=" botones-seleccion
                " id='cerrar-modal'>Cerrar
            </button>
        </div>
    </div>
    <!-- Canvas para el juego -->
    <canvas id='memory-cards'></canvas>

<?php
    include '../../src/footer.php';
?>