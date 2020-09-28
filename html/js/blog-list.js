
var foundryBlog = {
    init: function(){
        foundryBlog.loadFileNames('/common-assets/blog')
    },
    loadFileNames: function (dir) {
            try {
                $.ajax({
                    url: dir,
                    success: function(data){
                    return data;    
                }
                })
                .then(function(data) {
                    var fileNames = new Array();
                    $(data).find("td > a").each(function(){
                        var file = $(this).attr("href"); 
                        var extension = file.substr( (file.lastIndexOf('.') +1) );
                            switch(extension) {
                                case 'html':
                                fileNames.push(file);
                                break;
                                default:
                                break;
                            }
                    });
                    foundryBlog.process(fileNames);
                })
            } catch (ex) {
                console.log(ex);
            }
       },
    process: function (fileNames){
        var element = document.getElementById("load-content");
            for(var i=0; i < fileNames.length; i++){
                /*remove the 2 line below when working in local and replace with var url=fileNames[i]; */
                var urlStringPath = "/common-assets/blog/";
                var url = urlStringPath.concat(fileNames[i]);
                //var url=fileNames[i];
                    $.get(url)
                        .then(function(my_var) {
                            element.innerHTML = my_var;
                            data = foundryBlog.extractData(element); 
                            return foundryBlog.addnewBlog(data,this.url);
                            })
                            .then(function(data) {
                                document.getElementById('load-blog-template').appendChild(data);
                            })
                            .catch( function (error){
                                console.log(error);
                            });
    
        }

    },
    addnewBlog: function(data,fileName){
        document.querySelector('.template-blog #section-blog-title').innerHTML = data['title'];
        document.querySelector('.template-blog #section-blog-date').innerHTML = data['date'];
        document.querySelector('.template-blog #section-blog-author').innerHTML = data['author'];
        document.querySelector('.template-blog #section-blog-mob-title').innerHTML = data['title'];
        document.querySelector('.template-blog #section-blog-mob-date').innerHTML = data['date'];
        document.querySelector('.template-blog #section-blog-mob-author').innerHTML = data['author'];
        document.querySelector('.template-blog #section-blog-text').innerHTML = data['text'];
        document.querySelector('.template-blog #section-blog-image').src = data['imgSrc'];
        
        
        var parts = fileName.split("/");
        var last_part = parts[parts.length-1];
        var name = last_part.split('.');

        var urlfirst ="/blog/";
        var url = urlfirst.concat(name[0]);
    
        document.querySelector('.template-blog .section-blog-anchor').href = url;
        document.querySelector('.template-blog .section-blog-anchor-mobile').href = url;
        document.querySelector('.template-blog .section-blog-anchor-readmore').href = url;
        
        var newTemplate = document.querySelector('.template-blog').cloneNode(true);
        newTemplate.classList.remove("template-blog");
        return newTemplate;
    },
    
    extractData: function(element){
        result = [];
        result['title'] = $(element).find("h2:first").text();
        if(result['title'].length > 24){
            result['title'] = result['title'].substr(0,24) + '...';
        }
        result['date'] = $(element).find("span:first").text();
        result['author'] = $(element).find("h3:first").text();
        result['text'] = $(element).find("p:first").text();
        result['text'] = result['text'].substr(0,250) + '...';
        result['imgSrc'] = $(element).find("img:first").attr('src');
        return result;
    
    }    
};
$(function() {
    foundryBlog.init();
});

