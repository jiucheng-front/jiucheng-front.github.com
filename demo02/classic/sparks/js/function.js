$(function() {
	var com = {
		init: function() {
			this.present();
			this.loading();
		},
		loading: function() {
			window.onload = function() {
				$("#loading").hide();
				$("#container").show();
			}
		},
		present: function() {
			$("#mobilenav").click(function() {
				var display = $(".nav ul").css('display');
				if (display == "none") {
					$(".nav ul").show();
				} else {
					$(".nav ul").hide();
				}
			});

			function resetHeight() { //获取屏幕高度
				var _height = $(window).height();
				$(".scroll_content").height(_height);
				var _weight = $(document).width();
				var pecent = _weight / _height;
				if (pecent < 1.78) {
					$(".slide_infob").addClass('slide_infoh');
				} else {
					$(".slide_infob").removeClass('slide_infoh');
				};
				$(".slide > div").width(_weight);
			}

			resetHeight();
			$(window).resize(function() { //resize之后初始化屏幕高度
				resetHeight();
			});
		}
	}
	com.init();
})