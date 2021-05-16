<!DOCTYPE html>
<html>
<head>
    <title>Dan Leach - Portfolio</title>

    <!--Bootstrap 4-->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- icons-->
    <script src="https://kit.fontawesome.com/85e782fa9d.js" crossorigin="anonymous"></script>
    
    <!--favicons-->
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <meta name="theme-color" content="#ffffff">
    
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

    
    <style>
        html {
            position: relative;
            min-height: 100%;
        }
        body {
            margin: 0 0 100px;
        }
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
        }
        [v-cloak] {
             display: none;
        }
        a {
            color:black;
        }
        .carousel-inner img {
            width: 100%;
            height: 100%;
        }
        #caption {
            background-color: LightGray;
            height: auto;
            color: black;
            vertical-align: text-top;
            text-align: center;
        }
        .ml5 {
          position: relative;
          font-weight: 300;
          font-size: 2.5em;
          color: black;
        }
        .ml5 .text-wrapper {
          position: relative;
          display: inline-block;
          padding-top: 0.1em;
          padding-right: 0.05em;
          padding-bottom: 0.15em;
          line-height: 1em;
        }
        .ml5 .line {
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          height: 3px;
          width: 100%;
          background-color: black;
          transform-origin: 0.5 0;
        }
        .ml5 .letters {
          display: inline-block;
          opacity: 0;
        }
        .ml5 .letters-left {
          font-weight: 500;
        }

    </style>

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-sm bg-info navbar-light">
            <button type="button" class="btn navbar-brand" @click="$router.push('/', function() {})">
                <h1 class="ml5">
                    <span class="text-wrapper">
                        <span class="line line1"></span>
                        <span class="letters letters-left">>_</span>
                        <span class="letters letters-right">&nbsp;Dan Leach</span>
                        <span class="line line2"></span>
                    </span>
                </h1>
            </button>
        </nav>
        <br>
        <div class="container">
            <div id="loader">
                <div class="spinner-border"></div>    
                Loading... please wait
                <img src="avatar.png" onload="showGallery()" hidden>\
            </div>
            <router-view></router-view>
        </div>
        <footer class="bg-info">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="/">&#169; Dan Leach 2021</a>
                </li>
              </ul>
        </footer>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    <script src="app.js"></script>
    
</body>
</html>


