/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top', offset: 150
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});

// Slideshow accueil

document.addEventListener("DOMContentLoaded", function () {
    const images = ["/img/img-accueil-1.jpg", "/img/img-accueil-2.jpg", "/img/img-accueil-3.jpg"];
    let current = 0;
    let showingFirst = true;

    const img1 = document.getElementById("img-accueil-1");
    const img2 = document.getElementById("img-accueil-2");

    setInterval(() => {
        const next = (current + 1) % images.length;

        if (showingFirst) {
            img2.src = images[next];
            img2.style.opacity = 1;
            img1.style.opacity = 0;
        } else {
            img1.src = images[next];
            img1.style.opacity = 1;
            img2.style.opacity = 0;
        }

        showingFirst = !showingFirst;
        current = next;
    }, 4000); // Toutes les 4 secondes
});


document.addEventListener("DOMContentLoaded", function () {
    const images = ["/img/img-accueil-1.jpg", "/img/img-accueil-2.jpg", "/img/img-accueil-3.jpg"];
    let current = 0;
    let showingFirst = true;

    const img1 = document.getElementById("img-accueil-mobile-1");
    const img2 = document.getElementById("img-accueil-mobile-2");

    setInterval(() => {
        const next = (current + 1) % images.length;

        if (showingFirst) {
            img2.src = images[next];
            img2.style.opacity = 1;
            img1.style.opacity = 0;
        } else {
            img1.src = images[next];
            img1.style.opacity = 1;
            img2.style.opacity = 0;
        }

        showingFirst = !showingFirst;
        current = next;
    }, 4000); // Toutes les 4 secondes
});