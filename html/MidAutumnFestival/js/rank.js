
!function(){
    // nextAll
    HTMLElement.prototype.nextAll = function(){
        var parent = this.parentElement;
        var children = parent.children;
        var arr = [];
        for(var i=children.length-1;i>=0;i--){
            var nexts = children[i];
            if(nexts == this){
                break;
            }
            arr.unshift(nexts);
        }
        return arr;
    } 
    window.onload=function(){
        var ranking=new Festival();
        ranking.init();
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
            var domain=window.origin;
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

    // 二、
    Festival.prototype={
        // 1 初始化
        init:function(){
            var _this=this;
            this.backTop("backTop");
            // 1.1 用户列表切换
            this.btns=document.querySelectorAll(".nav-btn");
            this.items=document.querySelectorAll(".rank-list");
            this.userBox=document.querySelectorAll(".user-list");
            this.loadMore=document.querySelectorAll(".loadMore");
            this.contentBox=this.getDom("contentBox");
            this.toggle(this.btns,this.items);
            // 1.2 规则切换
            this.rule();
            // 1.3 头像跳转还是去捣乱
            this.jump();
            // 1.4 请求接口
            this.loadData();
        },
        // 加载数据
        loadData:function(){
            var _this=this;
            // 正式环境用-------------
            // var postOption={
            //     ajaxType:"POST",
            //     urlStr:"v2/html/broke/get_broke_ranked_info",
            //     ajaxData:{                                        
            //         "HTTP_USER_TOKEN":token,
            //         "HTTP_USER_UID":pfid, 
            //         "anchor_pfid":anchor_pfid,
            //         "broke_pfid":pfid,
            //         "date":date
            //     }
            // }

            // 本地用
            var getOption={
                ajaxType:"GET",    
                urlStr:"/v2/activity/midautumn/get_rank_list.json",
                ajaxData:null        
            }
            this.$Ajax(getOption,function(respon){
                console.log(respon);
                if(respon.ret_code=="0"){
                    var data=respon.data;
                    // 渲染榜单
                    var lists=[data.daily_hot,data.daily_new,data.daily_fans];
                    _this.renderList(lists);
                    var user={
                        level:39
                    }
                    // 大于40级就是当红
                    var index=user.level>=40?0:1;
                    // show default
                    _this.showDefault(index);

                }
            },function(error){
                console.log(error);
            });
        },
        // 2 规则切换
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
                document.body.scrollTop=0;
                document.documentElement.scrollTop=0;
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
            // 
        },
        // 3 页面跳转
        form:function(){
            var _this=this;
            // 前往许愿
            this.goWishing=this.getDom("goWishing");
            this.jumpWishing=this.getDom("jumpWishing");
        },
        // 4 列表用户渲染
        renderList:function(lists){
            var _this=this;
            for(var i=0,length=lists.length;i<length;i++){
                var inner_html="";
                var inner=lists[i];
                var innerLength=inner.length;
                if(innerLength!=0){
                    for(var n=0;n<innerLength;n++){
                        var rank=n+1;
                        var nowUser=inner[n];
                        var liveid=nowUser.live_id;
                        var livekey=nowUser.live_key;
                        var liveurl=nowUser.live_url;
                        var direction=nowUser.stream_direction;
                        var nickname=nowUser.nickname;
                        var cdnid=nowUser.cdn_id;
                        var pfid=nowUser.pfid;
                        var headimg=nowUser.headimg;
                        var growvalue=nowUser.growing_value;
                        var growvalue=nowUser.growing_value;
                        inner_html+=n>19 ? '<li class="hide">' : "<li>";
                        inner_html+=n>2 ? '<span>'+rank+'</span>' : '<i></i>';
                        inner_html+='<div class="user-img">';
                        inner_html+='<div class="user-mask" data-cdnid="'+cdnid+'" data-direction="'+direction+'" data-liveid="'+liveid+'" data-liveurl="'+liveurl+'" data-livekey="'+livekey+'" data-pfid="'+pfid+'" data-name="'+nickname+'"></div>';
                        inner_html+='<img src="'+headimg+'" alt="">';
                        if(liveid!=null){
                            inner_html+='<i></i>';
                        }
                        inner_html+='</div>';
                        inner_html+='<p class="user-name">'+nickname+'</p>';
                        inner_html+='<p class="user-score">'+growvalue+'</p>';
                        // 记录pfid，跳转捣乱用
                        inner_html+='<b class="goTrouble" data-pfid="'+pfid+'"></b>';
                        inner_html+='</li>';
                        // 是否显示对应的加载更对按钮
                        _this.loadMore[i].style.display=n>19 ? "block" :"none";
                    }
                }else{
                    inner_html+="<p>暫無主播達到該等級，請繼續加油喔~！</p>";
                }
                this.userBox[i].innerHTML=inner_html;
                // alert(inner_html);
            }
            // 根据用户等级 默认显示(当红或者新星)
            _this.loadmore();
        },
        // 4.0 默认被显示
        showDefault:function(index){
            var _this=this;
            for(var i=0;i<this.btns.length;i++){
                this.btns[i].className="nav-btn";
                this.items[i].className="rank-list";
            }
            this.btns[index].className="nav-btn on";
            this.items[index].className="rank-list show";
        },
        // 4.1 加载更多(display切换)
        loadmore:function(){
            var _this=this;
            this.bind(this.contentBox,"click",function(e){
                var target=e.target;
                if(target.className.indexOf("loadMore")!=-1){
                    var index=target.getAttribute("data-index");
                    var parentBox=_this.userBox[index];
                    var hideLists=parentBox.getElementsByClassName("hide");
                    for(var i=0;i<hideLists.length;i++){
                        hideLists[i].style.display="block";
                    }
                    // 隐藏当前按钮
                    target.style.display="none";
                }
            });
        },
        // 5 底部用户渲染
        user:function(){

        },
        // 6 列表切换
        toggle:function(btns,items){
            var _this=this;
            this.toggleClass=function(){
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
                this.bind(btns[i],"click",_this.toggleClass);
            }
        },
        // 7、跳转个人主页还是直播间，还是去捣乱
        jump:function(){
            var _this=this;
            this.jumpWhere=function(){
                var e=window.event||arguments[0];
                var target=e.srcElement||e.target;
                // 7.1个人主页还是直播间
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
                // 7.2去捣乱
                }else if(target.className=="goTrouble"){
                    var troubleForm=document.getElementById("jumpTrouble");
                    var troubleFormAnchorid=document.getElementById("troubleFormAnchorid");
                    var anchor_pfid=target.getAttribute("data-anchorid");
                    troubleFormAnchorid.value=anchor_pfid;
                    console.log(troubleForm.action);
                    troubleForm.action=window.origin+"/html/MidAutumnFestival/trouble.html";
                    troubleForm.submit();
                }
            }
            this.bind(this.contentBox,"click",_this.jumpWhere);
        },
        // 6 返回顶部
        backTop:function(btnId){
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
        }
        //  展示更多
    }


}()
