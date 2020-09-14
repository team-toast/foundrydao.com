var foundrySub = {
    init: function() {
        foundrySub.$scrollToTop = $('#scroll-to-top');
        if ($(window).width() <= 575) {
            $('#pop-desktop').children().detach().appendTo('#pop-mobile');
        }
        else {
            $('#pop-mobile').children().detach().appendTo('#pop-desktop');
        }
    },
    attachEventHandles: function() {
        $(window).on('scroll', function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                foundrySub.$scrollToTop.css('display','block');
              } else {
                foundrySub.$scrollToTop.css('display','none');
              }
        });
        $(window).on('resize', function() {
            if ($(window).width() <= 575) {
                $('#pop-desktop').children().detach().appendTo('#pop-mobile');
            }
            else {
                $('#pop-mobile').children().detach().appendTo('#pop-desktop');
            }
        });
        foundrySub.$scrollToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1000)
        });
    },

};
$(function() {
    foundrySub.init();
    foundrySub.attachEventHandles();
    $('body').imagesLoaded().done( function() {
        $('.container-mobile .pattern').imagesLoaded( { background: true }).done( function() {
                console.log('All images loaded');
                $('body').addClass('loaded');
        });
    });

    $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 120,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !0,
        fixedBackground: !0
    })
});
