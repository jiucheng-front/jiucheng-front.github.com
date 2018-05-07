/*
* @Author: wangjianfei
* @Date:   2017-04-28 15:32:29
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-22 11:16:44
*/

'use strict';

var isNotAjax=true;
if(isNotAjax){
	var data={
	  "ret_code": "0",
	  "ret_msg": "ok",
	  "data": {
	    "list": [
	      {
	        "pfid": "1000040",
	        "round_one_count": 9,
	        "round_two_count": 29,
	        "nickname": "��\"sting\"��",
	        "headimg": "http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hj的打算fjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000039",
	        "round_one_count": 29,
	        "round_two_count": 13,
	        "nickname": "哇呀唔唔無武呃呃��哇咔",
	        "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": " 阿薩德 ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 1
	      },
	      {
	        "pfid": "1000044",
	        "round_one_count": 6,
	        "round_two_count": 10,
	        "nickname": "嘻嘻哈哈����1213",
	        "headimg": "http://blob.ufile.ucloud.com.cn/45bd20f480c941f800a101bb484cb8be.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": " 打工的 ",
	        "follow_status": 1
	      },
	      {
	        "pfid": "1",
	        "round_one_count": 11,
	        "round_two_count": 0,
	        "nickname": "测试姓名1",
	        "headimg": null,
	        "round_one_key_man": " 打算 ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "2",
	        "round_one_count": 15,
	        "round_two_count": 0,
	        "nickname": "测试姓名2",
	        "headimg": null,
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000054",
	        "round_one_count": 9,
	        "round_two_count": 12,
	        "nickname": "(*๓´╰╯`๓)♡88",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000052",
	        "round_one_count": 0,
	        "round_two_count": 0,
	        "nickname": "upper",
	        "headimg": "http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "撒旦",
	        "round_two_key_man": "水電費",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000037",
	        "round_one_count": 0,
	        "round_two_count": 0,
	        "nickname": "湉湉开心湉湉开心?",
	        "headimg": "http://blob.ufile.ucloud.com.cn/ff33eb72fe3940bdb267098975785e7446e7b4c4eae0b64f8bd75c8ffb6b24be?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "第三代",
	        "round_two_key_man": "撒旦",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000002",
	        "round_one_count": 2,
	        "round_two_count": 0,
	        "nickname": "缘由天定娃娃",
	        "headimg": "http://blob.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
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
	// $.post(domain+'v2/activity/dracula', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	 	// function(data) {
		/*optional stuff to do after success */
			if(data.ret_code=="0"){
				//第一集的数据为
				var users=data.data.list;
				isLiving=data.data.my;
				randData(users,pfid);
				 // 是否在直播
				isLive(isLiving);
			}
	// },
	// "json"
	// );
}
getDate();
// 中間
function randData(userData,pfid){
	var user_html="";
	for(var i=0,length=userData.length;i<length;i++){
		var index=i;
		var userList=userData[i];
		//追蹤
		var followStatus=userList.follow_status;
		//名字
		var userName=userList.nickname;
		//第一次得分
		var oneCount=userList.round_one_count;
		//第二次得分
		var twoCount=userList.round_two_count;
		//第一次貢獻者
		var oneKeyName=userList.round_one_key_man;
		//第二次貢獻者
		var twoKeyName=userList.round_two_key_man;
		if(!oneKeyName){
			oneKeyName=' ';
		}
		if(!twoKeyName){
			twoKeyName=' ';
		}
		//主播頭像，可能為null
		var userImg=userList.headimg;
		var userPfid=userList.pfid;
		user_html+="<li><div class='anthor-list'>";
		user_html+="<div class='anthor-box'><div class='anthor-img'>";
		//1.0 不是神秘人
		if(userImg!=null){
			user_html+="<img src='"+userImg+"' class='anthor'>";
		}else{
			user_html+="<img src='/html/degula/images/defaultimg.png' class='anthor'>"
		}
		user_html+="<b class='icon-"+index+"'></b>";
		user_html+="</div>";
		user_html+="<div class='anthor-msg'>";
		if(userPfid==1||userPfid==2){
			user_html+="<p class='oneUser'>"+userName+"</p>";
		}else{
			user_html+="<p>"+userName+"</p>";
			user_html+="<span>ID:"+userPfid+"</span>";
		}
		user_html+="</div></div>";
		user_html+="<div class='build-list'>";
		user_html+="<p>"+oneCount+"</p>";
		user_html+="<span>"+oneKeyName+"</span>";
		user_html+="</div>";
		user_html+="<div class='build-list'>";
		user_html+="<p>"+twoCount+"</p>";
		user_html+="<span>"+twoKeyName+"</span>";
		user_html+="</div></div>";
		if(pfid==userPfid){
			user_html+="</li>";
		}else{
			if(followStatus==0){
				user_html+="<button class=willFollow data-pfid='"+userPfid+"'></button></li>";
			}else if(followStatus==1){
				user_html+="<button class='followed'>已追蹤</button></li>";
			}
		}
	}
	$("#users-one").append(user_html);
}

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
$("#users-one").on('click', '.willFollow', function(event) {
	var willPfid=$(this).attr('data-pfid');
	$(this).addClass('followed').html("已追蹤");
	console.log(willPfid);
	//公用方法
	follow(willPfid);
})
//客戶端返回追蹤狀態
function langApp2Web_httprtn(result,follow){
	if(isiOS == true){
		if(JSON.parse(result).ret_code == "0"){
			$(".followed").removeClass('willFollow'); 
		}else{
			alert(JSON.parse(result).ret_msg);
		}
	}else{
		if(JSON.parse(follow).ret_code == "0"){
			$(".followed").removeClass('willFollow');  
		}else{
			alert(JSON.parse(follow).ret_msg);
		}
	}
		
}
