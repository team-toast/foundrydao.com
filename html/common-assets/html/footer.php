<?php
function makeFooter() {
?>
                </div>
            </section>
        </section>
        <footer class="desk-footer">
            <div class="desk-footer-wrap">
                <div class="footer-logo mx-auto">
                    <img class="img-fluid logo" src="/images/svg/logo.svg" alt="">
                </div>
                <div class="footer-content">
                    <div class="row">
                        <div class="col-4">
                            <h4>Resources</h4>
                            <ul>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <h4>Get Involved</h4>
                            <ul>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                            </ul>
                        </div>
                        <div class="col-4">
                            <h4>The Etc's</h4>
                            <ul>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                                <li><a href="#">xxxx</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <footer>
        <div class="elements-bottom">
            <div id="element-holder-desk-bottom-left">
                <div id="element-desk-bottom-left-wt-border"></div>
                <div id="element-desk-bottom-left"></div>
                <div class="element-desk-bottom-pink"></div>
            </div>
            <div id="element-holder-desk-bottom-right">
                <div id="element-desk-bottom-right"></div>
                <div class="element-desk-bottom-pink"></div>
            </div> 
            <div class="bottom-bar">
                <img class="img-fluid" id="bottom-bar-desk-img" src="/images/svg/desktop-bottom-curve-element.svg" alt="foundrydao">
                <a class="contact-us" href="#contact" data-toggle="modal" data-target="#contact-modal">CONTACT US</a>
            </div>
            <div class="bottom-pink-bar"></div>
        </div>
    </footer>
</div>
<!--END DesktopView -->
<!-- MobileView -->
<div class="container-mobile d-lg-none d-sm-none d-xs-block">
    <header>
        <div class="top-bar">
            <img class="img-fluid" id="top-bar-mobile-img" src="/images/svg/top-bar-mobile.svg" alt="foundrydao">
            <a href="/"><img class="img-fluid logo" src="/images/svg/logo.svg" alt="foundrydao"></a>
        </div>
    </header>
    <div class="container-box container-fluid">
        <article class="box-content row pattern">
            <div class="col-9 offset-3 col-sm-12 offset-sm-0 col-md-4 offset-md-0 col-lg-4 offset-lg-0 content">

            </div>
            <div class="col-9 offset-3 col-sm-12 offset-sm-0 col-md-4 offset-md-0 col-lg-4 offset-lg-0 content" id="pop-mobile">
                
            </div>
        </article>
    </div>
    <footer>
        <div class="bottom-bar">
            <a class="contact-us" href="#contact" data-toggle="modal" data-target="#contact-modal">Contact/Social Media</a>
            <img class="img-fluid" id="bottom-bar-mobile-img" src="/images/svg/bottom-bar-mobile.svg" alt="foundrydao">
            <a href="/"><img class="logo img-fluid" src="/images/svg/logo.svg" alt="foundrydao"></a>
        </div>
    </footer>

</div>
<!-- END MobileView -->
<div class=" container">
    <button  type="button" class="btn btn-default" aria-label="Left Align" id="scroll-to-top" title="Go to top"> <img class="arrow" src="/images/svg/arrow.svg" alt=""></button>
</div>
<!-- Contact Modal -->
<div class="modal fade animate" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-social-media" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content animate-bottom">
            <div class="modal-header">
                <h2 id="contact-social-media" class="theme-h2">Contact / Social Media</h2>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="body rendered-md">
                    <ul class="theme-p">
                    <li><a href="https://t.me/FoundryCommunity">Telegram Channel</a></li>
                    <li><a href="https://twitter.com/FoundryDAO">Twitter</a></li>
                    <li><a href="https://www.youtube.com/channel/UC4Z34M4q5emaYlJP_Sqa-Cw">YouTube</a></li>
                    <li><a href="https://medium.com/daihard-buidlers">Medium</a></li>
                    <li>Email: teamtoastdevs@gmail.com</li>
                    </ul>
                    <h2  class="theme-h2" id="for-legal-inquiries-contact">For Legal Inquiries, Contact:</h2>
                    <ul class="theme-p">
                    <p><strong>Decentralized Autonomous Organization Advancement Institute</strong>, responsible for the launch and early support of Foundry</p>
                    <li>Address: Georgia, Tbilisi, Nadzaladevi district, Didube settlement, N1</li>
                    <li>Identification Number: 400288149</li>
                    <li>Email: mariamturashvili@gmail.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!--End Contact Modal -->

<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="/js/jquery.easeScroll.min.js"></script>
<script src="/js/imagesloaded.pkgd.min.js"></script>
<script src="/js/sub-page.js"></script>
  <?php  
}
?>