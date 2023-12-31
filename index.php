<!DOCTYPE html>
<html lang="es">
<head>
    <!-- HTML Meta Tags -->
    <meta content="text/html;charset=UTF-8" http-equiv="Content-Type">
    <meta content="Landing page de VisualDynamics." name="description">
    <meta content="Daniel Alonso Lázaro" name="author">
    <meta content="Víctor Hellín Sáez" name="author">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <!-- Favicon -->
    <link href="/assets/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
    <link href="/assets/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
    <link href="/assets/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
    <link href="/assets/favicon/site.webmanifest" rel="manifest">
    <link color="#5bbad5" href="/assets/favicon/safari-pinned-tab.svg" rel="mask-icon">
    <link href="/assets/favicon/favicon.ico" rel="shortcut icon">
    <meta content="VisualDynamics" name="apple-mobile-web-app-title">
    <meta content="VisualDynamics" name="application-name">
    <meta content="#b91d47" name="msapplication-TileColor">
    <meta content="/assets/favicon/browserconfig.xml" name="msapplication-config">
    <meta content="#000000" name="theme-color">
    <!-- CSS -->
    <link href="src/css/index.css" rel="stylesheet">
    <!-- JS -->
    <script defer src="src/js/index.js"></script>
    <title>VisualDynamics</title>
</head>
<body>
<div class="retro-prompt" id="retroPrompt">
    <div class="prompt-container">
        <div class="close" id="closePrompt">&times;</div>
        <p>Choose a Memory Card</p>
        <ul class="memory-card-list">
            <li autofocus class="memory-card-option" data-value="card1" tabindex="0">Memory Card 1</li>
            <li class="memory-card-option" data-value="card2" tabindex="0">Memory Card 2</li>
        </ul>
    </div>
</div>
<svg viewBox="0 0 715 120" xmlns="http://www.w3.org/2000/svg">
    <style type="text/css">
        text {
            filter:                  url(#filter);
            fill:                    #ddd;
            font-family:             'Share Tech Mono', sans-serif;
            font-size:               6rem;
            -webkit-font-smoothing:  antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
    <defs>
        <filter id="filter">
            <feFlood flood-color="red" result="flood1"/>
            <feFlood flood-color="black" result="flood2"/>
            <feOffset dx="3" dy="0" in="SourceGraphic" result="off1a"/>
            <feOffset dx="2" dy="0" in="SourceGraphic" result="off1b"/>
            <feOffset dx="-3" dy="0" in="SourceGraphic" result="off2a"/>
            <feOffset dx="-2" dy="0" in="SourceGraphic" result="off2b"/>
            <feComposite in="flood1" in2="off1a" operator="in" result="comp1"/>
            <feComposite in="flood2" in2="off2a" operator="in" result="comp2"/>
            <feMerge result="merge1" width="100%" x="0">
                <feMergeNode in="black"/>
                <feMergeNode in="comp1"/>
                <feMergeNode in="off1b"/>
                <animate attributeName="y" dur="4s" id="y" keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518;
                0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1"
                         repeatCount="indefinite" values="104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px;
                         105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px"/>
                <animate attributeName="height" dur="4s" id="h" keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518;
                0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1"
                         repeatCount="indefinite" values="10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px;
                         50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px"/>
            </feMerge>
            <feMerge height="65px" result="merge2" width="100%" x="0" y="60px">
                <feMergeNode in="black"/>
                <feMergeNode in="comp2"/>
                <feMergeNode in="off2b"/>
                <animate attributeName="y" dur="4s" id="y"
                         keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400;
                         0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1" repeatCount="indefinite"
                         values="103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px;
                         66px; 88px; 42px; 13px; 100px; 100px; 104px;"/>
                <animate attributeName="height" dur="4s" id="h"
                         keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400;
                         0.408; 0.461; 0.493; 0.513;  1" repeatCount="indefinite"
                         values="0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px;
                         0px; 0px; 10px"/>
            </feMerge>
            <feMerge>
                <feMergeNode in="SourceGraphic"/>
                <feMergeNode in="merge1"/>
                <feMergeNode in="merge2"/>
            </feMerge>
        </filter>
    </defs>
    <g>
        <text x="" y="90">VisualDynamics</text>
    </g>
</svg>
<div class="retro-message" id="no-memory">
    <div class="prompt-message">
        <div class="close">&times;</div>
        NO MEMORY CARD SELECTED<br>
        PLEASE F5 TO CONTINUE...
    </div>
</div>
<div class="titulo texto-oculto"><span id='play'>PRESS START!</span></div>
<div id="music-player">
    <button id="play-pause-btn"></button>
</div>
<div class="coming" id="coming">Donde los clásicos viajan
    <svg id="futuro" viewBox='0 0 715 120' xmlns='http://www.w3.org/2000/svg'>
        <style type='text/css'>
            #textofuturo {
                filter:                  url(#filter);
                fill:                    #ddd;
                font-family:             'Share Tech Mono',
                                         monospace;
                font-size:               3.5rem;
                -webkit-font-smoothing:  antialiased;
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
                    <animate attributeName='y' dur='4s' id='y' keyTimes='0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518;
                0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'
                             repeatCount='indefinite' values='104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px;
                         105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px'/>
                    <animate attributeName='height' dur='4s' id='h' keyTimes='0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518;
                0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1'
                             repeatCount='indefinite' values='10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px;
                         50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px'/>
                </feMerge>
                <feMerge height='65px' result='merge2' width='100%' x='0' y='60px'>
                    <feMergeNode in='black'/>
                    <feMergeNode in='comp2'/>
                    <feMergeNode in='off2b'/>
                    <animate attributeName='y' dur='4s' id='y'
                             keyTimes='0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400;
                         0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1' repeatCount='indefinite'
                             values='103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px;
                         66px; 88px; 42px; 13px; 100px; 100px; 104px;'/>
                    <animate attributeName='height' dur='4s' id='h'
                             keyTimes='0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400;
                         0.408; 0.461; 0.493; 0.513;  1' repeatCount='indefinite'
                             values='0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px;
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
            <text id="textofuturo" x='' y='90'>AL FUTURO</text>
        </g>
    </svg>
</div>
<audio id="mariocoin" src="/assets/sound/index/mario-coin.mp3"></audio>
<audio id="bgm" loop src="/assets/sound/index/bgm.mp3">Tu navegador no soporta audio.</audio>
<audio id="cursor" src="/assets/sound/index/cursor.mp3"></audio>
<audio id="welcome" src="/assets/sound/index/welcome-message.wav"></audio>
<audio id="memory1" src="/assets/sound/index/memory1.wav"></audio>
<audio id="memory2" src="/assets/sound/index/memory2.wav"></audio>
</body>
</html>