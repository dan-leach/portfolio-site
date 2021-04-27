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
    </style>

</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-sm bg-info navbar-light">
            <button type="button" class="btn navbar-brand" @click="$router.push('/', function() {})"><h2><strong>>_</strong>  Dan Leach</h2></button>
        </nav>
        <br>
        <div class="container">
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
    <script src="app.js"></script>
</body>
</html>


