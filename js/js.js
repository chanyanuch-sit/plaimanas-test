$(document).ready(function() {

	$('.menu-mobile').click(function() {
		$(this).toggleClass('active');
		$('.nav').toggleClass('show');
	});

	$('.nav-link.btn-dropdown').click(function() {
		$(this).toggleClass('active');
		$(this).next('.menu-dropdown').toggleClass('show');
	});

    $('.menu-dropdown').click(function(){
        location.reload();
    });

    $('.link-currency').click(function(){
        $(this).next('.menu-dropdown').toggleClass('show');
    });


	$(window).on("scroll", function () {
		var scrollTop = $(this).scrollTop();
		var windowH = $(window).height();

		$(".sc--new .image, .sc--bestseller .image").each(function () {
			var $image = $(this);
			var $text = $image.find("figcaption");

			var imageTop = $image.offset().top;
			var imageH = $image.outerHeight();
			var textH = $text.outerHeight();

			var trigger = imageTop - windowH / 2 + imageH / 2;
			var move = (scrollTop - trigger) * 0.5;
			var maxMove = (imageH / 2) - (textH / 2);
			move = Math.max(0, Math.min(move, maxMove));

			$text.css(
				"transform",
				"translate(-50%, calc(-50% + " + move + "px))"
			);
		});
	});

});