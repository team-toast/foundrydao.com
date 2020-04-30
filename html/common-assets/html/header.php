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
<script src="/common-assets/js/capture-and-hide-referral.js"></script>
<iframe style="display:none" id="referralCaptureIframe" src="https:sale.foundrydao.com/captureReferral.html" onload="captureAndHideReferral()"></iframe> 
<div class="jumbotron text-center" style="background-color:#071B5C; margin-bottom:0">
    <h1 style="color:#FF006E; font-weight:900">Foundry</h1>
    <p style="color:#FFFFFF">A DAO for Financial Freedom</p>
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
                <a class="nav-link" href="/#daihard">DAIHard</a>
            </li>
            <li class="nav-item <?php echo maybeActive($activePageName, "zimdai") ?>">
                <a class="nav-link" href="/#zimdai">ZimDai</a>
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