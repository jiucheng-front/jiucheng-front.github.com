// JavaScript Document

$(document).ready(function(){

	

//导航距离屏幕顶部距离 

var _defautlTop = $("#rSwt_piao").offset().top - $(window).scrollTop(); 

var _defautlTop2 = $("#right").offset().top - $(window).scrollTop(); 



//导航距离屏幕左侧距离 

var _defautlLeft = $("#rSwt_piao").offset().left - $(window).scrollLeft(); 

var _defautlLeft2 = $("#rigTop").offset().left - $(window).scrollLeft(); 



//导航默认样式记录，还原初始样式时候需要 

var _position = $("#rSwt_piao").css('position'); 

var _position2 = $("#rigTop").css('position'); 

var _top = $("#rSwt_piao").css('top'); 

var _top2 = $("#rigTop").css('top'); 

var _left = $("#rSwt_piao").css('left');

var _left2 = $("#rigTop").css('left');

var _zIndex = $("#rSwt_piao").css('z-index'); 

var _zIndex2 = $("#rigTop").css('z-index'); 



//导航默认样式记录，还原初始样式时候需要 

var _defautlBot = parseInt($("#left_bar").css('height')) + parseInt($("#left_bar").offset().top) - 350

var _defautlBot2 = parseInt($("#left_bar").css('height')) + parseInt($("#left_bar").offset().top) - 350



//鼠标滚动事件 

$(window).scroll(function(){ 

if($(this).scrollTop() > _defautlTop && $(this).scrollTop() <_defautlBot){ 

//IE6不认识position:fixed，单独用position:absolute模拟 

if($.browser.msie && $.browser.version=="6.0"){ 

$("#rSwt_piao").css({'position':'absolute','top':eval(document.documentElement.scrollTop),'left':_defautlLeft,'z-index':99999}); 



//防止出现抖动 

$("html,body").css({'background-image':'url(about:blank)','background-attachment':'fixed'}); 

}else{ 

$("#rSwt_piao").css({'position':'fixed','top':0,'left':_defautlLeft,'z-index':99999}); 

} 

}else{ 

$("#rSwt_piao").css({'position':_position,'top':_top,'left':_left,'z-index':_zIndex}); 

} 

});

$(window).scroll(function(){ 

if($(this).scrollTop() > _defautlTop2 && $(this).scrollTop() <_defautlBot2){ 

//IE6不认识position:fixed，单独用position:absolute模拟 

if($.browser.msie && $.browser.version=="6.0"){ 

$("#rigTop").css({'position':'absolute','top':eval(document.documentElement.scrollTop),'left':_defautlLeft2,'z-index':99999}); 

//防止出现抖动 

$("html,body").css({'background-image':'url(about:blank)','background-attachment':'fixed'}); 

}else{ 

$("#rigTop").css({'position':'fixed','top':-12,'left':_defautlLeft2,'z-index':99999}); 

} 

}else{ 

$("#rigTop").css({'position':_position2,'top':_top2,'left':_left2,'z-index':_zIndex2}); 

} 

});

});