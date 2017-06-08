/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:25:20
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-07 19:07:51
*/

// (function(){
	
// })();
!function(){
	'use strict';
	//2.0 请求数据
	function getDate(){
		// $.post(domain+'v2/activity/dracula_data', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
		 	// function(data) {
	            /*optional stuff to do after success */
	            if(data.ret_code=="0"){
	            	// 是否在直播
	            	var isLiving=data.data.my;
	                isLive(isLiving);
	                // 0522 复活赛9个用户
	                var users=data.data.users;
	                // 0522 过滤选手
	                filterUser(users);
	            }
		    // },
			// "json"
	    // );
	}







	// 定位日期
	function changeDate(){
		var dateObj={
			"9":0,
			"10":1,
			"11":2,
			"12":3,
			"13":4,
			"14":5,
			"15":6,
			"16":7,
			"17":8,
			"18":9,
			"19":10,
			"20":11,
			"21":12,
			"22":13
		};
		// var nowDate=new Date();
		var nowDate=new Date("2017-06-20");
		// 把日期作為key，对应按钮的index
		var key=nowDate.getDate();
		var index=dateObj[key];
		if(key<9||key>22){
			console.log(key);
			$(".change-date").addClass('gray-bg');
		}else{
			$(".change-date").eq(index).addClass('selected choice-date').siblings().removeClass('selected');
			$(".change-date").eq(index).nextAll().addClass('gray-bg');
			$(".change-date").eq(index).prevAll().addClass('choice-date');
			$(".choice-date").click(function(){
				if(!$(this).hasClass('selected')){
					var thisTime=$(this).attr("data-time");
					$(this).addClass('selected').siblings().removeClass('selected');
					console.log(thisTime);
				}
			});
		}
		
	}
	changeDate();
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
}();