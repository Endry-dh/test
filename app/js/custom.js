$(document).ready(function() {
	$('.header__menu-logo').on('click', function() {
		$('.header__nav').slideToggle(500);
	});

	$(window).resize(function() {
		if ($(window).width() > 768) {
			$('.header__nav').removeAttr('style');
		}
	});
});