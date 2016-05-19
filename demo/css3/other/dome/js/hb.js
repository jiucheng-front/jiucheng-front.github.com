window.onload=function(){
			var btn=document.getElementById("star");
			btn.onclick=function(){
				btn.style.display="none";
				game.exe("main",0);
				
			}
		}
		var game={
		 exe:function(id,index){
			this.id=document.getElementById(id);
			this.createScore();
			this.createBee(index);
			this.createAir();
			this.beemove(index);
			
		 },
		 createScore:function(){
			var score=document.createElement("div");
			score.id="score";
			score.innerHTML="积分："+this.point;
			this.score=score;
			this.id.appendChild(score);
		 },
		index:0,
		point:0,
		guanka:[{
			size:[10,6],
			lay:[
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1",
			"lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1",
			"lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1"
			],
			speendx:10,
			speendy:10,
			time:2000
		},{
			size:[10,6],
			lay:[
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2",
			"lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1","lv1"
			],
			speendx:10,
			speendy:15,
			time:1500
		},{
			size:[10,6],
			lay:[
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3","lv3",
			"lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2","lv2"
			],
			speendx:10,
			speendy:20,
			time:1000
		}],
		createBee:function(index){
			if(this.bee){
			this.id.removeChild(this.bee);
			clearInterval(this.bee.timer1);
			clearInterval(this.bee.timer2);
			}
			var bees=document.createElement("div");
			bees.id="bee";
			bees.style.width=this.guanka[index].size[0]*40+"px";
			bees.style.height=this.guanka[index].size[1]*28+"px";
			bees.style.top=20+"px";
			bees.style.left=(800-this.guanka[index].size[0]*40)/2+"px";
			this.id.appendChild(bees);
			for(var i=0;i<this.guanka[index].lay.length;i++){
				var bee=document.createElement("div");
				var type=this.guanka[index].lay[i];
				bee.style.left=i%10*40+"px";
				bee.style.top=parseInt(i/10)*40+"px";
				bee.blood=this.beeAttr[type].blood;
				bee.speed=this.beeAttr[type].speed;
				bee.score=this.beeAttr[type].score;
				bee.className=this.beeAttr[type].style;
				this.bee=document.getElementById("bee");
				this.bee.appendChild(bee);
			}
			this.mf=this.bee.getElementsByTagName("div");
		},
		createAir:function(){
			var air=document.createElement("div");
			air.className="air";
			air.style.left=754/2+"px"
			this.id.appendChild(air);
			this.air=air;
			this.airevent();
		},
		beeAttr:{
			lv1:{style:"bee1",blood:1,speed:5,score:1},
			lv2:{style:"bee2",blood:2,speed:6,score:2},
			lv3:{style:"bee3",blood:3,speed:7,score:3}
		},
		beemove:function(index){
			var This=this;
			var speed=This.guanka[index].speendx;
			this.bee.timer1=setInterval(function(){
				if(This.bee.offsetLeft>=800-This.bee.offsetWidth){speed=-speed;This.bee.style.top=This.bee.offsetTop+This.guanka[index].speendy+"px";};
				if(This.bee.offsetLeft<=0){speed=-speed;This.bee.style.top=This.bee.offsetTop+This.guanka[index].speendy+"px";};
				This.bee.style.left=This.bee.offsetLeft+speed+"px";
				
				
				
			},400)
			this.bee.timer2=setInterval(function(){
				This.onemove();
			},This.guanka[index].time);
		},
		airevent:function(){
			var This=this;
			var timer=null;
			var p=0;
			function show(){
					if(p==1){This.air.style.left=This.air.offsetLeft-10+"px";}
					if(p==2){This.air.style.left=This.air.offsetLeft+10+"px";}
			}
			document.onkeydown=function(e){
				switch(e.keyCode){
						case 37:p=1;
						break;
						case 39:p=2;
						break;
					}
					if(!timer){
				timer=setInterval(show,30)}
			}
			document.onkeyup=function(e){
				clearInterval(timer);
				timer=null;
				p=0;
				if(e.keyCode==32){
				This.hit();
				}
			}
		},
		hit:function(){
			var This=this;
			var top=this.air.offsetTop-10;
			var left=this.air.offsetLeft+this.air.offsetWidth/2;
			var zd=document.createElement("div");
			zd.className="hit";
			zd.style.top=top+"px";
			zd.style.left=left+"px";
			this.id.appendChild(zd);
			this.hitmove(zd);
		},
		hitmove:function(obj){
			var This=this;
			obj.timer=setInterval(function(){
				if(obj.offsetTop<=-10){clearInterval(obj.timer);
					This.id.removeChild(obj);
				}else{
				obj.style.top=obj.offsetTop-10+"px";}
				for(var i=0;i<This.mf.length;i++){
					if(This.check(obj,This.mf[i])){
						This.mf[i].blood--;
						if(This.mf[i].blood==0){
						This.point+=This.mf[i].score;
						This.score.innerHTML="积分："+This.point;
						clearInterval(This.mf[i].timer)
						This.bee.removeChild(This.mf[i]);
						
						}
						This.id.removeChild(obj);
						clearInterval(obj.timer);
					}
				}
				if(!This.mf.length){
					This.index++;
					This.createBee(This.index);
					This.beemove(This.index);
				}
			},30);
		},
		check:function(obj1,obj2){
			if(obj1.offsetLeft+obj1.offsetWidth<obj2.offsetLeft+obj2.parentNode.offsetLeft||obj1.offsetLeft>obj2.offsetWidth+obj2.offsetLeft+obj2.parentNode.offsetLeft||obj1.offsetTop>obj2.offsetTop+obj2.offsetHeight+obj2.parentNode.offsetTop||obj1.offsetTop+obj1.offsetHeight<obj2.offsetTop+obj2.parentNode.offsetTop){return false}else{return true}
		},
		onemove:function(){
			var This=this;
			var now=this.mf[parseInt(Math.random()*This.mf.length)];
			now.timer=setInterval(function(){
				var a = (This.air.offsetLeft + This.air.offsetWidth/2) - (now.offsetLeft + now.parentNode.offsetLeft + now.offsetWidth/2);
				var b = (This.air.offsetTop + This.air.offsetHeight/2) - (now.offsetTop + now.parentNode.offsetTop + now.offsetHeight/2);
			
				var c = Math.sqrt(a*a + b*b);
			
				var sX = now.speed * a/c;
				var sY = now.speed * b/c;
				now.style.left=now.offsetLeft+sX+"px";
				now.style.top=now.offsetTop+sY+"px";
				if( This.check( This.air,now) ){
					alert('游戏结束');
					window.location.reload();
				}
			},30)
		}
		
		 
		 
		}