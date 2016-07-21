// JavaScript Document
$(function(){
	
	/*           banner            */
	
	jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });

	$('.pf_dj ul li').mouseover(function(){
			  var index = $(this).index();
			  $(this).addClass('libg').siblings().removeClass()
			  $('.pf_con').eq(index).show().siblings().hide();
			});
			
	/*      鍏稿瀷妗堜緥       */		
	jQuery(".hasMoreTab").slide({ mainCell:".conWrap",  effect:"fold"});
	
	/*      鐗硅壊鎶€鏈�       */		
	jQuery(".al_qh").slide({ mainCell:".al_div",  effect:"fold"});
	
	/*      绉戞櫘涔嬬獥       */		
	jQuery(".kpzc_qh").slide({ mainCell:".kpzc_div",  effect:"fold"});
	
	/*      鍖婚櫌鐜       */	
			
	
	$('.yyhj_dj ul li').mouseover(function(){
			  var index = $(this).index();
			  $(this).addClass('libg4').siblings().removeClass()
			  $('.yyhj_con').eq(index).show().siblings().hide();
			});
			
	jQuery(".layB").slide({ mainCell:".slide",effect:"leftLoop",autoPlay:true });


	$('.mtbd_dj ul li').mouseover(function(){
			  var index = $(this).index();
			  $(this).addClass('libg5').siblings().removeClass()
			  $('.mtbd_conmmon').eq(index).show().siblings().hide();
			});
			
	jQuery(".picScroll").slide({ mainCell:"ul", effect:"leftLoop", vis:3, scroll:1, autoPlay:true });	
	
	jQuery("#sideMenu").slide({ titCell:".hd", targetCell:".bd",effect:"slideDown",trigger:"click" });	
	
	$('.xgwz_dj ul li').mouseover(function(){ 
			  var index = $(this).index();
			  $(this).addClass('libg6').siblings().removeClass()
			  $('.xgwz_con').eq(index).show().siblings().hide();
			});
	
	$('.dq_right ul li').mouseover(function(){
              var index = $(this).index();
              $(this).addClass('libg').siblings().removeClass()
            });
	
	})
	
	
	