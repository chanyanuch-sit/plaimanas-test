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

});