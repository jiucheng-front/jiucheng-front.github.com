/*
* @Author: wangjianfei
* @Date:   2017-05-26 18:08:36
* @Last Modified by:   wangjianfei
* @Last Modified time: 2017-05-26 20:24:03
*/

'use strict';
var dialogObj={
	// 1、弹出框ID
	outerItem:null,
	// 2、提示信息的元素ID
	infoItem:null,
	// 3、确认按钮ID
	outerBtn:null,
	// 4、提示信息具体内容，没传就默认是：請問你想幹嘛？
	tipsMsg:null,
	init:function(msg){
		//1、 指定元素
		this.outerItem=document.getElementById("dialog_box");
		this.infoItem=document.getElementById("dialog_title");
		this.outerBtn=document.getElementById("dialog_btn");
		// 显示弹出框
		this.showDialog(msg);
	},
	hideDialog:function(){
		dialogObj.outerItem.style.display="none";
	},
	showDialog:function(msg){
		var _this=this;
		// 提示信息
		_this.tipsMsg=msg||"請問你想幹嘛？";
		_this.infoItem.innerHTML=_this.tipsMsg;
		_this.outerItem.style.display="block";
		_this.outerBtn.addEventListener("click", _this.hideDialog);
		// 移动端阻止弹出层弹出时候页面的滚动
		_this.outerItem.addEventListener("touchmove", function(event){
			// 阻止彈出後頁面的滚动
			event.preventDefault();
		});
		// PC端弹出框弹出后阻止页面滚动
		var top=-1;
		var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
		_this.outerItem.addEventListener("mouseenter", function(){
			top=scrollTop;
		});
		_this.outerItem.addEventListener("mouseleave", function(){
			top=-1;
		});
		window.addEventListener("scroll",function(event){
			event.preventDefault();
			console.log(scrollTop);
			if(top!==-1){
				document.body.scrollTop=scrollTop;
				window.pageYOffset=scrollTop;
				document.documentElement.scrollTop=scrollTop;
				console.log(scrollTop);
			}
		});
	}
}
// dialogObj.init();