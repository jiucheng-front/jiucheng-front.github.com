
!function(){
    // 1、通用綁定事件
    function bind(elem,eventType,callback){
        if(elem.addEventListener){
            elem.addEventListener(eventType,callback,false);
        }else{
            elem.attachEvent("on"+eventType,function(){
                callback.call(elem);
            });
        }
    }
    // 2、導航切換
    var btns=document.querySelectorAll(".nav-btn");
    var items=document.querySelectorAll(".rank-list");
    // 2、1 切換事件
    function toggleClass(){
        if(this.className.indexOf("on")==-1){
            for(var j=0;j<items.length;j++){
                btns[j].className="nav-btn";
                items[j].className="rank-list";
            }
            this.className="nav-btn on";
            items[this.index].className="rank-list show";
        }
    }
    for(var i=0;i<btns.length;i++){
        btns[i].index=i;
        bind(btns[i],"click",toggleClass);
    }

    // 
    console.log(domain);
    console.log(pfid);
    console.log(token);
    console.log(anchor_pfid);
    // 3、頭像跳轉直播間還是主頁
    var contentBoxElem=document.getElementById("contentBox");
    function jumpWhere(e){
        var target=e.target;
        if(target.className=="user-mask"){
            var liveid=target.getAttribute("data-liveid");
            var liveurl=target.getAttribute("data-liveurl");
            var livekey=target.getAttribute("data-livekey");
            var livepfid=target.getAttribute("data-pfid");
            var nickname=target.getAttribute("data-name");
            var direction=target.getAttribute("data-direction");
            var cdn_id=target.getAttribute("data-cdnid");
            // console.log(liveid);
            if(liveid!="null"){
              // 直播間
              console.log("跳轉直播間");
              // h5toRoom(livepfid,nickname,liveid,liveurl,livekey,direction,cdn_id);
            }else{
              // 個人主頁
              console.log("個人主頁！");
              // h5toHomepage(livepfid,nickname);
            }
        }
    }
    bind(contentBoxElem,"click",jumpWhere);



}()
