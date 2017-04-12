/*
* @Author: wangjianfei
* @Date:   2017-04-07 20:32:00
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-04-12 19:23:08
*/

'use strict';
//0 上传，选择文件后客户端调用该方法返回URL
var loadingSrc;
function langApp2Web_camerartn(imgUrl) {
	loadingSrc=imgUrl;
   $("img[data-src='imgSrc']").attr('src', imgUrl).removeAttr("data-src");
}
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
		            {	//1
		                "prod_id": "1088",  //相框对应礼物id
		                "review_status": 0, //0-审核中，1-通过审核,2-审核失败（photo_url不为空用到）
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
		            {	// 2
		                "prod_id": "1089",
		                "review_status": 1, 
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
		            {	// 3
		                "prod_id": "1090",
		                "review_status": 1, 
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
		            {	// 4
		                "prod_id": "1091",
		                "review_status": 2, 
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
		            {	// 5
		                "prod_id": "1092",
		                "review_status": 1,
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
		            {	// 6
		                "prod_id": "1093",
		                "review_status": 1, 
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
		            {	//	7
		                "prod_id": "1094",
		                "review_status": 1, 
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
		            {	// 8
		                "prod_id": "1095",
		                "review_status": 1, 
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
		            {	// 9
		                "prod_id": "1096",
		                "review_status": 1, 
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
	//1、获取数据
	function getDate(){
	// 	$.post(domain+'v2/html/activity/photo/list', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
	// 	 	function(data) {
			/*optional stuff to do after success */
			// if(data.ret_code=="0"){
				var Data=data.data;
				//pfid 后端注入， 用于判断进入该页面的是主播还是观众
				// var pfid=1000037;//不是主播
				var pfid=1000002;
				creatDom(Data,pfid);
				console.log(Data);
			// }
		// });
	}
	//1、0 调用
	getDate();
	//1.2 根据数据渲染DOM
	function creatDom(indexData,pfid){
		// 是否需要先清空？
		$(".main-me").empty();
		// 主播信息
		var anchor=indexData.anchor_info;
		// anchorid主播ID :1000002，
		var anchorid=anchor.pfid;
		// anchorlists  9中相框礼物的信息列表
		var anchorlists=indexData.photo_collection_list;
		// console.log(anchorlists);
		//1 渲染当前主播
		var str="";
		str+="<div class='main-meimg'>";
		str+="<img src='"+anchor.headimg+"' alt=''>"+"</div>";
		str+="<h6>"+anchor.nickname+"</h6>";
		randerDom($(".main-me"),str);
		//2 渲染所有相框礼物
		for (var i=0,leng=anchorlists.length;i<leng;i++) {
			// 是否需要先清空？
			$(".list-one"+i).empty();
			var str_html="";
			// anchorindex对应每个相框礼物
			var anchorindex=anchorlists[i];
			// anchorId 每个相框的ID,用于上传照片
			var anchorId=anchorindex.prod_id;
			// isReviewed 只用于主播，是否通过审核
			var isReviewed=anchorindex.review_status;
			// isGot是否收到该礼物
			var isGot=anchorindex.now_status;
			// innderimg已经上传照片的src
			var innderimg=anchorlists[i].photo_url;
			//2.1 如果没收到该礼物主播和观众看到的一样
			if(isGot=="0"){
				str_html+="<div class='same-bg'><div class='inner-box white'>";
				str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
				str_html+="<div class='mask'>";
				str_html+="<img src='/html/magic/images/icon_lock.png' alt='' class='mask-lock'>";
				str_html+="</div></div>";
				str_html+="</div>";
				str_html+="<button class='open-upload vis-hide'>更換相片</button>";
				str_html+="<p>尚未收到此相框</p>";
				// console.log("没有收到礼物");
			// 如果收到礼物了
			}else{
				str_html+="<div class='same-bg'><div class='outbg-"+anchorindex.now_status+"'></div><div class='inner-box'>";
				//2.2 如果是主播自己
				if(pfid==anchorid){
					//	判断是否在审核中
					//	0-审核中
					//	1-审核通过
					//	2-审核未通过
					if(isReviewed==0){
						console.log("审核中ing");
						str_html+="<img src='"+innderimg+"' alt=''>";
						str_html+="<div class='mask'>";
						str_html+="<span>审核中</span></div>";
						str_html+="</div></div>";
						str_html+="<button data-anchorID='"+anchorId+"' class='open-upload'>更換相片</button>";
					// 审核通过
					}else if(isReviewed==1){
						console.log("审核通过");
						//  如果没有上传照片
						if(!innderimg){
							str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
							str_html+="<div class='mask'>";
							str_html+="<img data-anchorID='"+anchorId+"' src='/html/magic/images/icon_up.png' alt='' class='mask-up open-upload'>";
							str_html+="<p>點擊上傳美照</p></div>";
							str_html+="</div></div>";
							str_html+="<p>尚未上傳美照</p>";
						// 如果已经上传照片
						}else{
							str_html+="<img data-got='true' src='"+innderimg+"' alt=''>";
							str_html+="</div></div>";
							str_html+="<button data-anchorID='"+anchorId+"' class='open-upload'>更換相片</button>";
						}
					// 审核未通过
					}else if(isReviewed==2){
						//  如果没有上传照片
						if(!innderimg){
							str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
							str_html+="<div class='mask'>";
							str_html+="<img data-anchorID='"+anchorId+"' src='/html/magic/images/icon_up.png' alt='' class='mask-up open-upload'>";
							str_html+="<p>點擊上傳美照</p></div>";
							str_html+="</div></div>";
							str_html+="<p>尚未上傳美照</p>";
						// 如果已经上传照片
						}else{
							str_html+="<img src='"+innderimg+"' alt=''>";
							str_html+="<div class='mask'>";
							str_html+="<span>审核未通过</span></div>";
							str_html+="</div></div>";
							str_html+="<button data-anchorID='"+anchorId+"' class='open-upload'>更換相片</button>";
						}
					}
					// console.log("主播自己");
				//2.3 如果是观众
				}else{
					//  观众端直接看到的是：是否有上传的照片
					if(!innderimg){
						str_html+="<img src='/html/magic/images/inner0"+i+".png' alt=''>";
						str_html+="</div></div>";
						str_html+="<button class='open-upload vis-hide'>更換相片</button>";
					// 如果已经上传照片
					}else{
						str_html+="<img data-got='true' src='"+innderimg+"' alt=''>";
						str_html+="</div></div>";
						str_html+="<button class='open-upload vis-hide'>更換相片</button>";
					}
					// console.log("我是观众");
				}
				// 收到的数量以及剩余升级数量，礼物贡献者始终都需要
				str_html+='<p><span>獲得'+anchorindex.name+'相框:</span>'+anchorindex.num+'個</p>';
				str_html+='<p><span>距離升級還剩:</span>'+anchorindex.next_lvl+'個</p>';
				str_html+="<div class='contributors star-"+anchorindex.now_status+"'>";
				str_html+="<p>魔法使者</p>";
				str_html+="<img data-index='"+i+"' src='"+anchorindex.now_user_info.headimg+"' alt='' class='open-contributors'>";
				str_html+="<b></b></div>";
				
			}
			randerDom($(".list-one"+i),str_html);
		};		
	};
	// creatDom();
	//1.3 每隔1分钟更新一次
	// setInterval(getDate, 6*1000);
	function randerDom($dom,$html){
		$dom.append($html);
	}
	
	// 1 活动细则
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
	// 2、点击头像弹出贡献者信息
	$(".open-contributors").on('click',function(event) {
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
	$(".contributors-close").click(function(event){
		event.stopPropagation();
		$(".contributors-mask").hide();
	});
	// 3、点击已经上传的照片铺满整个屏幕
	$(".same-bg").on('click',function(event) {
		event.preventDefault();
		event.stopPropagation();
		// isTrue 已经上传照片并且审核通过
		var isTrue=$(this).find('.inner-box img').attr("data-got");
		if(isTrue){
			// scrollTop 记录当前滚动条的的位置以备恢复位置
			var scrollTop=$(document).scrollTop();
			var bigSrc=$(this).find('.inner-box img').attr("src");
			var maxwidth=window.screen.width+"px";
			var maxheight=window.screen.height+"px";
			//创建一个新的img
			var $bigimg="<img src='"+bigSrc+"' alt=''>";
			$(".big-img").append($bigimg);
			// 设置img的宽高
			$(".big-img img").css({
				width: maxwidth,
				height: maxheight
			});
			$(".content").hide();
			$(".big-img").show();
			// 点击大图恢复原状
			$(".big-img").on('click',function(event) {
				event.preventDefault();
				event.stopPropagation();
				// 清空内容并隐藏
				$(this).empty().hide();
				$(".content").show();
				// 返回到之前的锚点位置
				$(document).scrollTop(scrollTop);
			});
		}
		// console.log(isTrue);
	});
	// 4、上传照片遮罩层
	// 要根据后台的数据限制每日上传的次数
	$(".open-upload").on('click',function(event) {
		event.stopPropagation();
		event.preventDefault();
		$(".upload").show();
		var thisID=$(this).attr("data-anchorid");
		console.log(thisID);
		// 模拟的数据，最终是不需要的
		var DATA={
			"ret_code": "0",
		    "ret_msg": "ok",
			"data":{
				"status":1 //0-审核已经通过，今日不能再上传，1-上传成功
			}
		}
		// 请求回来的数据
		var imgdata;
		// 5 、点击选择图片会调用客户端的方法
		$(".upload-btn").click(function(event){
			event.stopPropagation();
			event.preventDefault();
			// 创建一个img append upload-inner
			var $loadimg="<img data-src='imgSrc' src='' alt=''>";
			// 清空并隐藏
			$(".upload-inner").empty().append($loadimg);
			// 下面2行是客户端调用，自动返回的src，这里模拟，正事环境需要去掉
			var imgUrl="/html/magic/images/test01.jpg";
			langApp2Web_camerartn(imgUrl);
			//调用客户端的方法，并返回img的URL
			// if(isiOS==true){
            //     window.webkit.messageHandlers.langWeb2App_camera.postMessage({body:'{"needupload":"1","cropImg":"0"}'});
            // }else{
            //     javascriptinterface.langWeb2App_camera("1","0");
            // }
			// alert("请选择图片");
		});
		// 6、点击确认会把客户端返回的img的url返回给后端
		$(".upload-agree").click(function(event){
			event.stopPropagation();
			event.preventDefault();
			// 请求数据，根据数据判断今日是否已经上传或者更换过照片
			if(loadingSrc&&thisID){
				sendDate(loadingSrc,thisID);
			}
			if(imgdata.status==0){
				alert("今日上傳次數已達上限！");
			}else{
				alert("上傳成功！");
				// 上传成功之后需要重新渲染页面
				getDate();
			}
			// console.log(imgdata,loadingSrc,thisID);
		});
		//6.0 图片地址发送给后端，返回是否今日是否可以再次上传或者更换
		function sendDate(url,id){
				// $.post(domain+'v2/html/activity/photo/upload_photo ', {"photo_url":loadingSrc, "prod_id":thisID},
				// 	 	function(data) {
						/*optional stuff to do after success */
						// if(data.ret_code=="0"){
							// imgdata=data.data;
							imgdata=DATA.data;
						// }
				// });
		}
	});
	$(".upload-close").click(function(event){
		event.stopPropagation();
		$(".upload").hide();
	});
})