/*
* @Author: wangjianfei
* @Date:   2017-06-06 12:51:16
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-08 18:18:11
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
	var isNotAjax=true;
	if(isNotAjax){
		var data={
		  "ret_code": "0",
		  "ret_msg": "ok",
		  "anchor_info": {
			    "pfid": "1024168",
			    "headimg": "http://playback-langlive.ufile.ucloud.cn/ce533fc1f9c0102ff649642dc989563f.jpg",
			    "nickname": "佛菩萨哈哈哈哈东方今典怕时间分配到",
			    "today_diamond": 225010,
			    "act_id": 5,
			    "act_title": "超級巨星",
			    "act_name": "",
			    "act_level_schedule": 90,
			    "ranking": {
			      "today": [
				        {
				          "pfid": "1020025",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/128dc4649a19a496cc1c95633e8e2517",
				          "nickname": "含師傅",
				          "contribution_diamond": 175010
				        },
				        {
				          "pfid": "1020023",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/3757371cfcb68e65aef24c3d309f2069",
				          "nickname": "君風雲",
				          "contribution_diamond": 35000
				        },
				        {
				          "pfid": "1020021",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/60ac2fc56905879a7076a948e94c938a",
				          "nickname": "君邪",
				          "contribution_diamond": 3999
				        },
				        {
				          "pfid": "1020015",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/2fb118dd2c48ba57d463ab255cf60775",
				          "nickname": "君無憂",
				          "contribution_diamond": 1501
				        },
				        {
				          "pfid": "1020009",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/094d18a273ad26ca3f3c628d34346414",
				          "nickname": "君子之爭",
				          "contribution_diamond": 1500
				        },
				        {
				          "pfid": "1020000",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/85eb61f3d962e7c81ee75f63cc363b0f",
				          "nickname": "向飛天",
				          "contribution_diamond": 1500
				        },
				        {
				          "pfid": "1020014",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/a3c8605f610f053784f2dcb59c8a95ce",
				          "nickname": "君樂",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020013",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/42d5ed2fdb862c770f96d1854ae83f61",
				          "nickname": "君彥",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020012",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/c3a0f05f75153312b27e0de92a762d11",
				          "nickname": "君子風雲",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020011",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/97c6c5def9ece9b291b6d1198930fe7a",
				          "nickname": "君子無雙",
				          "contribution_diamond": 1000
				        }
			      ],
			      "total": [
				        {
				          "pfid": "1020025",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/97c6c5def9ece9b291b6d1198930fe7a",
				          "nickname": "发挥地方适合",
				          "contribution_diamond": 175010
				        },
				        {
				          "pfid": "1020023",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/c3a0f05f75153312b27e0de92a762d11",
				          "nickname": "13245君風雲",
				          "contribution_diamond": 35000
				        },
				        {
				          "pfid": "1020021",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/60ac2fc56905879a7076a948e94c938a",
				          "nickname": "xxx君邪",
				          "contribution_diamond": 3999
				        },
				        {
				          "pfid": "1020015",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/85eb61f3d962e7c81ee75f63cc363b0f",
				          "nickname": "4646554646",
				          "contribution_diamond": 1501
				        },
				        {
				          "pfid": "1020009",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/094d18a273ad26ca3f3c628d34346414",
				          "nickname": "君子之爭",
				          "contribution_diamond": 1500
				        },
				        {
				          "pfid": "1020000",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/c3a0f05f75153312b27e0de92a762d11",
				          "nickname": "向飛天",
				          "contribution_diamond": 1500
				        },
				        {
				          "pfid": "1020014",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/a3c8605f610f053784f2dcb59c8a95ce",
				          "nickname": "君樂",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020013",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/42d5ed2fdb862c770f96d1854ae83f61",
				          "nickname": "君彥",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020012",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/3757371cfcb68e65aef24c3d309f2069",
				          "nickname": "君子風雲",
				          "contribution_diamond": 1000
				        },
				        {
				          "pfid": "1020011",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/128dc4649a19a496cc1c95633e8e2517",
				          "nickname": "君子無雙",
				          "contribution_diamond": 1000
				        }
			      ]
			    }
		  },
		  "broke_info": {
		    "pfid": "1020025",
		    "headimg": "http://playback-langlive.ufile.ucloud.com.cn/128dc4649a19a496cc1c95633e8e2517",
		    "nickname": "含師傅",
		    "anchor_num": 2
		  }
		}
	}
	//2.0 请求数据
	function getDate(){
		// $.post(domain+'v2/html/broke/get_index_info', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
		 	// function(data) {
	            /*optional stuff to do after success */
	            if(data.ret_code=="0"){
					console.log(data);
	            	// 主播信息
	            	var anchor_info=data.anchor_info;
	            	filterInfo(anchor_info);
	            	// 底部用户信息
	            	var broker_info=data.broke_info;
	            	printBottom(broker_info);
	            }
		    // },
			// "json"
	    // );
	}
	getDate();



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
		var anchor_LevelIndex=anchorInfo.act_id;//未给到
		var nowLevelArr={
			"1":["anchor-level-one","潛力之星"],
			"2":["anchor-level-two","希望之星"],
			"3":["anchor-level-three","明日之星"],
			"4":["anchor-level-four","人氣之星"],
			"5":["anchor-level-five","超級巨星"]
		}
		var addClassName=nowLevelArr[anchor_LevelIndex][0];
		artistLevelDom.innerHTML=nowLevelArr[anchor_LevelIndex][1];
		artistLevelDom.className=addClassName;
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
			str_html+='<b>'+diamondCount+'磚</b></p></div></li>';
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
	// 跳转到总榜
	$("#go_total").click(function(){
		$("#jumpTotal").trigger('submit');
	});
	// 跳转到个人
	$("#artistBtn").click(function(){
		$("#jumpPersonal").trigger('submit');
	});
}();