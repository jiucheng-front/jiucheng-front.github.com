/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:25:20
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-09 20:01:24
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
	// ---------------------------------------------------0613 start
	// //1.0 请求数据
	// function getDate(){
	// 	// $.post(domain+'v2/html/broke/get_broke_ranked_info', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_pfid,"broke_pfid":pfid,"date":""},
	// 	 	// function(data) {
	//             if(data.ret_code=="0"){
	//             	// 1、底部主播信息
	//             	var anchorInfo=data.broke_info;
	//             	printAnchor(anchorInfo);
	//             	// 2、今日经纪人信息
	//             	var todayBrokers=data.broke_today_ranked;
	//             	printToday(todayBrokers);
	//             	// 3、经纪人总榜信息
	//             	var allBrokers=data.broke_total_ranked;
	//             	printAll(allBrokers);
	//             	// console.log(allBrokers);
	//             }
	// 	    // },
	// 		// "json"
	//     // );
	// }
	// getDate();
	// ---------------------------------------------------0613 end



	// --------------------------------------------------------------------615 start
	// 1、封裝AJAX函數
	function Ajax(option){
		// 定义domain,方便环境切换
		var domain='https://' + window.location.host + '/';
		var url=domain+option.urlStr;
		var type=option.ajaxType;
		var data=option.ajaxData;
		var xhrRequest=new XMLHttpRequest();
		var str=null;
		xhrRequest.open(type,url,true);
		if(type==="POST"&&data!=null){
			xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
			for(var key in data){
				str+='&'+key+'='+data[key];
				str=str.slice(1);
			}
		}
		xhrRequest.onreadystatechange=function(){
			if(xhrRequest.readyState==4&&xhrRequest.status==200){
				// 1、格式化返回的数据
				var responseData=JSON.parse(xhrRequest.responseText);
				console.log(responseData);
				// 2、这里操作数据-----------------------------------
				if(responseData.ret_code=="0"){
						// 1、底部主播信息
	            	var anchorInfo=responseData.broke_info;
	            	printAnchor(anchorInfo);
	            	// 2、今日经纪人信息
	            	var todayBrokers=responseData.broke_today_ranked;
	            	printToday(todayBrokers);
	            	// 3、经纪人总榜信息
	            	var allBrokers=responseData.broke_total_ranked;
	            	printAll(allBrokers);
	            	// console.log(allBrokers);
				}
			}
		}
		xhrRequest.send(str);
	}
	//2、GET：定义请求参数
	var getOption={
		ajaxType:"GET",	
		urlStr:"json-datas/Broker/total.json",
		ajaxData:null		
	}
	// 3、請求數據
	Ajax(getOption);
	// --------------------------------------------------------------------615 end



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
		$("#totalTodayLists").empty().append(today_html);
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
		$("#totalLists").empty().append(all_html);
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
		// ---0609添加  總積分
		var totalScoreDom=getDomId("anchorTotalScore");
		var total_score=info.total_score;
		totalScoreDom.innerHTML=total_score;
	}

	//3 定位日期
	function changeDate(){
		// 12號 備用
		// var dateObj={
		// 	"12":0,
		// 	"13":1,
		// 	"14":2,
		// 	"15":3,
		// 	"16":4,
		// 	"17":5,
		// 	"18":6,
		// 	"19":7,
		// 	"20":8,
		// 	"21":9,
		// 	"22":10,
		// 	"23":11,
		// 	"24":12,
		// 	"25":13
		// };
		var dateObj={
			"8":0,
			"9":1,
			"10":2,
			"11":3,
			"12":4,
			"13":5,
			"14":6,
			"15":7,
			"16":8,
			"17":9,
			"18":10,
			"19":11,
			"20":12,
			"21":13
		};
		// var nowDate=new Date();
		var nowDate=new Date("2017-06-20");
		// 把日期作為key，对应按钮的index
		var key=nowDate.getDate();
		var index=dateObj[key];
		if(key<8||key>21){
			console.log(key);
			$(".change-date").addClass('gray-bg');
		}else{
			$(".change-date").eq(index).addClass('selected choice-date').siblings().removeClass('selected');
			$(".change-date").eq(index).nextAll().addClass('gray-bg');
			$(".change-date").eq(index).prevAll().addClass('choice-date');
		}
		
	}
	changeDate();
	// 重新选择之前的日期查看榜单
	$(".choice-date").click(function(){
		var $that=$(this);
		if(!$that.hasClass('selected')){
			var thisTime=$that.attr("data-time");
			$that.addClass('selected').siblings().removeClass('selected');
			console.log(thisTime);
			// ---------------------------0615 start
			// $.post(domain+'v2/html/broke/get_broke_ranked_info', {"broke_pfid":pfid, "date":thisTime},
			// 	function(DATA) {
			// 		if(DATA.ret_code=="0"){
			// 			// 
			// 			var nowTodaBroker=DATA.broke_today_ranked;
			// 			printToday(nowTodaBroker);
			// 		}
			// 	},
			// 	"json"
			// );
			// ---------------------------0615 end
		}
	});
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

	// 活動細則
	$("#rule-btn").click(function(){
		$("#container").hide();
		$("#detialRuleMask").show();
	});
	$("#detialRuleClose").click(function(){
		$("#detialRuleMask").hide();
		$("#container").show();
	});

	if(isiOS==true){
		window.webkit.messageHandlers.langWeb2App_topback.postMessage({body:'{"flag":"1"}'});
	} else {
		javascriptinterface.langWeb2App_topback("1");
	}

// }();