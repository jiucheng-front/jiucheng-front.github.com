/*
* @Author: wangjianfei
* @Date:   2017-05-22 16:35:01
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-23 15:53:43
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
	        "round_one_count": 999999,
	        "round_two_count": 29,
	        "nickname": "��\"sting\"��",
	        "headimg": "http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hj的打算fjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000039",
	        "round_one_count": 8987829,
	        "round_two_count": 13,
	        "nickname": "哇呀唔唔無武呃呃��哇咔",
	        "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": " 阿薩德 ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 1
	      },
	      {
	        "pfid": "1000044",
	        "round_one_count": 645646,
	        "round_two_count": 10,
	        "nickname": "嘻嘻哈哈����1213",
	        "headimg": "http://blob.ufile.ucloud.com.cn/45bd20f480c941f800a101bb484cb8be.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": " 打工的 ",
	        "follow_status": 1
	      },
	      {
	        "pfid": "1543044",
	        "round_one_count": 1112387,
	        "round_two_count": 0,
	        "nickname": "测试姓名1",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": " 打算 ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1002045",
	        "round_one_count": 1545687,
	        "round_two_count": 0,
	        "nickname": "测试姓名2",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000054",
	        "round_one_count": 987813545,
	        "round_two_count": 12,
	        "nickname": "(*๓´╰╯`๓)♡88",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "hjfjfj ",
	        "round_two_key_man": "hjfjfj ",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000052",
	        "round_one_count": 78979752,
	        "round_two_count": 0,
	        "nickname": "upper",
	        "headimg": "http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "撒旦",
	        "round_two_key_man": "水電費",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000037",
	        "round_one_count": 45646425,
	        "round_two_count": 0,
	        "nickname": "湉湉开心湉湉开心?",
	        "headimg": "http://blob.ufile.ucloud.com.cn/ff33eb72fe3940bdb267098975785e7446e7b4c4eae0b64f8bd75c8ffb6b24be?iopcmd=thumbnail&type=11&width=80&height=80",
	        "round_one_key_man": "第三代",
	        "round_two_key_man": "撒旦",
	        "follow_status": 0
	      },
	      {
	        "pfid": "1000002",
	        "round_one_count": 789798211,
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
	      "follow_status": 0,
	      "some_count":12
	    }
	  }
	}
}

//2.0 请求数据
function getDate(){
	// $.post(domain+'v2/activity/dracula', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	 	// function(data) {
		/*optional stuff to do after success */
			if(data.ret_code=="0"){
				// 是否在直播
				var isLiving=data.data.my;
				isLive(isLiving);
				//投票的選手
				var users=data.data.list;
				printData(users);
				// 當前票數
				var num=isLiving.some_count;
				render(num);
			}
	// },
	// "json"
	// );
}
getDate();
// 當前票數
function render(num){
	$("#myTicket").append(num);
}
// 中間
function printData(userlist){
	var vote_html="";
	for(var i=0,leng=userlist.length;i<leng;i++){
		var voters=userlist[i];
		var vote_id=voters.pfid;
		var vote_num=voters.round_one_count;
		var vote_name=voters.nickname;
		var vote_img=voters.headimg;
		vote_html+='<li>';
		vote_html+='<div class="main-img">';
		vote_html+='<img src="'+vote_img+'" alt="">';
		vote_html+='</div>';
		vote_html+='<p>ID '+vote_id+'</p>';
		vote_html+='<p><span>'+vote_num+'</span></p>';
		vote_html+='<b data-votecount="" data-tickets="'+vote_num+'" data-id="'+vote_id+'" class="vote-btn">投票</b>';
		vote_html+='</li>';
	}
	$("#vote-box").append(vote_html);
	// 投票事件
	voteEvent();
}
// 是否有投票的限制？
function voteEvent(){
	$("#vote-box").on('click', '.vote-btn', function(event) {
		event.preventDefault();
		event.stopPropagation();
		console.log(arguments);
		// 获得是否被点击过的数量:没投票时候为0
		var voteCount=parseFloat($(this).attr('data-votecount'))||0;
		var votePfid=$(this).attr('data-pfid');
		if(voteCount==0){
			$(this).attr('data-votecount',voteCount+1);
			alert("感谢您投了宝贵的一票!！");
			// 投过票之后按钮样式是否有变化？
		}else{
			alert("您已经为该用户投过票了！！");
		}
	});
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
	$("#willGo").click(function(){
		if(liveId!=null){
			alert("进入直播间");
			// h5toRoom(livePfid,liveNickname,liveId,liveUrl,liveKey,direction);
		}else{
			// h5toHomepage(livePfid,liveNickname);
			alert("进入个人主页");
		}
	});
}


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

