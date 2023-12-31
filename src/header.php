<?php
    /**
     * @var string $descripcion    Descripción de la página
     * @var string $titulo         Título de la página
     * @var string $css            CSS del header y del footer en ruta relativa al directorio raíz
     * @var string $css_propio     CSS propia de la página a la que hace referencia
     * @var string $js             Script del header en ruta relativa al directorio raíz
     * @var string $js_propio      Script propio de la página a la que hace referencia
     * @var string $ruta_canciones Ruta relativa de assets/sound/canciones/
     */
?>
<!DOCTYPE html>
<html lang='es'>
<head>
    <!-- HTML Meta Tags -->
    <meta http-equiv='Content-Type' content='text/html;charset=UTF-8'>
    <meta name='description' content='<?= $descripcion ?>'>
    <meta name='author' content='Daniel Alonso Lázaro'>
    <meta name='author' content='Víctor Hellín Sáez'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <!-- Favicon -->
    <link href='/assets/favicon/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180'>
    <link href='/assets/favicon/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png'>
    <link href='/assets/favicon/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png'>
    <link href='/assets/favicon/site.webmanifest' rel='manifest'>
    <link color='#5bbad5' href='/assets/favicon/safari-pinned-tab.svg' rel='mask-icon'>
    <link href='/assets/favicon/favicon.ico' rel='shortcut icon'>
    <meta content='VisualDynamics' name='apple-mobile-web-app-title'>
    <meta content='VisualDynamics' name='application-name'>
    <meta content='#b91d47' name='msapplication-TileColor'>
    <meta content='/assets/favicon/browserconfig.xml' name='msapplication-config'>
    <meta content='#000000' name='theme-color'>
    <!-- CSS -->
    <?php
        echo $css_propio ? "<link rel='stylesheet' href='$css_propio'>\n" : "\n";
    ?>
    <link rel='stylesheet' href="<?= $css ?>">
    <title><?= $titulo ?></title>
    <!-- JS -->
    <?php
        echo $js_propio ? "<script defer src='$js_propio'></script>\n" : "\n";
    ?>
    <script defer src="<?= $js ?>"></script>
</head>
<body>
<div class="header">
    <div id='reproductor'>
        <div id='botonesMusica'>
            <div class='botones' id='atras-continuar'>◀◀</div>
            <div class='botones' id='continuar'>▶</div>
            <div class='botones' id='adelante-continuar'>▶▶</div>
        </div>
        <marquee id='titulo-cancion'></marquee>
        <svg id='titulo' viewBox='-50 20 690 120' xmlns='http://www.w3.org/2000/svg'>
            <style type='text/css'>
                text {
                    filter: url(#filter);
                    fill: white;
                    font-family: 'Share Tech Mono', sans-serif;
                    font-size: 4.5rem;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            </style>
            <defs>
                <filter id='filter'>
                    <feFlood flood-color='red' result='flood1'/>
                    <feFlood flood-color='black' result='flood2'/>
                    <feOffset dx='3' dy='0' in='SourceGraphic' result='off1a'/>
                    <feOffset dx='2' dy='0' in='SourceGraphic' result='off1b'/>
                    <feOffset dx='-3' dy='0' in='SourceGraphic' result='off2a'/>
                    <feOffset dx='-2' dy='0' in='SourceGraphic' result='off2b'/>
                    <feComposite in='flood1' in2='off1a' operator='in' result='comp1'/>
                    <feComposite in='flood2' in2='off2a' operator='in' result='comp2'/>
                    <feMerge result='merge1' width='100%' x='0'>
                        <feMergeNode in='black'/>
                        <feMergeNode in='comp1'/>
                        <feMergeNode in='off1b'/>
                        <animate attributeName='y' dur='4s' id='y'
                                 keyTimes='0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'
                                 repeatCount='indefinite'
                                 values='104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 60px; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px'/>
                        <animate attributeName='height' dur='4s' id='h'
                                 keyTimes='0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'
                                 repeatCount='indefinite'
                                 values='10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px'/>
                    </feMerge>
                    <feMerge height='65px' result='merge2' width='100%' x='0' y='60px'>
                        <feMergeNode in='black'/>
                        <feMergeNode in='comp2'/>
                        <feMergeNode in='off2b'/>
                        <animate attributeName='y' dur='4s' id='y'
                                 keyTimes='0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1'
                                 repeatCount='indefinite'
                                 values='103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;'/>
                        <animate attributeName='height' dur='4s' id='h'
                                 keyTimes='0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513;  1'
                                 repeatCount='indefinite' values='0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px;
                         0px; 0px; 10px'/>
                    </feMerge>
                    <feMerge>
                        <feMergeNode in='SourceGraphic'/>
                        <feMergeNode in='merge1'/>
                        <feMergeNode in='merge2'/>
                    </feMerge>
                </filter>
            </defs>
            <g>
                <text x='0' y='100'>VisualDynamics</text>
            </g>
        </svg>
        <div id='canciones'>
            <audio src="<?= $ruta_canciones ?>assets/sound/canciones/neon-gaming.mp3">Neon Gaming</audio>
            <audio src="<?= $ruta_canciones ?>assets/sound/canciones/old-school.mp3">Old School</audio>
            <audio src="<?= $ruta_canciones ?>assets/sound/canciones/hyperloop.mp3">Hyperloop</audio>
        </div>
    </div>
</div>