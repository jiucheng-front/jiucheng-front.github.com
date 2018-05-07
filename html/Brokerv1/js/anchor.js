/*
* @Author: wangjianfei
* @Date:   2017-06-06 12:51:16
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-09 19:58:15
*/

'use strict';
!function(){
	// 1、公用：
	// 通过ID获取DOM
	function getDomId(id){
		return document.getElementById(id);
	}
	// 渲染DOM
	function printDom(id,html){
		document.getElementById(id).innerHTML=html;
	}

	// 模拟数据
	// -------------------------613 start
	//2.0 请求数据
	// function getDate(){
	// 	// $.post(domain+'v2/html/broke/get_index_info', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_pfid,"broke_pfid":pfid},
	// 	 	// function(data) {
	//             if(data.ret_code=="0"){
	// 				console.log(data);
	//             	// 主播信息
	//             	var anchor_info=data.anchor_info;
	//             	filterInfo(anchor_info);
	//             	// 底部用户信息
	//             	var broker_info=data.broke_info;
	//             	printBottom(broker_info);
	//             }
	// 	    // },
	// 		// "json"
	//     // );
	// }
	// getDate();
// ----------------------613 end


// -------------------------------------------------615 start
// 1、封裝AJAX函數
function nativeAjax(option,success,error){
	// 定义domain,方便环境切换
	var domain='https://' + window.location.host + '/';
	var url=domain+option.urlStr;
	var type=option.ajaxType;
	var data=option.ajaxData;
	var xhrRequest=null;
	if(window.XMLHttpRequest){
        xhrRequest = new XMLHttpRequest();
    } else {
        xhrRequest = new ActiveXObject('Microsoft.XMLHTTP')
    }
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
		if(xhrRequest.readyState==4){
			if(xhrRequest.status==200){
				// 1.1、格式化返回的数据
				var responseData=JSON.parse(xhrRequest.responseText);
				// 1.2、这里操作数据--------
				success(responseData);
			}else{
				// 1.3、没成功返回HTTP状态码
				error(xhrRequest.status);
			}
		}
	}
	xhrRequest.send(str);
}
//2、GET：定义请求参数
var getOption={
	ajaxType:"GET",	
	urlStr:"json-datas/Broker/anchor.json",
	ajaxData:null		
}
// 3、請求數據
nativeAjax(getOption,function(data){
	// 成功函数
	console.log(data);
	// 主播信息
	var anchor_info=data.anchor_info;
	filterInfo(anchor_info);
	// 底部用户信息
	var broker_info=data.broke_info;
	printBottom(broker_info);
},function(error){
	// 失败返回HTTP状态码
	console.log(error);
});
// -------------------------------------------------615 end










	// 1、主播信息过滤和渲染
	function filterInfo(anchorInfo){
		//1 主播数据
		var anchor_pfid=anchorInfo.pfid;
		var anchor_Img=anchorInfo.headimg;
		var anchor_Name=anchorInfo.nickname;
		var anchor_TodayIncome=anchorInfo.today_diamond;
		var anchor_NextLevel=anchorInfo.act_level_schedule;
		//2 DOM
		var anchorImgDom=getDomId("anchorTopImg");
		var anchorNameDom=getDomId("anchorTopName");
		var anchorTodayIncomeDom=getDomId("anchorIncome");
		var anchorNextLevel=getDomId("anchorNextLevel");
		anchorImgDom.src=anchor_Img;
		anchorNameDom.innerHTML=anchor_Name;
		anchorTodayIncomeDom.innerHTML=anchor_TodayIncome;
		anchorNextLevel.style.width=anchor_NextLevel+"%";
		//3 对应的级别和class、icon需要确认
		var artistLevelDom=getDomId("artistLevel");
		// 排除0的可能
		var anchor_LevelIndex=anchorInfo.act_id;
		var nowLevelArr={
			"1":["anchor-level-one","潛力之星"],
			"2":["anchor-level-two","希望之星"],
			"3":["anchor-level-three","明日之星"],
			"4":["anchor-level-four","人氣之星"],
			"5":["anchor-level-five","超級巨星"]
		}
		if(anchor_LevelIndex!=0){
			var addClassName=nowLevelArr[anchor_LevelIndex][0];
			artistLevelDom.innerHTML=nowLevelArr[anchor_LevelIndex][1];
			artistLevelDom.className=addClassName;
		}
		//2、 中间切换对应的数据
		var Brokers=anchorInfo.ranking;
		var todayBrokers=Brokers.today;
		var totalBrokers=Brokers.total;
		// 今日经纪人 渲染
		var today_str=printBrokers(todayBrokers);
		printDom("anchorToday",today_str);
		// 总榜的经纪人  渲染
		var total_str=printBrokers(totalBrokers);
		printDom("anchorTotal",total_str);
	}

	// 2.1、中间切换的渲染
	function printBrokers(brokersData){
		var str_html="";
		var length=brokersData.length;
		for(var i=0;i<length;i++){
			var thisBroker=brokersData[i];
			var diamondCount=thisBroker.contribution_diamond;
			var brokers_img=thisBroker.headimg;
			var brokers_nickname=thisBroker.nickname;
			var brokers_pfid=thisBroker.pfid;
			var index=i+1;
			str_html+='<li><b>'+index;
			str_html+='</b>';
			str_html+='<div class="anchor-listimg">';
			str_html+='<img src="'+brokers_img+'" alt="" class="headImg">';
			str_html+='<i></i></div>';
			str_html+='<div class="anchor-listmsg">';
			str_html+='<h3>'+brokers_nickname+'</h3>';
			str_html+='<p><span>我看好妳</span>';
			str_html+='<b>'+diamondCount+'</b></p></div></li>';
		}
		return str_html;
	}

	///2、底部主播
	function printBottom(brokerInfo){
		// 分别对应的数据
		var brokerInfo_pfid=brokerInfo.pfid;
		var broker_Img=brokerInfo.headimg;
		var broker_Name=brokerInfo.nickname;
		var artist_count=brokerInfo.anchor_num;
		// DOM
		var brokerImgDom=getDomId("anchorBottomImg");
		var brokerNameDom=getDomId("anchorBottomName");
		var brokerCountDom=getDomId("anchorArtistsNum");
		brokerImgDom.src=broker_Img;
		brokerNameDom.innerHTML=broker_Name;
		brokerCountDom.innerHTML=artist_count;
		// 按钮追加自定义属性pfid,用于跳转
		var artistBtnDom=getDomId("artistBtn");
		artistBtnDom.setAttribute("data-pfid",brokerInfo_pfid);

	}

	// 1、切換
	$(".anchor-tabbtn").click(function(){
		if(!$(this).hasClass('selected')){
			var index=$(this).index();
			$(this).addClass('selected').siblings().removeClass('selected');
			$(".anchor-list").eq(index).addClass('anchorSelected').siblings().removeClass('anchorSelected');
		}
	});


	///2.返回頂部
	$(".backTop").click(function(){
		$(document).scrollTop(0);
	});

	$(document).scroll(function(){
		if ($(document).scrollTop() > 300) {
				$('.backTop').show();
		} else {
				$('.backTop').hide();
		}
	});
	// 跳转到总榜---0613
	// $("#go_total").click(function(){
	// 	$("#jumpTotal").trigger('submit');
	// });
	// // 跳转到个人
	// $("#artistBtn").click(function(){
	// 	$("#jumpPersonal").trigger('submit');
	// });
	// -----------------------------------0615
	$("#go_total").click(function(){
		var str=domain+"html/Brokerv1/totalList.html";
		window.open(str,"target");
	});
	// 跳转到个人
	$("#artistBtn").click(function(){
		var url=domain+"html/Brokerv1/personal.html";
		window.open(url,"target");
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
	// if(isiOS==true){
	// 	window.webkit.messageHandlers.langWeb2App_topback.postMessage({body:'{"flag":"1"}'});
	// } else {
	// 	javascriptinterface.langWeb2App_topback("1");
	// }
}();