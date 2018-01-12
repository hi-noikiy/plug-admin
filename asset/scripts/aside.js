$(function () {

	var local = window.location.pathname.split('?')[0]

	$('#aside a').each(function (index, item) {
		
		var url = $(item).attr('href');

		if (url == local) {
			
			var panel = $(item).data('panel');
			$(item).addClass('active');

			if (panel) $(item).parent().parent().addClass('in');

		}

	});

	/**
	 * 移动端菜单伸缩事件
	 */
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

	});
});

	/**
	 * 移动端回到顶部
	 */
	$('#wrapper').scroll(function () {
		if ($(this).scrollTop() > 20) {
			if ($('#goTopTool').length <= 0) {
				$('body').append($(`
					<div id="goTopTool" style="position:fixed;bottom: 12px;right: 12px;width:40px;height:40px;line-height:40px;font-size:18px;color:white;background-color:rgba(0,0,0,.5);border-radius:5px;text-align:center;z-index:11;">
						<i class="fa fa-angle-up"></i>
					</div>
				`));
			}
		} else {
			$('#goTopTool').remove();
		}
	})