$(function(){
	$(".btn").click(function(){
		var text=$("#send").val();
		$("#send").val("");
		for(var i=0;i<8;i++){	
			var $span=$("<span class='wenzi'>"+text+"</span>");
			var num1=parseInt(Math.random()*255);
			var num2=parseInt(Math.random()*255);
			var num3=parseInt(Math.random()*255);
			$span.css("color","rgb("+num1+","+num2+","+num3+")");
			$(".show").append($span);
			var h=$span.innerWidth();
			$span.css({top:500*Math.random()+"px",left:800+h+"px",border:"1px solid #fff"});
			$span.animate({left:-h},2000+Math.random()*5000,function(){
				this.remove();	
			});
		}	
	});
});