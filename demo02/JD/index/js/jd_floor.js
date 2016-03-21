HTMLElement.prototype.getElementTop=function(){
	//1、this--》正在调用方法的element对象
	//1、获得当前元素距离绝对定位的父元素顶部距离
	var height=this.offsetTop;
	//1、获得当前元素的绝对定位的父元素
	var parent=this.offsetparent;
	while(parent!=null){
		height+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	return height;
}
/*3、当用户滚动页面时候触发*/
window.onscroll=function(){
	var scrollHeight=document.documentElement.scrollTop||document.body.scrollTop;//兼容性问题
	for(var i=1;i<=3;i++){
		//var f1TotalHeight=$("#f1 span")[0].getElementTop();
		var totalHeight=$("#f"+i+" span")[0].getElementTop();
		if(totalHeight<scrollHeight+parseFloat(window.innerHeight)-80&&totalHeight>scrollHeight+100){
			$("#f"+i+" span")[0].className="hover";
		}else{
			$("#f"+i+" span")[0].className="";
			}
	}//for的结束
	//console.log(scrollHeight);
	//2、是否显示左边的1F,2F,3F，楼层选项
	var f1Top=$("#f1 span")[0].getElementTop();
	var footerTop=$("footer")[0].getElementTop();
	var height=scrollHeight+parseFloat(window.innerHeight);
	if(height>f1Top&&height<footerTop){
		$('#elevator')[0].style.display="block";
	}else{
		$('#elevator')[0].style.display="";
	}

	var lis=$('#elevator li');
	for(var i=0;i<lis.length;i++){
		lis[i].onclick=function(){//this-->当前点击的li
			var spanTop=$("#f"+this.dataset.idx+" span")[0].getElementTop();
			window.scrollTo(0,spanTop-50);
		}
	}
}
