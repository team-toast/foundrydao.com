var foundrySub = {
    init: function() {
        var url = $(location).attr('href');
        var parts = url.split("/");
        var finalUrlPart = parts[parts.length-1];
        var last_part = finalUrlPart.substr(1);
        var extension = '.html'
        var urlStringPath = "/common-assets/blog/";
        var targetUrl = urlStringPath.concat(last_part);
        var targetUrl = targetUrl.concat(extension);
        var changedURl = '/blog/'.concat(last_part);

        if(last_part == ''){
               location.replace('/blog-list');
        }else {
            history.pushState(targetUrl, null, changedURl);   
        }
        foundrySub.renderHtml(targetUrl);
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
            $(foundrySub.mainSection).load(url , function(){
                $(foundrySub.mainSection).find("section:first").addClass("d-none");
                var data = foundrySub.extractData(foundrySub.mainSection, url);
                foundrySub.addDataToBlog(data);
                $('[data-toggle="tooltip"]').tooltip();
            });
        }else {
            fetch(url)
            .then(function(response) {
                return response.text()}
                )
            .then(function(html) {
                foundrySub.mainSection.innerHTML = html;
                $(foundrySub.mainSection).find("section:first").addClass("d-none");
                var data = foundrySub.extractData(foundrySub.mainSection, url);
                foundrySub.addDataToBlog(data);
                $('[data-toggle="tooltip"]').tooltip();

            })
            .catch(function(error) {
            console.log(error);
            });     
        }
    },
        
    extractData: function(element, url){
        result = [];
        result['title'] = $(element).find("h1:first").text();
        result['sub-title'] = $(element).find("h2:first").text();
        result['toolTip'] = $(element).find("h2:first").text();
        result['date'] = $(element).find("span:first").text();
        result['author'] = $(element).find("h3:first").text();
        result['text'] = $(element).find("p:first").text();
        result['text'] = result['text'].substr(0,250) + '...';
        result['imgSrc'] = $(element).find("img:first").attr('src');
        
        if(result['title'].length > 24){
            result['title'] = result['title'].substr(0,24) + '...';
        }
        return result;
    },
    addDataToBlog: function(data){
        document.querySelector('#blog-title').innerHTML = data['title'];
        $('#blog-title').attr('data-original-title', data['toolTip']);
        document.querySelector('#blog-date').innerHTML = data['date'];
        document.querySelector('#blog-sub-title').innerHTML = data['sub-title'];
        document.querySelector('#blog-author').innerHTML = '<span>Posted by: </span>' + data['author'];
        document.querySelector('#blog-mob-title').innerHTML = data['title'];
        document.querySelector('#blog-mob-sub-title').innerHTML = data['sub-title'];
        document.querySelector('#blog-mob-date').innerHTML = data['date'];
        document.querySelector('#blog-mob-author').innerHTML = '<span>Posted by: </span>' + data['author'];
        document.title = data['toolTip'];
    }
      
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
