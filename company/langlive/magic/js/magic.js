/*
* @Author: wangjianfei
* @Date:   2017-04-07 20:32:00
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-08 12:16:23
*/

'use strict';
$(function(){
	$(".detial-btn").click(function(){
		$(".rule").show();
	});
	$(".rule").click(function(){
		$(this).hide();
	});
});