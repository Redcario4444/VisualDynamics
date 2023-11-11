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
                        <h4><small>Reflejos y Velocidad</small>Pilla el Div</h4>
                        <picture>
                            <img src="../assets/img/main/pilla_el_div.png" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>2</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>3</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>4</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>5</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>6</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>7</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>8</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
            <div class="carrusel">
                <div>
                    <a href="/">
                        <h4><small>9</small> Mas </h4>
                        <picture>
                            <img src="../assets/img/index/fondo_inicio.gif" alt="imagen">
                        </picture>
                    </a>
                </div>
            </div>
        </div>
        <button class="carrusel-arrow carrusel-next" id="button-next" data-button="button-next">▶</button>
    </div>
<?php
    include "../src/footer.php";
?>