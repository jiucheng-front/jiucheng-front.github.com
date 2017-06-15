/*
* @Author: wangjianfei
* @Date:   2017-06-05 10:24:21
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-09 20:08:50
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
	//------------------------------------------------0613 start 去掉JQ的post	
	// //2.0 请求数据
	// function getDate(){
	// 	// $.post(domain+'v2/html/broke/get_broke_info', {"HTTP_USER_TOKEN":token, "HTTP_USER_UID":pfid, "anchor_pfid":anchor_pfid,"broke_pfid":pfid},
	// 	 	// function(data) {
	//             if(data.ret_code=="0"){
	//             	//1、上下主播信息
	//             	var broker_info=data.broke_info;
	//             	topBroker(broker_info);
	//             	//2、中间旗下艺人
	//             	var artists=broker_info.today_anchor_list;
	//             	printArtists(artists);
	//             	//3、 推荐主播
	//             	var recommendAnchors=broker_info.recommend_achcor;
	// 				if(recommendAnchors!=null){
	// 					printRecommend(recommendAnchors);
	// 				}
	//             }
	// 	    // },
	// 		// "json"
	//     // );
	// }
	// getDate();
	//------------------------------------------------0613 end


	// -----------------------------------------------------------0615 start
	// 1、封裝AJAX函數
	function Ajax(option){
		// 定义domain,方便环境切换
		var domain='https://' + window.location.host + '/';
		var url=domain+option.urlStr;
		var type=option.ajaxType;
		var data=option.ajaxData;
		var xhrRequest=new XMLHttpRequest();
		var str=null;
		xhrRequest.open(type,url,true);
		if(type==="POST"&&data!=null){
			xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
			for(var key in data){
				str+='&'+key+'='+data[key];
				str=str.slice(1);
			}
		}
		xhrRequest.onreadystatechange=function(){
			if(xhrRequest.readyState==4&&xhrRequest.status==200){
				// 1、格式化返回的数据
				var responseData=JSON.parse(xhrRequest.responseText);
				console.log(responseData);
				// 2、这里操作数据-----------------------------------
				if(responseData.ret_code=="0"){
					//1、上下主播信息
	            	var broker_info=responseData.broke_info;
	            	topBroker(broker_info);
	            	//2、中间旗下艺人
	            	var artists=broker_info.today_anchor_list;
	            	printArtists(artists);
	            	//3、 推荐主播
	            	var recommendAnchors=broker_info.recommend_achcor;
					if(recommendAnchors!=null){
						printRecommend(recommendAnchors);
					}
				}
			}
		}
		xhrRequest.send(str);
	}
	//2、GET：定义请求参数
	var getOption={
		ajaxType:"GET",	
		urlStr:"json-datas/Broker/personalData.json",
		ajaxData:null		
	}
	// 3、請求數據
	Ajax(getOption);
	
	// -----------------------------------------------------------0615 end
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
				h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction);
				// alert("进入直播间");
				// 如果没在直播，进入个人主页	
			}else{
				h5toHomepage(pfid,nickname);
				// alert("进入个人主页");
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
		if(broker_levelid!=0){
			var topImg_src=cardLists[broker_levelid][0];
			var outerCard_src=cardLists[broker_levelid][1];
			topImg.src=topImg_src;
			outerCard.src=outerCard_src;
		}
		// 1.2上升还是下降
		var yesterday_ranked=broker_info.yesterday_ranked;
		var today_ranked=broker_info.today_ranked;
		var isUp=yesterday_ranked-today_ranked;
		var yesRankingDom=getDomId("personalRanking");
		var rank_str="<span>";
		if(yesterday_ranked==0){
			rank_str+="未上榜";
		}else{
			rank_str+=yesterday_ranked;
			if(isUp>0){
				rank_str+='<i class="up"></i>';
			}else if(isUp<0){
				rank_str+='<i class="down"></i>';
			}
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
		// 用戶名字
		var BottomNameDom=getDomId("anchorBottomName");
		var bottom_name=broker_info.nickname;
		BottomNameDom.innerHTML=bottom_name;
		// 旗下藝人
		var anchor_num=broker_info.anchor_num;
		var ArtistsNumDom=getDomId("anchorArtistsNum");
		ArtistsNumDom.innerHTML=anchor_num;
		// 今日排名
		var TodayLevelDom=getDomId("userTodayLevel");
		TodayLevelDom.innerHTML=today_ranked;
		// ---0609添加  總積分
		var totalScoreDom=getDomId("anchorTotalScore");
		var total_score=broker_info.total_score;
		totalScoreDom.innerHTML=total_score;
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
			// },
			// "json"
		// );
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
	
	$("#close-recommend").click(function(event){
		event.preventDefault();
		event.stopPropagation();
		$("#recommend-bg").hide();
	});
	// 跳转到总榜
	$("#go_total").click(function(){
		$("#jumpTotal").trigger('submit');
	});

	// 活動細則
	$("#rule-btn").click(function(){
		$("#container").hide();
		$("#detialRuleMask").show();
	});
	$("#detialRuleClose").click(function(){
		$("#detialRuleMask").hide();
		$("#container").show();
	});
	
	// if(isiOS==true){
	// 	window.webkit.messageHandlers.langWeb2App_topback.postMessage({body:'{"flag":"1"}'});
	// } else {
	// 	javascriptinterface.langWeb2App_topback("1");
	// }

}()