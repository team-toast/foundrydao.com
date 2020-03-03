<html>
<head>
    <link rel="stylesheet" href="/common-assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/common-assets/css/style.css">
    <script src="/common-assets/js/jquery-3.4.1.min.js"></script>
    <script src="/common-assets/js/bootstrap.min.js"></script>
</head>
<body>
    <?php
        // ini_set('display_errors', 1);
        // ini_set('display_startup_errors', 1);
        // error_reporting(E_ALL);
        include($_SERVER['DOCUMENT_ROOT'] . "/common-assets/html/header.php");
        makeHeader("team");
    ?>
    <div align=center class="body">
        <div align=left style="max-width: 1000px;">
            <h1>Team Toast</h1>
            <div class="text-block container-fluid">
                <div class="row" style="padding:1em">
                    <div class="col-sm-3">
                        <img class="img-fluid" style="width: 100%;" src="/common-assets/img/oglog.jpg">
                    </div>
                    <div class="col-sm-9">
                        <h2 style="font-weight:700">Logan Brutsche</h2>
                        <p>Co-founder and CEO of Team Toast. Lead developer for DAIHard and Foundry.
                            Developed the Burnable Payment and DAIHard smart contracts.
                        </p>
                    </div>
                </div>
                <div class="row" style="padding:1em">
                    <div class="col-sm-3">
                        <img class="img-fluid" style="width:100%;" src="/common-assets/img/schalk.png">
                    </div>
                    <div class="col-sm-9">
                        <h2 style="font-weight:700">Schalk Dormehl</h2>
                        <p>Co-founder and Sugar Daddy of Team Toast. Developed the Bucket Sale smart contract and tests.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>