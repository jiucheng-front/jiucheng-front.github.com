
  var rotateImg={
  	//初始化
  	init:function(){
  		this.createImg();
  		this.loadImg(this.bindEvent);
  	},
  	//添加dom
  	createImg:function(){
  		for(var i=1;i<77;i++){
			var newImg=document.createElement("img");
			newImg.src="img/miaov ("+i+").jpg";
			newImg.style.display="none";
			document.body.appendChild(newImg);
		}
  	},
  	//检测imgonload情况
  	loadImg:function(callback){
  		var aImg=document.getElementsByTagName('img'),num=1,_per=document.getElementById("_progress");
  		for(var i=0;i<aImg.length;i++){
  			aImg[i].onload=function(){
  				num++;
  				_per.value=parseInt(num/aImg.length*100);
  				if(num==aImg.length){
            _per.parentNode.style.display="none"
  					callback();
  				}
  			}
  		}
  	},
  	bindEvent:function(){
  		document.onmousedown=rotateImg.rotateFn1;
  	},
  	rotateFn1:function(e){
  		var e=e||event;
  		rotateImg.client_x=e.clientX-rotateImg.dis_x;
  		document.onmousemove=rotateImg.rotateFn2;
  		document.onmouseup=function(){
  			document.onmousemove=null;
			document.onmouseup=null;
  		}
  	},
  	rotateFn2:function(e){
  		var e=e||event;
  		var dis_x=rotateImg.client_x-e.clientX;
  		rotateImg.dis_x=parseInt(-dis_x/10);
  		var aImg=document.getElementsByTagName('img');
  		var l=null;
  		if(rotateImg.dis_x>0){
  			l=Math.ceil(rotateImg.dis_x/77)*77-rotateImg.dis_x;
  		}else{
  			l=-(Math.floor(-rotateImg.dis_x/77)*77+rotateImg.dis_x);
  		}
	  		rotateImg.praveImg.style.display='none';
	  		aImg[l].style.display='block';
	  		rotateImg.praveImg=aImg[l];
  		
  		return false;
  	},
  	client_x:0,
  	dis_x:0,
  	praveImg:document.getElementsByTagName('img')[0],
  };
  rotateImg.init();