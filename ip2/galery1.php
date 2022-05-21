<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Koenigsegg gallery</title>
    <link rel="shortcut icon" type="text/png" href="фото/foto.png">
    <link rel="stylesheet" href="/dizign/mainstyle.css">
    <script type="text/javascript" src="skripts/jquery-3.6.0.js"></script>
    <script type="text/javascript" src="skripts/function.js"></script>


    <style>
        body {
            background: #ffffff;
        }
    </style>

</head>
<body>
<div class="main" >
    <div>
        <div class="zag">
            <h1>Галерея</h1>
        </div>

    </div>


    <div class="block_page_white">
        <div class="galery">
            <div style="width: 100px; height: 100px"></div>

            <div class="main_galery">

                <div id="mainImage">

                </div>

            </div>
        </div>
    </div>
    <div class="buttonGalery" onclick="leftChangeImage()"> <div class="clasters0">  </div> </div>
    <div class="buttonGalery" style="margin-left: auto;"  onclick="rightChangeImage()"> <div class="clasters1">  </div> </div>
</div>
<div class="link">
</div>
<div class="wrapper">
    <input type="checkbox" id="check-menu">
    <label for="check-menu" class="menu-swap">MENU</label>
    <div class="burger-line first"></div>
    <div class="burger-line second"></div>
    <div class="burger-line third"></div>
    <div class="burger-line fourth"></div>
    <nav class="main-menu">
        <a href="main.php" style="color: black"
           target="_blank" class="link-menu">Koenigsegg</a>
        <a href="agera1.php" style="color: black"
           target="_blank" class="link-menu">Agera</a>
        <a href="one11.php" style="color: black"
           target="_blank" class="link-menu">One:1</a>
        <a href="regera1.php" style="color: black"
           target="_blank" class="link-menu">Regera</a>
        <a href="ccgt1.php" style="color: black"
           target="_blank" class="link-menu">CCGT</a>
        <a href="ccx1.php" style="color: black"
           target="_blank" class="link-menu">CCX</a>
        <a href="cc8s1.php" style="color: black"
           target="_blank" class="link-menu">CC8S</a>
        <a href="jesko1.php" style="color: black"
           target="_blank" class="link-menu">Jesko</a>
        <a href="galery1.php" style="color: black"
           target="_blank" class="link-menu">Gallery</a>

    </nav>
</div>


</body>
</html>
