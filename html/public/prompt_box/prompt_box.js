/*
* @Author: wangjianfei
* @Date:   2017-05-26 18:08:36
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-06-02 17:21:56
*/

'use strict';
var promptObj={
	// 1、弹出框ID
	promptBox:null,
	// 2、提示信息的元素ID
	infoItem:null,
	// 3、确认按钮ID
	promptBtn:null,
	// 4、提示信息具体内容，没传就默认是：請問你想幹嘛？
	tipsMsg:null,
    // 5、是PC还是手机:true为PC，false为手机端，用于阻止弹出框弹出后页面是否可以滚动
    isPC:true,
    // 6、初始化对象
	init:function(msg){
		//1、 指定元素
		this.promptBox=document.getElementById("prompt_box");
		this.infoItem=document.getElementById("prompt_title");
		this.promptBtn=document.getElementById("prompt_btn");
        // 2、是否是PC
        this.platform();
		// 3、显示弹出框 promptBtn
		this.showPrompt(msg);
	},
    // 7、设备判断
    platform:function(){
        var _this=this;
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                _this.isPC= false;
                break;
            }
        }
    },
    // 8、隐藏弹出框
	hidePrompt:function(){
		promptObj.promptBox.style.display="none";
	},
    // 9、显示弹出框，并禁止页面继续
	showPrompt:function(msg){
		var _this=this;
        // console.log(_this.isPC);
		// 提示信息
		_this.tipsMsg=msg||"請問你想幹嘛？";
		_this.infoItem.innerHTML=_this.tipsMsg;
		_this.promptBox.style.display="block";
		_this.promptBtn.addEventListener("click", _this.hidePrompt);
        // 2、如果是PC端
        if(_this.isPC){
            // PC端弹出框弹出后阻止页面滚动
            var top=-1;
            var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
            _this.promptBox.addEventListener("mouseenter", function(){
                top=scrollTop;
                // console.log(top);
            });
            _this.promptBox.addEventListener("mouseleave", function(){
                top=-1;
            });
            window.addEventListener("scroll",function(event){
                event.preventDefault();
                // console.log(scrollTop);
                if(top!==-1){
                    document.body.scrollTop=scrollTop;
                    window.pageYOffset=scrollTop;
                    document.documentElement.scrollTop=scrollTop;
                    // console.log(scrollTop);
                }
            });
        // 3、如果是移动端
        }else{
            // 移动端阻止弹出层弹出时候页面的滚动
            _this.promptBox.addEventListener("touchmove", function(event){
                // 阻止彈出後頁面的滚动
                event.preventDefault();
            });
        }
	}
}
// promptObj.init();