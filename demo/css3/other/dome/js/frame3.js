window.onload=function(){
		var exe=document.getElementById("cv").getContext("2d");
		document.getElementById("cv").width=document.body.clientWidth||document.documentElement.clientWidth;
		document.getElementById("cv").height=document.body.clientHeight||document.documentElement.clientHeight;
		document.getElementById("cv").style.background="#000";
		var img=document.getElementsByTagName("img");
		var imgarr=[];
		var friction=0.6;
		var spring=0.8;
		/*
		vx+= (targetx-changex)*spring;
		vy+= (targety-changey)*spring;
		changex+= (vx *= friction);//friction为摩擦力
		changey += (vy *=friction);
        cobj.beginPath();
		cobj.lineWidth=5;
		cobj.moveTo(startx,starty);
		cobj.lineTo(changex,changey);
		cobj.stroke();
		cobj.drawImage(img,changex-100,changey,200,200)
		*/
		for(var i=0;i<5;i++){
			var num=Math.random();
		var imgs={src:img[i],width:400,height:200,startX:100+i*400+100*num,startY:-200,changeX:100+i*400+100*num,changeY:-200,targetY:340+340*num,targetX:100+i*400+100*num,vx:0,vy:0};
		imgarr.push(imgs); 
		}
		//console.log(imgarr);
		setInterval(function(){
			exe.clearRect(0,0,2000,2000);
			for(var i=0;i<imgarr.length;i++){

				imgarr[i].vx+= (imgarr[i].targetX-imgarr[i].changeX)*spring;
				imgarr[i].vy+= (imgarr[i].targetY-imgarr[i].changeY)*spring;
				imgarr[i].changeX+= (imgarr[i].vx *= friction);//friction为摩擦力
				imgarr[i].changeY += (imgarr[i].vy *=friction);
				exe.beginPath();
				exe.strokeStyle="#fff";
				exe.lineWidth=5;
				exe.moveTo(imgarr[i].startX,imgarr[i].startY);
				exe.lineTo(imgarr[i].changeX,imgarr[i].changeY);
				exe.stroke();
				exe.drawImage(img[i],imgarr[i].changeX-200,imgarr[i].changeY,400,200)
			}
		},60)	
	}