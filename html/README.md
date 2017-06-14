### git常用命令
+ git add .
+ git commit -m '这次提交的注释内容'
+ git pull --rebase	//push之前先pull防止有人在你之前push
+ git push 提交/如果还是不慎需要合并
+ 注意如果不慎进入合并冲突界面步骤：Insert>Esc>:wq>Enter


### 一、活动介绍
+ 1、my/fillInfo.html是上传照片的功能，调用客户端
+ 2、magic是相框礼物页面
+ 3、Disney迪士尼活动
+ 4、anchorGrowTree成长树活动
+ 5、motherDay：母亲节活动
+ 6、Growth新人成长活动
+ 7、degula德古拉活动
+ 8、520love：520活动


### 二、js介绍以及如何使用
+ 1、html/js/publicVersion.js（封装好的JS方法）
	+ 1、h5进入个人主页
	+ 2、h5进入直播间
	+ 3、h5关注
	+ 4、h5分享
	+ 5、追踪主播
	+ 6、大部分活动页面的顶部需要的参数,具体字段名字需跟对应后台确认

```javascript

	var token = '<?=$token;?>';
	var pfid = '<?=$pfid;?>';
	var share_url_head = '<?=$share_url_head;?>';
	var anchor_id='<?=$anchor_id;?>';
	
```

+ 2、/html/my/fillInfo.js 包含客戶端的上传照片的公用方法

+ 3、判断倒是是IOS还是Android,**下面很多公用方法用到**

```javascript

	var u = navigator.userAgent,
    app = navigator.appVersion;
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

```

### 三、关于上传照片的问题（如magic活动）

+ 点击上传照片按钮会调用客户端的方法，客户端返回URL给你
+ suppportCamera参数是20170512日新增，是否可以拍照

```javascript
	
	//1、点击上传按钮调用客户端的方法，弹出选择文件还是截屏还是摄像头
		if(isiOS==true){
              window.webkit.messageHandlers.langWeb2App_camera.postMessage({body:'{"needupload":"1","cropImg":"0","supportCamera":"0"}'});
           }else{
               javascriptinterface.langWeb2App_camera("1","0");
        }
	//2、客户端通过如下方法返回以及上传的img的url，如果用得到自己定义变量或者函数接收并操作
	var loadingSrc=null; 
	function langApp2Web_camerartn(imgUrl) {
	   $("img[data-src='imgSrc']").attr('src', imgUrl).removeAttr("data-src").on("load",function(){
		   loadingSrc=imgUrl;
		   $(".upload-agree").css({
				display:"block"
			});
	   });
	}

```

+ cropImg:是否允许客户端裁剪，0不允许，1允许
+ supportCamera:是否允许客户端调用摄像头，0不允许,1允许

### 四、APP內部浏览器顶部左上角返回按钮

``` javascript

	// 客户端浏览器的返回键操作，调用客户端的方法，默认执行
	//flag:1直接返回直播间或者app，flag:0返回上一步操作
	if(isiOS==true){
		window.webkit.messageHandlers.langWeb2App_topback.postMessage({body:'{"flag":"1"}'});
	} else {
		javascriptinterface.langWeb2App_topback("1");
	}

```

### 五、页面之间的跳转

+ 1、form表单提交形式,如：magic

```javascript
	
	//html code
	//<!-- 跳转到总榜 -->
    <form action="<?php echo DOMAIN ?>v2/html/activity/magic/total.html" method="post" class="jumpTo">
        <input type="hidden" name="HTTP_USER_TOKEN" class="access_token" value="<?=$token;?>">
        <input type="hidden" name="HTTP_USER_UID" class="pfid" value="<?=$pfid;?>">
    </form>
	
	//js code
	// 跳转到总榜
	$(".all-btn").click(function(){
		$(".jumpTo").trigger('submit');
	});
	

```

+ 2、按钮直接跳转，需要用户信息拼接在url后面，如：520love

```javascript

	$('.all-btn').on('click',function (e) {
        //跳转到個人魅力值页面
        e.preventDefault();
        window.location.href=domain+'v2/html/activity/magic/total.html?HTTP_USER_UID='+pfid+'&HTTP_USER_TOKEN='+token+'&anchor_pfid='+anchor_pfid;
    })
	

```

### 六、关于追踪(即关注)

+ 点击追踪按钮

```javascript

	//1、h5关注公用方法
	function follow(pfid){
		if(isiOS==true){  
				window.webkit.messageHandlers.langWeb2App_httpreq.postMessage({body:'{"base_url":"'+domain+'v2/","requst_url":"friend/follow","param":{"be_pfid":"'+pfid+'","action":"1"}}'});
	        }else{
				javascriptinterface.langWeb2App_httpreq(domain+'v2/friend/follow','{"key": ["be_pfid","action"],"value": ["'+pfid+'","1"],"needlogin": false,"callback": true,"callback_tag": "follow"}'); 
	        }
	}
	//2、例如： 點擊追蹤按鈕
	$(".user-list").on('click', '.willFollow', function(event) {
		var willPfid=$(this).attr('data-pfid');
		$(this).addClass('followed');
		console.log(willPfid);
		//公用方法
		follow(willPfid);//调用公用方法，需要被关注的pfid
	})
	//3、客戶端返回追蹤狀態,通过该方法返回追踪结果，成功追踪是按钮消失还是按钮改变样式，具体看情况
	function langApp2Web_httprtn(result,follow){
		if(isiOS == true){
			if(JSON.parse(result).ret_code == "0"){
				$(".followed").css({
					display:"none"
				}); 
			}else{
				alert(JSON.parse(result).ret_msg);
			}
		}else{
			if(JSON.parse(follow).ret_code == "0"){
				$(".followed").css({
					display:"none"
				}); 
			}else{
				alert(JSON.parse(follow).ret_msg);
			}
		}
			
	}

```

### 七、点击头像跳转直播间还是跳转个人主页

```javascript

	//1、公用方法
	//h5进入个人主页
	function h5toHomepage(pfid,nickname){
		if(isiOS==true){
				window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"pfid":"'+pfid+'","className":"LNGOtherInfoViewCtrl"}'});
			} else{
			 	javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.user.UserCenterActivity','{"pfid":"'+pfid+'","nickname":"'+nickname+'"}');
			}
	}
	
	//h5进入直播间
	function h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction){
		if(isiOS==true){
				window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"live_id":"'+liveid+'","className":"PlayFlowViewController","live_url":"'+liveurl+'","live_key":"'+livekey+'","stream_direction":"'+direction+'","pfid":"'+pfid+'"}'});
			}else{
				javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.room.YunfanLiveActivity','{"pfid":"'+pfid+'","nickname":"'+nickname+'","live_id":"'+liveid+'","stream_direction":"'+direction+'"}')
			}
	}
	//2、点击头像到底该怎么跳转根据live_id是否为null，
	//为null没有在直播，头像下面没有直播ICON，点击调用h5toHomepage(pfid,nickname)跳转个人主页
	//live_id不为null,正在直播，头像下面有直播ICON，
	//点击调用h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction)跳转直播间
	//如下面：
	// 点击头像判断是跳转到直播间还是主页，所需要的参数在渲染DOM之前添加到对应的DOM上
	$("#users-one").on('click', '.main-img', function(event) {
		event.preventDefault();
		event.stopPropagation();
		/* Act on the event */
		// pfid,nickname,liveid,liveurl,livekey,direction
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

```

### 八、分享按钮(页面中的分享按钮和浏览器右上角的分享按钮)，如果需要显示用户信息，把参数在url后面拼接，分享方法的参数具体问产品要文案以及图片。被分享的页面需要新建一个页面内部如果有分享按钮需要去除(部分逻辑也需要去除)

```javascript

	**//注意：分享出去的頁面不需要相互跳轉，去掉跳轉的JS以及html內的跳轉按鈕**
	//分享的參數需要注入的比如注入

	//1、h5分享公用方法：页面中的分享按钮方法
	function needShare(imgUrl,desc,pageTitle,pageUrl){
		var androidShareJson={"imageurl":imgUrl,"description":desc,"title":pageTitle,"shareUrl":pageUrl};
		var iosShareJson={"img_url":imgUrl,"share_content":desc,"share_title":pageTitle,"share_link":pageUrl}
		if(isiOS==true){
			window.webkit.messageHandlers.langWeb2App_needShare.postMessage({body:JSON.stringify(iosShareJson)})
		} else{
			javascriptinterface.langWeb2App_needShare(JSON.stringify(androidShareJson));
		}
	
	}
	//2、浏览器右上角默认分享按钮方法
	function shareInterface(imgUrl,desc,pageTitle,pageUrl){
		var androidShareJson={"imageurl":imgUrl,"description":desc,"title":pageTitle,"shareUrl":pageUrl};
		var iosShareJson={"img_url":imgUrl,"share_content":desc,"share_title":pageTitle,"share_link":pageUrl}
		if(isiOS==true){
				window.webkit.messageHandlers.langWeb2App_share.postMessage({body:JSON.stringify(iosShareJson)});
			} else{
				javascriptinterface.langWeb2App_share(JSON.stringify(androidShareJson));
		}
	
	}
	// 例如Disney活动(需要显示用户信息)：
	// 弹出分享面板
	$(".shareBtn").bind("click",function(){
	    shareInterface(
	       "http://playback-langlive.ufile.ucloud.com.cn/e634d9705beb4f8e9ab506748c940e84",
	        "熱情夏日之旅，點亮心中奇夢！快來幫助主播實現迪士尼夢幻之旅計劃~",
	        "迪士尼夢幻之旅展開中",
	        share_url_head + 'html/activity/disney2017/map_share.html?anchor_pfid='+anchor_id+'&pfid='+pfid
	                );
	})
	
	needShare(
	     "http://playback-langlive.ufile.ucloud.com.cn/e634d9705beb4f8e9ab506748c940e84",//分享的圖片
	     "熱情夏日之旅，點亮心中奇夢！快來幫助主播實現迪士尼夢幻之旅計劃~",//分享的內容
	     "迪士尼夢幻之旅展開中",//分享的標題
	     share_url_head + 'html/activity/disney2017/map_share.html?anchor_pfid='+anchor_id+'&pfid='+pfid
	);
	
```


### 注：其他封裝
#### 1、ajax的封裝

```javascript

	// 614 測試封裝的ajax:post 測試可以使用
	var str='HTTP_USER_TOKEN='+token+'&HTTP_USER_UID='+pfid+'&anchor_pfid='+anchor_pfid+'&broke_pfid='+pfid+'&date='+date;
	function Ajax(type,urlStr,data){
		// 定义domain,方便环境切换
		var domain='https://' + window.location.host + '/';
		var url=domain+urlStr;
		var xhrRequest=new XMLHttpRequest();
		xhrRequest.open(type,url,true);
		if(type==="POST"){
			xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8"); 
		}
		xhrRequest.onreadystatechange=function(){
			if(xhrRequest.readyState==4&&xhrRequest.status==200||xhrRequest.status==304){
				// 1、格式化返回的数据
				var responseData=JSON.parse(xhrRequest.responseText);
				console.log(responseData);
			}
		}
		xhrRequest.send(str);
	}
	Ajax("POST","v2/html/broke/get_broke_ranked_info",str);


	


	
	//GET:測試可以用如：http://wjf444128852.github.io/html/handlebars/degula/
	function Ajax(type,urlStr,data){
		// 定义domain,方便环境切换
		var domain='https://' + window.location.host + '/';
		var url=domain+urlStr;
		var xhrRequest=new XMLHttpRequest();
		xhrRequest.open(type,url,true);
		if(type==="POST"){
			xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8"); 
		}
		xhrRequest.onreadystatechange=function(){
			if(xhrRequest.readyState==4&&xhrRequest.status==200||xhrRequest.status==304){
				// 1、格式化返回的数据
				var responseData=JSON.parse(xhrRequest.responseText);
				console.log(responseData);
				// 2、获取指定的数据列表
				var users=responseData.data.users;
				// 3、操作返回的数据
				sortData(users);
			}
		}
		xhrRequest.send(data);
	}
	Ajax("GET","json-datas/degula.json",null);


```

+ POST測試結果
+ ![](../imgs/AJAX01.png)
+ ![](../imgs/AJAX02.png)
+ ![](../imgs/AJAX03.png)

+ ## 注意事項
+ 1、Content-Type: application/x-www-form-urlencoded;charset=utf-8；
	+ 此時的請求參數得是：'key=value&key2=value2'格式
+ 2、application/json;charset=utf-8；
	+ 此時的請求頭是：JSON.stringify(data)系列化之後的JSON格式，需要后台配合