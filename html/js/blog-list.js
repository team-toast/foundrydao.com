
var foundryBlog = {
    fileNames: [],
    init: function(){
        foundryBlog.loadFileNames()
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
                var fileNameParts = this.url.split("/");
                var fileName = fileNameParts[fileNameParts.length-1].split('.');
                fileName[0] = fileName[0].concat('/');
                var initialUrl = '/images/blog/'.concat(fileName[0]); 
                var imgs = element.getElementsByTagName("img");

                for(var i = 0; i < imgs.length; i++) {
                    curImg = imgs[i];
                    var parts = curImg.src.split("/");
                    var finalUrlPart = parts[parts.length-1];
                    var finalUrlPart = initialUrl.concat(finalUrlPart);
                    curImg.src       = finalUrlPart;
                }

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
        $('.template-blog .section-blog-title').attr('data-original-title', data['toolTip']);
        document.querySelector('.template-blog .section-blog-date').innerHTML = data['date'];
        document.querySelector('.template-blog .section-blog-author').innerHTML = data['author'];
        document.querySelector('.template-blog .section-blog-mob-title').innerHTML = data['toolTip'];
        document.querySelector('.template-blog .section-blog-mob-date').innerHTML = data['date'];
        document.querySelector('.template-blog .section-blog-mob-author').innerHTML = data['author'];
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
        result['title'] = $(element).find("h2:first").text();
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
    
});

