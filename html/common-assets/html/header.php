<?php
function maybeActive($activePageName, $linkName) {
    if ($activePageName == $linkName) {
        return "active";
    }
    else {
        return "";
    }
}

function makeHeader($activePageName) {
    ?>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="nav-item <?php echo maybeActive($activePageName, "home") ?>">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "team") ?>">
                <a class="nav-link" href="/team/">Team</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "faq") ?>">
                <a class="nav-link" href="/faq/">FAQ</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "sale") ?>">
                <a class="nav-link" href="/sale/">Sale</a>
            </li>
        </ul>
    </div>
</nav>
<div class="jumbotron text-center" style="background-color:#071B5C">
    <h1 style="color:#FF006E; font-weight:900">Foundry</h1>
    <p style="color:#FFFFFF">A DAO for Financial Freedom</p>
    <div align="center">
        <div class="container" style="color:#FFFFFF; background-color:#ff0000;">
            <h1 style="font-weight:700">Attention!</h1>
            <h2>This site is under construction!<br>The information below is <b><u>speculative</u></b> and <b><u>not legally binding!</u></b></h2>
        </div>
    </div>
</div>
    <?php
}
?>