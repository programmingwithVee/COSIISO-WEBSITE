(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function () {
		$('.featured-carousel').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 30,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: true,
			dots: true,
			autoplayHoverPause: false,
			items: 1,
			navText: [""],
			responsive: {
				768: {
					items: 2
				},
				1000: {
					items: 2
				}
			}
		});

	};
	carousel();

})(jQuery);


/*------------------
		Background Set
	--------------------*/
$('.set-bg').each(function () {
	var bg = $(this).data('setbg');
	$(this).css('background-image', 'url(' + bg + ')');
});