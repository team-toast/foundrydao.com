function captureAndHideReferral() {
    var queryString = window.location.search;
    var urlParams = function (queryString) {
        var results = new RegExp('[\?&]' + queryString + '=([^&#]*)').exec(window.location.href);
        if (results == null){
           return null;
        }
        else {
           return decodeURI(results[1]) || 0;
        }
    }

    var ref = urlParams('ref');
    if (ref !== null) {
        iframe = document.getElementById('referralCaptureIframe');
        iframe.contentWindow.postMessage(ref,"*");
    }
}