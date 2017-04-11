/*
* @Author: wangjianfei
* @Date:   2017-04-07 20:32:00
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-11 19:04:11
*/

'use strict';
$(function(){
	//0 没有收到相框礼物
	//1 青铜 收到1-4个
	//2 白银 收到5-14
	//3 黄金 收到15-29
	//4 钻石 收到30
	// 模拟数据
	var data={
		    "ret_code": "0",
		    "ret_msg": "ok",
		    "data": {
		        "anchor_info": { //主播信息
		            "pfid": "1000002",
		            "nickname": "缘由天定娃娃",
		            "headimg": "http://playback-langlive.ufile.ucloud.com.cn/c8f137446774494db18e41839c4a788f.jpg"
		        	},
		        "photo_collection_list": [
		            {
		                "prod_id": "1088",  //相框对应礼物id
		                "photo_url": "/html/magic/images/test01.jpg",    //相框图片地址
		                "now_status": 1,    //相框等级(0-无，1-青铜，2-白银，3-黄金，4-钻石)
		                "num": 1,           //收到个数
		                "status_1_user_info": {  //青铜相框收礼信息
		                    "pfid": "1000004",   //第一个送礼人id
		                    "nickname": "哈哈",    //第一个送礼人昵称
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"  //第一个送礼人头像
		                },
		                "status_2_user_info": [], //白银相框信息
		                "status_3_user_info": [], //黄金相框信息
		                "status_4_user_info": [], //钻石相框信息
		                "next_lvl": 4,  //下一级所需礼物个数
		                "now_user_info": {  //目前最高等级相框对应第一位送礼人信息
		                    "pfid": "1000004",
		                    "nickname": "番茄炒蛋",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "彩虹天空"  //相框名字
		            },
		            {
		                "prod_id": "1089",
		                "photo_url": "",
		                "now_status": 2,
		                "num": 6,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "聋子听哑巴说",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info":{
		                    "pfid": "1000004",
		                    "nickname": "听哑高速聋子",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 9,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "喜马拉雅",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "花开富贵"
		            },
		            {
		                "prod_id": "1090",
		                "photo_url": "",
		                "now_status": 0,
		                "num": 0,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "火狐",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info": [],
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 5,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "阿里妈妈",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx2"
		            },
		            {
		                "prod_id": "1091",
		                "photo_url": "/html/magic/images/test01.jpg",
		                "now_status": 3,
		                "num": 16,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "阿拉善左旗",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info":{
		                    "pfid": "1000004",
		                    "nickname": "baiying",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_3_user_info":{
		                    "pfid": "1000004",
		                    "nickname": "huangjin",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_4_user_info": [],
		                "next_lvl": 14,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "玉皇大帝",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx3"
		            },
		            {
		                "prod_id": "1092",
		                "photo_url": "/html/magic/images/test01.jpg",
		                "now_status": 4,
		                "num": 30,
		                "status_1_user_info": {
		                    "pfid": "1000024",
		                    "nickname": "对的阿",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info":{
		                    "pfid": "1000114",
		                    "nickname": "冬天气温",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_3_user_info":{
		                    "pfid": "1000554",
		                    "nickname": "看个帅哥",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_4_user_info":{
		                    "pfid": "1000664",
		                    "nickname": "高峰过后",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "next_lvl": 0,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "Hello~world",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx4"
		            },
		            {
		                "prod_id": "1093",
		                "photo_url": "",
		                "now_status": 1,
		                "num": 1,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "老鼠爱上猫",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info": [],
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 4,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "死不了阿三",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx5"
		            },
		            {
		                "prod_id": "1094",
		                "photo_url": "",
		                "now_status": 1,
		                "num": 1,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "虎虎虎虎",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info": [],
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 4,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "啦啦啦啦啦啦啦",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx6"
		            },
		            {
		                "prod_id": "1095",
		                "photo_url": "",
		                "now_status": 1,
		                "num": 1,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "上帝",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info": [],
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 4,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "Admin",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx7"
		            },
		            {
		                "prod_id": "1096",
		                "photo_url": "",
		                "now_status": 1,
		                "num": 1,
		                "status_1_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "Kurry~",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "status_2_user_info": [],
		                "status_3_user_info": [],
		                "status_4_user_info": [],
		                "next_lvl": 4,
		                "now_user_info": {
		                    "pfid": "1000004",
		                    "nickname": "无法无天",
		                    "headimg": "http://playback-langlive.ufile.ucloud.cn/4825891161c4d9a377be0785078c2158.jpg"
		                },
		                "name": "xxx8"
		            }
		        ]
		    }
		};
	var indexData;
	//1、获取数据
	function getDate(){
	// 	$.post(domain+'v2/html/activity/photo/list', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	// 	 	function(data) {
			/*optional stuff to do after success */
			// if(data.ret_code=="0"){
				indexData=data.data;
				// console.log(indexData);
			// }
		// });
	}
	//1、0 调用
	getDate();
	//1.2 根据数据渲染DOM
	// 4种相框对应元素的的class
	// 钻石：diamond
	// 黄金：gold
	// 白银：silver
	// 青铜：bronze
	var anchorlists;
	function creatDom(){
		var anchor=indexData.anchor_info;
		anchorlists=indexData.photo_collection_list;
		// console.log(anchorlists);
		//1 渲染当前主播
		var str="";
		str+="<div class='main-meimg'>";
		str+="<img src='"+anchor.headimg+"' alt=''>"+"</div>";
		str+="<h6>"+anchor.nickname+"</h6>";
		randerDom($(".main-me"),str);
		//2 渲染所有相框礼物
		for (var i=0,leng=anchorlists.length;i<leng;i++) {
			var str_html="";
			var anchorindex=anchorlists[i];
			var innderimg=anchorlists[i].photo_url;
			if(anchorindex.now_status=="0"){
				str_html+="<div class='same-bg'><div class='inner-box white'>";
				str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
				str_html+="<div class='mask'>";
				str_html+="<img src='/html/magic/images/icon_lock.png' alt='' class='mask-lock'>";
				str_html+="</div></div>";
				str_html+="</div>";
				str_html+="<button class='open-upload vis-hide'>更換相片</button>";
				str_html+="<p>尚未收到此相框</p>";
				console.log("没有");
			}else{
				str_html+="<div class='same-bg'><div class='outbg-"+anchorindex.now_status+"'></div><div class='inner-box'>";
				if(!innderimg){
					str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
					str_html+="<div class='mask'>";
					str_html+="<img src='/html/magic/images/icon_up.png' alt='' class='mask-up open-upload'>";
					str_html+="<p>點擊上傳美照</p></div></div>";
					str_html+="<div class='contributors star-"+anchorindex.now_status+"'>";
					str_html+="<p>魔法使者</p>";
					str_html+="<img data-index='"+i+"' src='"+anchorindex.now_user_info.headimg+"' alt='' class='open-contributors'>";
					str_html+="<b></b></div></div>";
					str_html+="<button class='open-upload vis-hide'>更換相片</button>";
					str_html+="<p>尚未上傳美照</p>";
				}else{
					str_html+="<img src='"+innderimg+"' alt=''>";
					str_html+="</div>";
					str_html+="<div class='contributors star-"+anchorindex.now_status+"'>";
					str_html+="<p>魔法使者</p>";
					str_html+="<img data-index='"+i+"' src='"+anchorindex.now_user_info.headimg+"' alt='' class='open-contributors'>";
					str_html+="<b></b></div></div>";
					str_html+="<button class='open-upload'>更換相片</button>";
					str_html+='<p><span>獲得'+anchorindex.name+'相框:</span>'+anchorindex.num+'個</p>';
					str_html+='<p><span>距離升級還剩:</span>'+anchorindex.next_lvl+'個</p>';
				}
			}
			randerDom($(".list-one"+i),str_html);
		};		
	};
	creatDom();
	//1.3 每隔1分钟更新一次
	// setInterval(getDate, 6*1000);
	

	function randerDom($dom,$html){
		$dom.append($html);
	}
	
	// 1 活动细则
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
	// 2、点击头像弹出贡献者信息
	$(".open-contributors").click(function(e){
		// 每次都要重新渲染所以先清空
		$(".contributors-list").empty();
		event.stopPropagation();
		event.preventDefault();
		//2.1 获取当前相框的下标
		var index=$(this).attr("data-index");
		// console.log(index);
		//2.2 获取当前相框的对应的数据
		var nowcontributors=anchorlists[index];
		// console.log(nowcontributors);
		var arr=[
			{
				name:"磚石相框",
				src:"/html/magic/images/icon_star04.png",
				state:nowcontributors.status_4_user_info
			},
			{
				name:"黄金相框",
				src:"/html/magic/images/icon_star03.png",
				state:nowcontributors.status_3_user_info
			},
			{
				name:"白银相框",
				src:"/html/magic/images/icon_star02.png",
				state:nowcontributors.status_2_user_info
			},
			{
				name:"青铜相框",
				src:"/html/magic/images/icon_star01.png",
				state:nowcontributors.status_1_user_info
			},
		];
		for(var j=0,len=arr.length;j<len;j++){
			var str_con="";
			var state=arr[j].state;
			str_con+="<li>";
			str_con+="<img src='"+arr[j].src+"' alt='' class='con-icon'>";
			str_con+="<span>"+arr[j].name+"</span>";
			if(state.length==0){
				str_con+="<img src='/html/magic/images/upload_close.png' alt='' class='con-person'>";
				str_con+="<div class='contributors-msg'>";
				str_con+="<p>還未到達該等級喔</p>";
				str_con+="</div></li>";
			}else{
				str_con+="<img src='"+state.headimg+"' alt='' class='con-person'>";
				str_con+="<div class='contributors-msg'>";
				str_con+="<p>"+state.nickname+"</p>";
				str_con+="<p>ID："+state.pfid+"</p>";
				str_con+="</div></li>";
			}
			//渲染到DOM
			randerDom($(".contributors-list"),str_con);
		}
		$(".contributors-mask").show();
	});
	$(".contributors-close").click(function(e){
		event.stopPropagation();
		$(".contributors-mask").hide();
	});
	// 3、上传照片遮罩层
	$(".open-upload").click(function(e){
		event.stopPropagation();
		event.preventDefault();
		$(".upload").show();
	});
	$(".upload-close").click(function(e){
		event.stopPropagation();
		$(".upload").hide();
	});
	// 4 、点击上传会调用客户端的方法
	$(".upload-btn").click(function(){
		alert("请选择图片");
	});
	// 5、点击确认会把客户端返回的img的url返回给后端
	$(".upload-agree").click(function(){
		var $uptips=$("<p>照片正在审核中</p>");
		$(".upload-inner").html($uptips);
		alert("正在上传ing");
	});
})

