function LightBox_img(classname){
	this.window_height=$(window).height();
	this.window_width=$(window).width();
	this.btn_height=this.window_height/2-35;
	this.str="<div class='lightBox_wrap' id='lightBox_main'><span class='lightBox_left lightBox_span'><</span><p>1/9</p><span class='lightBox_right lightBox_span'>></span><ul class='lightBox_ul' id='main_ul'></ul></div>";
	this.x=0;
	this.onoff=0;
	this.move_x=0;
	this.ul_left=0;
	this.inum=$("."+classname).size();
	this.arr=[];
	var that=this;
	//将所有标记的img添加到数组当中
	for(var i=0;i<this.inum;i++){
		var w=$("."+classname).eq(i).width();
		var h=$("."+classname).eq(i).height();
		var src=$("."+classname).eq(i).attr("src");
		this.arr[i]={"width":w,"height":h,"src":src};
		$("."+classname).eq(i).attr("index",i)
	}
	this.addDom();
	//图片点击时图片廊出现
	$("."+classname).click(function(){
		$("span.lightBox_left").animate({"left":"10%"},500)
		$("span.lightBox_right").animate({"right":"10%"},500)
		var img_index=Number($(this).attr("index"));
		$(".lightBox_left").show();
		$(".lightBox_right").show();
		if(img_index==0)$(".lightBox_left").hide();
		if(img_index==that.arr.length-1)$(".lightBox_right").hide();
		$("ul.lightBox_ul").attr("index",img_index)
		$(".lightBox_wrap").fadeIn();
		$("ul.lightBox_ul").css("left",- img_index*that.window_width)
		$(".lightBox_wrap p").text(img_index+1+"/"+that.arr.length);

	});
	//图片廊图片点击时消失
	$("ul.lightBox_ul .cond img").click(function(){
		$("span.lightBox_left").animate({"left":-66},500)
		$("span.lightBox_right").animate({"right":-66},500)
		$(".lightBox_wrap").fadeOut	();
	});
	//左右按钮事件绑定
	$(".lightBox_right").bind("touchend",fnR);
	$(".lightBox_left").bind("touchend",fnL);
	$(".lightBox_right").bind("click",fnR);
	$(".lightBox_left").bind("click",fnL);
	//滑动系列事件绑定
	var  main=document.getElementById("lightBox_main");
	var  ul=document.getElementById("main_ul");
	main.addEventListener("touchstart",fn1,false)
	main.addEventListener("touchmove",fn2,false)
	main.addEventListener("touchend",fn3,false)
	//next函数
	function fnR(e){
		e.preventDefault();
		e.stopPropagation();
		var index=$("ul.lightBox_ul").attr("index");
		index++;
		$("ul.lightBox_ul").attr("index",index)
		if(index==that.arr.length-1){
			$(this).hide();
			$(".lightBox_left").show();
			$("ul.lightBox_ul").animate({"left":-index*that.window_width},500)
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
		}
		if(index!=that.arr.length-1){
			$(this).show();
			$(".lightBox_left").show();
			$("ul.lightBox_ul").animate({"left":-index*that.window_width},500)
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
		}
	}
	//prev函数
	function fnL(e){
		e.preventDefault();
		e.stopPropagation();
		var index=$("ul.lightBox_ul").attr("index");
		index--;
		$("ul.lightBox_ul").attr("index",index)
		if(index==0){
			$(this).hide();
			$(".lightBox_right").show();
			$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
		}
		if(index!=0){
			$(this).show();
			$(".lightBox_right").show();
			$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
		}
	}
	//touchstart事件
	function fn1(e){
		that.x=e.touches[0].pageX;
		ul.lightBox_ul_left=$("ul.lightBox_ul").position().left
	}
	//touchmove事件
	function fn2(e){
		e.preventDefault();

		that.move_x=e.touches[0].pageX-that.x;
		if(-that.window_width/6<that.move_x&&that.move_x<that.window_width/6)that.onoff=0;
		if(that.move_x>that.window_width/6)that.onoff=1;
		if(that.move_x<-that.window_width/6)that.onoff=2;
		$("ul.lightBox_ul").css('left',ul.lightBox_ul_left+that.move_x)
	}
	//touchend事件
	function fn3(e){
		var index=$("ul.lightBox_ul").attr("index");
		if(that.onoff==0||index==0||index==that.arr.length-1){
			$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
		}
		if(index!=0&&that.onoff==1){
			index--;
			$("ul.lightBox_ul").attr("index",index)
			if(index==0){
				$(".lightBox_left").hide();
				$(".lightBox_right").show();
				$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			}
			if(index!=0){
				$(".lightBox_left").show();
				$(".lightBox_right").show();
				$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			}
			that.onoff=0;
		}
		if(index!=that.arr.length-1&&that.onoff==2){

			index++;
			$("ul.lightBox_ul").attr("index",index)
			if(index==that.arr.length-1){
				$(".lightBox_right").hide();
				$(".lightBox_left").show();
				$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			}
			if(index!=that.arr.length-1){
				$(".lightBox_right").show();
				$(".lightBox_left").show();
				$("ul.lightBox_ul").stop().animate({"left":-index*that.window_width},500)
				$(".lightBox_wrap p").text(index+1+"/"+that.arr.length);
			}
			that.onoff=0;
		}
		main.removeEventListener("touchend",fn2,false); 
		main.removeEventListener("touchmove",fn3,false);
	}
}
LightBox_img.prototype={
	//添加图片廊dom
	addDom:function(){
		$("body").append(this.str);
		$("span.lightBox_left").css({"marginTop":this.btn_height,"left":-66});
		$("span.lightBox_right").css({"marginTop":this.btn_height,"right":-66});
		$(".lightBox_wrap").css({"width":this.window_width,"height":this.window_height});
		for(var i=0;i<this.arr.length;i++){
			$("ul.lightBox_ul").append("<li class='cond'><img src="+this.arr[i].src+" /></li>")
		}
		$("ul.lightBox_ul").css({"width":this.window_width*this.arr.length})
		$("ul.lightBox_ul li").css({"width":this.window_width,"height":this.window_height})
		$("ul.lightBox_ul").append("<div style='clear:both'></div>");

	},

}
