!function(){
    window.onload=function(){
        var trouble=new Festival();
        trouble.init();
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
        },
        // 5 ajax
        this.$Ajax=function(option,success,error){
            // 定义domain,方便环境切换
            var domain=location.origin.indexOf('web-test')>6?'https://api.s.lang.live/':'https://tw.api.langlive.com/';
            // var domain="https://api.s.lang.live/";
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
        // 
    }
    Festival.prototype={
        //1 初始化所有
        init:function(){
            // 0928 trouble_title
            this.troublePeoples=document.getElementsByClassName("trouble_people");
            this.troubleTitles=document.getElementsByClassName("trouble_title");
            this.dailyLosts=document.getElementsByClassName("daily_lost");
            this.resetFormDomain();
             //1 所有DOM元素----------------------
            // 1.1 破壞彈出框
            this.btnsBox=this.getDom("btnsBox");
            this.closeDialog=this.getDom("closeDialog");
            this.breakDialog=this.getDom("breakDialog");
            // 弹出动画DOM
            this.animateDialog=this.getDom("animateDialog");
            // 弹出框的具体动态内容
            this.dialogTip=this.getDom("dialogTip");
            this.troubleAll=this.getDom("troubleAll");
            this.rule();
            this.COUNTS=null;
            this.loadData();
            // 页面跳转
            this.form();
            var _this=this;
            // 添加class
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
            // 瀏覽器左上角返回鍵
            this.topLeftBack();
            
        },
        // FORM表单  domain重定向
        resetFormDomain:function(){
            var option={
                "jumopTotal":"v2/html/activity/midautumn/total.html",
                "jumpWishing":"v2/html/activity/midautumn/wishing.html?key=jumpTrouble",
                "jumpTrouble":"v2/html/activity/midautumn/trouble.html"
            }
            resetFormAction(option);
        },
        // 请求接口
        loadData:function(){
            var _this=this;
            var postOption={
                ajaxType:"POST",
                urlStr:"v2/activity/midautumn/get_anchor_data",
                ajaxData:{                                        
                    "HTTP_USER_TOKEN":token,
                    "HTTP_USER_UID":pfid, 
                    "anchor_pfid":anchor_pfid
                }
            }
            this.$Ajax(postOption,function(respon){
                if(respon.ret_code=="0"){
                    var data=respon.data;
                    console.log(data);
                    // 渲染主播
                    var anchorInfo=data.anchor;
                    anchorInfo.level=data.level;
                    anchorInfo.expleft=data.exp_left;
                    anchorInfo.lost=data.daily_lost;
                    _this.anchor(anchorInfo);
                    // 中间列表
                    var lists=[data.total_top,data.day_top];
                    _this.ranking(lists);
                    // 月桂树等级判断
                    var treelevel=data.level;
                    _this.tree(treelevel);
                    // 渲染底部
                    var footerInfo=data.my_trouble_data;
                    _this.user(footerInfo);
                    // 捣乱
                    var counts=footerInfo.worms_count;
                    _this.COUNTS=counts;
                    // 把所有数量付给全部捣乱按钮
                    _this.troubleAll.setAttribute("data-count",counts);
                    // 开始捣乱
                    _this.startTrouble();
                    // 0928 新加功能 1打開，可以切換
                    var isOn=data.trouble_daily_on;
                    var troubleLeft,troubleRight;
                    // 可以切換
                    if(isOn==1){
                        _this.troubleTitles[1].style.display="block";
                        _this.addClass(_this.troublePeoples[0],"on");
                        troubleLeft=data.troubler_list;
                        troubleRight=data.trouble_daily_top;
                        _this.renderLeft(troubleLeft);
                        _this.renderRight(troubleRight);
                        // 內部切換
                        _this.innerTab();
                    //不可以切換
                    }else if(isOn==0){
                        _this.troubleTitles[0].style.display="block";
                        _this.addClass(_this.troublePeoples[0],"on");
                        troubleLeft=data.troubler_list;
                        _this.renderLeft(troubleLeft);
                    }
                    // 0929 前后各2位
                    var otherListsleft=_this.getDom("otherListsleft");
                    var otherLeft=data.anchor_left_list.reverse();
                    var leftTitle=["前2位","前1位"].reverse();
                    if(otherLeft.length!=0){
                        _this.renderOthers(otherLeft,otherListsleft,leftTitle);
                    }
                    // 后2位
                    var otherListsRight=_this.getDom("otherListsRight");
                    var otherRight=data.anchor_right_list;
                    var leftRight=["後1位","後2位"];
                    if(otherRight.length!=0){
                        _this.renderOthers(otherRight,otherListsRight,leftRight);
                    }
                }
            },function(error){
                console.log(error);
            });
        },
        // 0929 前后4位
        renderOthers:function(arr,elem,Title){
            var length=arr.length;
            var other_str="";
            for(var i=0;i<length;i++){
                var otherNow=arr[i];
                var otherName=otherNow.nickname;
                var otherImg=otherNow.headimg;
                var otherPfid=otherNow.pfid;
                var otherValue=Number(otherNow.growing_value);
                var otherEndValue;
                if(otherValue>=1000){
                    otherEndValue=Math.round(otherValue/1000)+"k";
                }else{
                    otherEndValue=otherValue;
                }
                other_str+='<li>';
                other_str+='<h3>'+Title[i]+'</h3>';
                other_str+='<p>'+otherName+'</p>';
                other_str+='<div class="other_img">';
                other_str+='<div class="otherMask" data-pfid="'+otherPfid+'"></div>';
                other_str+='<img src="'+otherImg+'" alt="">';
                other_str+='</div>';
                other_str+='<p>差'+otherEndValue+'</p>';
                other_str+='</li>';
            }
            elem.innerHTML=other_str;
            // 點擊頭像跳轉到當前主播搗亂也
            this.jumpOtherTrouble(elem);
        },
        jumpOtherTrouble:function(elem){
            // console.log(elem);
            var jumpTrouble=this.getDom("jumpTrouble");
            var otherTrouble=this.getDom("otherTrouble");
            this.bind(elem,"click",function(e){
                var target=e.srcElement||e.target;
                if(target.className=="otherMask"){
                    var pfid=target.getAttribute("data-pfid");
                    console.log(pfid);
                    otherTrouble.value=pfid;
                    jumpTrouble.submit();
                }
            });
        },
        // 最新動態
        renderLeft:function(arr){
            var length=arr.length;
            var str="";
            if(length==0){
                str="<p>暫時沒有數據！~</p>";
            }else{
                for(var i=0;i<length;i++){
                    var nowList=arr[i];
                    var nowName=nowList.nickname;
                    var value=nowList.value;
                    str+='<p>用戶<span>'+nowName+'</span>讓主播降低了<span>'+value+'</span>點成長值。</p>';
                }
            }
            this.dailyLosts[0].innerHTML=str;
        },
        // 仇恨值
        renderRight:function(arr){
            var len=arr.length;
            var str_list="";
            for(var i=0;i<len;i++){
                var rightNow=arr[i];
                var headimg=rightNow.headimg;
                var nickname=rightNow.nickname;
                var trouble_value=rightNow.trouble_value;
                str_list+='<li><div class="daily_lostimg">';
                str_list+='<img src="'+headimg+'" alt="">';
                str_list+='</div>';
                str_list+='<p>'+nickname+'</p>';
                str_list+='<span>'+trouble_value+'</span>';
                str_list+='</li>';
            }
            this.dailyLosts[1].innerHTML=str_list;
        },
        // 開關打開才有切換
        innerTab:function(){
            var _this=this;
            var troubleLostBox=this.getDom("troubleLostBox");
            var lis=troubleLostBox.getElementsByTagName("li");
            console.log("仇恨值");
            this.bind(troubleLostBox,"click",function(e){
                var target=e.srcElement||e.target;
                var index=target.getAttribute("data-index");
                if(target.className.indexOf("selected")==-1){
                    for(var i=0;i<lis.length;i++){
                        lis[i].className="";
                        _this.removeClass(_this.troublePeoples[i],"on");
                    }
                    lis[index].className="selected";
                    _this.addClass(_this.troublePeoples[index],"on");
                }
            });
        },
        // 开始搗亂
        startTrouble:function(){
            var _this=this;
            //地步三个小数据DOM
            this.totalCount=this.getDom("totalCount");
            this.remainCount=this.getDom("remainCount");
            this.remainValue=this.getDom("remainValue");
            // console.log(_this.COUNTS);
            //2 綁定事件------------------------
            //2.1、給所有的破壞按鈕綁定事件（先請求接口再顯示彈出框）
            this.bind(this.btnsBox,"click",function(e){
                var target=e.srcElement||e.target;
                var str="";
                var counts=_this.COUNTS;
                if(target.nodeName.toLowerCase() == 'li'){
                    // 0924 判断逻辑
                    var num=target.getAttribute("data-count");
                    if(counts==0){
                        str="<p>剩餘搗亂次數不足，快去贈送主播中秋節禮物獲得搗亂次數吧！</p>";
                    }else{
                        //1 var endCount=counts>=num?num:counts;
                        var endCount;
                        // 2 
                        if(Number(counts)>=Number(num)){
                            endCount=num;
                        }else if(Number(counts)<Number(num)){
                            endCount=counts;
                        }
                        var postOption={
                            ajaxType:"POST",
                            urlStr:"v2/activity/midautumn/make_trouble",
                            ajaxData:{                                        
                                "HTTP_USER_UID":pfid, 
                                "anchor_uid":anchor_pfid,
                                "count":endCount
                            }
                        }
                        _this.$Ajax(postOption,function(respon){
                            if(respon.ret_code=="0"){
                                var data=respon.data;
                                var total=data.trouble_total;
                                var worms=data.worms_count;
                                var wish=data.trouble_count;
                                _this.totalCount.innerHTML=total;
                                _this.remainCount.innerHTML=worms;
                                _this.remainValue.innerHTML=wish;
                                // 重置剩余次数
                                _this.COUNTS=worms;
                            }
                        },function(error){
                            console.log(error);
                        });
                        // 破壞成功99次！剩余破壞次數不足，總共降低該主播月桂樹成長值297點.
                        str=counts>=num?"<p>破壞成功"+endCount+"！總共降低該主播月桂樹成長值"+endCount*3+"點。</p>":"<p>破壞成功"+endCount+"！總共降低該主播月桂樹成長值"+endCount*3+"點。</p>";
                    }
                    _this.dialogTip.innerHTML=str;
                    // 显示弹出框
                    _this.animateDialog.className="bounceInDown";
                    _this.showDialog(_this.breakDialog);
                }
            });
            // 2.2、隱藏彈出框
            this.bind(this.closeDialog,"click",function(e){
                _this.animateDialog.className="bounceOutDown";
                setTimeout(function(){
                    _this.hideDialog(_this.breakDialog);
                    // 隱藏后需要顯示最新的
                    _this.reloadOne();
                },400);
            });
            // 2.3 阻止默认滚动事件
            this.bind(this.breakDialog,"touchmove",function(e){
                event.preventDefault();
            });
        },
        // 重新渲染動態列表
        reloadOne:function(){
            var _this=this;
            var postOption={
                ajaxType:"POST",
                urlStr:"v2/activity/midautumn/get_anchor_data",
                ajaxData:{                                        
                    "HTTP_USER_TOKEN":token,
                    "HTTP_USER_UID":pfid, 
                    "anchor_pfid":anchor_pfid
                }
            }
            this.$Ajax(postOption,function(respon){
                if(respon.ret_code=="0"){
                    var data=respon.data;
                    var troubleLeft=data.troubler_list;
                    // 重新渲染最新動態列表
                    _this.renderLeft(troubleLeft);
                }
            },function(error){
                console.log(error);
            })
        },
        //2 活动细则
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
        //3 页面跳转，表单对象
        form:function(){
            var _this=this;
            // 前往许愿
            this.goWishing=this.getDom("goWishing");
            this.jumpWishing=this.getDom("jumpWishing");
            this.bind(this.goWishing,"click",function(e){
                _this.jumpWishing.submit();
            });
            // 前往总榜
            this.goTotal=this.getDom("goTotal");
            this.jumopTotal=this.getDom("jumopTotal");
            this.bind(this.goTotal,"click",function(e){
                _this.jumopTotal.submit();
            });
        },
        // 4 主播信息
        anchor:function(info){
            this.anchorInfo=this.getDom("anchorInfo");
            var headimg=info.headimg;
            // 跳转参数
            var nickname=info.nickname;
            var liveid=info.live_id;
            var livekey=info.live_key;
            var liveurl=info.live_url;
            var cdnid=info.cdn_id;
            var direction=info.stream_direction;
            var pfid=info.pfid;
            var liveimg=info.live_img;
            // 活动数据
            var level=info.level;
            var expleft=info.expleft;
            var lost=info.lost;
            // 
            var str_html="<h3>"+nickname+"</h3>";
            str_html+='<div class="user_img">';
            str_html+='<div class="anchorMask" data-img="'+liveimg+'" data-cdnid="'+cdnid+'" data-direction="'+direction+'" data-liveid="'+liveid+'" data-liveurl="'+liveurl+'" data-livekey="'+livekey+'" data-pfid="'+pfid+'" data-name="'+nickname+'"></div>';
            str_html+='<img src="'+headimg+'" alt="">';
            if(liveid!=null){
                str_html+='<i></i>';
            }
            str_html+='</div>';
            str_html+='<p class="tree_level"><span>月桂樹等級：lv'+level+'</span></p>';
            str_html+='<p class="tree_experience"><span>距離下壹級需要成長值：'+expleft+'</span></p>';
            str_html+='<p>今日降低成長值：'+lost+'</p>';
            this.anchorInfo.innerHTML=str_html;
            // 点击头像跳转个人还是直播间
            this.anchorClick();
        },
        // 點擊主播頭像
        anchorClick:function(){
            var _this=this;
            this.bind(this.anchorInfo,"click",function(e){
                var target=e.srcElement||e.target;
                if(target.className=="anchorMask"){
                    var liveid=target.getAttribute("data-liveid");
                    var liveurl=target.getAttribute("data-liveurl");
                    var livekey=target.getAttribute("data-livekey");
                    var pfid=target.getAttribute("data-pfid");
                    var nickname=target.getAttribute("data-name");
                    var direction=target.getAttribute("data-direction");
                    var cdnid=target.getAttribute("data-cdnid");
                    var liveimg=target.getAttribute("data-img");
                    // console.log(liveid);
                    if (liveid != "null") {
                        // 进入直播间
                        h5toRoom(pfid, nickname, liveid, liveurl, livekey, direction,isNaN(parseInt(cdnid))?0:parseInt(cdnid),liveimg);
                    } else {
                        h5toHomepage(pfid, nickname);
                    }
                }
            });
        },
        // 5 左右榜单列表
        ranking:function(lists){
            this.user_lists=document.getElementsByClassName("user_lists");
            for(var i=0,length=lists.length;i<length;i++){
                var inner_html="";
                var inner=lists[i];
                var innerLength=inner.length;
                if(innerLength!=0){
                    for(var j=0;j<innerLength;j++){
                        var nowUser=inner[j];
                        var nickname=nowUser.nickname;
                        var headimg=nowUser.headimg;
                        var growvalue=nowUser.growing_value;
                        inner_html+='<li><div class="user_info">';
                        inner_html+='<p>'+nickname+'</p>';
                        inner_html+='<p>貢獻總值:</p>';
                        inner_html+='<p>'+growvalue+'</p>';
                        inner_html+='</div><div class="user_head">';
                        inner_html+='<img src="'+headimg+'" alt="">';
                        inner_html+='</li>';
                    }
                    this.user_lists[i].innerHTML=inner_html;
                }

            }
        },
        // 6 月桂树级别
        tree:function(treelevel){
            var index;
            // 等级是9、19、29、39、49的情况下页面显示异常
            if(treelevel<=9){
                index=0;
            }else if(treelevel<20&&treelevel>=10){
                index=1;
            }else if(treelevel<30&&treelevel>=20){
                index=2;
            }else if(treelevel<40&&treelevel>=30){
                index=3;
            }else if(treelevel>=40){
                index=4;
            }
            // 1.4 月桂树
            this.showTrees=document.getElementsByClassName("wishing_tree");
            this.filterTree(this.showTrees,index);
        },
        // 7 底部用户信息
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
        // 3.1匹配到底显示哪个级别的树
        filterTree:function(items,index){
            for(var i=0;i<items.length;i++){
                items[i].style.display="none";
            }
            items[index].style.display="block";
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


