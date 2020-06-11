<?php
// function maybeActive($activePageName, $linkName) {
//     if ($activePageName == $linkName) {
//         return "active";
//     }
//     else {
//         return "";
//     }
// }

function makeHeader($activePageName,$showMainpageHeader) {
    ?>
<script src="/common-assets/js/capture-and-hide-referral.js"></script>
<iframe style="display:none" id="referralCaptureIframe" src="https:sale.foundrydao.com/captureReferral.html" onload="captureAndHideReferral()"></iframe> 
<div class="my-navbar">
    <a class="homelogo" href="/">
        <img class="fry-logo" src="/common-assets/img/fry-icon.svg">
        <div class="foundry">Foundry.</div>
    </a>
    <div class="navlink-container">
        <a class="my-navlink" href="/#team">
            <div class="my-navlink-label">Team Toast</div>
        </a>
        <a class="my-navlink" href="/#zimdai">
            <div class="my-navlink-label">ZimDai</div>
        </a>
        <a class="my-navlink" href="/#products">
            <div class="my-navlink-label">Products</div>
        </a>
        <a class="my-navlink" href="/faq/">
            <div class="my-navlink-label">FAQ</div>
        </a>
        <a class="my-navlink" href="/contact/">
            <div class="my-navlink-label">Contact Us</div>
        </a>
    </div>
</div>
<div class="header">
    <div class="header-spacer"> </div>
    <?php
    if ($showMainpageHeader) {
        ?>
        <div class="mainpage-header">
        <h1>Foundry: A DAO for Economic Freedom</h1>
        <p>It's time for crypto to start making moves on the global stage.</p>
        <p>Foundry will be our gladiator.</p>
        </div>
        <?php
    }
    ?>
</div><?php
}
?>