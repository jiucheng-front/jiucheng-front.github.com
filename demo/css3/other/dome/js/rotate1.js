$(function(){
	var face=["反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正","反","正"]
	var index=0;
	var index1=0;
	var num=0;
	var num1=[0,1,2,3,4,5,6,6,5,4,3,2,1,0];
	var x={r1:[1,3,3,5,5,7,7],r2:[2,2,4,4,6,6,8]};
	var timer=null;
	var run=null;
	var add=0;
function runs(){
	index+=180;
	$("#wrap .main").css({"transform":"rotateY("+index+"deg)",transition:"transform 1.8s","transition-timing-function":"linear"});
	timer=setInterval(function(){
		
		num++;
		if(num==14){num=1}
		
		add=num1[num];
		var num11=x.r1[add];
		var num22=x.r2[add];
		var face1=face[index1];
		index1++;
		
		$("#wrap .main .r2").css({"background":"url(img/scrolla"+num11+".jpg)"});
		$("#wrap .main .r1").css({"background":"url(img/scrolla"+num22+".jpg)"});
		console.log(face1+"-"+num11+"-"+num22+"-"+num);
		index+=180;
		$("#wrap .main").css({"transform":"rotateY("+index+"deg)",transition:"transform 1.8s","transition-timing-function":"linear"});
		console.log(index);
	},1800);
	};

runs();
	

})