/*
* @Author: wangjianfei
* @Date:   2017-04-28 15:32:29
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-02 17:35:23
*/

'use strict';
var u = navigator.userAgent,
    app = navigator.appVersion;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端


var isNotAjax=false;
if(isNotAjax){
	var data={
	  "ret_code": "0",
	  "ret_msg": "ok",
	  "data": {
	    "0": [
	      {
	        "pfid": 1000010,
	        "nickname": "gggggg",
	        "headimg": "http://blob.ufile.ucloud.com.cn/f9cb7d8ac961fb9b3d5a882aea55bfe5",
	        "count": 5,
	        "follow_status": 1
	      },
	      {
	        "pfid": 1000049,
	        "nickname": "思考解决",
	        "headimg": "http://blob.ufile.ucloud.com.cn/6b7f50b02ed10b72159ccf1f00a73ab9.jpg",
	        "count": 23,
	        "follow_status": 1
	      },
	      {
	        "pfid": 1000012,
	        "nickname": "c224002",
	        "headimg": "http://blob.ufile.ucloud.com.cn/0d94ae9dc33721c87af78a7b2099f5a7ab7395972444c7ab979e3dea46e8ba2e",
	        "count": 0,
	        "follow_status": 0
	      },
	      {
	        "pfid": 1000052,
	        "nickname": "upper",
	        "headimg": "http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920",
	        "count": 7,
	        "follow_status": 1
	      },
	      {
	        "pfid": 1000830,
	        "nickname": "58665",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a765a85a32fde0343476d3d5a54ce686d9370cd4e35f4ac941661c2ab6746bcd",
	        "count": 0,
	        "follow_status": null
	      },
	      {
	        "pfid": 1000040,
	        "nickname": "🐾\"sting\"💤",
	        "headimg": "http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg",
	        "count": 4,
	        "follow_status": 0
	      },
	      {
	        "pfid": 1000039,
	        "nickname": "哇呀唔唔無武呃呃😂哇咔",
	        "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd",
	        "count": 0,
	        "follow_status": 1
	      }
	    ],
	    "1": [
	      {
	        "pfid": 1000010,
	        "nickname": "gggggg",
	        "headimg": "http://blob.ufile.ucloud.com.cn/f9cb7d8ac961fb9b3d5a882aea55bfe5",
	        "count": 20,
	        "follow_status": null
	      },
	      {
	        "pfid": 1000049,
	        "nickname": "思考解决",
	        "headimg": "http://blob.ufile.ucloud.com.cn/6b7f50b02ed10b72159ccf1f00a73ab9.jpg",
	        "count": 19,
	        "follow_status": 0
	      },
	      {
	        "pfid": 1000012,
	        "nickname": "c224002",
	        "headimg": "http://blob.ufile.ucloud.com.cn/0d94ae9dc33721c87af78a7b2099f5a7ab7395972444c7ab979e3dea46e8ba2e",
	        "count": 1,
	        "follow_status": 1
	      },
	      {
	        "pfid": 1000052,
	        "nickname": "upper",
	        "headimg": "http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920",
	        "count": 1,
	        "follow_status": null
	      },
	      {
	        "pfid": 1000830,
	        "nickname": "58665",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a765a85a32fde0343476d3d5a54ce686d9370cd4e35f4ac941661c2ab6746bcd",
	        "count": 1,
	        "follow_status": null
	      },
	      {
	        "pfid": 1000040,
	        "nickname": "🐾\"sting\"💤",
	        "headimg": "http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg",
	        "count": 1,
	        "follow_status": 1
	      },
	      {
	        "pfid": 1000039,
	        "nickname": "哇呀唔唔無武呃呃😂哇咔",
	        "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd",
	        "count": 1,
	        "follow_status": null
	      }
	    ],
	    "my": {
	      "live_id": null,
	      "live_key": "",
	      "stream_direction": 0,
	      "live_url": "",
	      "headimg": "http://blob.ufile.ucloud.com.cn/c8d240b8dfb870238431f43a392b312fba00a22c15230aa66f8e33cacc6debda",
	      "nickname": "珍珠奶茶😱芋頭紅豆薏米",
	      "pfid": 1000048,
	      "follow_status": 0
	    }
	  }
	}
}

var isLiving="";
//2.0 请求数据
function getDate(){
	$.post(domain+'v2/activity/dracula_data', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	 	function(data) {
			/*optional stuff to do after success */
				if(data.ret_code=="0"){
					var users=data.data;
					isLiving=data.data.my;
					resetData(users);
					// 是否在直播
					isLive(isLiving);
				}
		},
		"json"
	);
}
getDate();
// resetData
var arrdata;
function resetData(users){
	arrdata=[
		{
			lists:users[0]
		},
		{
			lists:users[1]
		}
	];
	for(var m=0;m<arrdata.length;m++){
		var lists=arrdata[m].lists;
		sortData(lists);
		prentData(m,lists);
		// console.log(lists);
		
	}
}
// 1 把人員按照積分从高到底排列
function sortData(lists){
	for(var n=1;n<lists.length;n++){
		for(var k=0;k<lists.length-1;k++){
			var max=lists[k].count;
			var nextCount=lists[k+1].count;
			if(nextCount>max){
				var preData=lists[k];
				lists[k]=lists[k+1];
				lists[k+1]=preData;
			}
		}
	}
	// prentData(m,lists);
}
// 2
function prentData(num,userData){
	var user_html="";
	$(".userlist"+num).empty();
	for(var i=0,leng=userData.length;i<leng;i++){
		var userList=userData[i];
		var followStatus=userList.follow_status;
		var userName=userList.nickname;
		// var user_html="";
		var index=i+1;
		user_html+="<li data-pfid='"+userList.pfid+"'>";
		user_html+="<b>0"+index+".</b>";
		user_html+="<div class='main-img'>";
		
		// 是否是神秘人
		if(userName){
			user_html+="<img src='"+userList.headimg+"' alt=''>";
			user_html+="</div>";
			user_html+="<span>"+userName+"</span>";
		}else{
			user_html+="<img src='/html/degula/images/defaultimg.png' alt=''>";
			user_html+="</div>";
			user_html+="<span>神秘人</span>";
		}
		user_html+="<b>"+userList.count+"</b>"
		// 是否可以追蹤
		if(followStatus==0){
			user_html+="<button class=willFollow data-pfid='"+userList.pfid+"'>追蹤</button>";
			// console.log("可以追蹤")
		}
		user_html+="</li>";
		// 
		// $(".user-list"+num).append(user_html);
	}
	$(".userlist"+num).append(user_html);
	console.log(userData);
}

// 中間導航的切換
var $navbtn=$(".nav-btn");
$navbtn.click(function(){
	var index=$(this).attr('data-index');
	$(this).addClass('on').siblings().removeClass('on');
	$(".user-list").eq(index).show().siblings('.user-list').hide();
	// 重新請求一次數據，刷新追蹤狀態
	getDate();
	console.log(index);
});

// 頂部是否是在直播狀態
function isLive(live){
	// console.log(live);
	var liveId=live.live_id;
	var liveKey=live.live_key;
	var liveUrl=live.live_url;
	var direction=live.stream_direction;
	var headimg=live.headimg;
	var liveNickname=live.nickname;
	var livePfid=live.pfid;
	var nowstatus=live.follow_status;
	if(liveId!=null){
		$("#isLiving").css({
			display:"block"
		});
		$("#isLiving").click(function(){
			h5toRoom(livePfid,liveNickname,liveId,liveUrl,liveKey,direction);
		});
	}else if(liveId==null){
		$("#isLiving").css({
			display:"none"
		});
		if(nowstatus==1){
			$("#isFlow").css({
				display:"none"
			});
		}else if(nowstatus==0){
			$("#isFlow").css({
				display:"block"
			});
			$("#isFlow").click(function(){
				$(this).addClass('followed');
				follow(livePfid);
			});
		}
	}
}

// 點擊追蹤按鈕
$(".user-list").on('click', '.willFollow', function(event) {
	var willPfid=$(this).attr('data-pfid');
	$(this).addClass('followed');
	console.log(willPfid);
	//公用方法
	follow(willPfid);
})
//客戶端返回追蹤狀態
function langApp2Web_httprtn(result,follow){
	if(isiOS == true){
		if(JSON.parse(result).ret_code == "0"){
			$(".followed").css({
				display:"none"
			}); 
		}else{
			alert(JSON.parse(result).ret_msg);
		}
	}else{
		if(JSON.parse(follow).ret_code == "0"){
			$(".followed").css({
				display:"none"
			}); 
		}else{
			alert(JSON.parse(follow).ret_msg);
		}
	}
		
}

$(document).scroll(function(){
	if ($(document).scrollTop() > 300) {
			$('.backTop').show();
	} else {
			$('.backTop').hide();
	}
})

//h5进入直播间
function h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction){
	if(isiOS==true){
			window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"live_id":"'+liveid+'","className":"PlayFlowViewController","live_url":"'+liveurl+'","live_key":"'+livekey+'","stream_direction":'+direction+',"pfid":"'+pfid+'"}'});
		}else{
			javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.room.YunfanLiveActivity','{"pfid":"'+pfid+'","nickname":"'+nickname+'","live_id":"'+liveid+'","stream_direction":'+direction+',"liveurl":"'+liveurl+'","live_key":"'+livekey+'"}')
		}
}

//h5关注
function follow(pfid){
	if(isiOS==true){  
			window.webkit.messageHandlers.langWeb2App_httpreq.postMessage({body:'{"base_url":"'+domain+'v2/","requst_url":"friend/follow","param":{"be_pfid":"'+pfid+'","action":"1"}}'});
        }else{
			javascriptinterface.langWeb2App_httpreq(domain+'v2/friend/follow','{"key": ["be_pfid","action"],"value": ["'+pfid+'","1"],"needlogin": false,"callback": true,"callback_tag": "follow"}'); 
        }
}