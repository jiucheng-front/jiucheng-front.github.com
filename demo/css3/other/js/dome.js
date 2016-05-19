(function(){
	//变量定义
	var index=0,xdeg=0,onoff=0,ydeg=0,wh=document.documentElement.clientWidth,xs=0,
	src=["3dframe.html","frame.html","frame1.html","frame2.html","frame3.html",
	"index.html","tk.html","game1.html","xinghe.html","huatu.html","frame3.html",
	"360show.html","hitbee.html","article.html","index2.html","zhongkao.html","lightbox.html"],
	ys=0;
	
	//事件绑定
	$(".s1").click(function(){
		style1();
	});
	$(".s2").click(function(){
		style2();
	});
	$(".s3").click(function(){
		style3();
	});
	$(document).mousedown(function(e){
		var x1 = e.clientX;
		var y1 = e.clientY;
		$(this).bind("mousemove",function(e){
			xs = e.clientX - x1;
			ys = e.clientY - y1;					
			x1 = e.clientX;
			y1 = e.clientY;
			xdeg += xs*0.3;
			ydeg += ys*0.3;	
			$(".wrap").css({
				transform:"perspective(1000px) rotateX("+-ydeg+"deg) rotateY("+xdeg+"deg) translateZ("+index+"px)"
			})
		})
		return false;
	})
	$(document).mouseup(function(){
		$(this).unbind("mousemove");
	})
	$(".div1").click(function(){
		if($(this).text()=="null"){
			alert("对不起，该项有待补充，请选择其他非null模块，谢谢")
		}else{
			var index=$(this).index();
			window.open("dome/"+src[index],"target" )//新窗口打开当前点击的网页
		};
	});

	//环状样式
	function style2(){
		$(".div1").each(function(i){
			$(this).css({
				transform:"rotateX(0deg) rotateY("+i*18+"deg) translateY("+(i*8-100)+"px) translateZ(300px)"
			})
		})
	}
	//球状样式
	function style3(){
		$(".div1").each(function(i){
			if(i<8){
				$(this).css({
					transform:"rotateX("+i*360/8+"deg) rotateY(0deg) translateZ(300px)"
				})
			}else if(i<15){
				$(this).css({
					transform:"rotateX("+i*360/7+"deg) rotateY(30deg) translateZ(300px)"
				})
			}else if(i<21){
				$(this).css({
					transform:"rotateX("+i*60+"deg) rotateY(60deg) translateZ(300px)"
				})
			}else if(i<28){
				$(this).css({
					transform:"rotateX("+i*360/7+"deg) rotateY(-30deg) translateZ(300px)"
				})
			}else if(i<34){
				$(this).css({
					transform:"rotateX("+i*60+"deg) rotateY(-60deg) translateZ(300px)"
				})
			}else if(i==34){
				$(this).css({
					transform:"rotateX(0deg) rotateY(-90deg) translateZ(300px)"
				})
			}else if(i==35){
				$(this).css({
					transform:"rotateX(0deg) rotateY(90deg) translateZ(300px)"
				})
			}
		})	
	}
	//块状样式
	function style1(){
		$(".div1").each(function(i){
				var d=-150;
				var x=i%3;
				var y=parseInt(i/3)%3;
				var z=parseInt(i/9);
				$(this).css({
					transform:"translateX("+(x*110-110)+"px) translateY("+(y*110-110)+"px) translateZ("+(d+z*100)+"px)"
				})
				// console.log(i);//0-35
		})	
	}	
	//初始样式
	(function style4(){	
			$("body,html").animate({"scrollLeft":"0px"},500);
			$(".div1").each(function(i){
				var x=1000;
				var y=600;
				var z=400;
				$(this).css({
					transform:"rotateX(0deg) rotateY(0deg) translateX("+(500-Math.random()*x)+"px) translateY("+(300-Math.random()*y)+"px) translateZ("+(200-Math.random()*z)+"px)",
					"transition":"transform "+Math.random()*3+"s"
				})
			})
	})();
})();
	
