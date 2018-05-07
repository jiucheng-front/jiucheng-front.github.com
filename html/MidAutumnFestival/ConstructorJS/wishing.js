!function(){
    window.onload=function(){
        var wishing=new Festival();
        wishing.init();
        console.log(wishing);
    }
    //一 构造函数
    function Festival(){
        // 1 获取DOM(id)
        this.getDom=function(id){
            return document.getElementById(id);
        }
        // 2 通用绑定事件
        this.bind=function(elem,eventType,callback){
            if(elem.addEventListener){
                elem.addEventListener(eventType,callback,false);
            }else{
                elem.attachEvent("on"+eventType,function(){
                    callback.call(elem);
                });
            }
        }
        // 3 显示
        this.showDialog=function(elem){
            elem.style.display="block";
        }
        // 4 隐藏
        this.hideDialog=function(elem){
            elem.style.display="none";
        }
        // 5 ajax
        this.$Ajax=function(option,success,error){
            // 定义domain,方便环境切换
            var domain=location.origin.indexOf('web-test')>6?'https://api.s.lang.live/':'https://tw.api.langlive.com/';
            var url=domain+option.urlStr;
            var type=option.ajaxType;
            var data=option.ajaxData;
            var xhrRequest=null;
            if(window.XMLHttpRequest){
                  xhrRequest = new XMLHttpRequest();
              } else {
                  xhrRequest = new ActiveXObject('Microsoft.XMLHTTP')
              }
            var str="";
            xhrRequest.open(type,url,true);
            if(type==="POST"&&data!=null){
                xhrRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=utf-8");
                for(var key in data){
                    str+='&'+key+'='+data[key];
                }
                str=str.slice(1);
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
        // 6、获取url参数
        this.getUrlParameter=function(strParame){
            var args = new Object( );
            var query = location.search.substring(1);
            var pairs = query.split("&");
            for(var i = 0; i < pairs.length; i++) {
                var pos = pairs[i].indexOf('=');
                if (pos == -1) continue;
                var argname = pairs[i].substring(0,pos);
                var value = pairs[i].substring(pos+1);
                value = decodeURIComponent(value);
                args[argname] = value;
            }
            return args[strParame];
        }

    }
    // 原型
    Festival.prototype={
        // 初始化
        init:function(){
            var _this=this;
            this.resetFormDomain();
            this.WISHINGCOUNTS="";
            // 1.1 获取url的key作为返回的
            this.back();
            // 1.2 规则
            this.rule();
            // 1.3 加载数据
            this.loadData();
            // 瀏覽器左上角返回鍵
            this.topLeftBack();
        },
        // FORM表单  domain重定向
        resetFormDomain:function(){
            var option={
                "jumpToday":"v2/html/activity/midautumn/index.html",
                "jumopTotal":"v2/html/activity/midautumn/total.html",
                "jumpTrouble":"v2/html/activity/midautumn/trouble.html"
            }
            resetFormAction(option);
        },
        // 请求接口
        loadData:function(){
            var _this=this;
            var postOption={
                ajaxType:"POST",
                urlStr:"v2/activity/midautumn/wish",
                ajaxData:{                                        
                    "HTTP_USER_TOKEN":token,
                    "HTTP_USER_UID":pfid, 
                    "anchor_pfid":anchor_pfid
                }
            }
            this.$Ajax(postOption,function(respon){
                // console.log(respon);
                if(respon.ret_code=="0"){
                    var data=respon.data;
                    console.log(data);
                    var footerInfo=data.my_trouble_data;
                    _this.user(footerInfo);
                    // 剩余破坏值即可以许愿的资格
                    _this.WISHINGCOUNTS=footerInfo.trouble_count;
                    _this.startWishing();
                }
            },function(error){
                console.log(error);
            });
        },
        // 开始许愿
        startWishing:function(){
            var _this=this;
            // 许愿（弹框）阻止滚动
            this.dialogMask=this.getDom("dialogMask");
            this.bind(this.dialogMask,"touchmove",function(e){
                event.preventDefault();
            });
            this.closeMask=this.getDom("closeMask");
            this.wishingAnimate=this.getDom("wishingAnimate");
            // 礼物列表需要重新渲染
            this.giftLists=this.getDom("giftLists");
            // 按钮老爹,许愿开始的地方
            this.wishingBtns=this.getDom("wishingBtns");
            this.bind(this.wishingBtns,"click",function(e){
                // var counts=this.WISHINGCOUNTS;
                var target=e.srcElement||e.target;
                if(target.nodeName.toLowerCase() == 'li'){
                    var type=Number(target.getAttribute("data-type"));
                    var count=Number(target.getAttribute("data-count"));
                    // 根据许愿次数显示不同classname
                    _this.changeMargin(count);
                    // 为0提示不足
                    if(_this.WISHINGCOUNTS==0){
                        _this.notEnoughTips();
                        // 追加动画并显示弹出框
                        _this.addClass(_this.wishingAnimate,"bounceInDown");
                        _this.showDialog(_this.dialogMask);
                    // 正常
                    }else{
                        var postOption={
                            ajaxType:"POST",
                            urlStr:"v2/activity/midautumn/wish",
                            ajaxData:{                                        
                                "HTTP_USER_UID":pfid, 
                                "type":type,
                                "count":count
                            }
                        }
                        _this.$Ajax(postOption,function(respon){
                            if(respon.ret_code=="0"){
                                var data=respon.data;
                                console.log(data);
                                var arr=data.lucky_res;
                                var footerInfo=data.my_trouble_data;
                                var lastCount=footerInfo.trouble_count;
                                _this.pushDialog(_this.giftLists,arr,type,lastCount);
                                // 追加动画并显示弹出框
                                _this.addClass(_this.wishingAnimate,"bounceInDown");
                                _this.showDialog(_this.dialogMask);
                                // 需要重新渲染底部部分数据
                                _this.resetFooter(lastCount);
                                // 重新定义许愿资格
                                _this.WISHINGCOUNTS=lastCount;
    
                            }else if(respon.ret_code=="200001"){
                                // 破坏值不足提示
                                _this.notEnoughTips();
                                // 追加动画并显示弹出框
                                _this.addClass(_this.wishingAnimate,"bounceInDown");
                                _this.showDialog(_this.dialogMask);
                            }
                        },function(error){
                            console.log(error);
                        });
                    }
                }
            });
            // 关闭弹出框(包括没次数的确认)
            this.bind(this.dialogMask,"click",_this.closeDialog);
            // ClassName切换
            this.hasClass=function(elem,cls){
                return elem.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
            }
            this.addClass=function(elem,cls){
                if(!_this.hasClass(elem,cls)){
                    elem.className+=" "+cls;
                }
            }
            this.removeClass=function(elem,cls){
                if(_this.hasClass(elem,cls)){
                    var reg=new RegExp('(\\s|^)'+cls+'(\\s|$)');
                    elem.className=elem.className.replace(reg,"");
                }
            }
            // 
        },
        // 1 活动细则
        rule:function(){
            var _this=this;
            // 1.2 活動細則
            this.container=this.getDom("container");
            this.ruleDetial=this.getDom("ruleDetial");
            this.rulePage=this.getDom("rulePage");
            this.rulePage=this.getDom("rulePage");
            // 显示细则
            this.bind(this.ruleDetial,"click",function(){
                _this.hideDialog(_this.container);
                _this.showDialog(_this.rulePage);
            });
            // 隐藏细则
            this.bind(this.rulePage,"click",function(e){
                var target=e.target;
                if(target.id=="closeRule"||target.id=="gif"){
                    _this.hideDialog(_this.rulePage);
                    _this.showDialog(_this.container);
                }
            });
            // 细则切换
            this.tabAnchor=this.getDom("tabAnchor");
            this.tabFans=this.getDom("tabFans");
            this.ruleListAnchor=this.getDom("ruleListAnchor");
            this.ruleListFans=this.getDom("ruleListFans");
            this.bind(this.tabAnchor,"click",function(){
                _this.hideDialog(_this.ruleListFans);
                _this.showDialog(_this.ruleListAnchor);
            });
            this.bind(this.tabFans,"click",function(){
                _this.hideDialog(_this.ruleListAnchor);
                _this.showDialog(_this.ruleListFans);
            });
        },
        // 2 返回上一页
        back:function(){
            var _this=this;
            var key=this.getUrlParameter("key");
            var id=key||"jumpToday";
            this.goHome=this.getDom("goHome");
            this.pervPage=this.getDom(id);
            this.bind(this.goHome,"click",function(e){
                _this.pervPage.submit();
            });
            // console.log("key="+key);
        },
        // 3 底部用户
        user:function(info){
            this.footerUser=this.getDom("footerUser");
            var headimg=info.headimg;
            var nickname=info.nickname;
            var worms=info.worms_count;
            var total=info.trouble_total;
            var wish=info.trouble_count;
            var str_html='<div class="footer-user-img">';
            str_html+='<img src="'+headimg+'" alt="">';
            str_html+='</div><div class="footer-user-msg">';
            str_html+='<p>'+nickname+'</p>';
            str_html+='<p><span></span>總破壞值：<b id="totalCount">'+total+'</b></p>';
            str_html+='</div><div class="footer-remaining">';
            str_html+='<p>剩餘蟲子數量：<span id="remainCount">'+worms+'</span>個</p>';
            str_html+='<p>剩餘破壞值：<span id="remainValue">'+wish+'</span> </p>';
            str_html+='</div>';
            // 
            this.footerUser.innerHTML=str_html;
        },
        resetFooter:function(value){
            this.remainValue=this.getDom("remainValue");
            this.remainValue.innerHTML=value;
        },
        // 4 抽奖礼物弹出框
        pushDialog:function(elem,arr,type,lastCount){
            var _this=this;
            var length=arr.length;
            var gift_str='<div id="sameGiftsBox" class="one_gift">';
            if(length!=1){
                gift_str+='<ul>';
                for(var i=0;i<length;i++){
                    var gifts=arr[i];
                    var giftName=gifts.name;
                    var giftSrc=gifts.img;
                    if(i==10){
                        gift_str+='<li class="additional">';
                    }else{
                        gift_str+='<li>';
                    }
                    gift_str+='<img src="'+giftSrc+'" alt="">';
                    gift_str+='<p class="purple">'+giftName+'</p>';
                    gift_str+='</li>';
                }
                gift_str+='</ul></div>';
            }else if(length==1){
                gift_str+='<img src="'+arr[0].img+'" alt="">';
                gift_str+='<p class="purple">'+arr[0].name+'</p>';
            }
            gift_str+='</div>';
            // 共同的再次许愿按钮
            gift_str+='<ul id="maskInnerBtns" class="mask_btns">';
            gift_str+='<li id="maskOne" data-count="1" data-type="'+type+'"></li><li id="maskTen" data-count="10" data-type="'+type+'"></li>';
            gift_str+='</ul>';
            gift_str+='<p class="purple">剩餘破壞值：<span id="endValue">'+lastCount+'</span></p>';
            // 追加到礼物框
            elem.innerHTML=gift_str;
            // 弹出框内继续许愿
            var maskInnerBtns=this.getDom("maskInnerBtns");
            var sameGiftsBox=this.getDom("sameGiftsBox");
            _this.againWishing(maskInnerBtns,sameGiftsBox);
        },
        // 5 隐藏
        // 关闭没没有次数的确认按钮
        closeDialog:function(elem){
            var e=window.event||arguments[0];
            var target=e.srcElement||e.target;
            // 关闭和没有次数的确认按钮
            if(target.id=="closeMask"||target.id=="agreeNocount"){
                this.style.display="none";
            }
        },
        // 6.1 弹出框内部许愿
        againWishing:function(btns,elem){
            var _this=this;
            this.bind(btns,"click",function(e){
                var target=e.srcElement||e.target;
                if(target.nodeName.toLowerCase() == 'li'){
                    var type=Number(target.getAttribute("data-type"));
                    var count=Number(target.getAttribute("data-count"));
                    // 根据许愿次数显示不同classname
                    _this.changeMargin(count);
                    // 为0提示不足
                    if(_this.WISHINGCOUNTS==0){
                        _this.notEnoughTips();
                    // 正常
                    }else{
                        var postOption={
                            ajaxType:"POST",
                            urlStr:"v2/activity/midautumn/wish",
                            ajaxData:{                                        
                                "HTTP_USER_UID":pfid, 
                                "type":type,
                                "count":count
                            }
                        }
                        _this.$Ajax(postOption,function(respon){
                            if(respon.ret_code=="0"){
                                var data=respon.data;
                                var arr=data.lucky_res;
                                var footerInfo=data.my_trouble_data;
                                var lastCount=footerInfo.trouble_count;
                                _this.pushInner(elem,arr,lastCount);
                                // 需要重新渲染底部部分数据
                                _this.resetFooter(lastCount);
                                // console.log(data);
                                // 重新定义许愿资格
                                _this.WISHINGCOUNTS=lastCount;
                            }else if(respon.ret_code=="200001"){
                                _this.notEnoughTips();
                            }
                        },function(error){
                            console.log(error);
                        });
                    }
                }
            });
        },
        // 6.2 内部许愿重新渲染
        pushInner:function(elem,arr,lastCount){
            this.endValue=this.getDom("endValue");
            var _this=this;
            var length=arr.length;
            var gift_str="";
            if(length==1){
                gift_str+='<img src="'+arr[0].img+'" alt="">';
                gift_str+='<p class="purple">'+arr[0].name+'</p>';
            }else{
                gift_str+='<ul>';
                for(var i=0;i<length;i++){
                    var gifts=arr[i];
                    var giftName=gifts.name;
                    var giftSrc=gifts.img;
                    if(i==10){
                        gift_str+='<li class="additional">';
                    }else{
                        gift_str+='<li>';
                    }
                    gift_str+='<img src="'+giftSrc+'" alt="">';
                    gift_str+='<p class="purple">'+giftName+'</p>';
                    gift_str+='</li>';
                }
                gift_str+='</ul>';
            }
            // 礼物重新渲染
            elem.innerHTML=gift_str;
            this.endValue.innerHTML=lastCount;
        },
        // 7 破坏值不足提示
        notEnoughTips:function(){
            // 根据许愿次数显示不同classname
            this.changeMargin(1);
            var str='<div class="wishing_nocount">';
            str+='<p class="purple">抽獎次數不足，</p>';
            str+='<p class="purple">快去給主播的月桂樹搗亂吧！</p>';
            str+='</div>';
            str+='<div id="agreeNocount"></div>';
            this.giftLists.innerHTML=str;
        },
        // 8 、重新定位弹出框为主
        changeMargin:function(count){
            var _this=this;
            // 根据许愿次数显示不同classname
            if(count==1){
                _this.removeClass(_this.wishingAnimate,"mask_ten");
                _this.addClass(_this.wishingAnimate,"mask_one");
            }else if(count==10){
                _this.removeClass(_this.wishingAnimate,"mask_one");
                _this.addClass(_this.wishingAnimate,"mask_ten");
            }
        },
        // 瀏覽器左上角返回鍵
        topLeftBack:function(){
            // 瀏覽器左上角返回鍵
            if(isiOS==true){
                window.webkit.messageHandlers.langWeb2App_topback.postMessage({body:'{"flag":"1"}'});
            } else {
                javascriptinterface.langWeb2App_topback("1");
            }
        }
        // 
    }

}()