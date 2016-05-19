	var cv=document.getElementById("cv");
	var day=document.getElementById("day");
	var x1=document.getElementById("x1");
	var nums=document.getElementById("num");
	cv.style.background="#333366";
	var exe=cv.getContext("2d");
	var index=0;
	var bs=1;
	x1.onclick=function(){
		bs++;
	}
	var margin_left=(document.body.clientWidth-cv.offsetWidth)/2;
	cv.style.margin="0 "+margin_left+"px";
run();

function run(){
	exe.clearRect(0,0,1000,1000)
	for(var i=0;i<8;i++){
	var num=i*60;
	exe.beginPath();
	exe.arc(500,500,num,0,360,false);
	exe.lineWidth=2;
	exe.strokeStyle="#ffffff";
	exe.stroke();
	exe.closePath();
	}
	exe.beginPath();
	exe.arc(500,500,20,0,360,false);
	var sunc=exe.createRadialGradient(500,500,0,500,500,20);
	sunc.addColorStop(1,"#f90");
	sunc.addColorStop(0,"#f00");
	exe.fillStyle=sunc;
	exe.fill();
	exe.closePath();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/87*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-60,10,0,360,false);
	var c1=exe.createRadialGradient(0,-60,0,0,-60,10);
	c1.addColorStop(0,"#78B1E8");
	c1.addColorStop(1,"#050C12");
	exe.fillStyle=c1;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/224*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-120,10,0,360,false);
	var c2=exe.createRadialGradient(0,-120,0,0,-120,10);
	c2.addColorStop(0,"#CEC9B6");
	c2.addColorStop(1,"#76422D");
	exe.fillStyle=c2;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-180,10,0,360,false);
	var c3=exe.createRadialGradient(0,-180,0,0,-180,10);
	c3.addColorStop(0,"#C0A48E");
	c3.addColorStop(1,"#322222");
	exe.fillStyle=c3;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/686*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-240,10,0,360,false);
	var c3=exe.createRadialGradient(0,-240,0,0,-240,10);
	c3.addColorStop(0,"#F7F9E3");
	c3.addColorStop(1,"#5C4533");
	exe.fillStyle=c3;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/4332*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-300,10,0,360,false);
	var c4=exe.createRadialGradient(0,-300,0,0,-300,10);
	c4.addColorStop(0,"#A7E1E5");
	c4.addColorStop(1,"#19243A");
	exe.fillStyle=c4;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/10759*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-360,10,0,360,false);
	var c5=exe.createRadialGradient(0,-360,0,0,-360,10);
	c5.addColorStop(0,"#0661B2");
	c5.addColorStop(1,"#1E3B73");
	exe.fillStyle=c5;
	exe.fill();
	exe.closePath();
	exe.restore();

	exe.save();
	exe.translate(500,500);
	exe.rotate(index*360/30799*Math.PI/180);
	exe.beginPath();
	exe.arc(0,-420,10,0,360,false);
	var c6=exe.createRadialGradient(0,-420,0,0,-420,10);
	c6.addColorStop(0,"#A69697");
	c6.addColorStop(1,"#5C3E40");
	exe.fillStyle=c6;
	exe.fill();
	exe.closePath();
	exe.restore();
	day.innerHTML="第"+parseInt(index/360)+"天";
	nums.innerHTML="X"+bs;
	index+=bs;
}
setInterval(
run
,20)