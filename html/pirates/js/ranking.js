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

function loadData(){
  // 本地
  var getOption={
    ajaxType:"GET", 
    urlStr:"html/jsondata/pirates/ranking_datas.json",
    ajaxData:null
  };
  // 測試
  var postOption={
    ajaxType:"POST", 
    urlStr:"v2/activity/pirate/general_data",
    ajaxData:{
      "HTTP_USER_TOKEN":"9907fd6462e52fc064f24d0c947bbcd4",
      "HTTP_USER_UID":1024317, 
      "anchor_pfid":1000054
    }
  }
  nativeAjax(postOption,function(data){
    // 成功函数
    console.log(data);
    if(data.ret_code=="0"){
      var alldata=data.data;
      var arr=[];
      arr.push(alldata.daily);
      arr.push(alldata.all);
      printTwo(arr);
      // 貢獻榜
      var contributions=alldata.send;
      printCon(contributions);
      addEvent();
    }
  },function(error){
    // 失败返回HTTP状态码
    console.log(error);

  });
}
loadData();

// 渲染日和總
function printTwo(arr){
  var len=arr.length;
  var usersItem=document.querySelectorAll(".ranking-user-list");
  var myItem=document.querySelectorAll(".anchor-self");
  for(var i=0;i<len;i++){
    // 日和總
    var userLists=arr[i].list;
    var innerLength=userLists.length;
    var user_str="";
    for(var j=0;j<innerLength;j++){
      var nowList=userLists[j];
      var live_id=nowList.live_id;
      var img_src=nowList.headimg;
      var live_key=nowList.live_key;
      var live_url=nowList.live_url;
      var nick_name=nowList.nickname;
      var user_pfid=nowList.pfid;
      var user_ranking=nowList.ranking;
      user_ranking<10&&(user_ranking="0"+user_ranking);
      var user_score=nowList.score;
      var stream_direction=nowList.stream_direction;
      var cdn_id=nowList.cdn_id;

      if(pfid==user_pfid){
        user_str+='<li class="myself">';
      }else{
        user_str+='<li>';
      }
      user_str+='<b>'+user_ranking+'</b>';
      user_str+='<div class="ranking-user-outer">';
      user_str+='<div class="ranking-user-img" data-cdnid="'+cdn_id+'" data-direction="'+stream_direction+'" data-name="'+nick_name+'" data-pfid="'+user_pfid+'" data-liveid="'+live_id+'" data-livekey="'+live_key+'" data-liveurl="'+live_url+'">';
      user_str+='<img src="'+img_src+'" alt="">';
      user_str+='</div>';
      if(live_id!=null){
        user_str+='<i></i>';
      }
      if(j==0){
        user_str+='<span>傭兵之王</span>';
      }else if(j==1){
        user_str+='<span>傳奇傭兵</span>';
      }else if(j==2){
        user_str+='<span>赤日傭兵</span>';
      }
      user_str+='</div>';
      user_str+='<p>'+nick_name+'</p>';
      user_str+='<span>賞金'+user_score+'</span>';
      user_str+='</li>';
    }
    // html
    usersItem[i].innerHTML=user_str;
    // 底部日和總個人
    var myInfo=arr[i].my;
    var myImg=myInfo.headimg;
    var myName=myInfo.nickname;
    var myRanking=myInfo.ranking;
    var myScore=myInfo.score;
    var my_str="";
    my_str+='<div class="anchor-self-img">';
    my_str+='<img src="'+myImg+'" alt="" >';
    my_str+='</div>';
    my_str+='<div class="anchor-self-msg">';
    my_str+='<h3>'+myName+'</h3>';
    if(i==0){
      my_str+='<p>里程數：<span>'+myScore+'</span></p>';
    }else if(i==1){
      my_str+='<p>總里程數：<span>'+myScore+'</span></p>';
    }
    my_str+='</div>';
    my_str+='<b>排名<span>'+myRanking+'</span></b>';
    my_str+='<i></i></div>';
    myItem[i].innerHTML=my_str;
  }
  // console.log(arr);
}
// 渲染貢獻榜單
function printCon(con){
  var lists=con.list;
  var length=lists.length;
  var con_str="";
  for(var c=0;c<length;c++){
    var nowCon=lists[c];
    var live_id=nowCon.live_id;
    var img_src=nowCon.headimg;
    var live_key=nowCon.live_key;
    var live_url=nowCon.live_url;
    var nick_name=nowCon.nickname;
    var user_pfid=nowCon.pfid;
    var user_ranking=nowCon.ranking;
    user_ranking<10&&(user_ranking="0"+user_ranking);
    var user_score=nowCon.score;
    var stream_direction=nowCon.stream_direction;
    var cdn_id=nowCon.cdn_id;
    if(pfid==user_pfid){
      con_str+='<li class="myself">';
    }else{
      con_str+='<li>';
    }
    con_str+='<b>'+user_ranking+'</b>';
    con_str+='<div class="ranking-user-outer">';
    con_str+='<div class="ranking-user-img" data-cdnid="'+cdn_id+'" data-direction="'+stream_direction+'" data-name="'+nick_name+'" data-pfid="'+user_pfid+'" data-liveid="'+live_id+'" data-livekey="'+live_key+'" data-liveurl="'+live_url+'">';
    con_str+='<img src="'+img_src+'" alt="">';
    con_str+='</div>';
    if(live_id!=null){
      con_str+='<i></i>';
    }
    if(c==0){
      con_str+='<span>海賊船長</span>';
    }else if(c==1){
      con_str+='<span>海賊大副</span>';
    }else if(c==2){
      con_str+='<span>海賊船員</span>';
    }
    con_str+='</div>';
    con_str+='<div class="ranking-contribution-info">';
    con_str+='<h3>'+nick_name+'</h3>';
    con_str+='<p>貢獻里程：<span>'+user_score+'</span></p>';
    con_str+='<i></i></div>';
  }
  // 追加HTML
  pushHtml("rankCon",con_str);
  // 貢獻自己
  var conMe=con.my;
  var myImg=conMe.headimg;
  var myName=conMe.nickname;
  var myRanking=conMe.ranking;
  var myScore=conMe.score;
  var conmy_str="";
  conmy_str+='<div class="anchor-self-img">';
  conmy_str+='<img src="'+myImg+'" alt="" >';
  conmy_str+='</div>';
  conmy_str+='<div class="anchor-self-msg">';
  conmy_str+='<h3>'+myName+'</h3>';
  conmy_str+='<p>貢獻<span>'+myScore+'</span></p>';
  conmy_str+='</div>';
  conmy_str+='<b>排名<span>'+myRanking+'</span></b>';
  conmy_str+='</div>';
  // 追加HTML
  pushHtml("conMe",conmy_str);
  // console.log(con);
}
// 點擊頭像跳轉
function clickImg(){
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
function addEvent(){
  var btns=document.querySelectorAll(".ranking-user-img");
  var btnLength=btns.length;
  for(var m=0;m<btnLength;m++){
    btns[m].addEventListener("click",clickImg);
  }
}
// tab切換
var btns=document.querySelectorAll(".ranking-tab-btn");
var items=document.querySelectorAll(".ranking-lists-info");
var length=items.length;
function toogleClass(){
  var _this=this;
  for(var j=0;j<length;j++){
    btns[j].className="ranking-tab-btn";
    items[j].className="ranking-lists-info";
  }
  items[this.index].className="ranking-lists-info"+" selected";
  this.className="ranking-tab-btn"+" on";
}
for(var i=0;i<btns.length;i++){
  btns[i].index=i;
  btns[i].addEventListener("click",toogleClass);
}
  // 活動細則
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
  //
  // 海賊榜單頁
  var joinRank=document.getElementById("jumpTo");
  var jumpRankForm=document.getElementById("jumpRank");
  joinRank.onclick=function(){
    jumpRankForm.submit();
  }

}();
