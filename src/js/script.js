$(function() {
  $('#heading-nav a').click(function(event) {
    event.preventDefault();
    let nav = $('#heading-nav');
    let hamburger = $('#hamburger');
    if (nav.attr('class') == 'open') {
      nav.removeClass('open');
      hamburger.removeClass('active');
    }
		let goTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(goTo).offset().top
		}, 1000);
  });

  $(".scroll").click(function(event) {
		event.preventDefault();
		let goTo = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(goTo).offset().top
		}, 1000);
	});

  $('#hamburger').click(function(event) {
    event.preventDefault();
    let hamburger = $(this);
    let nav = $('#heading-nav');
    hamburger.toggleClass('active');
    nav.toggleClass('open');
  });
});