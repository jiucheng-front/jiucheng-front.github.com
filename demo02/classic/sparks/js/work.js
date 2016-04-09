$(function() {
	
	for (i in workObj) {
		var workinfo = $("<div class='workinfo'></div>");
		var worImg = "<img src='" + 'images/' + workObj[i]._images + "'>";
		var workdes = $("<div class='workdes'></div>");
		var workTxt = "<span><h2>" + workObj[i].workname + "</h2><h3>" + workObj[i].worktype + "</h3></span>";
		workdes.append(workTxt);
		workinfo.attr('class', workObj[i].worktype);
		workinfo.attr('data-id', workObj[i].workid);
		workinfo.attr('data-type',workObj[i].datatype);
		workinfo.append(workdes);
		workinfo.append(worImg);
		$(".work_warpper").append(workinfo);
		$(".work_warpper > div").click(function(event) {
		var $type = $(this).data('type');
		var $link = $(this).data('id');
			location.href = "work-"+ $type +  ".html?"+ $link;
			console.log()
		});
	};
	workMouseover();

	function workMouseover() {
		$(".work_warpper > div").hover(function() {
			$(this).find('.workdes').show();
		}, function() {
			$(this).find('.workdes').hide();
		});
	};
	$(".work_nav li a").bind('click', changeImg);

	function changeImg() {
		var link = $(this).html();
		$(".work_warpper > div").hide();
		if (link == "Design") {
			var worklength = $(".work_warpper > div").length;
			$(".design").fadeIn(100);
		} else if (link == "Digital") {
			var worklength = $(".work_warpper > div").length;
			$(".digital").fadeIn(100);
		} else if (link == "Display") {
			var worklength = $(".work_warpper > div").length;
			$(".display").fadeIn(100);
		} else {
			$(".work_warpper > div").show();
		};
	}
});