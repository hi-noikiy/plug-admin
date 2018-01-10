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
});