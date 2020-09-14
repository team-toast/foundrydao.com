var foundry = {
    $tagImg: null,
    $accordion: null,
    $dataCollapse: null,
    $deskIcons: null,
    $deskIconToggle: null,
    $sectionContainer: null,
    $deskLogo: null,
    $scrollToTop: null,
    $goToHref: null,
    $goTo: null,
    tagId: null,
    tagDetails: {
        $link: null,
    },
    init: function() {
        foundry.$tagImg = $('.menu-content> .tag > img');
        foundry.$accordion = $('#accordion');
        foundry.$dataCollapse = $('[data-target^="#collapse"]');
        foundry.$deskIcons = $('.landing-page > .icon-group > .col  a');
        foundry.$deskLogo = $('.container-desk .top-bar a');
        foundry.$scrollToTop = $('#scroll-to-top');
        foundry.$goToHref = $('a.href-pop-content');
    },

    loadDynamicHt: function() {
        var vh = window.innerHeight;
        var topBarHeight = $('.container-mobile header').height();
        var btBarHeight = $('.container-mobile footer').height();
        var mobileContainerHt = vh - (topBarHeight + btBarHeight);
        $('.container-mobile').css('height', mobileContainerHt);
        $('.container-mobile').css('margin-top', topBarHeight);
        $('.container-mobile #accordion').css('padding-bottom', btBarHeight);
    },
    loadImageSrc: function(tagId) {
        if (tagId === 'buy-fry-tag') {
            foundry.tagDetails.$link = 'https://sale.foundrydao.com/';
        }
        if (tagId === 'read-the-zimdai-paper-tag') {
            foundry.tagDetails.$link = 'https://github.com/coinop-logan/ZimDai/raw/master/whitepaper.pdf';
        }
        if (tagId === 'future-products-tag') {
            foundry.tagDetails.$link = 'https://daihard.exchange/#/marketplace';
        }
        if (tagId === 'weekely-progress-tag') {
            foundry.tagDetails.$link = 'https://www.youtube.com/channel/UC4Z34M4q5emaYlJP_Sqa-Cw';
        }
        if (tagId === 'get-answers-tag') {
            foundry.tagDetails.$link = '#';
        }
    },
    goToEvent: function(para) {
        if ($(window).width() <= 575) {
            if (para == '#products') {
                $("[data-target='#collapse-products']").trigger('click');
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $("[data-target='#collapse-products']").offset().top - $('.container-mobile header').height()
                    }, 1000);
                }, 1000);
            }
            if (para == '#about-the-token-sale') {
                $("[data-target='#collapse-faq']").trigger('click');
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $(".div-about-the-token-sale").offset().top - $('.container-mobile header').height()
                    }, 1000);
                }, 1000);
            }
        } 
        else {
            if (para == '#products') {
                $(para + ' a').trigger('click');
            }
            if (para == '#about-the-token-sale') {
                $('#faq a').trigger('click');
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $(".div-about-the-token-sale").offset().top - $('.container-desk header').height()
                    }, 1000);
                }, 1000);
            }
        }
    },
    attachEventHandles: function() {
        // mobile tag click event
        foundry.$tagImg.unbind("click").click(function(e) {
            e.stopPropagation();
            foundry.tagId = $(this).attr('class');
            foundry.loadImageSrc(foundry.tagId);
            window.open(foundry.tagDetails.$link, '', '');
        });
        foundry.$goToHref.unbind("click").click(function(e) {
            e.stopPropagation();
            var para = $(this).attr("href");
            foundry.goToEvent(para);
        });
        //On screen resize load new Height for the containers
        $(window).on('resize', function() {
            foundry.loadDynamicHt();
            var topBarHeight = $('.container-mobile header').height();
            $('.container-mobile ').css('margin-top', topBarHeight);
        });
        //Add remove shadow effects to the expanded elements in accordion 
        foundry.$accordion.on('shown.bs.collapse', function() {
            $(".blue-gradient > .collapsed").addClass('overlay');
            $("[aria-expanded='true']").parent().removeClass('box-shadow-btm');
        });
        foundry.$accordion.on('hide.bs.collapse', function() {
            $(".blue-gradient > .collapsed").removeClass('overlay');
            $("[aria-expanded='true']").parent().addClass('box-shadow-btm');
        });
        //End add remove shdow effects to the expanded elements in accordion   
        $(window).on('scroll', function() {
            if (document.documentElement.scrollTop > 100) {
                foundry.$scrollToTop.css('display','block');
              } else {
                foundry.$scrollToTop.css('display','none');
              }
        });
        //scroll to click for mobile
        foundry.$dataCollapse.on('click', function(e) {
            e.preventDefault();
            $('#pop-foundry-fry').children().detach().appendTo('#collapse-foundry-fry');
            $('#pop-zimdai').children().detach().appendTo('#collapse-zimdai');
            $('#pop-products').children().detach().appendTo('#collapse-products');
            $('#pop-team-toast').children().detach().appendTo('#collapse-team-toast');
            $('#pop-faq').children().detach().appendTo('#collapse-faq');
            var offset = $(this).offset().top - ($('.container-mobile header').height() + $(window).scrollTop());
            $('html, body').animate({
                scrollTop: offset,
            }, 300)
        });
        foundry.$scrollToTop.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1000)
        });
        foundry.$deskLogo.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
            if (foundry.$deskIconToggle !== '#home' && foundry.$deskIconToggle !== '#') {
                $('.section-container:nth-child(' + foundry.$sectionContainer + ')').toggle('display');
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
            if (foundry.$deskIconToggle == goTo) {
                $('html, body').animate({
                    scrollTop: 0,
                }, 1000);
                $('.section-container:nth-child(' + foundry.$sectionContainer + ')').toggle('display');
                $('.desk-footer').toggle('display');
                $('.container-desk footer').addClass('custom-sticky');
                $('#scroll-to-top').css('display', 'none');
                foundry.$deskIconToggle = '#home';
                window.location.hash = foundry.$deskIconToggle;
                return
            }
            if (goTo == '#foundry-fry') {
                n = 1;
                $('#collapse-foundry-fry').children().detach().appendTo('#pop-foundry-fry');
            } else if (goTo == '#zimdai') {
                n = 2;
                $('#collapse-zimdai').children().detach().appendTo('#pop-zimdai');
            } else if (goTo == '#products') {
                n = 3;
                $('#collapse-products').children().detach().appendTo('#pop-products');
            } else if (goTo == '#team-toast') {
                n = 4;
                $('#collapse-team-toast').children().detach().appendTo('#pop-team-toast');
            } else if (goTo == '#faq') {
                n = 5;
                $('#collapse-faq').children().detach().appendTo('#pop-faq');
            }
            $('#scroll-to-top').css('display', 'block');
            $('.section-container').css('display', 'none');
            $('.section-container').removeClass('mt-5 pt-5');
            $('.section-container:nth-child(' + n + ')').addClass('mt-5 pt-5');
            $('.container-desk footer').removeClass('custom-sticky');
            $('.desk-footer').css('display', 'block');
            $('.section-container:nth-child(' + n + ')').toggle('display');
            $('html, body').animate({
                scrollTop: $('.section-container:nth-child(' + n + ')').offset().top - $('.container-desk .top-bar img').height(),
            }, 1000);
            window.location.hash = goTo;
            foundry.$deskIconToggle = goTo;
            foundry.$sectionContainer = n;
        })
    },
};
$(function() {
    foundry.init();
    foundry.attachEventHandles();

    $('body').imagesLoaded()
    .done( function() {
        $('.container-mobile .blue-gradient').imagesLoaded( { background: true }, function() {
          }).done( function() {
            $('.container-desk .banner').imagesLoaded( { background: true }, function() {
              }).done( function() {
                $('.container-mobile .pattern').imagesLoaded( { background: true }, function() {
                  }).done( function() {
                    console.log('All images loaded');
                      $('body').addClass('loaded');
                  });
              });
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
})