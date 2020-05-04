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
<div class="my-navbar">
    <a class="homelogo" href="/">
        <img class="fry-logo" src="/common-assets/img/fry-icon.svg">
        <div class="foundry">Foundry.</div>
    </a>
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
    <!-- <div class="mr-auto">
        <li class="<?php echo maybeActive($activePageName, "home") ?>">
            <a href="/">Home</a>
        </li>
        <li class="<?php echo maybeActive($activePageName, "faq") ?>">
            <a href="/faq/">Foundry FAQ</a>
        </li>
        <li class="<?php echo maybeActive($activePageName, "daihard") ?>">
            <a href="/#products">Products</a>
        </li>
        <li class="<?php echo maybeActive($activePageName, "zimdai") ?>">
            <a href="/#zimdai">ZimDai</a>
        </li>
        <li class="<?php echo maybeActive($activePageName, "team") ?>">
            <a href="/#team">Team Toast</a>
        </li>
    </div> -->
</div>

    <?php
}
?>



