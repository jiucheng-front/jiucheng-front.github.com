/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:25:20
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-08 21:05:36
*/


// !function(){


	'use strict';

	// 1、公用：
	// 通过ID获取DOM
	function getDomId(id){
		return document.getElementById(id);
	}
	// 渲染DOM
	function printDom(id,html){
		document.getElementById(id).innerHTML=html;
	}

	//1.0 请求数据
	function getDate(){
		// $.post(domain+'v2/activity/dracula_data', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
		 	// function(data) {
	            /*optional stuff to do after success */
	            if(data.ret_code=="0"){
	            	// 1、底部主播信息
	            	var anchorInfo=data.broke_info;
	            	printAnchor(anchorInfo);
	            	// 2、今日经纪人信息
	            	var todayBrokers=data.broke_today_ranked;
	            	printToday(todayBrokers);
	            	// 3、经纪人总榜信息
	            	var allBrokers=data.broke_total_ranked;
	            	printAll(allBrokers);
	            	// console.log(allBrokers);
	            }
		    // },
			// "json"
	    // );
	}
	getDate();

	// 2、今日经纪人信息
	function printToday(brokers){
		var today_html="";
		var today_length=brokers.length;
		for(var i=0;i<today_length;i++){
			var nowBroker=brokers[i];
			var brokerCount=nowBroker.anchor_num;
			var brokerImg=nowBroker.headimg;
			var brokerName=nowBroker.nickname;
			var brokerScore=nowBroker.score;
			today_html+='<li>';
			if(i==0){
				today_html+='<div class="same-img king">';
			}else if(i>0&&i<10){
				today_html+='<div class="same-img gold">';
			}else if(i>=10&&i<20){
				today_html+='<div class="same-img silver">';
			}else{
				today_html+='<div class="same-img copper">';
			}
			today_html+='<img src="'+brokerImg+'" alt="" class="headImg">';
			today_html+='<i></i><span></span>';
			today_html+='<p>'+brokerName+'</p>';
			today_html+='</div>';
			today_html+='<b>'+brokerCount+'</b>';
			today_html+='<span>'+brokerScore+'</span>';
			today_html+='</li>';
		}
		$("#totalTodayLists").append(today_html);
		// 多于10个先隐藏
		if(today_length>10){
			$("#totalTodayLists li").eq(9).nextAll().addClass('none');
			$("#seeMore").addClass('Block');
			$("#seeMore").click(function(){
				$("#totalTodayLists li").eq(9).nextAll().removeClass('none');
				$(this).removeClass('Block');
			});
		}
		// printDom("totalTodayLists",today_html);
	}
	// 3、经纪人总榜信息
	function printAll(all){
		var all_html="";
		var all_length=all.length;
		for(var i=0;i<all_length;i++){
			var nowAll=all[i];
			var allCount=nowAll.anchor_num;
			var allImg=nowAll.headimg;
			var allName=nowAll.nickname;
			var allScore=nowAll.score;
			all_html+='<li>';
			if(i<10){
				all_html+='<div class="same-img king">';
			}else{
				all_html+='<div class="same-img">';
			}
			all_html+='<img src="'+allImg+'" alt="" class="headImg">';
			all_html+='<i></i><span></span>';
			all_html+='<p>'+allName+'</p>';
			all_html+='</div>';
			all_html+='<b>'+allCount+'</b>';
			all_html+='<span>'+allScore+'</span>';
			all_html+='</li>';
		}
		$("#totalLists").append(all_html);
		// 多于10个先隐藏
		if(all_length>10){
			$("#totalLists li").eq(9).nextAll().addClass('none');
			$("#lookMore").addClass('Block');
			$("#lookMore").click(function(){
				$("#totalLists li").eq(9).nextAll().removeClass('none');
				$(this).removeClass('Block');
			});
		}
	}
	// 底部信息
	function printAnchor(info){
		// 旗下艺人 个数
		var artist_count=info.anchor_num;
		var artist_img=info.headimg;
		var artist_nickname=info.nickname;
		// DOM
		var artistImgDom=getDomId("anchorBottomImg");
		var artistNameDom=getDomId("anchorBottomName");
		var artistCountDom=getDomId("anchorArtistsNum");
		artistImgDom.src=artist_img;
		artistNameDom.innerHTML=artist_nickname;
		artistCountDom.innerHTML=artist_count;
	}

	//3 定位日期
	function changeDate(){
		var dateObj={
			"10":0,
			"11":1,
			"12":2,
			"13":3,
			"14":4,
			"15":5,
			"16":6,
			"17":7,
			"18":8,
			"19":9,
			"20":10,
			"21":11,
			"22":12,
			"23":13
		};
		// var nowDate=new Date();
		var nowDate=new Date("2017-06-20");
		// 把日期作為key，对应按钮的index
		var key=nowDate.getDate();
		var index=dateObj[key];
		if(key<10||key>23){
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
	//4、中间 切換
	$(".anchor-tabbtn").click(function(){
		if(!$(this).hasClass('selected')){
			var index=$(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$(".toggle-list").eq(index).addClass('hadSelected').siblings().removeClass('hadSelected');
		}
	});
	//5 返回頂部
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
	//6 跳转到个人
	$("#artistBtn").click(function(){
		$("#jumpPersonal").trigger('submit');
	});


// }();