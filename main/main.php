<?php
    $descripcion = "VisualDynamics es una empresa de diseño gráfico y desarrollo web. Nuestro objetivo es ayudar a las empresas a crecer y a mejorar su imagen.";
    $titulo = "VisualDynamics";
    $css = "../src/css/header_footer.css";
    $css_propio = "../src/css/main.css";
    $js = "../src/js/header.js";
    $js_propio = "../src/js/main.js";
    $ruta_canciones = "../";
    include "../src/header.php";
?>
    <div class="carrusel-list" id="carrusel-list">
        <button class="carrusel-arrow carrusel-prev" id="button-prev" data-button="button-prev">◀</button>
        <div class="carrusel-track" id="track">
            <div class="carrusel">
                <div>
                    <a href="pilla_el_div/index.php">
                        <h4>Pilla el Div</h4>
                        <picture>
                            <img src="../assets/img/main/pilla_el_div.png" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="memory_cards/index.php">
                        <h4>Memory Cards</h4>
                        <picture>
                            <img src="../assets/img/main/memory_cards.png" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="cuatro_en_raya/index.php">
                        <h4>Cuatro en Raya</h4>
                        <picture>
                            <img src="../assets/img/main/cuatro_en_raya.png" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="hundir_la_flota/hundir_la_flota.php">
                        <h4>Hundir la Flota</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4>Pong</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4>Snake</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4>Buscaminas</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4>Ajedrez</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4>Unnamed</h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class='carrusel'>
                <div>
                    <a href='tetris/index.php'>
                        <h4>tetris</h4>
                        <picture>
                            <img src='../assets/img/index/fondo_inicio.gif' alt='imagen'>
                        </picture>
                    </a>
                </div>
            </div>
        </div>
        <button class="carrusel-arrow carrusel-next" id="button-next" data-button="button-next">▶</button>
    </div>
<?php
    $src = "../assets/img/main/back.svg";
    include "../src/footer.php";
?>