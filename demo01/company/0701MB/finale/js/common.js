// JavaScript Document
$(function(){
				var screenHeight,
					screenWidth,
					popMenuHeight,
					$Win = $(window),
					bannersHeight,
					oneHeight,
					myscroll1,
					quarter, 
					bFlag = true,
					preventDefault,
					oneWidth;
					preventDefault=function(e){
							e.preventDefault();
						}
					var menuBtns = $(".menuBtn");
			//首页坐诊专家js
			function calWidth(){
					var winWidth=$(window).width();
					var $scroller = $("#scroller");
					var scroller_size = $scroller.find("li").length;
					var oneWidth = parseInt(Math.floor(winWidth/3.5),10);
					$scroller.find("li").css({width:oneWidth+"px"});
					$scroller.css({width:oneWidth*scroller_size+'px'});
					var myscroll = null;
					function loaded(){
						myscroll=new IScroll("#export_slides",{ scrollX: true, scrollY: false, preventDefault: true,eventPassthrough: true});						
					 }
					 window.addEventListener("DOMContentLoaded",loaded,false);
				};
				calWidth();
				//弹窗菜单导航js	
				var popMenu = {
					openMenu:function(){
						screenHeight =$(window).height();
						screenWidth = $(window).width();
						headerHeight = $(".showMenu").outerHeight();
						popMenuHeight = screenHeight -headerHeight ;
						oneHeight = $("#popMenu").find("li").height();
						quarter = parseInt(screenWidth/4,10);
						$("#popMenu").find("li").css({width:screenWidth+'px'});
						$("#popMenu").find("li a").css({width:quarter-1+'px'});
						$("#popMenu").css({width:'100%',height:popMenuHeight+'px',position:'fixed',left:0,top:headerHeight+'px',zIndex:999999,overflow:'hidden',backgroundColor:'rgba(49,58,70,0.98)'});
						
						},
					init:function(){
							popMenu.openMenu();	
							$(".menuItems").each(function(index, element) {
								if($(this).find("li").length>=2){
								//	$(this).css({height:oneHeight*2+'px',overflow:'hidden'})
									}else {
										$(this).css({height:oneHeight+'px',overflow:'hidden'})	
										}
							});					
							if(bFlag){																	
									$("#popMenu").hide();	
									$("#popMenu").slideDown(600);
									bFlag = false;
									setTimeout(function () { myscroll1=new IScroll("#popMenu",{mouseWheel:true,preventDefault:false,useTransform:true})},600);
									$("body").css({overflow:"hidden"})
									if(document.addEventListener){
										document.addEventListener('touchmove',preventDefault,false);	
										}
									else {
											document.attachEvent('ontouchmove',preventDefault);
										}
													
								}
							else{
									$("#popMenu").slideUp('fast');
									bFlag = true;
									popMenu.showMore();
									menuBtns.removeClass('active').children("span").html("展开更多");
									$("body").css({overflow:"auto"})
									document.removeEventListener('touchmove',preventDefault,false);
									if(document.removeEventListener){
										document.removeEventListener('touchmove',preventDefault,false);	
										}
									else {
											document.attachEvent('ontouchmove',preventDefault);
										}	
									
								}						
						},
					reset:function(){
							popMenu.openMenu();	
							popMenu.refresh();		
						},
					resize:function(){
						
								popMenu.reset();
													
						},
					refresh:function(){
								setTimeout(function () {
									myscroll1.refresh();
								}, 0);	
							},
						//点击展开按钮js
						showMore:function(){
								menuBtns.each(function(i){			
										var openBtn = true;
										$(this).on('click',function(){												
												var _this = $(this);
												var curIndex = _this.index(this);
												var liSize = 0;
												liSize = $(this).parent().find("ul li").length;
												if(openBtn){
													_this.addClass("active").children("span").html("收起");
													_this.parent().find("ul").stop().animate({height:liSize*oneHeight+'px'},400,function(){
														popMenu.refresh();
														openBtn = false;
														
														});
													
													
												}else {
													_this.removeClass("active").children("span").html("展开更多");
													_this.parent().find("ul").stop().animate({height:2*oneHeight+'px'},400,function(){popMenu.refresh();
													openBtn = true;
													
														});
													
													}
											})
									})
							}	
										
				};
				$(window).resize(function(){
					calWidth();popMenu.resize();
					});
				popMenu.showMore();
				$(".showMenu").on("click",function(){
						$(this).toggleClass('show');	
						popMenu.init();
						popMenu.reset();
					});	
				/*电话图标抖动效果*/
				$(".topTell").on('click',function(){
							$(this).addClass("shake");
						setTimeout(function(){
								//alert(1)
								$(".topTell").removeClass("shake");
							},6000);
						
					})	
				// scrollTop 
				var picture=document.getElementById("picture");
				picture.addEventListener("touchstart",function(e){
					var p,f1,f2;
					e=e.targetTouches[0];
					p={
						x:picture.offsetLeft-e.clientX,
						y:picture.offsetTop-e.clientY
					};
					document.addEventListener("touchmove",f2=function(e){
						var t=t=e.targetTouches[0];
						picture.style.left=p.x+t.clientX+"px";
						picture.style.top=p.y+t.clientY+"px";
						e.preventDefault();
					},false);
					document.addEventListener("touchend",f1=function(e){
						document.removeEventListener("touchend",f1);
						document.removeEventListener("touchmove",f2);
					},false);
				},false);

				var topValue=$(".header").height()*8;
				//interval=null;
				var sW = ($(".footer").height());
				$(".scrollTop").css("bottom",sW)
				$(window).scroll(function(){
					//clearInterval(interval);
					//$(".scrollTop").hide();
					//interval=setInterval(function(){test()},2000);
					//topValue=$(window).scrollTop;
					test();
				})
				function test(){
					if($(window).scrollTop()>=topValue){
						//console.log(0)
						$(".scrollTop").show();
						//clearInterval(interval);
					}else {
							//console.log(1)
							$(".scrollTop").hide();
						}
				}
				$(".scrollTop").click(function(){
					$(window).scrollTop(0);
				})
			})