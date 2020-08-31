var foundry = { 
    $tagImg: null,
    $accordion: null,
    $dataCollapse: null,
    $deskIcons: null,
    $deskIconToggle: null,
    $sectionContainer: null,
    $deskLogo: null,
    $scrollToTop: null,
    tagId: null,
    tagDetails:{
        $link: null,
    },

    init: function() {
        foundry.$tagImg = $('.menu-content> .tag > img');
        foundry.$accordion = $('#accordion');
        foundry.$dataCollapse =  $("[data-target^='#collapse']");
        foundry.$deskIcons = $('.landing-page > .icon-group > .col > a');
        foundry.$deskLogo = $('.container-desk .top-bar a');
        foundry.$scrollToTop = $('#scroll-to-top');
    },

    preloadImages: function(arrayOfImages) {
        $(arrayOfImages).each(function(){
            (new Image()).src = this;
        });
    },

    loadDynamicHt: function(){
        var vh = window.innerHeight;
        var topBarHeight = $('.container-mobile header').height();
        var btBarHeight = $('.container-mobile footer').height();
        var mobileContainerHt =  vh - (topBarHeight + btBarHeight);

        $('.container-mobile').css('height', mobileContainerHt);
        $('.container-mobile').css('margin-top', topBarHeight);
        $('.container-mobile #accordion').css('padding-bottom', btBarHeight);
        
    },

    loadImageSrc: function(tagId) {
        
        if(tagId === 'buy-fry-tag') {
            foundry.tagDetails.$link = 'https://sale.foundrydao.com/';
        }
        if(tagId === 'read-the-zimdai-paper-tag') {
            foundry.tagDetails.$link = 'https://github.com/coinop-logan/ZimDai/raw/master/whitepaper.pdf';
        }
        if(tagId === 'future-products-tag') {
            foundry.tagDetails.$link = 'https://daihard.exchange/#/marketplace';
        }
        if(tagId === 'weekely-progress-tag') {
            foundry.tagDetails.$link = 'https://www.youtube.com/channel/UC4Z34M4q5emaYlJP_Sqa-Cw';
        }
        if(tagId === 'get-answers-tag') {
            foundry.tagDetails.$link = '#';
        }

    },

    attachEventHandles: function() {
        //   load dynamic height    
        // $(window).on('load', function() {
        //     setTimeout(function() {
        //         foundry.loadDynamicHt();
        //     }, 1000);
        // });
        // mobile tag click event
        foundry.$tagImg.unbind("click").click(function(e) {
                e.stopPropagation();
                foundry.tagId = $(this).attr('class');
                foundry.loadImageSrc(foundry.tagId);
                window.open(foundry.tagDetails.$link,'', '');
                                
        });
        //On screen resize load new Height for the containers
        $(window).on('resize', function() {
            foundry.loadDynamicHt();
            var topBarHeight = $('.container-mobile header').height();
            // console.log(topBarHeight);
            $('.container-mobile ').css('margin-top',topBarHeight);

        });
        //Add remove shadow effects to the expanded elements in accordion   
        foundry.$accordion.on('shown.bs.collapse', function () {
            $(".blue-gradient > .collapsed").addClass('overlay');
            $("[aria-expanded='true']").parent().removeClass('box-shadow-btm');
        });
        
        foundry.$accordion.on('hide.bs.collapse', function () {
            $(".blue-gradient > .collapsed").removeClass('overlay');
            $("[aria-expanded='true']").parent().addClass('box-shadow-btm');
        });
        //End add remove shdow effects to the expanded elements in accordion   
    
        //scroll to click for mobile
        foundry.$dataCollapse.on('click', function(e) {
            e.preventDefault();
            var offset = $(this).offset().top - ($('.container-mobile header').height() + $(window).scrollTop());
            $('html, body').animate({
                scrollTop: offset,
            }, 300);
        });
        //scroll on click for desktop
        foundry.$scrollToTop.on('click', function(e){
            e.preventDefault();
            // $('#scroll-to-top').toggle('display');
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
        });

        foundry.$deskLogo.on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
            if(foundry.$deskIconToggle !== '#home' && foundry.$deskIconToggle !== '#') {
                $('.section-container:nth-child('+ foundry.$sectionContainer +')').toggle('display');
                $('.desk-footer').toggle('display');
                $('#scroll-to-top').toggle('display');
                $('.container-desk footer').addClass('custom-sticky');
                window.location.hash = $(this).attr('href');
                foundry.$deskIconToggle = '#';
            }

        });
        foundry.$deskIcons.on('click', function(e) {
            e.preventDefault();
            var goTo = $(this).attr('href');
            var n = 0;
            if(foundry.$deskIconToggle == goTo) {
                $('html, body').animate({
                    scrollTop: 0,
                }, 1000);
                $('.section-container:nth-child('+ foundry.$sectionContainer +')').toggle('display');
                $('.desk-footer').toggle('display');
                $('.container-desk footer').addClass('custom-sticky');
                $('#scroll-to-top').css('display','none');
                foundry.$deskIconToggle = '#home'; 
                window.location.hash = foundry.$deskIconToggle;
                return;
            }
            if(goTo == '#foundry-fry') {
                n = 1;
            }
            else if(goTo == '#zimdai') {
                n = 2;
            }
            else if(goTo == '#products') {
                n = 3;
            }
            else if(goTo == '#team-toast') {
                n = 4;
            }
            else if(goTo == '#faq') {
                n = 5;
            }
            $('#scroll-to-top').css('display','block');
            $('.section-container').css('display','none');
            $('.section-container').removeClass('mt-5 pt-5');
            $('.section-container:nth-child('+ n +')').addClass('mt-5 pt-5');
            $('.container-desk footer').removeClass('custom-sticky');
            $('.desk-footer').css('display','block');
            $('.section-container:nth-child('+ n +')').toggle('display');
            $('html, body').animate({
                scrollTop: $('.section-container:nth-child('+ n +')').offset().top - $('.container-desk .top-bar img').height(),
            }, 1000);
            window.location.hash = goTo;
            foundry.$deskIconToggle = goTo;
            foundry.$sectionContainer = n;
        });
        
        //End scroll on click element
    },
    
};

$(function () {
    foundry.init();
    foundry.attachEventHandles();
    foundry.preloadImages([
        'images/svg/left-side-pattern-element.svg',
    ]);

});



