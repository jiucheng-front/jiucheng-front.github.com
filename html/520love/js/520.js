/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-16 16:55:16
 * @version $Id$
 */

var isNotAjax=true;

if(isNotAjax){
    var data={
	  "ret_code": 0,
	  "ret_msg": "ok",
	  "user_info": {
	    "pfid": false,
	    "headimg": "/html/520love/images/headimg.png",
	    "nickname": "@李桃子喜歡茉莉~",
	    "charm_name": "蒹葭伊人",
	    "charm_level_schedule": 80,
	    "live_id": null,
	    "live_key": null,
	    "live_url": null,
	    "stream_direction": 0,
	    "live_pfid": 0
	  },
	  "user_gift_info": [
	    {
	      "id": 1,
	      "icon": "http://",
	      "charm_val": 10,
	      "get_num": 0
	    },
	    {
	      "id": 2,
	      "icon": "http://",
	      "charm_val": 2,
	      "get_num": 10
	    },
	    {
	      "id": 3,
	      "icon": "http://",
	      "charm_val": 520,
	      "get_num": 0
	    },
	    {
	      "id": 4,
	      "icon": "http://",
	      "charm_val": 1314,
	      "get_num": 10
	    },
	    {
	      "id": 5,
	      "icon": "http://",
	      "charm_val": 1520,
	      "get_num": 20
	    },
	    {
	      "id": 6,
	      "icon": "http://",
	      "charm_val": 2999,
	      "get_num": 30
	    },
	    {
	      "id": 7,
	      "icon": "http://",
	      "charm_val": 5200,
	      "get_num": 20
	    },
	    {
	      "id": 8,
	      "icon": "http://",
	      "charm_val": 6666,
	      "get_num": 10
	    },
	    {
	      "id": 9,
	      "icon": "http://",
	      "charm_val": 13140,
	      "get_num": 10
	    },
			{
	      "id": 10,
	      "icon": "http://",
	      "charm_val": 5464,
	      "get_num": 132
	    }
	  ],
	  "charm_and_level": [
	    {
	      "id": 1,
	      "name": "蒹葭伊人",
	      "level_val": 100000,
	      "popular": 10000
	    },
	    {
	      "id": 2,
	      "name": "傾心戀人",
	      "level_val": 300000,
	      "popular": 20000
	    },
	    {
	      "id": 3,
	      "name": "知心愛人",
	      "level_val": 600000,
	      "popular": 30000
	    },
	    {
	      "id": 4,
	      "name": "大眾情人",
	      "level_val": 1000000,
	      "popular": 40000
	    },
	    {
	      "id": 5,
	      "name": "萬人迷",
	      "level_val": 1500000,
	      "popular": 50000
	    }
	  ]
	}
}

// 返回顶部
$(".returnTop").bind("click",function(){
				$(window).scrollTop(0);
			});  



function getDate(){
		// $.post(domain+'v2/activity/new_user_consume_rank ', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_pfid },
		 	// function(data) {
			/*optional stuff to do after success */
			if(data.ret_code=="0"){
                var caller=data.user_info;
                var gift=data.user_gift_info;
                sortData(caller);
								// 2 渲染9個禮物
                prentData(gift);
			}
		// },
		// "json"
		// );
	}
getDate();


function sortData(own){
		var myName=own.nickname;
		var myImg=own.headimg;
		// 進度條寬度
		var myNum=own.charm_level_schedule+"%";
		
		var user_html="";
		user_html+='<div class="avatarBg">';
		user_html+='<img src="'+myImg+'"  alt="">';
		user_html+='</div>';
		user_html+='<div class="nickName">'+myName+'</div>';
		user_html+='<div class="progressBox">';
		user_html+='<div class="progress" id="progress">';
		user_html+='</div><div class="level">';
		user_html+='<span>'+myNum+'</span>';
		user_html+='</div></div>';
		user_html+='<div class="levelicon">';
		user_html+='<img src="/html/520love/images/wanrenmi.png"  alt="">';
		user_html+='</div>';
		
		$("#myInfo").append(user_html);
		$("#progress").css({
				"width":myNum
			});
	// console.log(own);
}



var datas=data.user_gift_info;


function prentData(datas){
		var gift_html="";
		for(var g=0,leng=datas.length;g<leng;g++){
			var thisGitft=datas[g];
			// 獲取的禮物數量是否為0
			var getNum=thisGitft.get_num;
			// index去对应哪个礼物
			var index=g+1;
			// 魅力值
			var myCount=thisGitft.charm_val;
			// 
			if(getNum!=0){
				gift_html+='<li>';
			}else{
				gift_html+='<li class="none">';
			}
				gift_html+='<img  src="/html/520love/images/gift'+index+'.png"  alt="">';
				gift_html+='<span>+'+myCount+'魅力值</span>';
				gift_html+='<p>已獲得'+getNum+'個</p>';
				gift_html+='</li>';
		}
		$("#giftBox").append(gift_html);
		// console.log(datas);
}

