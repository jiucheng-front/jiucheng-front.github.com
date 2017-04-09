/*
* @Author: wangjianfei
* @Date:   2017-04-07 20:32:00
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-08 12:16:23
*/

'use strict';
$(function(){
	// 1 活动细则
	$(".detial-btn").click(function(e){
		event.stopPropagation();
		$(".content").hide();
		$(".rule").show();
	});
	$(".rule").click(function(e){
		event.stopPropagation();
		$(this).hide();
		$(".content").show();
	});
	// 2、上传照片遮罩层
	$(".open-upload").click(function(e){
		event.stopPropagation();
		event.preventDefault();
		$(".upload").show();
	});
	$(".upload-close").click(function(e){
		event.stopPropagation();
		$(".upload").hide();
	});
	// 3、点击头像弹出贡献者信息
	$(".open-contributors").click(function(e){
		event.stopPropagation();
		event.preventDefault();
		$(".contributors-mask").show();
	});
	$(".contributors-close").click(function(e){
		event.stopPropagation();
		$(".contributors-mask").hide();
	});
});