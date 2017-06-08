/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:24:21
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-08 20:48:14
*/

!function(){
	'use strict';

	// 1、公用：
	// 通过ID获取DOM
	function getDomId(id){
		return document.getElementById(id);
	}
	// 渲染DOM
	function printDom(id,html){
		document.getElementById(id).innerHTML=html;
	}
	// 模拟数据
	var isNotAjax=true;
	if(isNotAjax){
		var data={
		  "ret_code": "0",
		  "ret_msg": "ok",
		  "broke_info": {
			    "pfid": "1020166",
			    "headimg": "http://playback-langlive.ufile.ucloud.com.cn/a51cb76f34b4632049f47e1847ee72fc",
			    "nickname": "破坏破恩爱PDF怕啥",
			    "yesterday_ranked": 3,
			    "today_ranked": 4,
			    "today_broke_id": 4,	//级别
			    "today_score": 7,
			    "gift_box": {
			      "big": {
			        "id": 1,
			        "num": 10
			      },
			      "mid": {
			        "id": 2,
			        "num": 0
			      },
			      "small": {
			        "id": 3,
			        "num": 10
			      }
			    },
			    "anchor_num": 97891,		//旗下艺人
			    "today_anchor_list":[
				    {
				        "pfid": "1020266",
				        "headimg": "http://playback-langlive.ufile.ucloud.com.cn/b01c9dd84f59218583f67a2fa7a1e322",
				        "nickname": "哇係小龍",
				        "get_score": 99,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": "12313"
			      	},
		      		{
			          "pfid": "1020025",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/128dc4649a19a496cc1c95633e8e2517",
			          "nickname": "含師傅",
			          "get_score": 88,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020023",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/3757371cfcb68e65aef24c3d309f2069",
			          "nickname": "君風雲",
			          "get_score": 77,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": "465465"
			        },
			        {
			          "pfid": "1020021",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/60ac2fc56905879a7076a948e94c938a",
			          "nickname": "君邪",
			          "get_score": 66,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020015",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/2fb118dd2c48ba57d463ab255cf60775",
			          "nickname": "君無憂",
			          "get_score": 55,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020009",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/094d18a273ad26ca3f3c628d34346414",
			          "nickname": "君子之爭",
			          "get_score": 46,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020000",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/85eb61f3d962e7c81ee75f63cc363b0f",
			          "nickname": "向飛天",
			          "get_score": 37,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020014",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/a3c8605f610f053784f2dcb59c8a95ce",
			          "nickname": "君樂",
			          "get_score": 27,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        },
			        {
			          "pfid": "1020013",
			          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/42d5ed2fdb862c770f96d1854ae83f61",
			          "nickname": "君彥",
			          "get_score": 7,
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": null
			        }
			    ],
			    "recommend_achcor":[
				      {
				        "pfid": "1020266",
				        "headimg": "http://playback-langlive.ufile.ucloud.com.cn/b01c9dd84f59218583f67a2fa7a1e322",
				        "nickname": "哇係小龍",
				        "live_url": "",
				        "stream_direction": 0,
				        "live_key": "",
				        "live_id": "211313"
				      },
				      {
				          "pfid": "1020025",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/128dc4649a19a496cc1c95633e8e2517",
				          "nickname": "含師傅",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        },
				        {
				          "pfid": "1020023",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/3757371cfcb68e65aef24c3d309f2069",
				          "nickname": "君風雲",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": "5464654"
				        },
				        {
				          "pfid": "1020021",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/60ac2fc56905879a7076a948e94c938a",
				          "nickname": "君邪",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        },
				        {
				          "pfid": "1020015",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/2fb118dd2c48ba57d463ab255cf60775",
				          "nickname": "君無憂",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        },
				        {
				          "pfid": "1020009",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/094d18a273ad26ca3f3c628d34346414",
				          "nickname": "君子之爭",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        },
				        {
				          "pfid": "1020000",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/85eb61f3d962e7c81ee75f63cc363b0f",
				          "nickname": "向飛天",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        },
				        {
				          "pfid": "1020014",
				          "headimg": "http://playback-langlive.ufile.ucloud.com.cn/a3c8605f610f053784f2dcb59c8a95ce",
				          "nickname": "君樂",
				          "live_url": "",
				          "stream_direction": 0,
				          "live_key": "",
				          "live_id": null
				        }
			    ]
		  }
		}
	}
	//2.0 请求数据
	function getDate(){
		// $.post(domain+'v2/html/broke/get_broke_info', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_id },
		 	// function(data) {
	            /*optional stuff to do after success */
	            if(data.ret_code=="0"){
	            	//1、上下主播信息
	            	var broker_info=data.broke_info;
	            	topBroker(broker_info);
	            	//2、中间旗下艺人
	            	var artists=broker_info.today_anchor_list;
	            	printArtists(artists);
	            	//3、 推荐主播
	            	var recommendAnchors=broker_info.recommend_achcor;
	            	printRecommend(recommendAnchors);
	            }
		    // },
			// "json"
	    // );
	}
	getDate();

	//2、中间旗下艺人
	function printArtists(artists){
		// console.log(artists);
		var artist_html="";
		var artistLength=artists.length;
		for(var i=0;i<artistLength;i++){
			var userList=artists[i];
			//0503 進入直播間還是主頁的參數
			var this_liveid=userList.live_id;
			var this_pfid=userList.pfid;
			var this_nickname=userList.nickname;
			var this_liveurl=userList.live_url;
			var this_livekey=userList.live_key;
			var this_direction=userList.stream_direction;
			var this_headimg=userList.headimg;
			var this_score=userList.get_score;
			artist_html+="<li>";
			artist_html+="<div data-direction='"+this_direction+"' data-livekey='"+this_livekey+"' data-liveurl='"+this_liveurl+"' data-nickname='"+this_nickname+"' data-pfid='"+this_pfid+"' data-liveid='"+this_liveid+"' class='artist-img'>";
			artist_html+="<img src='"+this_headimg+"' alt='' class='headImg'>";
			if(this_liveid!=null){
				artist_html+="<i></i>";
			}
			artist_html+="</div>";
			artist_html+="<p>"+this_nickname+"</p>";
			artist_html+="<span>"+this_score+"</span>";
			artist_html+="</li>";
		}
		$("#artist-list").append(artist_html);
		//2.1 查看更多
		if(artistLength>5){
			$("#artist-list li").eq(4).nextAll().addClass('none');
			$("#seeMore").addClass('Block');
			$("#seeMore").click(function(){
				$("#artist-list li").eq(4).nextAll().removeClass('none');
				$(this).removeClass('Block');
			});
		}
		//2.2 头像跳转
		addEvent("#artist-list",".artist-img");
	}

	// //2.2 头像跳转公用
	function addEvent(id,classname){
		$(id).on('click', classname, function(event) {
			event.preventDefault();
			event.stopPropagation();
			var pfid=$(this).attr('data-pfid');
			var nickname=$(this).attr('data-nickname');
			var liveid=$(this).attr('data-liveid');
			var liveurl=$(this).attr('data-liveurl');
			var livekey=$(this).attr('data-livekey');
			var direction=$(this).attr('data-direction');
			if(liveid!="null"){
				// 进入直播间
				// h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction);
				alert("进入直播间");
				// 如果没在直播，进入个人主页	
			}else{
				// h5toHomepage(pfid,nickname);
				alert("进入个人主页");
			}
		});
	}

	//3、 推荐主播
	function printRecommend(recAnchors){
		var rec_html="";
		var rec_length=recAnchors.length;
		for(var j=0;j<rec_length;j++){
			var thisRecAnchor=recAnchors[j];
			var this_liveid=thisRecAnchor.live_id;
			var this_pfid=thisRecAnchor.pfid;
			var this_nickname=thisRecAnchor.nickname;
			var this_liveurl=thisRecAnchor.live_url;
			var this_livekey=thisRecAnchor.live_key;
			var this_direction=thisRecAnchor.stream_direction;
			var this_headimg=thisRecAnchor.headimg;
			rec_html+="<li>";
			rec_html+="<div data-direction='"+this_direction+"' data-livekey='"+this_livekey+"' data-liveurl='"+this_liveurl+"' data-nickname='"+this_nickname+"' data-pfid='"+this_pfid+"' data-liveid='"+this_liveid+"' class='recommend-img'>";
			rec_html+="<img src='"+this_headimg+"' alt='' class='headImg'>";
			if(this_liveid!=null){
				rec_html+="<i></i>";
			}
			rec_html+="</div>";
			rec_html+="<div class='recommend-msg'><h3>主播暱稱：</h3>";
			rec_html+="<p>"+this_nickname+"</p>";
			rec_html+="</div></li>";
		}
		$("#anchorbg-anchor").append(rec_html);
		// 头像跳转
		addEvent("#anchorbg-anchor",".recommend-img");
	}

	//1、上下主播信息
	function topBroker(broker_info){
		console.log(broker_info);
		// 4个级别，king，gold，silver，copper
		var cardLists={
			"4":["/html/Broker/images/home_king01.png","/html/Broker/images/home_king02.png"],
			"3":["/html/Broker/images/home_king03.png","/html/Broker/images/home_king04.png"],
			"2":["/html/Broker/images/home_king05.png","/html/Broker/images/home_king06.png"],
			"1":["/html/Broker/images/home_king07.png","/html/Broker/images/home_king08.png"],
		};
		// 1.1 經紀人称号
		var broker_levelid=broker_info.today_broke_id;
		var topImg=getDomId("personalIconOne");
		var outerCard=getDomId("personalIconTwo");
		var topImg_src=cardLists[broker_levelid][0];
		var outerCard_src=cardLists[broker_levelid][1];
		topImg.src=topImg_src;
		outerCard.src=outerCard_src;
		// 1.2上升还是下降
		var yesterday_ranked=broker_info.yesterday_ranked;
		var today_ranked=broker_info.today_ranked;
		var isUp=yesterday_ranked-today_ranked;
		var yesRankingDom=getDomId("personalRanking");
		var rank_str="<span>"+yesterday_ranked;
		if(isUp>0){
			rank_str+='<i class="up"></i>';
		}else if(isUp<0){
			rank_str+='<i class="down"></i>';
		}
		rank_str+='</span>';
		yesRankingDom.innerHTML=rank_str;
		// 1.3 经纪人头像
		var broker_pfid=broker_info.pfid;
		var broker_img=broker_info.headimg;
		var brokerImgDom=getDomId("brokerImg");
		brokerImgDom.src=broker_img;
		// 1.31 底部信息
		var BottomImgDom=getDomId("anchorBottomImg");
		BottomImgDom.src=broker_img;
		var BottomNameDom=getDomId("anchorBottomName");
		var bottom_name=broker_info.nickname;
		BottomNameDom.innerHTML=bottom_name;
		var anchor_num=broker_info.anchor_num;
		var ArtistsNumDom=getDomId("anchorArtistsNum");
		ArtistsNumDom.innerHTML=anchor_num;
		var TodayLevelDom=getDomId("userTodayLevel");
		TodayLevelDom.innerHTML=today_ranked;
		// 1.4今日积分
		var today_score=broker_info.today_score;
		printDom("personalScore",today_score);
		// 1.5 礼物
		var gift_box=broker_info.gift_box;
		var gift_arr=[gift_box.small,gift_box.mid,gift_box.big];
		// 经纪人pfid作为 请求参数
		var anchor_pfid=broker_info.pfid;
		console.log(anchor_pfid);
		var gift_str="";
		for(var i=0;i<gift_arr.length;i++){
			var this_gift=gift_arr[i];
			var gift_count=this_gift.num;
			// 礼物ID 作为请求参数
			var gift_id=this_gift.id;
			if(gift_count==0){
				gift_str+='<li class="cant-open" data-pfid="'+anchor_pfid+'" data-giftid="'+gift_id+'">';
				
			}else{
				gift_str+='<li class="open-gift" data-pfid="'+anchor_pfid+'" data-giftid="'+gift_id+'">';
			}
			gift_str+='<img src="/html/Broker/images/home_gift_'+i+'.png" alt="">';
			gift_str+='<span>'+gift_count+'</span>';
			gift_str+='</li>';
		}
		printDom("giftList",gift_str);
	}


	// 3 是否获得对应礼物
	// 3.1打開禮物弹框
	$("#giftList").on('click', '.open-gift', function(event) {
		event.preventDefault();
		event.stopPropagation();
		var _this=$(this);
		var thisGiftId=_this.attr("data-giftid");
		var thisGiftPfid=_this.attr("data-pfid");
		// console.log(gift_id);
		$("#gift-info").empty();
		$("#gift-mask").show();
		// 加数据
		if(isNotAjax){
			var DATA={
			  "ret_code": "0",
			  "ret_msg": "ok",
			  "id": 1,
			  "last_num": 0,
			  "winning_title": "1000浪花"
			}
		}
		// $.post(domain+'v2/html/broke/open_gift_box', {"gift_box_id":thisGiftId, "broke_pfid":thisGiftPfid},
				 	// function(DATA) {
					if(DATA.ret_code=="0"){
						var last_count=DATA.last_num;
						var gift_name=DATA.winning_title;
						$("#gift-info").empty().html("恭喜獲得"+gift_name);
						_this.find('span').html(last_count);
						// 如果是0个去掉可以点击的classname
						if(last_count==0){
							_this.removeClass('open-gift').addClass('cant-open');
						}
					}
		// });
		document.getElementById("gift-mask").addEventListener("touchmove", function(event){
	        // 阻止彈出後頁面的滚动
	        event.preventDefault();
	    });
	});
	
	// 3.2 關閉禮物弹框
	$("#gift-close").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$("#gift-mask").hide();
	});



	// 4 返回頂部
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
	// 5、推薦主播弹框
	$("#artist-btn").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$("#recommend-bg").show();
		document.getElementById("recommend-bg").addEventListener("touchmove", function(event){
	        // 阻止彈出後頁面的滚动
	        event.preventDefault();
	    });
	});
	$("#close-recommend").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$("#recommend-bg").hide();
	});
	// 跳转到总榜
	$("#go_total").click(function(){
		$("#jumpTotal").trigger('submit');
	});
}()