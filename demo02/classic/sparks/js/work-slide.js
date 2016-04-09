$(function() {
	var slidewidth = $(window).width();
	var workSlide = $("#workslide");
	var slidech = $("#slideinfo");
	var slideheight = $(window).height() - 50;
	var slidelength = $("#slideinfo > div").length - 1;
	var slideBtn;

	for (var i = slidelength; i >= 0; i--) {
		slideBtn = $("<a></a>");
		slideBtn.attr('href', 'javascript:void(0);');
		$("#infoBtn").append(slideBtn);

	};
	if (slidelength == 0) {
		//console.log(slidelength);
		$("#infoBtn").hide()
	}
	var slidebtn = $(".slidespot > a");
	slidebtn.eq(0).addClass('slidecurrent');

	function resetWide() {
		slidewidth = $(window).width();
		sevenslidewidth = slidewidth/1.8;
		$("#slideinfo >div").width(sevenslidewidth);
		slideheight = $(window).height() - 45;
		$(".workslide_design_content").width(slidewidth);
		$(".work_right").width(sevenslidewidth);
		$(".workslide_box").css('min-height', slideheight);
		$("#workslide").css('min-height', slideheight);
		$("#slideinfo").height(slideheight-100);
	};
	resetWide();
	$(window).resize(function(event) {
		resetWide();
	});
	//内页的滑动
	var t;
	var index = 0;

	function action(num) {
		clearInterval(t);
		//		workSlide.animate({
		//			left : (slidewidth * num) * -1
		//		}, 500);

		slidech.animate({
			marginLeft: (sevenslidewidth * num) * -1
		}, {
			easing: "easeInOutQuad",
			duration: 500,
		});

		index = num;
		slidebtn.eq(num).addClass('slidecurrent').siblings().removeClass('slidecurrent');
		t = setInterval(auto, 3000);
	}


	slidebtn.click(function(event) {
		$(this).addClass('slidecurrent').siblings().removeClass('slidecurrent');
		var snum = $(this).index();
		action(snum);
	});

	function auto() {
		if (index < slidelength) {
			action(++index);
		} else {
			action(0);
		}
	}

	t = setInterval(auto, 3000);

	//视频全屏
	var videobg = $(".work_right_video");
	videowidth = videobg.width();
	videobg.height(videowidth * 0.56725)
	if (!!document.createElement('video').canPlayType) {
		var vidTest = document.createElement("video");
		oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
		if (!oggTest) {
			h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
			if (!h264Test) {
				$(".work_right_video").addClass('no5');
				$("#mediaplayer").show();

			} else {
				if (h264Test == "probably") {
					$(".work_right_video").removeClass('no5');
					$("#mediaplayer").hide();
				} else {
					$(".work_right_video").addClass('no5');
					$("#mediaplayer").show();
				}
			}
		} else {
			if (oggTest == "probably") {
				$(".work_right_video").removeClass('no5');
				$("#mediaplayer").hide();
			} else {
				$(".work_right_video").addClass('no5');
				$("#mediaplayer").show();

			}
		}
	} else {
		$(".work_right_video").addClass('no5');
		$("#mediaplayer").show();
	}


});