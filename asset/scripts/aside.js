$( function () {
	var local = window.location.pathname.split('?')[0]
	$('#aside a').each(function (index, item) {
		var url = $(item).attr('href');
		if (url == local) {
			var panel = $(item).data('panel');
			$(item).addClass('active');
			console.log(panel)
			if (panel) {
				$(item).parent().parent().addClass('in');
			}
		}
	});

	$(document).on('click', '.navbar-toggle.menuSilebar', function () {
		var status = $(this).data('slider');
		if (status) {
			$(this).data('slider', false);
			$('#wrapper').animate({right:0},300);
			$('.aside').animate({left: '100%'},300);
		} else {
			$(this).data('slider', true);
			$('#wrapper').animate({right:'70%'},300);
			$('.aside').animate({left: '30%'}, 300);
		}
	})
});