function slideSwitch(idBig,idSmall,prev,next,numVar,pWidth){
	//
	function G(s){
		return document.getElementById(s);
	}
	//
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	//
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}
    /***********/
	var oPic = G(idBig);
	var oList = G(idSmall);
	var oPrev = G(prev);
	var oNext = G(next);
	var oSwitch = G("exchange");
console.log(oSwitch);
console.log(idBig,idSmall,prev,next,numVar,pWidth);
	var oPicLi = oPic.getElementsByTagName("li");
	var oListLi = oList.getElementsByTagName("li");
	var len1 = oPicLi.length;
	var len2 = oListLi.length;
	var oPicUl = oPic.getElementsByTagName("ul")[0];
	var oListUl = oList.getElementsByTagName("ul")[0];
	var w1 = oPicLi[0].offsetHeight;
	var w2 = oListLi[0].offsetHeight;
	oPicUl.style.height = w1 * len1 + "px";//下面ul的高度
	oListUl.style.height =(w2 + pWidth )*len2 + "px";
	var index = 0;
	var num = numVar;
	var num2 = Math.ceil(num / 2);
	//
	function Change(){
		Animate(oPicUl, {top: - index * w1});
		if(index < num2){
			Animate(oListUl, {top: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {top: - (index - num2 + 1) * (w2+pWidth)});
		}else{
			Animate(oListUl, {top: - (len2 - num) * (w2+pWidth)});
		}
		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "cur";
			}
		}
	}
//向右按钮
	oNext.onclick = function(){
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}
//向前按钮
	oPrev.onclick = function(){
		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}
//
	if(oSwitch){
		oSwitch.onclick=function(){
		index = (index>4) ? index%4 : index+=4;
		index = index == len2 ? 0 : index;
		Change();
			}
		}
	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;
			Change();
		}
	}

	

}

