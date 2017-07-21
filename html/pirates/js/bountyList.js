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
// public end




  //
}();
