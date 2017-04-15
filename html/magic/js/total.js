/*
* @Author: wangjianfei
* @Date:   2017-04-10 14:07:52
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-13 19:16:30
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
							"headimg": "http://playback-langlive.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg",
							"nickname": "缘由天定娃娃",
							"sex": "1",
							"lvl": "57",
							"live_id": "12206391491804093",
							"status": "1",
							"follow_status": "0",
							"live_key": "hblI2t",
							"live_url": "rtmp://video.langlive.com/live/10006391491804091",
							"direction":"direction"
						},
						{
							"pfid": "1024124",
							"headimg": "http://playback-langlive.ufile.ucloud.com.cn/ee45ce71acecbed01e2e19d97c8e53f109d0589b7d0652d51e276f839f92298c",
							"nickname": "嗨",
							"sex": "1",
							"lvl": "2",
							"live_id": null,
							"status": "0",
							"follow_status": "0"
						},
						{
							"pfid": "1000037",
							"headimg": "http://playback-langlive.ufile.ucloud.com.cn/ff33eb72fe3940bdb267098975785e7446e7b4c4eae0b64f8bd75c8ffb6b24be",
							"nickname": "湉湉开心湉湉开心?",
							"sex": "1",
							"lvl": "186",
							"live_id": null,
							"status": "2",
							"follow_status": "0"
						},
						{
							"pfid": "1000039",
							"headimg": "http://playback-langlive.ufile.ucloud.com.cn/25f0e2243ac9f515ed3be2fb1854c8b7db8e04b195a088962179cf5937ae25dd",
							"nickname": "哇呀唔唔無武呃呃😂哇咔",
							"sex": "2",
							"lvl": "163",
							"live_id": null,
							"status": "0",
							"follow_status": "0"
						}
					],
					"2": [
						{
							"pfid": "1000639",
							"headimg": "http://playback-langlive.ufile.ucloud.com.cn/d24e9f3e8dfc7193a969f22b528e2dc1.jpg",
							"nickname": "老鼠爱大米",
							"sex": "1",
							"lvl": "33",
							"live_id": "10006391491804091",
							"status": "1",
							"live_key": "hblI2t",
							"live_url": "rtmp://video.langlive.com/live/10006391491804091",
							"direction":"direction"
						}
					],
					"3": [],
					"4": []
				}
			}
		};
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
		// 调用事件
		resetEvent();
	}
	//3 动态DOM 事件
	function resetEvent(){
		//3 、点击头像根据liveid判断是进入直播间还是个人主页
		$(".had-got").on('click',function(event) {
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
	}
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