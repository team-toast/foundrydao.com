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
    renderHtml: function(url) {
        foundrySub.mainSection = document.getElementById('mainSection');
        if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
            $(foundrySub.mainSection).load(url);
        }else {
            fetch(url)
            .then(function(response) {
                return response.text()}
                )
            .then(function(html) {
                foundrySub.mainSection.innerHTML = html;
            })
            .catch(function(error) {
            console.log(error);
            });     
        }
    }
        
      
};
$(function() {
    foundrySub.init();
    foundrySub.attachEventHandles();

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
