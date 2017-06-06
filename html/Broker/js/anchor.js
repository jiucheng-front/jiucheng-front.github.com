/*
* @Author: wangjianfei
* @Date:   2017-06-06 12:51:16
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-06 15:40:36
*/

'use strict';







// 切換
$(".anchor-tabbtn").click(function(){
	if(!$(this).hasClass('selected')){
		var index=$(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(".anchor-list").eq(index).addClass('anchorSelected').siblings().removeClass('anchorSelected');
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