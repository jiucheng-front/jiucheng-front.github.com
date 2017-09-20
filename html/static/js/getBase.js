
var u = navigator.userAgent,
    app = navigator.appVersion,
    isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    getuseInfoJson,
    getuseAnchorJson,
    pfidv,
    tokenv,
    anchor_pfidV,
    tourist;
var domain=location.origin.indexOf('web-test')>6?'https://api.s.lang.live/':'https://tw.api.langlive.com/';

//获取当前登陆的用户信息
if(isiOS==true){
    if(typeof window.webkit=="undefined"){
        pfidv='0';
        tokenv='0';
    }else {
        window.webkit.messageHandlers.langWeb2App_getCurUserInfo.postMessage({body:'{}'});
        function langApp2Web_getCurUserInfo(result){
            getuseInfoJson=JSON.parse(result);
            pfidv=getuseInfoJson.pfid;
            tokenv=getuseInfoJson.access_token;
        }

        /*window.webkit.messageHandlers.langWeb2App_getCurLiveInfo.postMessage({body:'{}'});
        function langApp2Web_getCurLiveInfo(result){
            getuseAnchorJson=JSON.parse(result);
            anchor_pfidV=getuseAnchorJson.anchor_pfid;
        }*/
    }
}else{
    if(typeof javascriptinterface=="undefined"){
        pfidv='0';
        tokenv='0';
        anchor_pfidV='0';
    }else {
        getuseInfoJson=JSON.parse(javascriptinterface.langWeb2App_getCurUserInfo());
        pfidv=getuseInfoJson.pfid;
        tokenv=getuseInfoJson.access_token;
        tourist=getuseInfoJson.tourist;

        /*getuseAnchorJson=JSON.parse(javascriptinterface.langWeb2App_getCurLiveInfo());
        anchor_pfidV=getuseAnchorJson.anchor_pfid;*/
    }
}



//h5进入个人主页
function h5toHomepage(pfid){
    if(isiOS==true){
        window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"pfid":"'+pfid+'","className":"LNGOtherInfoViewCtrl","creatNav":"1"}'});
    } else{
        javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.user.UserCenterActivity','{"pfid":"'+pfid+'"}');
    }
}

//h5进入直播间
function h5toRoom(pfid,liveid,liveurl,livekey,direction,cdn_id,liveimg){
    if(direction=="0"){
        if(isiOS==true){
            window.webkit.messageHandlers.langWeb2App_openActivity.postMessage({body:'{"live_id":"'+liveid+'","className":"PlayFlowViewController","live_url":"'+liveurl+'","live_key":"'+livekey+'","live_img:"'+liveimg+'","stream_direction":'+direction+',"pfid":"'+pfid+'","cdn_id":"'+cdn_id+'"}'});
        }else{
            javascriptinterface.langWeb2App_openActivity('com.lang.lang.ui.activity.room.YunfanLiveActivity','{"pfid":"'+pfid+'","live_id":"'+liveid+'","stream_direction":'+direction+',"liveurl":"'+liveurl+'","live_key":"'+livekey+'","cdn_id":"'+cdn_id+'"}');
        }
    }else{
        if(isiOS==true){
            window.webkit.messageHandlers.langWeb2App_showToast.postMessage({body:'{"msg":"此直播間是橫屏直播間，不支持跳轉，請通過首頁或者個人主頁進入直播間哦"}'});
        }else{
            javascriptinterface.langWeb2App_showToast("此直播間是橫屏直播間，不支持跳轉，請通過首頁或者個人主頁進入直播間哦");
        }
    }
}

//h5关注
function follow(pfid){
    if(isiOS==true){
        window.webkit.messageHandlers.langWeb2App_httpreq.postMessage({body:'{"base_url":"'+domain+'v2/","requst_url":"friend/follow","param":{"be_pfid":"'+pfid+'","action":"1"}}'});
    }else{
        javascriptinterface.langWeb2App_httpreq(domain+'v2/friend/follow','{"key": ["be_pfid","action"],"value": ["'+pfid+'","1"],"needlogin": false,"callback": true,"callback_tag": "follow"}');
    }
}

//h5分享
function needShare(imgUrl,desc,pageTitle,pageUrl,shareSnsUrl){
    var androidShareJson={"imageurl":imgUrl,"description":desc,"title":pageTitle,"shareUrl":pageUrl,"shareurl_sns":shareSnsUrl};
    var iosShareJson={"img_url":imgUrl,"share_content":desc,"share_title":pageTitle,"share_link":pageUrl,"shareurl_sns":shareSnsUrl}
    if(isiOS==true){
        window.webkit.messageHandlers.langWeb2App_needShare.postMessage({body:JSON.stringify(iosShareJson)})
    } else{
        javascriptinterface.langWeb2App_needShare(JSON.stringify(androidShareJson));
    }
}