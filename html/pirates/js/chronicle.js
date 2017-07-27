!function(){
  // public start
  var u = navigator.userAgent,
    app = navigator.appVersion;
    //ios终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  var domain='https://' + window.location.host + '/';
  // 客户端方法
  //h5关注
  function follow(pfid){
    console.log(pfid);
    if(isiOS==true){
        window.webkit.messageHandlers.langWeb2App_httpreq.postMessage({body:'{"base_url":"'+domain+'v2/","requst_url":"friend/follow","param":{"be_pfid":"'+pfid+'","action":"1"}}'});
          }else{
        javascriptinterface.langWeb2App_httpreq(domain+'v2/friend/follow','{"key": ["be_pfid","action"],"value": ["'+pfid+'","1"],"needlogin": false,"callback": true,"callback_tag": "follow"}');
          }
  }
  //h5进入个人主页
	function h5toHomepage(pfid,nickname){
		if(isiOS==true){
				window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"pfid":"'+pfid+'","className":"LNGOtherInfoViewCtrl","creatNav":"1"}'});
			} else{
			 	javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.user.UserCenterActivity','{"pfid":"'+pfid+'","nickname":"'+nickname+'"}');
			}
	}
	//h5进入直播间
	function h5toRoom(pfid,nickname,liveid,liveurl,livekey,direction,cdn_id){
		if(isiOS==true){
				window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"live_id":"'+liveid+'","className":"PlayFlowViewController","live_url":"'+liveurl+'","live_key":"'+livekey+'","stream_direction":"'+direction+'","pfid":"'+pfid+'","cdn_id":"'+cdn_id+'"}'});
			}else{
				javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.room.YunfanLiveActivity','{"pfid":"'+pfid+'","nickname":"'+nickname+'","live_id":"'+liveid+'","stream_direction":"'+direction+'","cdn_id":"'+cdn_id+'"}')
			}
	}
  //1、ClassName切换,是否含有指定class
  function hasClass(elem,cls){
      return elem.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  }
  // 2、没有就追加指定class
  function addClass(elem,cls){
      if(!hasClass(elem,cls)){
          elem.className+=" "+cls;
      }
  }
  // 3、有就移除指定class
  function removeClass(elem,cls){
      if(hasClass(elem,cls)){
          var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');
          elem.className=elem.className.replace(reg,"");
      }
  }
  // 4、公用获取元素by id
  function getEleId(id){
    return document.getElementById(id);
  }
  // 5、追加HTML
  function pushHtml(id,html){
    return document.getElementById(id).innerHTML=html;
  }
  // 6、AJAX封装
  function nativeAjax(option,success,error){
    // 定义domain,方便环境切换
    var domain='https://' + window.location.host + '/';
    // var domain='http://' + window.location.host + '/';
    var url=domain+option.urlStr;
    var type=option.ajaxType;
    var data=option.ajaxData;
    var xhrRequest=null;
    if(window.XMLHttpRequest){
          xhrRequest = new XMLHttpRequest();
      } else {
          xhrRequest = new ActiveXObject('Microsoft.XMLHTTP')
      }
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
      if(xhrRequest.readyState==4){
        if(xhrRequest.status==200){
          // 1.1、格式化返回的数据
          var responseData=JSON.parse(xhrRequest.responseText);
          // 1.2、这里操作数据--------
          success(responseData);
        }else{
          // 1.3、没成功返回HTTP状态码
          error(xhrRequest.status);
        }
      }
    }
    xhrRequest.send(str);
  }
// public end

  // 一、請求數據
  function getData(){
    // 本地
    var getOption={
      ajaxType:"GET", 
      urlStr:"html/jsondata/pirates/chronicle_data.json",
      ajaxData:null
    };
    // 測試
    // 測試
    var postOption={
      ajaxType:"POST", 
      urlStr:"v2/activity/pirate/personal_data",
      ajaxData:{
        "HTTP_USER_TOKEN":"9907fd6462e52fc064f24d0c947bbcd4",
        "HTTP_USER_UID":1024317, 
        "anchor_pfid":1000054
      }
    };
    nativeAjax(postOption,function(data){
      // 成功函数
      console.log(data);
      if(data.ret_code=="0"){
        // 主播信息
        var anchorData=data.data.user_score;
        randAnchor(anchorData);
        // 中間10個用戶
        var users=data.data.list;
        resetUsers(users)
        // 個人信息
        var mydata=data.data.my;
        randMy(mydata)
      }
    },function(error){
      // 失败返回HTTP状态码
      console.log(error);

    });
  }
  getData();


  //二 頂部主播信息
  var anchorName=document.getElementById("anchorName");
  var getHow=document.getElementById("getHow");
  var getWhichLivel=document.getElementById("getWhichLivel");
  var getHowMuch=document.getElementById("getHowMuch");
  // 今日和總排名
  var totalRanking=document.getElementById("totalRanking");
  var todayRanking=document.getElementById("todayRanking");
   // 2個禮物
  var hadLeftCount=document.getElementById("hadLeftCount");
  var hadRightCount=document.getElementById("hadRightCount");
   // 3個Km
  var mileageOne=document.getElementById("mileageOne");
  var mileageTwo=document.getElementById("mileageTwo");
  var mileageThree=document.getElementById("mileageThree");
  function randAnchor(anchorData){
    // "daily_ranking": 1, //今日排名
    // "daily_score": 1403, //今日里程
    // "all_ranking": 1, //总排名
    // "all_score": 1403, //总里程
    // "vipfans_score": 0, //总里程
    // "game_score": 0, //游戏加成
    // "big_count": 70, //大礼物数量，右邊
    // "small_count": 50, // 小礼物数量，左邊
    // "next_grade_name": "白銀航海家", // 距离下一等级昵称
    // "next_grade_bonus": 4000, // 距离下一等级奖励浪花
    // "percentage": 47, // 距离下一等级 百分比
    // "nickname": "🌶" // 主播昵称
    var anchor_name=anchorData.nickname;
    anchorName.innerHTML=anchor_name;
    var percentage=anchorData.percentage;
    getHow.style.width=percentage+"%";
    var livel=anchorData.next_grade_name;
    getWhichLivel.innerHTML=livel;
    var much=anchorData.next_grade_bonus;
    getHowMuch.innerHTML=much+"浪花";
    // 排名
    var total_rank=anchorData.all_ranking;
    var today_rank=anchorData.daily_ranking;
    totalRanking.innerHTML=total_rank;
    todayRanking.innerHTML=today_rank;
    // 禮物
    var left_gift=anchorData.small_count;
    var right_gift=anchorData.big_count;
    hadLeftCount.innerHTML=left_gift;
    hadRightCount.innerHTML=right_gift;
    // 3km
    var fans_score=anchorData.vipfans_score;
    var pirates_score=anchorData.game_score;
    var total_score=anchorData.all_score;
    mileageOne.innerHTML=fans_score;
    mileageTwo.innerHTML=pirates_score;
    mileageThree.innerHTML=total_score;
  };
  // 三 中間10個
  function resetUsers(users){
    var three=[];
    var seven=[];
    var length=users.length;
    for(var i=0;i<length;i++){
      if(i<3){
        three.push(users[i]);
      }else{
        seven.push(users[i]);
      }
    }
    randThree(three);
    printSeven(seven);
  };
  // 3.1
  function randThree(three){
    var len=three.length;
    var three_str="";
    for(var t=0;t<len;t++){
      var nowThree=three[t];
      var live_id=nowThree.live_id;
      var img_src=nowThree.headimg;
      var live_key=nowThree.live_key;
      var live_url=nowThree.live_url;
      var nick_name=nowThree.nickname;
      var user_pfid=nowThree.pfid;
      var user_ranking=nowThree.ranking;
      user_ranking<10&&(user_ranking="0"+user_ranking);
      var user_score=nowThree.score;
      var stream_direction=nowThree.stream_direction;
      var tip_name=nowThree.topnickname;
      var cdn_id=nowThree.cdn_id;

      three_str+='<li><div class="outer-bg">';
      three_str+='<b>'+user_ranking+'</b>';
      three_str+='<div class="anchor-img" data-cdnid="'+cdn_id+'" data-direction="'+stream_direction+'" data-name="'+nick_name+'" data-pfid="'+user_pfid+'" data-liveid="'+live_id+'" data-livekey="'+live_key+'" data-liveurl="'+live_url+'">';
      three_str+='<img src="'+img_src+'" alt="">';
      three_str+='</div>';
      three_str+='<span>'+tip_name+'</span>';
      if(live_id!=null){
        three_str+='<i></i>';
      }
      three_str+='</div>';
      three_str+='<b>'+user_score+'</b>';
      three_str+='<p>'+nick_name+'</p>';
      three_str+='</li>';
    }
    pushHtml("contributionThree",three_str);
    var userBtns=document.querySelectorAll(".anchor-img");
    addEvent(userBtns);
  };
  // 3.2
  function printSeven(seven){
    var sevenLen=seven.length;
    var seven_html="";
    for(var s=0;s<sevenLen;s++){
      var nowSeven=seven[s];
      var live_id=nowSeven.live_id;
      var img_src=nowSeven.headimg;
      var live_key=nowSeven.live_key;
      var live_url=nowSeven.live_url;
      var nick_name=nowSeven.nickname;
      var user_pfid=nowSeven.pfid;
      var user_ranking=nowSeven.ranking;
      user_ranking<10&&(user_ranking="0"+user_ranking);
      var user_score=nowSeven.score;
      var stream_direction=nowSeven.stream_direction;
      var cdn_id=nowSeven.cdn_id;

      if(pfid==user_pfid){
        seven_html+='<li class="me">';
      }else{
        seven_html+='<li>';
      }
      seven_html+='<b>'+user_ranking+'</b>';
      seven_html+='<div class="user-img" data-cdnid="'+cdn_id+'" data-direction="'+stream_direction+'" data-name="'+nick_name+'" data-pfid="'+user_pfid+'" data-liveid="'+live_id+'" data-livekey="'+live_key+'" data-liveurl="'+live_url+'">';
      seven_html+='<img src="'+img_src+'" alt="">';
      if(live_id!=null){
        seven_html+='<i></i>';
      }
      seven_html+='</div>';
      seven_html+='<p>'+nick_name+'</p>';
      seven_html+='<span>'+user_score+'</span>';
      seven_html+='</li>';
    }
    pushHtml("contributionSeven",seven_html);
    var allbtns=document.querySelectorAll(".user-img");
    addEvent(allbtns);
  };

  // 3.3 跳轉直播間還是個人主業
  function userJump(){
    // pfid,nickname,liveid,liveurl,livekey,direction,cdn_id
    var liveid=this.getAttribute("data-liveid");
    var liveurl=this.getAttribute("data-liveurl");
    var livekey=this.getAttribute("data-livekey");
    var livepfid=this.getAttribute("data-pfid");
    var nickname=this.getAttribute("data-name");
    var direction=this.getAttribute("data-direction");
    var cdn_id=this.getAttribute("data-cdnid");
    if(liveid!="null"){
      // 直播間
      alert("跳轉直播間");
      // h5toRoom(livepfid,nickname,liveid,liveurl,livekey,direction,cdn_id);
    }else{
      // 個人主頁
      alert("個人主頁！");
      // h5toHomepage(livepfid,nickname);
    }
  }
  function addEvent(allbtns){
    var btn_leng=allbtns.length;
    for(var b=0;b<btn_leng;b++){
      allbtns[b].addEventListener("click",userJump);
    }
  }

  // 四、底部個人
  var imgDom=document.getElementById("anchorSelfImg");
  var anchorSelfName=document.getElementById("anchorSelfName");
  var anchorSelfCon=document.getElementById("anchorSelfCon");
  var anchorSelfRank=document.getElementById("anchorSelfRank");
  function randMy(mydata){
    var me_src=mydata.headimg;
    var me_name=mydata.nickname;
    var me_score=mydata.score;
    var me_rank=mydata.ranking;
    imgDom.src=me_src;
    anchorSelfName.innerHTML=me_name;
    anchorSelfCon.innerHTML=me_score;
    anchorSelfRank.innerHTML=me_rank;
  };


  // 五、活動細則
  var content=document.getElementById("content");
  var ruleBox=document.getElementById("ruleBox");
  var rulebtn=document.getElementById("ruleBtn");
  ruleBtn.onclick=function(){
    content.className="hide";
    ruleBox.className="rule-box";
  }
  ruleBox.onclick=function(){
    content.className="";
    ruleBox.className="";
  }
  // 六、頁面跳轉
  // 粉絲團
  var joinFans=document.getElementById("joinFans");
  var jumpVipForm=document.getElementById("jumpVip");
  joinFans.onclick=function(){
    jumpVipForm.submit();
  }
  // 爭奪戰
  var joinPirates=document.getElementById("joinPirates");
  var jumpPiratesForm=document.getElementById("jumpPirates");
  joinPirates.onclick=function(){
    jumpPiratesForm.submit();
  }
  // 海賊榜單頁
  var joinRank=document.getElementById("jumpTo");
  var jumpRankForm=document.getElementById("jumpRank");
  joinRank.onclick=function(){
    jumpRankForm.submit();
  }
  
  
}();
