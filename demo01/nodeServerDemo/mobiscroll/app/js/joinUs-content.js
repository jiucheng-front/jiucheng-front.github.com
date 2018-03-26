/*
* @Author: wangjianfei
* @Date:   2017-05-05 10:19:26
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-05 18:47:25
*/

'use strict';



// 弹出选择时间段

// $("#user-time").click(function(event){
// 	event.preventDefault();
// 	event.stopPropagation();
// 	$(".time-mask").show();
// });
// $(".time-mask").click(function(event){
// 	event.preventDefault();
// 	event.stopPropagation();
// 	$(this).hide();
// });

// 提交按钮
$("#submit").click(function(){
	//日期
	var userDate=$("#appDate").val();
	//时间段
	var userTime=$("#user-time input").val();
	// 直播内容
	var userContent=$("#user-content").val();
	// 才艺
	var userTalent=$("#user-talent").val();
	if(userDate&&userTime&&userContent&&userTalent){
		console.log("存在");
	}else{
		console.log("资料补全");
	}
	console.log(userDate);
	console.log(userTime);
	console.log(userContent);
	console.log(userTalent);
});