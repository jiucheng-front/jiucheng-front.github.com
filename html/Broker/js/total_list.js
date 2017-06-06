/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:25:20
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-06 18:37:39
*/

'use strict';










// 切換
$(".anchor-tabbtn").click(function(){
	if(!$(this).hasClass('selected')){
		var index=$(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(".toggle-list").eq(index).addClass('hadSelected').siblings().removeClass('hadSelected');
	}
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