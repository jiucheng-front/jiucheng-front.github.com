$(function(){
	var index=0,xdeg=0,ydeg=-10,xs=0,ys=0;
	//载入样式
	var timer=setInterval(function(){
		$("#wrap ul li").eq(index).css({
			transform:"rotateY("+index*360/11+"deg) translateZ(350px)",
			transition:"transform 0.2s"
		});
		index++;
		if(index>11)clearInterval(timer);
	},200);

	//鼠标拖拽效果
	$(document).mousedown(function(e){
		var x1 = e.clientX,y1 = e.clientY;
		$(this).bind("mousemove",function(e){
					xs = e.clientX - x1;
					ys = e.clientY - y1;
					x1 = e.clientX;
					y1 = e.clientY;
					xdeg += xs*0.3;
					ydeg -= ys*0.1;			
					$('#wrap').css('transform',"perspective(800px) rotateX("+ydeg+"deg) rotateY("+xdeg+"deg)");
		})
	});
	$(document).mouseup(function(){
		$(this).unbind("mousemove");
	});
})