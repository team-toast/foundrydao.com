function attachElmSaleButtons(elements, saleStartTime) {
    for (var i=0; i<elements.length; i++) {
        attachElmSaleButton(elements[i], saleStartTime)
    }
}

function attachElmSaleButton(element, saleStartTime) {
    Elm.LinkToSaleButtonOrCountdown.init({
        node: element,
        flags: {
            saleStartTime: saleStartTime,
            now: Math.floor(Date.now() / 1000)
        }
    });
}