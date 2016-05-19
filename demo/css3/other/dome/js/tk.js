$(function(){
	document.onmousewheel = function(){return false};
	var index=0;
	var wh=$("body").height();
	var Time=new Date();
	$(document).scrollTop(0);
	$(document).mousewheel(function(event, delta, deltaX, deltaY){
		
		if(new Date()-Time>2000){
		Time=new Date();
		delta==-1?index++:index--;
		if(index<0)index=0;
		if(index>6)index=6;
		$('.part').eq(index).siblings().removeClass('on');
		$('body,html').animate({"scrollTop":wh*index+"px"},1000,function(){$("#wrap .part").eq(index).addClass("on");console.log(index);});
		$("#fixd li").eq(index).addClass("hover").siblings().removeClass();
		}
		
		
	});
	$("#fixd li").click(function(){

		index=$(this).index();
		$('.part').eq(index).siblings().removeClass('on');
		$("#fixd li").eq(index).addClass("hover").siblings().removeClass();
		$('body,html').animate({"scrollTop":wh*index+"px"},1000,function(){$("#wrap .part").eq(index).addClass("on");});
	});	

})

 