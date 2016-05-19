$(function(){
	Game.exe(0);
  })
	var Game={
		exe:function(index){
		this.map(index);
		
		},
		map:function(index){
			$('#wrap').empty();
			$("#wrap").css({
				width:this.gk[index].size[0]*50+"px",
				height:this.gk[index].size[1]*50+"px"
			});
			for(var i=0;i<this.gk[index].map.length;i++)
			{
				$("#wrap").append("<div class='map"+this.gk[index].map[i]+"'></div>")
			}
			for(var i=0;i<this.gk[index].box.length;i++)
			{
				$div=$("<div class='box'></div>")
				$("#wrap").append($div);
				$div.css({
					left:this.gk[index].box[i][0]*50+"px",
					top:this.gk[index].box[i][1]*50+"px"
				})
			}
			$ct=$("<div class='ct'></div>");
			$("#wrap").append($ct);
			$ct.css({
			left:this.gk[index].ct[0]*50+"px",
			top:this.gk[index].ct[1]*50+"px"
			})
			$ct.data('x',this.gk[index].ct[0]);
			$ct.data('y',this.gk[index].ct[1]);
			this.move(index);
		},
		gk:[
			{
				map:[
					0,0,1,1,1,1,0,0,
					0,0,1,3,3,1,0,0,
					0,1,1,2,3,1,1,0,
					0,1,2,2,2,3,1,0,
					1,1,2,2,2,2,1,1,
					1,2,2,2,2,2,2,1,
					1,2,2,2,2,2,2,1,
					1,1,1,1,1,1,1,1
				],
				size:[8,8],
				ct:[3,6],
				box:[[4,3],[3,4],[4,5],[5,5]]
			},
			{
				map:[
					0,0,1,1,1,1,0,0,
					0,0,1,3,3,1,0,0,
					0,1,1,2,3,1,1,0,
					0,1,2,2,2,3,1,0,
					1,1,2,2,2,2,1,1,
					1,2,2,1,2,2,2,1,
					1,2,2,2,2,2,2,1,
					1,1,1,1,1,1,1,1
				],
				size:[8,8],
				ct:[3,6],
				box:[[4,3],[3,4],[4,5],[5,5]]
			},
			{
				map:[
					0,0,1,1,1,1,0,0,
					0,0,1,3,3,1,0,0,
					0,1,1,2,3,1,1,0,
					0,1,2,2,2,3,1,0,
					1,1,2,2,2,2,1,1,
					1,2,2,2,2,2,2,1,
					1,2,2,2,2,2,2,1,
					1,1,1,1,1,1,1,1
				],
				size:[8,8],
				ct:[3,6],
				box:[[4,3],[3,4],[4,5],[5,5]]
			}
		],
		move:function(index){
			var This=this;
			$(document).unbind("keydown")
			$(document).bind("keydown",function(e){
				switch (e.keyCode){
						case 37: // 左
							$ct.css('backgroundPosition','-150px 0px');
						
							This.ctmove({x:-1},index);
							break;
						case 38: // 上
							$ct.css('backgroundPosition','0px 0px');
						
							This.ctmove({y:-1},index);
							break;
						case 39: // 右
							$ct.css('backgroundPosition','-50px 0px');
						
							This.ctmove({x:1},index);
							break;
						case 40: // 下
							$ct.css('backgroundPosition','-100px 0px');
						
							This.ctmove({y:1},index);
							break;
				}
				
			})
		},
		ctmove:function(js,index)
		{
			var x=js.x||0;
			var y=js.y||0;
			var This=this;
			if(this.gk[index].map[($ct.data("y")+y)*this.gk[index].size[0]+($ct.data("x")+x)]!=1){
				$ct.data("x",$ct.data("x")+x);
				$ct.data("y",$ct.data("y")+y);
				$ct.css({
					left:$ct.data("x")*50+"px",
					top:$ct.data("y")*50+"px"
			})
			}
			$(".box").each(function(i){
					if(This.pz($ct,$(this))&&This.gk[index].map[($ct.data("y")+y)*This.gk[index].size[0]+($ct.data("x")+x)]!=1){
						$(this).css({
							left:($ct.data("x")+x)*50+"px",
							top:($ct.data("y")+y)*50+"px"
						})
					}else if(This.pz($ct,$(this))&&This.gk[index].map[($ct.data("y")+y)*This.gk[index].size[0]+($ct.data("x")+x)]==1){
						$ct.data("x",$ct.data("x")-x);
						$ct.data("y",$ct.data("y")-y);
						$ct.css({
							left:$ct.data("x")*50+"px",
							top:$ct.data("y")*50+"px"
						})
					}
					$(".box").each(function(j){
						if(This.pz($(".box").eq(i),$(".box").eq(j))&&i!=j){
							$(".box").eq(j).css({
							left:($ct.data("x"))*50+"px",
							top:($ct.data("y"))*50+"px"
							})
							$ct.data("x",$ct.data("x")-x);
							$ct.data("y",$ct.data("y")-y);
							$ct.css({
								left:$ct.data("x")*50+"px",
								top:$ct.data("y")*50+"px"
							})
						}
					});
				});
			this.pass(index);
		},
		pz:function(obj1,obj2){
			if(obj1.position().left==obj2.position().left&&obj1.position().top==obj2.position().top){return true}else{return false}
		},
		pass:function(index){
			var num=0;
			var This=this;
			$(".map3").each(function(i){
				
				$(".box").each(function(j){
					if(This.pz($(".map3").eq(i),$(".box").eq(j))){
					num++;
					//console.log(num);
					}
				})
			});
			//alert($(".mp3").size())
			if(num==$(".map3").size()){
				
				index++;
				if(index<3){alert("顺利过关")
				This.exe(index);}else{alert("您已通关")}
				}
		}
	}