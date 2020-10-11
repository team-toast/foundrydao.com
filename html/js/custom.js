var foundry = {
    $tagImg: null,
    $accordion: null,
    $faqAccordion: null,
    $faqAccordionTab: null,
    $dataCollapse: null,
    $deskIcons: null,
    $deskIconToggle: null,
    $mobIconToggle: null,
    $sectionContainer: null,
    $deskLogo: null,
    $scrollToTop: null,
    $goToHref: null,
    $goTo: null,
    $roadmap: null,
    $mobileOrientation: null,
    tagId: null,
    tagDetails: {
        $link: null,
    },
    init: function () {
        foundry.$tagImg = $('.menu-content> .tag > img');
        foundry.$accordion = $('#accordion');
        foundry.$faqAccordion = $('#faq-accordion');
        foundry.$faqAccordionTab = $('#faq-accordion .card-header h2');
        foundry.$dataCollapse = $('[data-target^="#collapse"]');
        foundry.$deskIcons = $('.landing-page > .icon-group > .col  a');
        foundry.$deskLogo = $('.container-desk > header > .elements > .top-bar > a > .logo');
        foundry.$scrollToTop = $('#scroll-to-top');
        foundry.$goToHref = $('a.href-pop-content');
        foundry.$roadmap = $('.top-bar > div > div:nth-child(2) > a');
        foundry.$roadmapMobile = $('#roadmap-mobile-link-click');
        foundry.$deskLogoMob = $('.container-mobile > header > .top-bar > a > .logo');
        foundry.$deskLogoMobBottom = $('.container-mobile > footer > .bottom-bar > a > .logo');
        foundry.$beforeContactHash = '/';
        foundry.$isChangeNeed = true;
        foundry.$mobChangeUrlFaq = true;
        foundry.$roadmapMobChange = true;
        foundry.$deskChangeUrlFaq = true;
    },
    triggerOnLoad: function () {
        var url = $(location).attr('href');
        var parts = url.split("/");
        var last_part = parts[parts.length - 1];
        if (last_part == 'about-the-token-sale') {
            last_part = '#about-the-token-sale';
        }
        last_part = last_part.substr(1);
        last_part = "/".concat(last_part);
        if (last_part !== '') {
            if ($(window).width() <= 575) {
                foundry.displayMobileContent(last_part, true);
                foundry.$mobileOrientation = foundry.checkOrientation();
            } else {
                switch (last_part) {
                    case '/foundry-fry':
                    case '/zimdai':
                    case '/products':
                    case '/team-toast':
                    case '/faq':
                        foundry.displayContent(last_part, true);
                        break;
                    case '/about-the-token-sale':
                        foundry.goToEvent(last_part, true);
                        break;
                    case '/roadmap':
                        foundry.showRoadMap(true);
                        break;
                    case '/contact-us':
                        foundry.$isChangeNeed = true;
                        $('#contact-modal').modal('show');
                    default:
                        break;
                }
            }

        }
    },
    loadDynamicHt: function () {
        var vh = window.innerHeight;
        var topBarHeight = $('.container-mobile header').height();
        var btBarHeight = $('.container-mobile footer').height();
        var mobileContainerHt = vh - (topBarHeight + btBarHeight);
        $('.container-mobile').css('height', mobileContainerHt);
        $('.container-mobile').css('margin-top', topBarHeight);
        $('.container-mobile #accordion').css('padding-bottom', btBarHeight);
    },
    loadImageSrc: function (tagId) {
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
            foundry.tagDetails.$link = '/';
        }
    },
    goToEvent: function (para, changeUrl) {
        if ($(window).width() <= 575) {
            if (para == '/about-the-token-sale') {
                foundry.$mobChangeUrlFaq = true;
                if (changeUrl) {
                    foundry.$mobChangeUrlFaq = false;
                }
                $("[data-target='#collapse-faq']").trigger('click', { data: changeUrl });
                setTimeout(function () {
                    $('html, body').animate({
                        scrollTop: $(".div-about-the-token-sale").offset().top - $('.container-mobile header').height()
                    }, 1000);
                }, 1000);
            }
        }
        else {
            if (para == '/about-the-token-sale') {
                foundry.$deskChangeUrlFaq = false;
                if (changeUrl) {
                    foundry.setUrl('/faq/about-the-token-sale')
                }
                foundry.$deskIconToggle = '/faq/about-the-token-sale';
                $('#faq a').trigger('click');
                setTimeout(function () {
                    $('html, body').animate({
                        scrollTop: $(".div-about-the-token-sale").offset().top - $('.container-desk header').height()
                    }, 1000);
                }, 1000);
            }
        }
    },
    attachEventHandles: function () {
        // mobile tag click event
        foundry.$tagImg.unbind("click").click(function (e) {
            e.stopPropagation();
            foundry.tagId = $(this).attr('class');
            foundry.loadImageSrc(foundry.tagId);
            window.open(foundry.tagDetails.$link, '', '');
        });
        foundry.$goToHref.unbind("click").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            var goTo = $(this).attr('href');
            foundry.goToEvent(goTo, true);
        });
        //On screen resize load new Height for the containers
        $(window).on('resize', function () {
            foundry.loadDynamicHt();
            var topBarHeight = $('.container-mobile header').height();
            $('.container-mobile ').css('margin-top', topBarHeight);
            if ($(window).width() <= 575 || $(window).height() <= 575) {
                var orientation = foundry.checkOrientation();
                if(foundry.$mobileOrientation != orientation){
                    
                    var currentUrl = $(location).attr('href')
                    currentUrl  = currentUrl.split("/");
                    var currentPath = currentUrl[currentUrl.length - 1];
                    if(orientation == 'landscape' && currentPath != 'contact-us'){
                        $('.collapse')
                        .collapse('hide');
                            foundry.$mobIconToggle = '/';
                            foundry.setUrl('/');
                    }else if (orientation == 'portrait' && currentPath != 'contact-us'){
                        $('.section-container').css('display', 'none');
                        foundry.$mobIconToggle = '/';
                        foundry.setUrl('/');
                    }
                    foundry.$mobileOrientation = orientation;
                }
            }
        });
        //Add remove shadow effects to the expanded elements in accordion 
        foundry.$accordion.on('shown.bs.collapse', function (e) {
            var offset = $(e.target).offset().top - ($('.container-mobile header').height() + 80);
            $('html, body').animate({
                scrollTop: offset,
            }, 300)
            $(".blue-gradient > .collapsed").addClass('overlay');
            $("[aria-expanded='true']").parent().removeClass('box-shadow-btm');
        });
        foundry.$accordion.on('hide.bs.collapse', function (e) {
            $(".blue-gradient > .collapsed").removeClass('overlay');
            $("[aria-expanded='true']").parent().addClass('box-shadow-btm');
        });
        //Handle nested accordion
        foundry.$faqAccordion.on('shown.bs.collapse', function (e) {
            e.stopPropagation();
            var offset = $(e.target).offset().top - 180;
            // $(this).parent()[0].scrollIntoView({
            //     block: "start",
            //     behavior: "smooth"
            // });

            $('html, body').animate({
                scrollTop: offset,
            }, 300);
        });
        foundry.$faqAccordion.on('hide.bs.collapse', function (e) {
            e.stopPropagation();
        });
        //End add remove shdow effects to the expanded elements in accordion 


        $(window).on('scroll', function (e) {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                foundry.$scrollToTop.css('display', 'block');
            } else {
                foundry.$scrollToTop.css('display', 'none');
            }
        });
        //scroll to faq answer
        foundry.$faqAccordionTab.on('click', function () {

        });
        //scroll to click for mobile
        foundry.$dataCollapse.on('click', function (e, changeUrl) {
            e.preventDefault();
            $('#pop-foundry-fry').children().detach().appendTo('#collapse-foundry-fry');
            $('#pop-zimdai').children().detach().appendTo('#collapse-zimdai');
            $('#pop-products').children().detach().appendTo('#collapse-products');
            $('#pop-team-toast').children().detach().appendTo('#collapse-team-toast');
            $('#pop-faq').children().detach().appendTo('#collapse-faq');

            var headingChange = e.currentTarget.parentNode.id
            if (!foundry.$mobChangeUrlFaq) {
                headingChange = 'heading-about-the-token-sale';
                foundry.$mobChangeUrlFaq = true;
            }

            if (!foundry.$roadmapMobChange) {
                headingChange = 'heading-roadmap';
                foundry.$roadmapMobChange = true;
            }
            if (changeUrl) {
                if (changeUrl['data']) {
                    foundry.setMobUrl(headingChange);
                }
            } else {
                foundry.setMobUrl(headingChange);
            }
        });
        foundry.$scrollToTop.on('click', function (e) {
            $('html, body').animate({
                scrollTop: 0,
            }, 1000)
        });
        foundry.$deskLogo.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
            $('.section-container').css('display', 'none');
            if (foundry.$deskIconToggle !== '/') {
                $('.desk-footer').toggle('display');
                $('#scroll-to-top').toggle('display');
                $('.container-desk footer').addClass('custom-sticky');
                foundry.setUrl('/');
                foundry.$deskIconToggle = '/';
            }
        });
        foundry.$deskLogoMob.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.collapse')
                .collapse('hide');
            foundry.$mobIconToggle = '/';
            foundry.setUrl('/');
        });
        foundry.$deskLogoMobBottom.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $('.collapse')
                .collapse('hide');
            foundry.$mobIconToggle = '/';
            foundry.setUrl('/');
        });
        foundry.$roadmap.on('click', function (e) {
            e.preventDefault();
            foundry.showRoadMap(true);
        });
        foundry.$deskIcons.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var goTo = $(this).attr('href');
            var changeURl = true;
            if (!foundry.$deskChangeUrlFaq) {
                changeURl = false;
                foundry.$deskChangeUrlFaq = true;
            }
            foundry.displayContent(goTo, changeURl);
        })
        foundry.$roadmapMobile.on('click', function (e) {
            e.preventDefault();
            foundry.displayMobileContent('/roadmap', true);
        });
        $('#contact-modal').on('shown.bs.modal', function () {
            if ($(window).width() <= 575) {
                $('.collapse')
                    .collapse('hide');
            } else {
                $('.section-container').css('display', 'none');
            }

            foundry.$beforeContactHash = '/';
            foundry.$mobIconToggle = '/contact-us';
            foundry.$deskIconToggle = '/contact-us';
            foundry.setUrl('/contact-us');
        });
        $('#contact-modal').on('hidden.bs.modal', function () {
            if (foundry.$isChangeNeed) {
                foundry.$mobIconToggle = foundry.$beforeContactHash;
                foundry.setUrl(foundry.$beforeContactHash);
            } else {
                foundry.$isChangeNeed = true;
            }
        });
        window.addEventListener('popstate', function (e) {
            var character = e.state;
            if (character != null) {
                var url = $(location).attr('href');
                var parts = url.split("/");
                var last_part = parts[parts.length - 1];
                last_part = "/".concat(last_part);
                if (last_part !== '') {
                    if ($(window).width() <= 575) {
                        foundry.displayMobileContent(last_part, false);
                    } else {
                        switch (last_part) {
                            case '/foundry-fry':
                            case '/zimdai':
                            case '/products':
                            case '/team-toast':
                            case '/faq':
                                foundry.displayContent(last_part, false);
                                break;
                            case '/about-the-token-sale':
                                foundry.goToEvent(last_part, false);
                                break;
                            case '/roadmap':
                                foundry.showRoadMap(false);
                                break;
                            case '/contact-us':
                                foundry.$isChangeNeed = false;
                                $('#contact-modal').modal('show');
                            case '/':
                                $('.section-container').css('display', 'none');
                            default:
                                break;
                        }
                        if (last_part != '/contact-us') {
                            if ($('#contact-modal').is(':visible')) {
                                foundry.$isChangeNeed = false;
                                $('#contact-modal').modal('hide');
                            }
                        }
                    }

                }
            } else {
                $('.section-container').css('display', 'none');
            }

        });

    },
    showRoadMap: function (changeUrl) {
        $('.section-container').css('display', 'none');
        $('#roadmap').css('display', 'block');
        $('html, body').animate({
            scrollTop: $('#roadmap').offset().top - $('.container-desk .top-bar img').height(),
        }, 1000);
        if (changeUrl) {
            foundry.setUrl('/roadmap');
            foundry.$deskIconToggle = '/roadmap';
        }
    },
    displayContent: function (goTo, changeUrl) {
        var n = 0;
        if (foundry.$deskIconToggle == goTo) {
            $('html, body').animate({
                scrollTop: 0,
            }, 1000);
            $('.section-container:nth-child(' + foundry.$sectionContainer + ')').toggle('display');
            $('.section-container#roadmap').css('display', 'none');
            $('.desk-footer').toggle('display');
            $('.container-desk footer').addClass('custom-sticky');
            $('#scroll-to-top').css('display', 'none');
            if (changeUrl) {
                foundry.$deskIconToggle = '/';
                foundry.setUrl(foundry.$deskIconToggle);
            }
            return
        }
        if (goTo == '/foundry-fry') {
            n = 1;
            $('#collapse-foundry-fry').children().detach().appendTo('#pop-foundry-fry');
        } else if (goTo == '/zimdai') {
            n = 2;
            $('#collapse-zimdai').children().detach().appendTo('#pop-zimdai');
        } else if (goTo == '/products') {
            n = 3;
            $('#collapse-products').children().detach().appendTo('#pop-products');
        } else if (goTo == '/team-toast') {
            n = 4;
            $('#collapse-team-toast').children().detach().appendTo('#pop-team-toast');
        } else if (goTo == '/faq') {
            n = 5;
            if (history.state && history.state['url'] == "/faq/about-the-token-sale") {
                $('.section-container:nth-child(' + n + ')').css('display', 'none');
            }
            $('#collapse-faq').children().detach().appendTo('#pop-faq');
        }
        $('#scroll-to-top').css('display', 'block');
        $('.section-container').css('display', 'none');
        $('.section-container').removeClass('mt-5 pt-5');
        $('.container-desk footer').removeClass('custom-sticky');
        $('.desk-footer').css('display', 'block');
        $('.section-container:nth-child(' + n + ')').addClass('mt-5 pt-5');
        $('.section-container:nth-child(' + n + ')').toggle('display');
        $('.section-container#roadmap').css('display', 'none');
        $('html, body').animate({
            scrollTop: $('.section-container:nth-child(' + n + ')').offset().top - $('.container-desk .top-bar img').height(),
        }, 1000);
        if (changeUrl) {
            foundry.setUrl(goTo);
        }
        foundry.$deskIconToggle = goTo;
        foundry.$sectionContainer = n;
    },
    displayMobileContent: function (para, changeUrl) {
        if (para == '/roadmap') {
            foundry.$roadmapMobChange = true;
            if (changeUrl) {
                foundry.$roadmapMobChange = false;
            }
            $("[data-target='#collapse-roadmap-mobile']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-roadmap-mobile']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/foundry-fry') {
            $("[data-target='#collapse-foundry-fry']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-foundry-fry']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/zimdai') {
            $("[data-target='#collapse-zimdai']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-zimdai']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/products') {
            $("[data-target='#collapse-products']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-products']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/team-toast') {
            $("[data-target='#collapse-team-toast']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-team-toast']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/faq') {
            $("[data-target='#collapse-faq']").trigger('click', { data: changeUrl });
            setTimeout(function () {
                $('html, body').animate({
                    scrollTop: $("[data-target='#collapse-faq']").offset().top - $('.container-mobile header').height()
                }, 1000);
            }, 1000);
        }
        if (para == '/about-the-token-sale') {
            foundry.$mobIconToggle = para;
            foundry.goToEvent('/about-the-token-sale', changeUrl)
        }
        if (para == '/contact-us') {
            foundry.$isChangeNeed = true;
            $('#contact-modal').modal('show');

        }
        if (para == '/') {
            $('.collapse').collapse('hide');
            if (changeUrl) {
                foundry.$mobIconToggle = para;
                foundry.setUrl(para)
            }

        }
        if (para != '/contact-us' && !changeUrl) {
            if ($('#contact-modal').is(':visible')) {
                foundry.$isChangeNeed = false;
                $('#contact-modal').modal('hide');
            }
        }
    },
    setMobUrl: function (container) {
        switch (container) {
            case 'heading-foundry-fry':
                if (foundry.$mobIconToggle != '/foundry-fry') {
                    foundry.setUrl('/foundry-fry')
                    foundry.$mobIconToggle = '/foundry-fry';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/';
                    break;
                }
            case 'heading-zimdai':
                if (foundry.$mobIconToggle != '/zimdai') {
                    foundry.setUrl('/zimdai')
                    foundry.$mobIconToggle = '/zimdai';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }
            case 'heading-products':
                if (foundry.$mobIconToggle != '/products') {
                    foundry.setUrl('/products')
                    foundry.$mobIconToggle = '/products';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }
            case 'heading-team-toast':
                if (foundry.$mobIconToggle != '/team-toast') {
                    foundry.setUrl('/team-toast')
                    foundry.$mobIconToggle = '/team-toast';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }
            case 'heading-faq':
                if (history.state && history.state['url'] == "/faq/about-the-token-sale") {
                    foundry.setUrl('/');
                    break;
                }
                if (foundry.$mobIconToggle != '/faq') {
                    foundry.setUrl('/faq')
                    foundry.$mobIconToggle = '/faq';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }
            case 'heading-about-the-token-sale':
                if (foundry.$mobIconToggle != '/faq#about-the-token-sale') {
                    foundry.setUrl('/faq/about-the-token-sale')
                    foundry.$mobIconToggle = '/faq/about-the-token-sale';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }
            case 'heading-roadmap':
                if (foundry.$mobIconToggle != '/roadmap') {
                    foundry.setUrl('/roadmap')
                    foundry.$mobIconToggle = '/roadmap';
                    break;
                } else {
                    foundry.setUrl('/')
                    foundry.$mobIconToggle = '/'
                    break;
                }

            default:
                break;
        }
    },
    setUrl: function (url) {
        history.pushState({ "url": url }, null, url);
    },
    checkOrientation: function(){
        if(window.innerHeight > window.innerWidth){
            return "portrait";
        }else{
            if(window.innerWidth > window.innerHeight){
                return "landscape";
            }
        }
        return '';
    }
};
$(function () {
    foundry.init();
    foundry.attachEventHandles();

    $('body').imagesLoaded()
        .done(function () {
            $('.container-mobile .blue-gradient').imagesLoaded({ background: true }, function () {
            }).done(function () {
                $('.container-desk .banner').imagesLoaded({ background: true }, function () {
                }).done(function () {
                    $('.container-mobile .pattern').imagesLoaded({ background: true }, function () {
                    }).done(function () {
                        console.log('All images loaded');
                        $('body').addClass('loaded');
                    });
                });
            });
        });

    $(document).ready(function () {
        foundry.triggerOnLoad();
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