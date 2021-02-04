
var foundryBlog = {
    fileNames: [],
    $preloadImgs: [],
    $preloadDesktopImgs: [],
    $preloadMobileImgs: [],
    init: function(){
        foundryBlog.$preloadImgs = [
            '/images/svg/icons/fry-icon_200x200.png',
            '/images/svg/logo.svg',
            '/images/svg/icons/telegram-icon.svg',
            '/images/svg/icons/social-icon.svg',
            '/images/svg/icons/roadmap-icon.svg',
            '/images/svg/icons/blog-icon.svg',
            '/images/svg/blog-elements/blog-list-view.svg',
            '/images/svg/arrow.svg'
        ];
        foundryBlog.$preloadDesktopImgs = [
            '/images/svg/top-bar-desktop.svg',
            '/images/svg/bottom-bar-desktop.svg'
            ];
        foundryBlog.$preloadMobileImgs = [
            '/images/svg/top-bar-mobile.svg',
            '/images/svg/bottom-bar-mobile.svg',
            '/images/svg/left-side-pattern-element.svg'
            ];
        foundryBlog.loadFileNames()
    },
    preloadImages: function(urls, allImagesLoadedCallback){

        var loadedCounter = 0;
        var toBeLoadedNumber = urls.length;

        urls.forEach(function(url){
            foundryBlog.preloadImage(url, function(){
                loadedCounter++;
                    if(loadedCounter == toBeLoadedNumber){
                        allImagesLoadedCallback();
                    }
            });
        });
    },

    preloadImage: function(url, anImageLoadedCallback){

        var img = new Image();

        img.src = url;
        img.onload = anImageLoadedCallback;
    },
    attachEventHandles: function() {
           foundryBlog.preloadImages(foundryBlog.$preloadImgs, function(){
            });
        
            if ($(window).width() <= 575){
                foundryBlog.preloadImages(foundryBlog.$preloadMobileImgs, function(){
                    console.log('All images loaded for mobile');
                    $('body').addClass('loaded');
                });
            }
            else {
                foundryBlog.preloadImages(foundryBlog.$preloadDesktopImgs, function(){
                    console.log('All images loaded for Desktop');
                    $('body').addClass('loaded');
                });
            }
    },

    loadFileNames: function () {
            try {
                $.ajax({
                    type: "GET",
                    url: "blog-list.xml",
                    dataType: "xml",
                    success: function(data){
                    return data;    
                    },
                    error: function() {
                       console.log("Failed to get xml");
                    }
                })
                .then(function(data) {
                    $('blog', data).each(function(index){
                        var file =  $(this).find('file').text();
                        foundryBlog.fileNames.push(file);
                    });
                    foundryBlog.process();
                })
            } catch (ex) {
                console.log(ex);
            }
       },
    process: function (){
        foundryBlog.ajaxRequest();
    },
    ajaxRequest: function(){
        var element = document.getElementById("load-content");
        element.innerHTML = '';
            var fileNa = foundryBlog.fileNames.pop();
            var urlStringPath = "/common-assets/blog/";
            var url = urlStringPath.concat(fileNa);
            $.get(url)
            .then(function(my_var) {
                element.innerHTML = my_var;
                data = foundryBlog.extractData(element); 
                return foundryBlog.addnewBlog(data, this.url);
                })
                .done(function (data){
                    document.getElementById('load-blog-template').appendChild(data);
                    $('[data-toggle="tooltip"]').tooltip();

                    if(foundryBlog.fileNames.length > 0){
                        foundryBlog.ajaxRequest();
                    }else {
                        foundryBlog.truncateText();
                    }
                })
                .catch( function (error){
                    console.log(error);
                });
    },
    truncateText: function(){
    
        var images = $(document).find('.section-blog-image img');
        var i = 0;
        while (i < images.length){
            image = images[i];
            var height = Math.round(image.height).toString();
            var required = image.parentNode.parentNode;
            var div =  $(required).find(".section-blog-text");
            if(height > div.height()){
                div.css('height',height);
            }
            i++;
        }         
    },
    addnewBlog: function(data, fileName){
        document.querySelector('.template-blog .section-blog-title').innerHTML = data['title'];
        document.querySelector('.template-blog .section-blog-sub-title').innerHTML = data['sub-title'];
        $('.template-blog .section-blog-title').attr('data-original-title', data['toolTip']);
        document.querySelector('.template-blog .section-blog-date').innerHTML = data['date'];
        document.querySelector('.template-blog .section-blog-author').innerHTML = '<span>Posted by: </span>' + data['author'];
        document.querySelector('.template-blog .section-blog-mob-title').innerHTML = data['title'];
        document.querySelector('.template-blog .section-blog-mob-sub-title').innerHTML = data['sub-title'];
        document.querySelector('.template-blog .section-blog-mob-date').innerHTML = data['date'];
        document.querySelector('.template-blog .section-blog-mob-author').innerHTML = '<span>Posted by: </span>' + data['author'];
        document.querySelector('.template-blog .section-blog-text').innerHTML = data['text'];
        var parts = fileName.split("/");
        var last_part = parts[parts.length-1];
        var name = last_part.split('.');
        var newUrl = "/blog/".concat(name[0]);
        var url = "/images/blog/".concat(name[0]);

        var imageAdded = false;

        if(data['imgSrc']){
            imageAdded = true;
            var imageName = data['imgSrc'].split("/");
            var imagePath = imageName[imageName.length-1];
            imageUrl = url.concat('/');
            imagePath = imageUrl.concat(imagePath);
            var img = document.createElement("IMG");
                img.src = imagePath;
                $('.template-blog .section-blog-image').html(img);
                var image =  $('.template-blog .section-blog-image').html(img);
        }else {
            $('.template-blog .section-blog-text').addClass("limit-the-test")
            if($(window).width() > 575){
                $('.template-blog .section-blog-image').removeClass("col-3 col-sm-3 col-md-6 order-1 order-sm-0 single-blog-image");
                $('.template-blog .section-blog-image').addClass("d-none"); 
                $('.template-blog .section-text-column').removeClass("col-9 col-sm-9 col-md-6 order-2 order-sm-0");  
                $('.template-blog .section-text-column .section-title').addClass("custom-blog-padding-left");
                $('.template-blog .section-body').addClass("custom-blog-padding-left");
            }
        }
    
        document.querySelector('.template-blog .section-blog-anchor').href = newUrl;
        document.querySelector('.template-blog .section-blog-anchor-mobile').href = newUrl;
        document.querySelector('.template-blog .section-blog-anchor-readmore').href = newUrl;
        
        var newTemplate = document.querySelector('.template-blog').cloneNode(true);
        newTemplate.classList.remove("template-blog");

        if (imageAdded){
            $('.template-blog .section-blog-image').empty();
        } else {
            $('.template-blog .section-blog-text').removeClass("limit-the-test")
            if($(window).width() > 575){
                $('.template-blog .section-blog-image').addClass("col-3 col-sm-3 col-md-6 order-1 order-sm-0 single-blog-image");
                $('.template-blog .section-blog-image').removeClass("d-none");
                $('.template-blog .section-text-column').addClass("col-9 col-sm-9 col-md-6 order-2 order-sm-0"); 
                $('.template-blog .section-text-column .section-title').removeClass("custom-blog-padding-left");
                $('.template-blog .section-body').removeClass("custom-blog-padding-left");
            }  
        }
        return newTemplate;
    },

    extractData: function(element){
        result = [];
        result['toolTip'] = $(element).find("h2:first").text();
        result['title'] = $(element).find("h1:first").text();
        result['sub-title'] = $(element).find("h2:first").text();
        if(result['title'].length > 24){
            result['title'] = result['title'].substr(0,24) + '...';
        }
        result['date'] = $(element).find("span:first").text();
        result['author'] = $(element).find("h3:first").text();
        result['text'] = $(element).find("p").text();
        result['imgSrc'] = $(element).find("img:first").attr('src');
        return result;
    
    }
};
$(function() {
    foundryBlog.init();
    foundryBlog.attachEventHandles();
});

