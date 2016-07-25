;(function($){
	$.extend({
			"hoverNav":function(id){
				var $li=$(id).children("li");
				var spanCur=null,spanOver; 
				$li.each(function(i,e){
					$(this).hover(function(){
						spanCur=$(this).find(".m-cur");
						spanOver=$(this).find(".m-over");
						spanCur.stop().animate({"top":"-45px"},300);
						spanOver.stop().animate({"top":"0"},300);
						},function(){
						spanCur.stop().animate({"top":"0"},300);
						spanOver.stop().animate({"top":"45px"},300);	
							});
					});
				},
			"showBlock":function(id1,id2,cla1,cla2,sty){
				var $cla1=$(id1).find(cla1);
				var $cla2=$(id2).find(cla2);
				$.each($cla1,function(i,e){
					$(this).mouseover(function(){
						if(id2="#nav-3"){
							$(id2).show();
							}
						$($cla1.not($cla1[i])).removeClass(sty);
						$($cla2.not($cla2[i])).hide();
						$(this).addClass(sty);
						$($cla2[i]).show();
						});
					});
				},
				"showBlock2":function(id1,id2,cla1,cla2,sty){
				var $cla1=$(id1).find(cla1);
				var $cla2=$(id2).find(cla2);
				$.each($cla1,function(i,e){
					$(this).click(function(){
						$($cla1.not($cla1[i])).removeClass(sty);
						$($cla2.not($cla2[i])).hide();
						$(this).addClass(sty);
						$($cla2[i]).show();
						});
					});
				},
			"exchange":function(id,tag,btn){
				var $w=$(id).outerWidth();
				var $btn=$(btn);
				$btn.click(function(){
					var curLeft=parseInt($(id).css("margin-left"));
					$(id).find(tag).animate({"marginLeft":(curLeft-$w)+"px"},500,function(){
						$(id).find(tag).css("margin-left",0);
						for(var i=0;i<4;i++){
							$(id).find("li:first").appendTo($(id).find(tag));
							}
						});
					});	
				},
			"slide":function(ban,pic,list,prev,next){
			var $bigId=$(pic),$listId=$(list),$prev=$(prev),$next=$(next);
			var $bigPic=$bigId.find("li"),$list=$listId.find("li");
			var $liWidth=$bigId.width();
			var index=0,iFalse=true,timer=null;
			clearInterval(timer);
			function autoSwitch(){
				clearInterval(timer);
				if(iFalse){
				timer=setInterval(function(){index++;if(index==$bigPic.length){index=0;}fadeIn(index);},3800);
					}else{clearInterval(timer);}
				}
			autoSwitch();
			$(ban).hover(function(){clearInterval(timer);iFalse=false;$prev.show().stop(true,false).animate({"left":0},350);$next.show().stop(true,false).animate({"right":0},350);},function(){$prev.stop(true,false).animate({"left":30},300,function(){$(this).hide()});$(next).stop(true,false).animate({"right":30},300,function(){$(this).hide()});iFalse=true;autoSwitch();});
			$next.click(function(){
				index++;
				if(index==$bigPic.length){
					index=0;
					}
				fadeIn(index);
				});
			$prev.click(function(){
				index--;
				if(index<0){
					index=$bigPic.length-1;
					}
				fadeIn(index);
				});
			$list.click(function(){
				index=$(this).index();
				$list.removeClass("cur");
				$(this).addClass("cur");
				fadeIn(index);
				});		
			function fadeIn(index){
				$($bigPic.not($bigPic[index])).stop(true,false).animate({"opacity":0},1000).removeClass("now");
				$($bigPic[index]).stop(true,false).animate({"opacity":1},1000).addClass("now");
				$listId.find("li").removeClass("cur").eq(index).addClass("cur");	
				}	
			},		
			"showShade":function(id){         //热点关注
				var $li=$(id).find("li");
				var index;
				$li.hover(function(){
					index=$(this).index();
					//alert($(this).find(".gz-a"+index).length);
					$(this).find(".gz-a"+(index+1)).stop(false,true).animate({"opacity":0},300);
					},function(){
					$(this).find(".gz-a"+(index+1)).stop(false,true).animate({"opacity":1},300);
					});
				},
			"theySay":function(id,tag,cla){       //首页他们说
				var $dd=$(id).find(tag);
				$dd.each(function(i,e){
					$(e).hover(function(){
						$(this).find(cla).show();
						},function(){
							$(this).find(cla).hide();
							});
					});
				},
			"tuijie":function(id,cla,tag1,tag2){       //名医推荐
				var $cla=$(id).find(cla);
				$cla.each(function(i,e){
					var $li=$(e).find(tag1);
					$.each($li,function(j,f){
						$(this).hover(function(){
							$(this).find(tag2).stop(false,false).animate({"height":"50px","padding-top":"40px"},200);
							},function(){
							$(this).find(tag2).stop(false,false).animate({"height":"0","padding-top":"0"},200);
							});
						});
					});
				},
			"tuijie2":function(id,tag1,tag2){      //专家推荐
				var $id=$(id);
				var $cla=$(id).find(tag1);
				$.each($cla,function(i,e){
					$(e).hover(function(){
						$(this).find(tag2).stop(false,false).animate({"height":"100%"},200);
						},function(){
						$(this).find(tag2).stop(false,false).animate({"height":"0"},200);
						});
					});
				},
			"media":function(id1,id2,cla1,cla2,sty){      //合作媒体
				var $cla1=$(id1).find(cla1);
				var $cla2=$(id2).find(cla2);
				$cla1.each(function(i,e){
					$(e).mouseover(function(){
						$($cla1.not($(this))).removeClass(sty).find("i").hide();
						$($cla2.not($cla2[i])).hide();
						$($cla2[i]).show();
						$(this).addClass(sty).find("i").show();
						});
					});
				},
			"borderSwitch":function(id_l,id_r){
				var $h_l=$(id_l).outerHeight(),$h_r=$(id_r).outerHeight();
				if($h_l>$h_r){
					$(id_l).css("border-right","1px solid #e5e5e5");
					}else{
					$(id_r).css("border-left","1px solid #e5efe5");
						}
				},
			"zjFocus":function(id1,id2,tag,cla1,moveWidth,prev,next){
				var $cla1=$(id1).find(tag);
				var $cla2=$(id2).find(cla1);
				var $pre=$(prev),$next=$(next);
				$pre.click(function(){
					var curLeft=parseInt($(id1).css("margin-left"));
					$(id1).animate({"marginLeft":(curLeft+moveWidth)+"px"},500,function(){
						$(this).css("margin-left","-"+moveWidth+"px");
							$(id1).find(tag).eq(1).prependTo($(id1));
							//$(id1).find(tag).eq(4).prependTo($id1);
						});
					});
				$next.click(function(){
					var curLeft=parseInt($(id1).css("margin-left"));
					$(id1).animate({"marginLeft":(curLeft-moveWidth)+"px"},500,function(){
						$(this).css("margin-left","-"+moveWidth+"px");
						$(id1).find(tag).eq(1).appendTo($(id1));
						//$(id1).find(tag).eq(4).appendTo($(id1));
						});
					});
				$cla1.each(function(i,e){
					$(e).hover(function(){
						var curNum=parseInt($(this).attr("class").substr(7));
						$($cla2.not($cla2[curNum])).hide();
						$($cla2.not($cla2[curNum])).find(".zj-online1").slideUp(300);
						$($cla2[curNum]).show();
						},function(){
						});
					});
				$cla2.each(function(j,k){
					$(k).mousemove(function(){
						$(this).find(".zj-online1").slideDown(300);
					});
					});
				},
			"gongyi":function(id1,id2,cla1,cla2,tag){
				var $div=$(id1).find(cla1);
				var $li=$(id2).find(cla2);
				$li.each(function(i,e){
					$(e).hover(function(){
						$($div.not($div[i])).hide();
						$($div[i]).show();
						if(tag){
							$($div[i]).find(tag).slideDown(300);
							}
						},function(){
							if(tag){
								$($div[i]).find(tag).slideUp(300);
								}
							});
					});	
				}					 
		});
	$.fn.extend({
		"addStyle":function(tag,sty){     //内页左侧栏目导航
				var $id=document.getElementById("nid");
				var $ii=null;
				if($id){
					$ii=parseInt($id.getAttribute("data"));
					}else{
						
						}
				var $li=$(this).find(tag);
				$($li[$ii-1]).addClass(sty);
				$li.each(function(i,e){
					$(e).hover(function(){
						$($li.not($(this))).removeClass(sty);
						$(this).addClass(sty);
						},function(){
						$(this).removeClass(sty);
						$($li[$ii-1]).addClass(sty);
						});
					});
			},
		"addStyle2":function(tag,sty){   //标签默认选中，鼠标离开回到默认选项。
			var $li=$(this).find(tag);
			var _i=null;
				$li.each(function(j,k){
					if($(k).hasClass(sty)){
						_i=j;
						}
					});
				$li.each(function(i,e){
					$(e).hover(function(){
						$($li.not($(this))).removeClass(sty);
						$(this).addClass(sty);
						},function(){
						$(this).removeClass(sty);
						$($li[_i]).addClass(sty);
						});
					});	
			},
		"addStyle3":function(tag,sty){   //鼠标滑过显示，默认显示一个。
			var $li=$(this).find(tag);
				$li.each(function(i,e){
					$(e).mouseover(function(){
						$($li.not($(this))).removeClass(sty);
						$(this).addClass(sty);
						});
					});	
			},
		"addStyle4":function(tag,sty){   //鼠标滑过显示，鼠标离开不显示。
			var $li=$(this).find(tag);
				$li.each(function(i,e){
					$(e).hover(function(){
						$(this).addClass(sty);
						},function(){
							$(this).removeClass(sty);
							});
					});	
			},
			"addStyle5":function(tag,sty){   //鼠标滑过显示，鼠标离开不显示。
			var $li=$(this).find(tag);
				$li.each(function(i,e){
					$(e).click(function(){
						$($li.not($li[i])).removeClass(sty);
						$(this).addClass(sty);
						});		
					});	
			},	
		"animation":function(cla,prev,next){
				var $cla = $(this).find(cla);
				var $pre=$(prev),$next=$(next);
				var $w=$(this).outerWidth();
				$pre.click(function(){
					if($cla.children("li").length>1){
						moveRight();
						}
					});
				$next.click(function(){
					if($cla.children("li").length>1){
						moveLeft();
						}
					});	
				function moveLeft(){
					var curLeft=parseInt($cla.css("margin-left"));
					var moveL=curLeft-$w;
					$cla.animate({"marginLeft":moveL},500,function(){
					$cla.css("margin-left","-"+$w+"px");	
					$cla.children("li:first").appendTo($cla);	
						});
					}
				function moveRight(){
					var curLeft=parseInt($cla.css("margin-left"));
					var moveR=curLeft+$w;
					$cla.animate({"marginLeft":moveR},500,function(){
						$cla.css("margin-left","-"+$w+"px");
						$cla.children("li:last").prependTo($cla);
						});
					}		
				},
		"animation2":function(tag,prev,next){
			var $w=$(this).find(tag).outerWidth()+parseInt($(this).find(tag).css("margin-right"));
			var $pre=$(prev),$next=$(next);
			var _this=$(this);
			$pre.click(function(){
				moveRight();
				});
			$next.click(function(){
				moveLeft();
				});	
			function moveLeft(){
				var curLeft=parseInt(_this.css("margin-left"));
				var moveL=curLeft-$w;
				_this.animate({"marginLeft":moveL},500,function(){
					_this.css("margin-left","-"+$w+"px");
					_this.children("li:first").appendTo(_this);
					});
				}
			function moveRight(){
				var curLeft=parseInt(_this.css("margin-left"));
				var moveL=curLeft+$w;
				_this.animate({"marginLeft":moveL},500,function(){
					_this.css("margin-left","-"+$w+"px");
					_this.children("li:last").prependTo(_this);
					});
				}		
			},
			"downUp":function(tag1,tag2){
				var _this=$(this);
				var $Parent=$(this).find(tag1),$child=$Parent.find(tag2);
				var $h=$child.outerHeight();
				var timer=setInterval(moveUp,100);
				$Parent.hover(function(){
					clearInterval(timer);
					},function(){
					timer=setInterval(moveUp,100);
					});
				function moveUp(){
					var curTop=parseInt($Parent.css("margin-top"));
						$Parent.css("margin-top",(curTop-1)+"px");
						if((Math.abs(curTop)%27)==0){
							_this.find(tag2).first().appendTo(_this.find(tag1));
							curTop=0;
							$Parent.css("margin-top",(curTop-1)+"px");
							}
					}
				},
			"autoSlide":function(tag,parent,width){
				var _this=$(this);
				var getTag=_this.find(tag),parTag=_this.find(parent);
				if(getTag.length<3){
					getTag.clone().appendTo(parTag);
					}
				var timer=setInterval(autoScroll,5000);
				function autoScroll(){
					var _left=parseInt(parTag.css("left"));
					parTag.animate({"left":(_left-width)},500,function(){_this.find(tag+" :first").appendTo(_this.find(parent));parTag.css("left","0px");});
					}
				}			
		});
	})(jQuery);
