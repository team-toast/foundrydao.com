<html>
<head>
<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/google-analytics-stuff.php");
    include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/php/random_v_pic.php");
?>
    <title>Foundry</title>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
</head>
<body>
    <?php
        
        include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/header.php");
        makeHeader("home");
    ?>
    <div align=center class="body">
        <div align=left style="max-width: 1000px;">
            <div class="float-md-left front-page-block" style = "background-color: rgb(16, 7, 234);">
                <div class="pretitle">THE DAO</div>
                <div class="title">Foundry and FRY</div>
                <div class="blurb">
                    Foundry's future is in the hands of FRY holders.
                </div>
            </div>
        </div>
    </div>
</body>
</html>