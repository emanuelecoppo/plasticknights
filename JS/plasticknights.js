// LOADING

$(document).ready(function() {
    $('#loading').delay(500).animate({'top':'-100%'}, 800);
});

// LANGUAGE CHANGE

$('.language').click(function(){
    $('.eng, .ita').toggleClass('eng ita');
});

// SMOOTHSCROLL

$(document).ready(function() {

    // Add smooth scrolling to all links
    $('a').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== '') {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});