//Author:Flanny
(function($) {
	$.fn.career_select = function() {

		for (i in cardetailObject) {
			var human = $("<div></div>");
			human.attr('class', 'humanwraper');
			human.attr('data-humanId', cardetailObject[i].mobilenum);
			var _humoninfo = "<img src='" + 'images/human/' + cardetailObject[i]._images + "'><div><h2>" + cardetailObject[i]._humanname + "</h2><h3>" + cardetailObject[i]._title + "</h3><h3><span>" + cardetailObject[i].country + "</span><span>" + cardetailObject[i].city + "</span></h3><h4>" + cardetailObject[i].detail + "</h4><a href='"+'mailto:'+cardetailObject[i].email+"'>" + cardetailObject[i].email + "</a></div>";
			human.append(_humoninfo);
			$('#careercontent').append(human);
		};
		var _weight = $(window).width();
		$(".humanwraper").width(_weight / 7);
		$(window).resize(function() {//resize之后初始化屏幕高度
			var _weight = $(window).width();
			$(".humanwraper").width(_weight / 7);
		});
		$('.humanwraper').eq(10).find('div').remove();
		$('.humanwraper').eq(10).click(function(){location.href="career_position_3dd.html"});
		var deTail = this.find('.humanwraper');
		deTail.hover(function() {
			$(this).find('div').stop().show(100);
		}, function() {
			$(this).find('div').stop().hide(100);
		});
	};
})(jQuery); 