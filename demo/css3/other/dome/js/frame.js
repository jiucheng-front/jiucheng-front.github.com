$(function(){
	//变量声明，用来控制开关和每一个图片对应的index
	var onoff=true,index=0;
	//左按钮事件绑定	
	$("#wrap .left").click(function(){
		index--;			
		if(index<0){
			index=0;
			onoff=false;
		}else{
			onoff=true
		}
		if(onoff){   
			onoff=false;
			$("#wrap .main ul").eq(index).css({"display":"block"}).siblings().hide();		
			returns();
		}
	});
	//右按钮事件绑定
	$("#wrap .right").click(function(){
		index++;
		if(index>4){
			index=4;
			onoff=false;
		}else{
			onoff=true;
		}
		if(onoff){	
			$("#wrap .main ul").eq(index).css("display","block").siblings().hide();		
			runs();
		}
	});
	//next动画效果
	function runs(){
		var add=15;
		$("#wrap .main ul").eq(index).css({"backgroundImage":"url(img/f"+(index+1)+".jpg)"});
		for(var i=0;i<70;i++){
			onoff=false;var x=i%10;
			var y=parseInt(i/10);
			$("#wrap .main ul").eq(index).children().eq(i).css({
				background:"url(img/f"+index+".jpg)",
				"backgroundPosition":-x*57+"px "+y*-60+"px",
				"transform":"translate(0px,0px) rotateX(00deg)",
				"opacity":"1"
			});
		}
		var timer=setInterval(function(){
				for(var i=0;i<10;i++){
					var x=9-i;
					for(var j=0;j<7;j++){
						var y=6-j;
						if(x+y==add){$("#wrap .main ul").eq(index).children().EQ(x,y).css({
							"transform":"translate(-50px,-70px) rotateX(720deg)","transition":"transform 1s"
						}).animate({opacity:0},1000);}
					}
				}	
			add--;
			if(add==-1){
				clearInterval(timer);
				onoff=true;
			}
		},100);		
	}
	//prev动画效果
	function returns(){
		var add=0;
		$("#wrap .main ul").eq(index).css({
			"backgroundImage":"url(img/f"+(index+2)+".jpg)"
		});
		for(var i=0;i<70;i++){
			var x=i%10;
			var y=parseInt(i/10);
			$("#wrap .main ul").eq(index).children().eq(i).css({background:
				"url(img/f"+(index+1)+".jpg)",
				"backgroundPosition":-x*57+"px "+y*-60+"px",
				"transform":"translate(-50px,-70px) rotateX(720deg)",
				"opacity":"0"
			});
		}
		var timer=setInterval(function(){
					for(var i=9;i>-1;i--){
						var x=9-i;
						for(var j=6;j>-1;j--){
							var y=6-j;
							if(x+y==add){$("#wrap .main ul").eq(index).children().EQ(x,y).css({
								"transform":"translate(0px,0px) rotateX(0deg)","transition":"transform 1s"
							}).animate({opacity:1},1000);console.log(onoff);}
						}
					}	
				add++;
				if(add==16){
					clearInterval(timer);
					onoff=true;
				}
				
		},100);		
	}
});
$.fn.extend({
	EQ:function(x,y){
	return $(this).eq(x+y*10);
	}
});

