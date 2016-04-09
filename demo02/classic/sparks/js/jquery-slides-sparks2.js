//Author:Flanny
(function($) {
	$.fn.sparks_slide_common = function() {
		var index = 0;
		var Btn = this.find('.slidebtn a');
		var Btnbox = this.find('.slidebtn');
		var Next = this.find('.left_btn');
		var Prev = this.find('.right_btn');
		var _width = $(window).width();
		var slideInfo = this.find('.slide');
		var slidedown = this.find(".slidedown")
		var _length = Btn.length - 1;
		slidedown.hide();
		function slide(val) {
			Btn.removeClass('slide_current');
			Btn.eq(val).addClass('slide_current');
			index = val;
			slideInfo.animate({
				left : (_width * val) * -1
			}, 500);
			if (index == 0) {
				Prev.hide();
				Next.find('img').attr('src','images/nextbtn.png')
				Btnbox.removeClass('whitebtn');
			} else {
				Prev.show();
				Next.find('img').attr('src','images/nextbtn2.png')
				Btnbox.addClass('whitebtn');
			};
			if (index == _length) {
				Next.hide();
			} else {
				Next.show();
			};
//			if (index == 1) {
//				slidedown.hide();
//			}else{
//				slidedown.show();
//			}
		};

		$(window).resize(function(event) {
			slide(0);
			_width = $(document).width();
		});
		Btn.click(function(event) {
			var _num1 = $(this).index();
			slide(_num1);
		});
		Next.click(function(event) {
			if (index < _length) {
				slide(++index);
			}
		});
		Prev.click(function(event) {
			if (index > 0) {
				slide(--index);
			}
		});
	};
})(jQuery);
