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
<div class="jumbotron text-center" style="background-color:#071B5C; margin-bottom:0">
    <h1 style="color:#FF006E; font-weight:900">Foundry</h1>
    <p style="color:#FFFFFF">A DAO for Financial Freedom</p>
    <div align="center">
        <div class="container" style="color:#FFFFFF; background-color:#ff0000;">
            <h1 style="font-weight:700">Attention!</h1>
            <h2>This site is under construction!<br>The information below is <b><u>speculative</u></b> and <b><u>not legally binding!</u></b></h2>
        </div>
    </div>
</div>
<nav id="navbar" class="navbar navbar-default">
    <div class="container-fluid">
        <ul class="nav navbar-nav">
            <li class="nav-item <?php echo maybeActive($activePageName, "home") ?>">
                <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "faq") ?>">
                <a class="nav-link" href="/faq/">Foundry FAQ</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "daihard") ?>">
                <a class="nav-link" href="/daihard/">DAIHard</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "zimdai") ?>">
                <a class="nav-link" href="/zimdai/">DAIHard</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "team") ?>">
                <a class="nav-link" href="/#teamtoast">Team Toast</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "sale") ?>">
                <a class="nav-link" href="/sale/">Sale</a>
            </li>
        </ul>
    </div>
</nav>
<script src="/common-assets/js/implement-navbar-stickiness.js"></script>
    <?php
}
?>