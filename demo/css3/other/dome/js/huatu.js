var cv=document.getElementById("cv");
	var exe=document.getElementById("cv").getContext("2d");
	exe.arc(200,200,100,0,360,false);
	var one=document.getElementById("one");
	var twe=document.getElementById("twe");
	var onoff=0;
	var c=1;
	document.onmousemove=function(){return false};
	function active(obj,type)
	{
		for(var i=0;i<obj.parentNode.childNodes.length;i++){
			
			if(one.childNodes[i].nodeType==1)one.childNodes[i].style.background="";
			if(twe.childNodes[i].nodeType==1)twe.childNodes[i].style.background="";
		}
		obj.style.background="yellow";
		
		if(type==1){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				exe.moveTo(x,y);
				onoff=1;
				cv.onmousemove=function(e){
					var e=e||event;
					var x1=e.clientX-cv.offsetLeft;
					var y1=e.clientY-cv.offsetTop;
					if(onoff){
					exe.lineTo(x1,y1);
					exe.stroke();
					}
				}
				cv.onmouseup=function(){
					onoff=0;
				}
				cv.onmouseout=function(){
					onoff=0;
				}
			}
		}
		if(type==2){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				onoff=1;
				if(onoff)exe.clearRect(x,y,c,c);
				
			}
			cv.onmousemove=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				if(onoff)exe.clearRect(x1,y1,c,c);
			}
				
				cv.onmouseup=function(){
					onoff=0;
				}
		}
		if(type==3){
			cv.onmousedown=function(){
				exe.beginPath();
				exe.rect(0,0,1000,500);
				exe.fill();
				exe.closePath();
				cv.onmouseup=function(){
					
				}
			}
		}
		if(type==4){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				var color="rgb("+exe.getImageData(x,y,1,1).data[0]+","+exe.getImageData(x,y,1,1).data[1]+","+exe.getImageData(x,y,1,1).data[2]+")";
				exe.fillStyle=color;
				exe.strokeStyle=color;
				cv.onmouseup=function(){
					
				}
			}
		}
		if(type==5){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				var text=window.prompt("请输入文字","");
				if(text)exe.fillText(text,x,y);
				cv.onmouseup=function(){
					
				}
			}
		}
		if(type==6){
			
				
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				var num=window.prompt("请输画布缩放百分比","")/100;
				if(num){cv.style.width=parseInt(1000*num)+"px";cv.style.height=parseInt(500*num)+"px"}
				cv.style.margin=(500-parseInt(500*num))/2+"px "+(1000-parseInt(1000*num))/2+"px"
			
		}
		if(type==7){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				exe.moveTo(x,y);
				cv.onmouseup=function(e){
				var e=e||event;
				x=e.clientX-cv.offsetLeft;
				y=e.clientY-cv.offsetTop;
				exe.lineTo(x,y);
				exe.stroke();
				exe.closePath();
				}
				
			}
		}
		if(type==8){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				cv.onmouseup=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				var radial=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
				exe.arc(x,y,radial,0,360,false)
				exe.stroke();
				exe.closePath();
				}
				
			}
		}
		if(type==9){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				cv.onmouseup=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				
				exe.rect(x,y,x1-x,y1-y)
				exe.stroke();
				exe.closePath();
				}
				
			}
		}
		if(type==10){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				exe.moveTo(x,y);
				cv.onmouseup=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				var num=x1-2*(x1-x)
				exe.lineTo(x1,y1);
				exe.lineTo(num,y1);
				exe.closePath();
				exe.stroke();
				
				}
				
			}
		}
		if(type==11){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				cv.onmouseup=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				var radial=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
				exe.arc(x,y,radial,0,360,false)
				exe.fill();
				exe.closePath();
				}
				
			}
		}
		if(type==12){
			cv.onmousedown=function(e){
				var e=e||event;
				var x=e.clientX-cv.offsetLeft;
				var y=e.clientY-cv.offsetTop;
				exe.beginPath();
				cv.onmouseup=function(e){
				var e=e||event;
				var x1=e.clientX-cv.offsetLeft;
				var y1=e.clientY-cv.offsetTop;
				
				exe.rect(x,y,x1-x,y1-y)
				exe.fill();
				exe.closePath();
				}
				
			}
		}
	}
	function actives(obj,type){
		for(var i=0;i<obj.parentNode.childNodes.length;i++){
		if(obj.parentNode.childNodes[i].nodeType==1)obj.parentNode.childNodes[i].style.background="";
	}
	obj.style.background="yellow";
		if(type==13){exe.lineWidth=1;c=1}
		if(type==14){exe.lineWidth=3;c=3}
		if(type==15){exe.lineWidth=5;c=5}
		if(type==16){exe.lineWidth=8;c=8}
	}
	function color(obj)
	{
		for(var i=0;i<obj.parentNode.childNodes.length;i++){
			if(obj.parentNode.childNodes[i].nodeType==1)obj.parentNode.childNodes[i].style.border="1px solid #000";
		}
		obj.style.border="1px solid red";
		exe.strokeStyle=obj.style.background;
		exe.fillStyle=obj.style.background;
	}
	function clearall(){
	exe.clearRect(0,0,1000,500);
	}