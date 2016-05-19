(function(){
	alert(1);
	var oWrap=document.getElementById("wrap");
		var oRight=document.getElementById("right");
		var oLeft=document.getElementById("left");
		var oDiv=oWrap.getElementsByTagName("div");
		var index=0;
		var index1=0;
		for(var i=0;i<oDiv.length;i++){
				oDiv[i].style.backgroundImage="url(img/fj"+(i+1)+".jpg)"
				oDiv[i].style.transform="rotateX(0deg) rotateY("+i*360/oDiv.length+"deg) translateZ(600px)";
				oDiv[i].style.opacity="0.3";
			}
		oDiv[index].style.opacity="1";
		oRight.onclick=function(){
			oDiv[index1].style.opacity="0.3";
			index++;index1++;
			if(index1>8)index1=0;
						
			oDiv[index1].style.opacity="1";
			oWrap.style.transform="perspective(9000px) rotateX(-20deg) rotateY("+-index*40+"deg)";
			}
		oLeft.onclick=function(){
			oDiv[index1].style.opacity="0.3";
			index--;index1--;
			if(index1<0)index1=8;
			oWrap.style.transform="perspective(9000px) rotateX(-20deg) rotateY("+-index*40+"deg)";					
			oDiv[index1].style.opacity="1";
			}
		}
})()

		