<?php 
function makeHeader($activeHeading) {
?>
<!-- DesktopView -->
<div id="loader-wrapper">
    <iframe style="display:none" id="referralCaptureIframe" src="https://sale.foundrydao.com/captureReferral.html" onload="captureAndHideReferral()"></iframe>
    <div id="loader"></div>
 
    <div class="loader-section section-left"></div>
    <div class="loader-section section-right"></div>
 
</div>
<div class="container-desk d-none d-sm-block ">
    <header>
        <div class="elements">
            <div id="element-holder-desk-top-left">
                <div class="element-desk-top-pink"></div>
                <div class="element-desk-top-light-blue"></div>
                <div id="element-desk-top-left-blue"></div>
            </div>
            <div id="element-holder-desk-top-right">
                <div class="element-desk-top-pink"></div>
                <div class="element-desk-top-light-blue"></div>
                <div id="element-desk-top-right-blue"></div>
            </div> 
            <div class="top-bar">
                <img id="top-bar-desk-img" src="/images/svg/top-bar-desk.svg" alt="foundrydao">
                <a href="/"><img  class="img-fluid logo" src="/images/svg/logo.svg" alt="foundrydao"></a>
            </div>
        </div>
    </header>
    <div class="inner-container">
        <section class="section">
            <header class="section-head">
                <img class="img-fluid" id="buy-fry-section-img" src="/images/svg/desk-sections/weekely-progress-demos-section.svg" alt="">
                <h2><?php echo $activeHeading; ?></h2>
                <a class="foundry-fry" href="https://sale.foundrydao.com/" rel="noreferrer" target="_blank"></a>
            </header>
            <section class="section-box">
                <div class="section-box-shadow"></div>
                <div class="section-body template-content" id="pop-desktop">
                <a href="/" id="back-home"> < Back</a>
                
<?php
}
?>