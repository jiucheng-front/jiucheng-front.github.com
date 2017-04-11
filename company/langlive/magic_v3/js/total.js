/*
* @Author: wangjianfei
* @Date:   2017-04-10 14:07:52
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-11 19:09:42
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
	                    "live_id": "10006391491804091",
	                    "status": "1",
						"follow_status": "0",
						"live_key": "hblI2t",
	                    "live_url": "rtmp://video.langlive.com/live/10006391491804091"
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
	                    "nickname": "33444555",
	                    "sex": "1",
	                    "lvl": "33",
	                    "live_id": "10006391491804091",
	                    "status": "1",
	                    "live_key": "hblI2t",
	                    "live_url": "rtmp://video.langlive.com/live/10006391491804091"
	                }
	            ],
	            "3": [],
	            "4": []
	        }
	    }
	};
	//1.0 渲染DOM公用
	function randerDom($dom,$html){
		$dom.append($html);
	}
	// var totaldata;
	function getDate(){
	// 	$.post(domain+'v2/html/activity/photo/list', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
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
	//1.1 序列化data
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
		console.log(arrdata);
		for(var i=0,leng=arrdata.length;i<leng;i++){
			// totallist 青铜-钻石的主播列表信息
			var totallist=arrdata[i].lists;
			// 是否有主播列表信息
			var totalinum=totallist.length;
			if(totalinum!=0){
				// 是否正在直播
				var living=totallist.live_id;
				for(var j=0;j<totalinum;j++){
					if(living!=null){
						console.log("正在直播");
					}else{
						console.log("不在直播");
					}
				}
				// console.log("有");
			}else{
				console.log("wu");
			}
		}
	}
	//1.2 创建DOM
	function createDom(totallist,totalinum){
		console.log(totallist,totalinum);
	}
	// 2 活动细则
	$(".detial-btn").click(function(e){
		event.stopPropagation();
		$(".content").hide();
		$(".rule").show();
	});
	$(".rule").click(function(e){
		event.stopPropagation();
		$(this).hide();
		$(".content").show();
	});
	//3 、点击头像根据liveid判断是进入直播间还是个人主页
	$(".author-btn").click(function(){
		var liveid=$(this).attr("data-liveid");
		if(liveid=="null"){
			alert("进入个人主页");
		}else{
			alert("进入直播间");
		}
	});
});