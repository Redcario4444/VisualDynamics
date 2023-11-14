<?php
    $descripcion = '¡Tetris! ¡El gran clásico de la Nintendo Game Boy original ahora en VisualDynamics!';
    $titulo = 'Tetris';
    $css = '../../src/css/header_footer.css';
    $css_propio = '../../src/css/tetris.css';
    $js = '../../src/js/header.js';
    $js_propio = '../../src/js/tetris.js';
    $ruta_canciones = '../../';
    include '../../src/header.php';
?>

    <h1>Tetris #GC5</h1>

    <div class='container'>
        <!-- Menú de Selección de dificultad, reinicio y estadísticas-->
        <div class='menu' id='menu'>
            <button class='botones-seleccion reiniciar' id='reiniciar'>Reiniciar
                <span class='tooltip-text tooltip-top'>Reinicia tu partida con 'r'</span>
            </button>
            <button class='botones-seleccion marcador'>Tiempo: <span id='tiempo'>00:00</span>
                <span class='tooltip-text tooltip-top'>¡El tiempo corre en tu contra!</span>
            </button>
        </div>
    </div>


    <div class='contenedor-juego'>
        <div id='tablero-tetris'></div>
    </div>
<?php
    $src = '../../assets/img/main/back.svg';
    include '../../src/footer.php';
?>