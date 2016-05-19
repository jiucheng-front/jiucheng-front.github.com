$(function(){
			var index=0;
			var w=$(window).width()/2;
			var h=$(window).height()/2;
			var b=$(window).height()/40;
			var a=$(window).width()/40;
			var onoff=true;
	$("#wrap").css({"marginTop":(2*h-600)/2});
	for(var i=0;i<24;i++)
		{	var num=(Math.random()*40-20);			
			var x=i%6;
			var y=parseInt(i/6);
			var num1=(h+(y-2)*125+(2*y-3)*b);
			var num2=(w+(x-3)*125+(2*x-5)*a);
			$("#wrap ul li").eq(i).css({"transform":"rotate("+num+"deg)",
				"top":num1+"px",
				"left":num2+"px"
			});
		}
	$("#wrap ul li").click(function(){
		index=$(this).index();
		if(onoff){
			onoff=false;
			$("#wrap ul li").find("img").css({
				"margin":"0",
				"transition":"margin 0.5s"
			}).animate({width:"125px",height:"125px"},500,function(){for(var i=0;i<24;i++)
		{	$("#wrap .left").fadeIn(1500);
			$("#wrap .right").fadeIn(1500);	
			var x=i%6;
			var y=parseInt(i/6);
			$("#wrap ul li").eq(i).css({"transform":"rotate(0deg)",
				transition:"transform 0.5s,top 0.5s,left 0.5s",
				"backgroundImage":"url(img/img/big/"+(index+1)+".jpg)",
				backgroundPosition:(-750/6)*x+"px "+(-500/4)*y+"px",
				"box-shadow":"none",
				"top":h+(y-2)*125,
				"left":w+(x-3)*125
			});}}).fadeOut(500);}
		else{
		onoff=true;
		$("#wrap ul li").find("img").css({
				"margin":"5px",
				"transition":"margin 0.5s"
			}).animate({width:"115px",height:"115px"},500,function(){for(var i=0;i<24;i++)
		{	$("#wrap .left").fadeOut(1500);
			$("#wrap .right").fadeOut(1500);	
			var num=(Math.random()*40-20);			
			var x=i%6;
			var y=parseInt(i/6);
			var num1=(h+(y-2)*125+(2*y-3)*b);
			var num2=(w+(x-3)*125+(2*x-5)*a);
			$("#wrap ul li").eq(i).css({"transform":"rotate("+num+"deg)",
				"backgroundImage":"",
				transition:"transform 0.5s,top 0.5s,left 0.5s",
				"box-shadow":"0 0 5px red",
				"top":num1+"px",
				"left":num2+"px"
			});}}).fadeIn(500);
		}
		
	});
	$("#wrap .left").click(function(){
		if(index>0)index--;
		var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		var timer=setInterval(function(){
			var numb=parseInt(arr.length*Math.random());
			$("#wrap ul li").eq(arr[numb]).css({
				"backgroundImage":"url(img/img/big/"+(index+1)+".jpg)"
			
			});
			arr.splice(numb,1);
			console.log(arr+"-"+numb);
		if(arr==""){clearInterval(timer)};
		},20)
	});
		$("#wrap .right").click(function(){
		if(index<23)index++;
		var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		var timer=setInterval(function(){
			var numb=parseInt(arr.length*Math.random());
			$("#wrap ul li").eq(arr[numb]).css({
				"backgroundImage":"url(img/img/big/"+(index+1)+".jpg)"
			
			});
			arr.splice(numb,1);
			console.log(arr+"-"+numb);
		if(arr==""){clearInterval(timer)};
		},20)
	});
});