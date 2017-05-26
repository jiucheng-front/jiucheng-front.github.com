/*
* @Author: wangjianfei
* @Date:   2017-05-22 16:35:01
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-26 20:26:25
*/

'use strict';

var isNotAjax=true;
if(isNotAjax){
	var data={
	  "ret_code": "0",
	  "ret_msg": "ok",
	  "data": {
	    "vote_result": [
	      {
	        "pfid": "1000040",
	        "nickname": "��\"sting\"��",
	        "headimg": "http://blob.ufile.ucloud.com.cn/3f8f9f008d9d34a9b4cdffd32a06a3d8.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 888888
	      },
	      {
	        "pfid": "1000039",
	        "nickname": "哇呀唔唔無武呃呃��哇咔",
	        "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 656666
	      },
	      {
	        "pfid": "1000044",
	        "nickname": "嘻嘻哈哈����1213",
	        "headimg": "http://blob.ufile.ucloud.com.cn/45bd20f480c941f800a101bb484cb8be.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 787611
	      },
	      {
	        "pfid": "1543044",
	        "nickname": "测试姓名1",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 788787
	      },
	      {
	        "pfid": "1002045",
	        "nickname": "测试姓名2",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 98999
	      },
	      {
	        "pfid": "1000054",
	        "nickname": "(*๓´╰╯`๓)♡88",
	        "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 8787
	      },
	      {
	        "pfid": "1000052",
	        "nickname": "upper",
	        "headimg": "http://blob.ufile.ucloud.com.cn/9256deb2c705849daef63ace024d4fe121e68f712eefdc585692247a52cf1920?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 98798
	      },
	      {
	        "pfid": "1000037",
	        "nickname": "湉湉开心湉湉开心?",
	        "headimg": "http://blob.ufile.ucloud.com.cn/ff33eb72fe3940bdb267098975785e7446e7b4c4eae0b64f8bd75c8ffb6b24be?iopcmd=thumbnail&type=11&width=80&height=80",
	      	"count": 20546
	      },
	      {
	        "pfid": "1000002",
	        "nickname": "缘由天定娃娃",
	        "headimg": "http://blob.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg?iopcmd=thumbnail&type=11&width=80&height=80",
	        "count": 20
	      }
	    ],
	    "ticket_count" : 3
	  }
	};

		// {
		// 	"ret_code":"6000",
		// 	"ret_msg":"投票未开始"
		// }
		// {
		// 	"ret_code":"6001",
		// 	"ret_msg":"投票已結束"
		// }
		// {
		//   "ret_code": "0",//可以正常投票
		//   "ret_msg": "ok",
		//   "data": { 
		//   	"my_ticket" : 2,
		//   	"ticket_count":9999
		//   }
		// }

	var response={
		  "ret_code": "6001",
		  "ret_msg": "ok",
		  "data": { 
		  	"my_ticket" : 2,
		  	"ticket_count":9999
		  }
	}
}

//2.0 请求数据
function getDate(){
	// $.post(domain+'v2/activity/dracula_final_data', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id,"device_id":device_id },
	 	// function(data) {
		/*optional stuff to do after success */
			if(data.ret_code=="0"){
				//投票的選手
				var users=data.data.vote_result;
				printData(users);
				// 當前票數
				var num=data.data.ticket_count;
				render(num);
			}
	// },
	// "json"
	// );
}
getDate();
// 當前票數
function render(num){
	$("#myTicket").empty().append(num);
	// 如果余票为0，投票按钮显示灰色且不能投票
	if(num==0){
		$(".vote-btn").removeClass('vote-btn').addClass('none');
	}
}
// 中間
function printData(userlist){
	var vote_html="";
	for(var i=0,leng=userlist.length;i<leng;i++){
		var voters=userlist[i];
		var vote_id=voters.pfid;
		var vote_num=voters.count;
		var vote_name=voters.nickname;
		var vote_img=voters.headimg;
		vote_html+='<li>';
		vote_html+='<div class="main-img">';
		vote_html+='<img src="'+vote_img+'" alt="">';
		vote_html+='</div>';
		vote_html+='<p>'+vote_name+'</p>';
		vote_html+='<p><span>'+vote_num+'</span></p>';
		vote_html+='<b data-pfid="'+vote_id+'" class="vote-btn">投票</b>';
		vote_html+='</li>';
	}
	$("#vote-box").append(vote_html);
	// 投票事件
	voteEvent();
}
// 是否有投票的限制？
function voteEvent(){
	// console.log(dialogObj);
	$("#vote-box").on('click', '.vote-btn', function(event) {
		event.preventDefault();
		event.stopPropagation();
		// 主播ID
		var votePfid=$(this).attr('data-pfid');
		console.log(votePfid);
		// 接口一旦打開$(this)指向變了
		var that=$(this);
		// $.post(domain+'v2/activity/dracula_final_vote', {"anchor_pfid":votePfid,"device_id":device_id },
		 	// function(response) {
				if(response.ret_code=="0"){
					var Remaining_count=response.data.my_ticket;
					var total_count=response.data.ticket_count;
					var t=$(this).prev("p").find("span").html();
					console.log($(this));
					// alert(total_count);
					var str="<span>"+total_count+"</span>";
					that.prev().empty().append(str);
					render(Remaining_count);
					if(Remaining_count==0){
						$(".vote-btn").removeClass('vote-btn').addClass('none');
					}
				}else if(response.ret_code=="6000"){
					// alert("投票未開始！");
					promptObj.init("投票未開始！");
				}else if(response.ret_code=="6001"){
					// alert("投票已經結束！")
					promptObj.init("投票已經結束！");
				}
		// },
		// "json"
		// );
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

