/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:24:21
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-06 21:51:40
*/

'use strict';












// 打開禮物
var isCanGet=true;
$(".open-gift").click(function(){
	var gift_id=$(this).attr("data-id");
	// console.log(gift_id);
	$("#gift-info").empty().html(gift_id);
	$("#gift-mask").show();
	$("#get-giftbtn").click(function(){
		console.log(gift_id);
	});
	// 關閉禮物
	$("#gift-close").click(function(){
		$("#gift-mask").hide();
		isCanGet=false;
	});
});

// 返回頂部
$(".backTop").click(function(){
	$(document).scrollTop(0);
});

$(document).scroll(function(){
	if ($(document).scrollTop() > 300) {
			$('.backTop').show();
	} else {
			$('.backTop').hide();
	}
})
// 推薦
$("#artist-btn").click(function(event){
	event.preventDefault();
	event.stopPropagation();
	$("#recommend-bg").show();
});
$("#close-recommend").click(function(event){
	event.preventDefault();
	event.stopPropagation();
	$("#recommend-bg").hide();
});