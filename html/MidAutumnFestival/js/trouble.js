!function(){
    window.onload=function(){
        var festivel=new Festival();
        festivel.init();
    }
    //一 破坏和活动细则
    function Festival(){}
    Festival.prototype={
        //1 初始化所有
        init:function(){
            this.rule();
            var _this=this;
            // console.log(this);
            //1 所有DOM元素----------------------
            // 1.1 破壞彈出框
            this.btnsBox=this.getDom("btnsBox");
            this.closeDialog=this.getDom("closeDialog");
            this.breakDialog=this.getDom("breakDialog");
            // 弹出动画DOM
            this.animateDialog=this.getDom("animateDialog");
            //2 綁定事件------------------------
            //2.1、給所有的破壞按鈕綁定事件（先請求接口再顯示彈出框）
            this.bind(this.btnsBox,"click",function(e){
                var target=e.srcElement||e.target;
                if(target.nodeName.toLowerCase() == 'li'){
                    _this.animateDialog.className="bounceInDown";
                    _this.showDialog(_this.breakDialog);
                }
            });
            // 2.2、隱藏彈出框
            this.bind(this.closeDialog,"click",function(){
                _this.animateDialog.className="bounceOutDown";
                setTimeout(function(){
                    _this.hideDialog(_this.breakDialog);
                },300);
            });
            // 2.3 阻止默认滚动事件
            this.bind(_this.breakDialog,"touchmove",function(e){
                event.preventDefault();
            });
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
            this.goTotal=this.getDom("goTotal");
            this.jumpTotal=this.getDom("jumpTotal");
            this.goWishing=this.getDom("goWishing");
            this.jumpWishing=this.getDom("jumpWishing");
            // console.log(this.jumpWishing.submit());
        },
        // 4 主播信息
        anchor:function(){
            this.anchorInfo=this.getDom("anchorInfo");
        },
        // 5 左右榜单列表
        ranking:function(){
            this.user_lists=document.getElementsByClassName("user_lists");
        },
        // 6 月桂树级别
        tree:function(){
            // 1.4 月桂树
            this.showTrees=document.getElementsByClassName("wishing_tree");
            this.filterTree(this.showTrees,2);
        },
        // 7 底部用户信息
        user:function(){

        },
        // 3.1匹配到底显示哪个级别的树
        filterTree:function(items,index){
            for(var i=0;i<items.length;i++){
                items[i].style.display="none";
            }
            items[index].style.display="block";
        },
        // 二-通用绑定事件----
        bind:function(elem,eventType,callback){
            if(elem.addEventListener){
                elem.addEventListener(eventType,callback,false);
            }else{
                elem.attachEvent("on"+eventType,function(){
                    callback.call(elem);
                });
            }
        },
        // 1显示
        showDialog:function(elem){
            elem.style.display="block";
        },
        // 2隐藏
        hideDialog:function(elem){
            elem.style.display="none";
        },
        // 3獲取DOM(id)
        getDom:function(id){
            return document.getElementById(id);
        },
        //4 ajax
        nativeAjax:function(option,success,error){
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
        // 
    }
}()















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