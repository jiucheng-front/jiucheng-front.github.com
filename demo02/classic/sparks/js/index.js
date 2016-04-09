$(function() {	
	var com = {
		init : function() {
			this.slidescroll();
			this.iconhover();
			
		},
		slidescroll : function() {//页面滚动
			var slideon = false;
			var index = 0;
			if(location.hash){
		        index = 8;
		    }
			var _height = $(window).height();
			function slideTo(pagenum) {
				var scrollheight = pagenum * _height;
				$('body,html').stop().animate({
					scrollTop : scrollheight,
				}, 800, 'swing');

				pagenum = index;
			};
			var scrolllength = $(".scroll_content").length;
			var pageBtn = $(".slideBtn")
			pageBtn.each(function(val, el) {
				var pnum = val + 1;
				val = index;
				$(this).click(function(event) {
					if (pnum < scrolllength) {
						slideTo(pnum);
					} else if (pnum == scrolllength) {
						slideTo(0);
						index = 0;
					}
					;
				});
			});
			$(".index_info img").each(function(val, el) {
				var numpage = val;
				$(this).click(function(event) {
					if (numpage == 0) {
						slideTo(1);
						index = 1;
					};
					if (numpage == 1) {
						slideTo(2);
						index = 2;
					};
					if (numpage == 2) {
						slideTo(3);
						index = 3;
					};
				});
			});
			$(window).resize(function() {//resize之后初始化屏幕高度
				_height = $(window).height();
			});
			var timeLast = 0;
			$('#container').mousewheel(function(event, delta) {//鼠标滚动一page+
				event.preventDefault();
				var timeNow = new Date().getTime();
				if (timeNow - timeLast < 800) {
					event.preventDefault();
					return;
				}

				if (delta < 0) {
					slideTo(++index);
				} else {
					slideTo(--index);
				}

				timeLast = timeNow;
			});
			
		},
		iconhover : function() {//ICON页面 mouse over 效果
			var iconbtn = $(".icon > a");
			iconbtn.hover(function() {
				$(this).css('z-index', '11').siblings().css('z-index', '9');
				;
				$(this).stop().find('.tips').show();
			}, function() {
				$(this).stop().find('.tips').hide();
			});
		}
	}
	com.init();
})
