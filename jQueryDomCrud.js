$( document ).ready(function() {
    // Create a new <a> element containing the text "Buy Now!"
    // with an id of "cta" after the last <p>
    const $main = $('main');
    const $buyNow = $('<a>');
    $buyNow.attr('id', 'cta');
    $buyNow.text('Buy Now!');
    $main.append($buyNow);

    // Access (read) the data-color attribute of the <img>,
    // log to the console
    const dataColor = $('img').attr('data-color');
    console.log(dataColor);
    
    // Update the third <li> item ("Turbocharged"),
    // set the class name to "highlight"
    const $li = $('li')[2];
    $li.classList.toggle('highlight');

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…")
    const $lastP = $('p');
    $lastP.remove();

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    $buyNow.click(function(e) {
        const $addedToCart = $('<p>');
        $addedToCart.text('Added to cart');
        $main.append($addedToCart);
        $buyNow.remove();
    });
});