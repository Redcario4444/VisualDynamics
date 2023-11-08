<?php
    /**
     * @var string $ruta_footer Ruta relativa al directorio raíz de la página a la que hace referencia
     */
    echo <<<HTML
        </div>
        <div id="canciones">
            <audio src="{$ruta_footer}assets/sound/canciones/neon-gaming.mp3">Neon Gaming</audio>
            <audio src="{$ruta_footer}assets/sound/canciones/old-school.mp3">Old School</audio>
            <audio src="{$ruta_footer}assets/sound/canciones/hyperloop.mp3">Hyperloop</audio>
        </div>
        <footer>
            <p>&copy; VisualDynamics 2023</p>
        </footer>
        </body>
        </html>
HTML;