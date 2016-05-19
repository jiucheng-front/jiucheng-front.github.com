function frame2(obj){
	this.wrap=$("#"+obj.wrap);
	this.arr=[obj.img1,obj.img2,obj.img3,obj.img4]
	this.split=obj.split;
	this.times=obj.times;
	this.id=obj.wrap;
	this.creatDom();
	var that=this;
	window.onload=function(){
		that.setTimer();
	}
	
	
}
frame2.prototype={
	creatDom:function(){
		var width=this.wrap.width();
		var height=this.wrap.height();
		this.wrap.css({
			"transform-style":"preserve-3d",
			"transform":"perspective(800px) rotateX(0deg) rotateY(0deg)"
		});
		if(this.wrap.css("position")=="static"){
			this.wrap.css("position","relative")
		};
		for(var i=0;i<this.split;i++){
			var $div=$("<div class='_con1'></div>");
			$div.css({
				width:width/this.split,
				height:height,
				position:"absolute",
				top:0,
				left:i*width/this.split,
				transform:"perspective(0px) rotateX(0deg) rotateY(0deg) translateZ(0)",
				transformStyle:"preserve-3d",
				"transition":"transform 0.4s"
			})
			for(var j=0;j<4;j++){
				$img=$("<div></div>")
				$img.css({
					position:"absolute",
					top:0,
					left:0,
					padding:"0 1px",
					width:width/this.split,
					height:height,
					background:"url("+this.arr[j]+") no-repeat",
					backgroundSize:width+"px "+height+"px",
					backgroundPosition:-i%this.split*width/this.split+"px 0",
					transform:"rotateX("+j*90+"deg) rotateY(0deg) translateZ("+height/2+"px)"
				});
				$div.append($img);
			}
			this.wrap.append($div);
		}
	},
	setTimer:function(){
		var that=this;
		var deg=0;
		var index=0;
		setTimeout(function(){
			deg-=90;
			var Timer=setInterval(function(){
				$("#"+that.id+" div._con1").eq(index).css({transform:"perspective(0px) rotateX("+deg+"deg) rotateY(0deg) translateZ(0)",});
				index++;
				if(index==that.split){
					index=0;
					clearInterval(Timer);
				}
			},40)
			var Timer1=setInterval(function(){
				deg-=90;
				var Timer=setInterval(function(){
					$("#"+that.id+" div._con1").eq(index).css({transform:"perspective(0px) rotateX("+deg+"deg) rotateY(0deg) translateZ(0)",});
					index++;
					if(index==that.split){
						index=0;
						clearInterval(Timer);
					}
				},40)
			},40*that.split+that.times)
		},that.times)
	}
}