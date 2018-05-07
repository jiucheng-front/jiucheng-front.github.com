
!function(){
  //
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
    // var domain='https://' + window.location.host + '/';
    var domain='http://' + window.location.host + '/';
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
  // 2、POST：定義請求參數
  // var postOption={
  //  ajaxType:"POST",
  //  urlStr:"v2/html/broke/get_broke_ranked_info",
  //  ajaxData:{
  //    "HTTP_USER_TOKEN":token,
  //    "HTTP_USER_UID":pfid,
  //    "anchor_pfid":anchor_pfid,
  //    "broke_pfid":pfid
  //  }
  // }
  // 3、调用AJAX
  // nativeAjax(postOption,function(data){
  //  console.log(data);
  // },function(error){
  //  console.log(error);
  // });

  //0、请求数据
  function postData(){
    var getOption={
        ajaxType:"GET",
        urlStr:"json-datas/degula/dracula_second.json",
        ajaxData:null
      }
      nativeAjax(getOption,function(data){
        // 成功函数
        console.log(data);
        if(data.ret_code=="0"){
          // 1、顶部是否追踪
          var isFollowing=data.data.my;
          isCanFollow(isFollowing);
          // 2、人气星星列表
          var starsObject=data.data.star;
          allStars(starsObject);
          // 3、预言家
          var forecast=data.data.forecast;
          resetData(forecast);
        }
      },function(error){
        // 失败返回HTTP状态码
        console.log(error);
      });
  }
  postData();
  // 3.3 预言家
  function resetData(object){
    // 6个票数
    var justiceTicket=document.querySelectorAll(".justice-ticket");
    var evilTicket=document.querySelectorAll(".evil-ticket");
    // 正义按钮邪恶按钮
    var justiceBtn=document.querySelectorAll(".justice-btn");
    var evilBtn=document.querySelectorAll(".evil-btn");
    // 胜负状态
    var justiceWin=document.querySelectorAll(".justice-win");
    var evilWin=document.querySelectorAll(".evil-win");
    // console.log(object);
    var arr=[];
    var lists=object.vote_result;
    for(var key in lists){
      arr.push(lists[key]);
    }
    console.log(arr);
    // 第几轮
    var hash=[[0,1],[2,3],[4,5]];
    var iconRound=document.querySelectorAll(".icon-round");
    var stage=object.stage;
    // 遍历
    for(var j=0;j<arr.length;j++){
      var roundLiist=arr[j];
      // 正义票数
      var justice_ticket=roundLiist.ticket_count_justice;
      var evil_ticket=roundLiist.ticket_count_evil;
      justiceTicket[j].innerHTML=justice_ticket+"票";
      evilTicket[j].innerHTML=evil_ticket+"票";
      // 胜负状态
      var win_status=roundLiist.win;
      if(win_status==1){
        justiceWin[j].className="justice-win"+" show";
      }else if(win_status==-1){
        evilWin[j].className="evil-win"+" show";
      }
      // 投给了谁 prophet-btn
      var who_get=roundLiist.used_ticket;
      if(who_get==1){
        addClass(justiceBtn[j],"have-voted");
        justiceBtn[j].innerHTML="已投";
      }else if(who_get==-1){
        addClass(evilBtn[j],"have-voted");
        evilBtn[j].innerHTML="已投";
      }
      // 先清除第几轮的ClassName
      iconRound[j].className="icon-round";
    }
    // 第几轮
    var roundCount=document.querySelectorAll(".same-is-start");
    var defaultBtn=document.querySelectorAll(".default-btn");
    // stage==1&&(iconRound[0].className="icon-round "+iconClass[0]);
    // stage==2&&(iconRound[1].className="icon-round "+iconClass[1]);
    // stage==3&&(iconRound[2].className="icon-round "+iconClass[2]);
    // 第一轮投票
    if(stage==1){
      addClass(iconRound[0],"icon-one-start");
      var oneTime=arr[0].forecast_end_time;
      roundCount[1].innerHTML="投票未開始";
      roundCount[2].innerHTML="投票未開始";
      if(oneTime!=0){
        sameCountDown("oneCountDown",oneTime,stage);
        addClass(defaultBtn[0],"prophet-btn");
        addClass(defaultBtn[1],"prophet-btn");
        var nowBtns=document.querySelectorAll(".prophet-btn");
        prophetVote(nowBtns,stage);
      }else{
        roundCount[0].innerHTML="投票已經結束";
      }
      // 第二轮投票
    }else if(stage==2){
      addClass(iconRound[1],"icon-two-start");
      var twoTime=arr[1].forecast_end_time;
      roundCount[0].innerHTML="投票已經結束";
      roundCount[2].innerHTML="投票未開始";
      console.log(arr[1].used_ticket);
      // 不是0可以投票
      if(twoTime!=0){
        sameCountDown("twoCountDown",twoTime,stage);
        addClass(defaultBtn[2],"prophet-btn");
        addClass(defaultBtn[3],"prophet-btn");
        var nowBtns=document.querySelectorAll(".prophet-btn");
        prophetVote(nowBtns,stage);
      }else{
        roundCount[1].innerHTML="投票已經結束";
      }
      // console.log(defaultBtn.length);
      // 第三轮投票
    }else if(stage==3){
      addClass(iconRound[2],"icon-three-start");
      var threeTime=arr[2].forecast_end_time;
      roundCount[0].innerHTML="投票已經結束";
      roundCount[1].innerHTML="投票已經結束";
      // 不是0可以投票
      if(threeTime!=0){
        sameCountDown("threeCountDown",threeTime,stage);
        addClass(defaultBtn[4],"prophet-btn");
        addClass(defaultBtn[5],"prophet-btn");
        var nowBtns=document.querySelectorAll(".prophet-btn");
        prophetVote(nowBtns,stage);
      }else{
        roundCount[2].innerHTML="投票已經結束";
      }
    }
  }
  // 预言家倒计时
  function  sameCountDown(id,count,round){
    var index=round-1;
    var btnParent=document.querySelectorAll(".prophet-lists")[index];
    var canBtns=btnParent.querySelectorAll(".default-btn");
    var elemDom=getEleId(id);
    var timer=null;
    var total=count;
    var minutes=0;
    var second=0;
    var start=true;
    minutes=Math.floor(total/60%60);
    minutes<10&&(minutes='0'+minutes);
    second=Math.floor(total%60);
    function timeCount(){
      second--;
      second<10&&(second='0'+second);
      if(second.length>=3){
        second=59;
        minutes="0"+(Number(minutes)-1);
      }
      if(minutes.length>=3){
        minutes='00';
        second='00';
        start=false;
        clearInterval(timer);
      }
      if(start){
        elemDom.innerHTML="投票倒计时："+minutes+'：'+second;
      }else{
        elemDom.innerHTML="投票已經結束";
        removeClass(canBtns[0],"prophet-btn");
        removeClass(canBtns[1],"prophet-btn");
      }
    }
    timer=setInterval(timeCount,1000);
  }
  // 预言家投票
  function prophetVote(nowBtns,round){
    var DATA={
        ret_code: "0",
        ret_msg: "ok",
        data: {
          ticket_count: 3
      }
    };
    var key=round-1;
    var btnParents=document.querySelectorAll(".prophet-lists")[key];
    var afterTicket=btnParents.querySelectorAll(".same-camp-ticket");
    console.log(afterTicket);
    for(var k=0;k<nowBtns.length;k++){
      nowBtns[k].index=k;
      nowBtns[k].addEventListener("click",function(event){
        event.preventDefault();
        event.stopPropagation();
        if(hasClass(this,"prophet-btn")){
          var place=this.getAttribute("data-vote");
          // 投票需要三個參數：谁投的 pfid,当前第几轮 stage,投给了谁 place
          console.log(place,round);
          // var forecastOption={
          //   ajaxType:"POST",
          //   urlStr:"v2/activity/dracula_second_forecast_vote",
          //   ajaxData:{
          //     "pfid":pfid,
          //     "stage":round,
          //     "forecast":place
          //   }
          // };
          if(DATA.ret_code==0){
            var after_ticket=DATA.data.ticket_count;
            afterTicket[this.index].innerHTML=after_ticket+"票";
            removeClass(nowBtns[0],"prophet-btn");
            removeClass(nowBtns[1],"prophet-btn");
            addClass(this,"have-voted");
            this.innerHTML="已投";
          }


        }
      });
    }
  }



  // 1、0顶部是否追踪过
  function isCanFollow(follow){
    var follow_status=follow.follow_status;
    var this_pfid=follow.offical_pfid;
    var followBtn=getEleId("following");
    if(follow_status==1){
      followBtn.className="hide";
    }else if(follow_status==0){
      canFollowing(this_pfid);
    }
  }
  // 1.2
  function canFollowing(pfid){
    var canBtn=getEleId("following");
    canBtn.onclick=function(){
      follow(pfid);
      this.className="hide";
    }
  }
  //1.3客戶端返回追蹤狀態
  function langApp2Web_httprtn(result,follow){
    if(isiOS == true){
      if(JSON.parse(result).ret_code == "0"){
        // 成功追踪按钮消失
        getEleId("following").className="hide";
      }else{
        alert(JSON.parse(result).ret_msg);
      }
    }else{
      if(JSON.parse(follow).ret_code == "0"){
        // 成功追踪按钮消失
        getEleId("following").className="hide";
      }else{
        alert(JSON.parse(follow).ret_msg);
      }
    }
  }
  // 2.0、人气星星
  function allStars(obj){
    // 剩余数量
    var remainCount=obj.ticket_count;
    pushHtml("remainStars",remainCount);
    var tempDom=getEleId("ramainTimes");
    // 先判断是否开始或者结束:-1未开始，-2已经结束
    var is_status=obj.status;
    // 未开始
    if(is_status==-1){
      tempDom.innerHTML="活動為開始";
    // 已经结束
    }else if(is_status==-2){
      tempDom.innerHTML="活動已結束";
    // 开始了
    }else if(is_status==0){
      // 获得下一颗倒计时
      var next_time=obj.end_time;
      resetTime(next_time);
    }
    // 9个用户列表
    var users=obj.vote_result;
    var str_html="";
    var length=users.length;
    for (var i = 0; i < length; i++) {
      var nowList=users[i];
      // 已经获得的星星数量
      var star_count=nowList.count;
      var nick_name=nowList.nickname;
      var user_pfid=nowList.pfid;
      var head_img=nowList.headimg;
      //
      str_html+='<li>';
      str_html+='<div class="user-img">';
      str_html+='<img src="'+head_img+'" alt="">';
      str_html+='</div>';
      str_html+='<p>'+nick_name+'</p>';
      str_html+='<p><i></i>：<b class="star-count">'+star_count+'</b></p>';
      if(remainCount==0||(is_status==-1)||(is_status==-2)){
        str_html+='<span data-anchorpfid="'+user_pfid+'">投票</span>';
      }else if(is_status==0){
        str_html+='<span class="vote-btn" data-anchorpfid="'+user_pfid+'">投票</span>';
      }
      str_html+='</li>';
    }
    var usersBox=getEleId("userLists");
    usersBox.innerHTML=str_html;
    addEvent();
  }
  // 2.1星星倒计时
  function resetTime(time){
    var ramainTimes=getEleId("ramainTimes");
    var timer=null;
    var t=time;
    var m=0;
    var s=0;
    m=Math.floor(t/60%60);
    m<10&&(m='0'+m);
    s=Math.floor(t%60);
    function countDown(){
      s--;
      s<10&&(s='0'+s);
      if(s.length>=3){
        s=59;
        m="0"+(Number(m)-1);
      }
      if(m.length>=3){
        m='00';
        s='00';
        clearInterval(timer);
        // 重新请求数据
        postData();
      }
      ramainTimes.innerHTML=m+'：'+s;
      // console.log(m+"分钟"+s+"秒");
    }
    timer=setInterval(countDown,1000);
  }

  // 限制1秒內多次点击
  function  throttle(func,wait){
    var timeout;
    return function(){
      var context=this;
      var args=arguments;
      console.log(args);
      if(!timeout){
        timeout=setTimeout(function(){
          timeout=null;
          func.apply(context,args);
        },wait);
      }
    }
  }

  // 一、动态DOM投票事件
  function addEvent(){
    // 用戶列表投票
    var voteBtns=document.querySelectorAll(".vote-btn");
    var nextTicket=document.querySelectorAll(".star-count");
    var myTicket=getEleId("remainStars");
    var data={
        "ret_code": "0",
        "ret_msg": "ok",
        "data": {
            "my_ticket":1,
            "ticket_count": "4"
        }
    };
    function starsVote(){
      var _this=this;
      var anchorpfid=this.getAttribute("data-anchorpfid");
      console.log(anchorpfid);
      if(data.ret_code=="0"){
          var my_ticket=data.data.my_ticket;
          var now_ticket=data.data.ticket_count;
          myTicket.innerHTML=my_ticket;
          nextTicket[this.index].innerHTML=now_ticket;
          // 如果余票是0 取消投票按钮
          if(my_ticket==0){
            cancleVote();
          }
        }
    }
    for(var i=0;i<voteBtns.length;i++){
      voteBtns[i].index=i;
      voteBtns[i].addEventListener("click",throttle(starsVote,1000));
    }
  }


  function cancleVote(){
    var allBtns=document.querySelectorAll(".vote-btn");
    console.log(allBtns.length);
    for(var c=0;c<allBtns.length;c++){
      allBtns[c].className="";
    }
  }

  // 二、静态DOM点击事件
  function staticEvent(){
    // 2.1切换事件
    var btns=document.querySelectorAll(".js-nav-btn");
    var items=document.querySelectorAll(".content-item");
    for(var i=0;i<btns.length;i++){
      btns[i].index=i;
      btns[i].onclick=function(){
        for (var j = 0; j < items.length; j++) {
          items[j].className="content-item";
          btns[j].className="js-nav-btn";
          // console.log(this);
        }
        btns[this.index].className="js-nav-btn selected";
        items[this.index].className="content-item show";
      }
    }
    // 2.2游戏规则弹框
    // 按钮
    var ruleBtn=getEleId("ruleBtn");
    // 规则
    var ruleMask=getEleId("rule");
    // 页面
    var context=getEleId("container");
    ruleBtn.addEventListener("click",function(){
      context.className="hide";
      ruleMask.className="show";
      console.log(this);
    });
    ruleMask.addEventListener("click",function(){
      this.className="";
      context.className="";
    });
  }
  staticEvent();
  // 三、返回頂部通用的方法
  function backTop(btnId) {
      var btn = document.getElementById(btnId);
      var d = document.documentElement;
      var b = document.body;
      window.onscroll = set;
      btn.style.display = "none";
      btn.onclick = function() {
          btn.style.display = "none";
          window.onscroll = null;
          this.timer = setInterval(function() {
              d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
              b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
              if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);
          }, 10);
      };
      function set() {
          btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block': "none";
      }
  };
  backTop('backTop');

  // 
  function on(type,selector,callback){
      document.addEventListener(type,function(e){
          e.preventDefault();
          e.stopPropagation();
          if(selector==e.target.tagName.toLowerCase()||selector==e.target.className||selector==e.target.id){
              callback(e);
          }
      })
  }
var btn=document.getElementById("content");
on("click",btn,function(e){
    console.log(this);
});





}();
