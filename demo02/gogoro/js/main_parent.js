$(function(){
	// 鼠标进入导航下拉框的显示与隐藏
	$(".top_btn").hover(function(){
		$(this).find(".will_list").css({
			display:"block"
		});
		$(this).find("a").addClass("will_blue");
	},function(){
		$(this).find(".will_list").css({
			display:"none"
		});
		$(this).find("a").removeClass("will_blue");
	});

	// 页面滚动导航现实与隐藏
	$(document).scroll(function(){
		if($(document).scrollTop()>50){
			$(".navbar").fadeOut(1000);
		}else{
			$(".navbar").fadeIn(500);
		}
	});
	// 按钮点击页面切换
	$('.section_btn li').click(function(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
			}
		var n=$(this).index();		
		if($(this).siblings().hasClass("selected")){
			$(this).addClass("selected").siblings().removeClass("selected");
			$('.main_parent').filter(":visible").fadeOut(500).parent().children().eq(n).fadeIn(1000);
		}
		// console.log($(document).scrollTop());
	});
	// 手机端语言切换
	$(".language_btn").click(function(){
		if($(".language_list").css("display")=="none"){
			$(".language_list").fadeIn(500);
		}else{
			$(".language_list").fadeOut(1000);
		}
	});
});