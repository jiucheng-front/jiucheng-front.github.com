/*
* @Author: wangjianfei
* @Date:   2017-04-10 14:07:52
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-17 11:44:18
*/

'use strict';
$(function(){
	//1、根据数据渲染不同等级的主播
			/*
		{
		    "ret_code": "0",
		    "ret_msg": "ok",
		    "data": {
		        "all_anchor_info": {
		            "1": [ //青铜相框
		                {
		                    "pfid": "1000002",   //主播id
		                    "headimg": "http://playback-langlive.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg",  //主播头像
		                    "nickname": "缘由天定娃娃",  //主播昵称
		                    "sex": "1",  //主播性别
		                    "lvl": "57", //主播等级
		                    "live_id": null, //主播开播状态相关
		                    "status": "0",   //主播开播状态相关
		                    "follow_status": 0  //主播追踪状态相关
		                }
		            ],
		            "2": [], //白银相框
		            "3": [], //黄金相框
		            "4": []  //钻石相框
		        }
		    }
		}

		*/ 
	var isNotAjax=true;
	if(isNotAjax){
		var data={
			  "ret_code": "0",
			  "ret_msg": "ok",
			  "data": {
			    "all_anchor_info": {
			      "1": [
			        {
			          "pfid": "1000002",
			          "headimg": "http://blob.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg",
			          "nickname": "缘由天定娃娃",
			          "sex": "1",
			          "lvl": "57",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000110",
			          "headimg": "http://blob.ufile.ucloud.com.cn/6edcee496f8b38234f38c50ee1ea49f8bb332df142586f88d7943b6aa5419440",
			          "nickname": "下雨天记得要带☔️或雨衣",
			          "sex": "1",
			          "lvl": "63",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000018",
			          "headimg": "http://blob.ufile.ucloud.com.cn/3210eaaeb40dfc37a9ffe983e06158c7.jpg",
			          "nickname": "454654",
			          "sex": "2",
			          "lvl": "300",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1024124",
			          "headimg": "http://blob.ufile.ucloud.com.cn/ee45ce71acecbed01e2e19d97c8e53f109d0589b7d0652d51e276f839f92298c",
			          "nickname": "嗨",
			          "sex": "1",
			          "lvl": "8",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000783",
			          "headimg": "http://blob.ufile.ucloud.com.cn/851c5a81889f306d82b092ce4b4bf8f91c63bec96c34e23f5ac965380875523a",
			          "nickname": "DFGHHuYTFReE",
			          "sex": "1",
			          "lvl": "19",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000020",
			          "headimg": "http://blob.ufile.ucloud.com.cn/1b21ec48a867305f952278aea3c69d55.jpg",
			          "nickname": "最長，更長，無敵長的帳號",
			          "sex": "1",
			          "lvl": "300",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000037",
			          "headimg": "http://blob.ufile.ucloud.com.cn/ff33eb72fe3940bdb267098975785e7446e7b4c4eae0b64f8bd75c8ffb6b24be",
			          "nickname": "湉湉开心湉湉开心?",
			          "sex": "1",
			          "lvl": "186",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000041",
			          "headimg": "http://playback-langlive.ufile.ucloud.cn/ce533fc1f9c0102ff649642dc989563f.jpg",
			          "nickname": "哈哈哈哈哈哈哈哈哈哈哈哈",
			          "sex": "1",
			          "lvl": "146",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1001085",
			          "headimg": "http://blob.ufile.ucloud.com.cn/f4139b7bc5102e6b7d660829ac2d98856bf114581f663d725e41c64eaf08ff49",
			          "nickname": "方法",
			          "sex": "1",
			          "lvl": "83",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000046",
			          "headimg": "http://blob.ufile.ucloud.com.cn/fd4b38889393116d8f98418be5c720fb.jpg",
			          "nickname": "kkk",
			          "sex": "1",
			          "lvl": "110",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1023488",
			          "headimg": "http://blob.ufile.ucloud.com.cn/2554f9d57c114df07a2bce6e146f41cf.jpg",
			          "nickname": "dean",
			          "sex": "1",
			          "lvl": "97",
			          "live_id": null,
			          "status": "2"
			        }
			      ],
			      "2": [
			        {
			          "pfid": "1000952",
			          "headimg": "http://playback-langlive.ufile.ucloud.cn/cef09a0f6976a3c5d2614c3cbafd4e3d.jpg",
			          "nickname": "deancc",
			          "sex": "1",
			          "lvl": "99",
			          "live_id": "10009521492159608",
			          "status": "1",
			          "live_key": "bKSmtu",
			          "stream_type": 0,
			          "live_url": "rtmp://video.langlive.com/live/10009521492159608"
			        },
			        {
			          "pfid": "1000054",
			          "headimg": "http://blob.ufile.ucloud.com.cn/a8400b08327ffe107fb33596ddb0c02c.jpg",
			          "nickname": "(*๓´╰╯`๓)♡88",
			          "sex": "2",
			          "lvl": "79",
			          "live_id": "10000541492422402",
			          "status": "1",
			          "live_key": "T8ponm",
			          "stream_type": 0,
			          "live_url": "rtmp://video.langlive.com/live/10000541492422402"
			        }
			      ],
			      "3": [
			        {
			          "pfid": "1000639",
			          "headimg": "http://blob.ufile.ucloud.com.cn/d24e9f3e8dfc7193a969f22b528e2dc1.jpg",
			          "nickname": "33444555",
			          "sex": "1",
			          "lvl": "39",
			          "live_id": "10006391492137134",
			          "status": "1",
			          "live_key": "YsLDtC",
			          "stream_type": 0,
			          "live_url": "rtmp://video.langlive.com/live/10006391492137134"
			        }
			      ],
			      "4": [
			        {
			          "pfid": "1024144",
			          "headimg": "http://blob.ufile.ucloud.com.cn/288888b8021a3e5182af8d6202c493dc212a43432f0286ca317274c06df3c1c7",
			          "nickname": "刚刚",
			          "sex": "0",
			          "lvl": "1",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000230",
			          "headimg": "http://blob.ufile.ucloud.com.cn/f0e924bd173b744a106208198ae9d45f13819a93cc4cbbb6ffbded82c50875a9",
			          "nickname": "╮(‵▽′)╭",
			          "sex": "1",
			          "lvl": "57",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000039",
			          "headimg": "http://blob.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd",
			          "nickname": "哇呀唔唔無武呃呃😂哇咔",
			          "sex": "2",
			          "lvl": "163",
			          "live_id": null,
			          "status": "0"
			        },
			        {
			          "pfid": "1000048",
			          "headimg": "http://blob.ufile.ucloud.com.cn/c8d240b8dfb870238431f43a392b312fba00a22c15230aa66f8e33cacc6debda",
			          "nickname": "珍珠奶茶😱芋頭紅豆薏米",
			          "sex": "1",
			          "lvl": "87",
			          "live_id": null,
			          "status": "0"
			        }
			      ]
			    }
			  }
			}
	}
	//1.0 渲染DOM公用
	function randerDom($dom,$html){
		$dom.append($html);
	}
	//2.0 请求数据
	function getDate(){
	// 	$.post(domain+'/v2/html/activity/photo/all_collection', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	// 	 	function(data) {
			/*optional stuff to do after success */
			// if(data.ret_code=="0"){
				var totaldata=data.data.all_anchor_info;
				sortData(totaldata);
				// console.log(totaldata);
			// }
		// });
	}
	getDate();
	//2.1 重新定义data
	function sortData(data){
		var arrdata=[
			{
				lists:data[4]
			},
			{
				lists:data[3]
			},
			{
				lists:data[2]
			},
			{
				lists:data[1]
			}
		];
		for(var i=0,leng=arrdata.length;i<leng;i++){
			// totallist 青铜-钻石的主播列表信息
			var totallist=arrdata[i].lists;
			// totalinum 是否有上榜的主播列表信息
			var totalinum=totallist.length;
			// 内部列表字符串
			var inner_html="";
			// 如果上榜人数超过1个
			if(totalinum!=0){
				for(var j=0;j<totalinum;j++){
					var liveid=totallist[j].live_id;
					var pfid=totallist[j].pfid;
					var nickname=totallist[j].nickname;
					var liveurl=totallist[j].live_url;
					var livekey=totallist[j].live_key;
					var direction=totallist[j].direction;
					var headimg=totallist[j].headimg;
					// 正在直播的主播，跳转到直播间的五个参数
					inner_html+="<li>";
					inner_html+="<div data-direction='"+direction+"' data-livekey='"+livekey+"' data-liveurl='"+liveurl+"' data-nickname='"+nickname+"' data-pfid='"+pfid+"' data-liveid='"+liveid+"' class='had-got'>";
					inner_html+="<img src='"+headimg+"' alt='' class='author-btn'>";
					// 是否正在直播
					if(liveid!=null){
						inner_html+="<span></span>";
					}
					inner_html+="</div>"
					inner_html+="<p>"+nickname+"</p>";
					inner_html+="</li>";
				}
			}else{
				inner_html+="<p>暫無主播達到該等級，請繼續加油喔~！</p>";
			}
			randerDom($(".total-list"+i),inner_html);
		}
	}
	//3 动态DOM 事件
	$(document).on('click', '.had-got', function(event) {
		event.preventDefault();
		event.stopPropagation();
		event.preventDefault();
		event.stopPropagation();
		var liveid=$(this).attr("data-liveid");
		var direction=$(this).attr("data-direction");
		var livekey=$(this).attr("data-livekey");
		var liveurl=$(this).attr("data-liveurl");
		var nickname=$(this).attr("data-nickname");
		var pfid=$(this).attr("data-pfid");
		// 如果正在直播
		if(liveid!="null"){
			// 进入直播间
			alert("进入直播间");
			// h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction);
		// 如果没在直播，进入个人主页	
		}else{
			alert("进入个人主页");
			// h5toHomepage(pfid,nickname);
		}
	});
	// 4 静态DOM事件
	// 4.1 活动细则
	$(".detial-btn").click(function(event){
		event.stopPropagation();
		$(".content").hide();
		$(".rule").show();
	});
	$(".rule").click(function(event){
		event.stopPropagation();
		$(this).hide();
		$(".content").show();
	});
	// 4.2 分享按钮,待解决
	// $(".total-share").click(function(){
	// 	//调用已经封装的分享方法
	// 	shareInterface(
	// 			"http://playback-langlive.ufile.ucloud.com.cn/612ae33eb9254a2a3b80bd1a1c767ca4",
	// 			"女神需要你的應援！趕快收集「陽光」，將「應援票」投給最喜愛的主播吧！",
	// 			"人氣偶像大選女神專場火熱展開中！",
	// 			share_url_head + "html/activity/spokesperson/goddess/share.html"
	// 	);
	// 	needShare(
	// 		"http://playback-langlive.ufile.ucloud.com.cn/612ae33eb9254a2a3b80bd1a1c767ca4",
	// 		"女神需要你的應援！趕快收集「陽光」，將「應援票」投給最喜愛的主播吧！",
	// 		"人氣偶像大選女神專場火熱展開中！",
	// 		share_url_head + "html/activity/spokesperson/goddess/share.html"
	// 	);
	// });
	
});