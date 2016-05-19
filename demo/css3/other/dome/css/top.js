document.writeln("<div class=\"fixbg\"></div>");
document.writeln("<div class=\"search\">");
document.writeln("<div class=\"searchMain\">");
document.writeln("<input name=\"\" type=\"text\">");
document.writeln("<input class=\"searchBtn\" name=\"\" type=\"button\">");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<div class=\"logo\">");
document.writeln("<div class=\"logoMian\">");
document.writeln("<div  class=\"logoImgs\"><img src=\"images/logo.png\"></div>");
document.writeln("<div class=\"topbox fr\">");
document.writeln("<span id=\"searchslide\"><img src=\"images/top1.png\"></span>");
document.writeln("<span><img src=\"images/top2.png\"></span>");
document.writeln("<span id=\"navslide\"><img src=\"images/top3.png\"></span>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<nav>");
document.writeln("<ul>");
document.writeln("<li>");
document.writeln("<a class=\"navfar\" href=\"javascript:void(0)\">子公司业务</a>");
document.writeln("<div class=\"navchild\" style=\"display:block;\">");
document.writeln("<a href=\"#\">集团战略</a>");
document.writeln("<a href=\"#\">经营业绩</a>");
document.writeln("<a href=\"#\">组织结构</a>");
document.writeln("<a href=\"#\">管理团队</a>");
document.writeln("<a href=\"#\">发展历史</a>");
document.writeln("<a href=\"#\">事业部子公司</a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<a class=\"navfar\" href=\"javascript:void(0)\">走近豪迈</a>");
document.writeln("<div class=\"navchild\">");
document.writeln("<a href=\"#\">集团战略</a>");
document.writeln("<a href=\"#\">经营业绩</a>");
document.writeln("<a href=\"#\">组织结构</a>");
document.writeln("<a href=\"#\">管理团队</a>");
document.writeln("<a href=\"#\">发展历史</a>");
document.writeln("<a href=\"#\">事业部子公司</a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<a class=\"navfar\" href=\"javascript:void(0)\">投资并购</a>");
document.writeln("<div class=\"navchild\">");
document.writeln("<a href=\"#\">集团战略</a>");
document.writeln("<a href=\"#\">经营业绩</a>");
document.writeln("<a href=\"#\">组织结构</a>");
document.writeln("<a href=\"#\">管理团队</a>");
document.writeln("<a href=\"#\">发展历史</a>");
document.writeln("<a href=\"#\">事业部子公司</a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<a class=\"navfar\" href=\"javascript:void(0)\">职业发展</a>");
document.writeln("<div class=\"navchild\">");
document.writeln("<a href=\"#\">集团战略</a>");
document.writeln("<a href=\"#\">经营业绩</a>");
document.writeln("<a href=\"#\">组织结构</a>");
document.writeln("<a href=\"#\">管理团队</a>");
document.writeln("<a href=\"#\">发展历史</a>");
document.writeln("<a href=\"#\">事业部子公司</a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln("<li>");
document.writeln("<a class=\"navfar\" href=\"javascript:void(0)\">集团动态</a>");
document.writeln("<div class=\"navchild\">");
document.writeln("<a href=\"#\">集团战略</a>");
document.writeln("<a href=\"#\">经营业绩</a>");
document.writeln("<a href=\"#\">组织结构</a>");
document.writeln("<a href=\"#\">管理团队</a>");
document.writeln("<a href=\"#\">发展历史</a>");
document.writeln("<a href=\"#\">事业部子公司</a>");
document.writeln("</div>");
document.writeln("</li>");
document.writeln("</ul>");
document.writeln("</nav>");




$(function(){
	
 window.onload=window.onresize=function(){
	 	var tops=$(".logo").width()
	$(".logo").css("left",'50%');
	$(".logo").css("marginLeft",-tops/2+'px'); 
 }
	
	$("#searchslide").click(function(){
			$(".search").animate({top:"0"},"fast");
			$(".fixbg").fadeIn();
	})

	$(".searchBtn,.fixbg").click(function(){
			$(".search").animate({top:"-55px"},"fast");
			$(".fixbg").fadeOut();
	})
	
	$(".navfar").click(function(){
		$(this).next().slideToggle("fast").parent().siblings().children(".navchild").slideUp("fast");
	})	
	$("#navslide").click(function(){
	 	$(this).toggleClass("on")
		if($(this).hasClass("on")){
			$("nav").animate({left:"67%"},"fast")	
			$(".fixbg").fadeIn();
		}else{
			$(".fixbg").fadeOut();
			$("nav").animate({left:"100%"},"fast")		
		}
	})
	$(".fixbg").click(function(){
			$(".fixbg").fadeOut();
			$("nav").animate({left:"100%"},"fast")	
	})
	
		$(".sectionB-nav li").click(function(){
		 $(this).addClass("hover").siblings().removeClass("hover")	
	     $(".sectionBChild").eq($(this).index()).show().siblings().hide();
	})
})