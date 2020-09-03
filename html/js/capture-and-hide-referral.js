function captureAndHideReferral() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var ref = urlParams.get('ref');
    if (ref !== null) {
        iframe = document.getElementById('referralCaptureIframe');
        iframe.contentWindow.postMessage(ref,"*");
    }
}