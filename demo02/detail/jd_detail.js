window.$=HTMLElement.prototype.$=function(selector){
	return (this==window?document:this).querySelectorAll(selector);
}
window.onload=function(){
	//1找到id为top_box下的类为app_jd的一个元素：li
	//1为liApp元素绑定onmouseover和onmouseout事件
	//1var liApp=$("#top_box .app_jd")[0];
	//1liApp.addEventListener('mouseover',showItems,false);
	//1liApp.addEventListener('mouseout',hideItems,false);
	$("#top_box .app_jd")[0].onmouseover=$("#top_box .service")[0].onmouseover=showItems;//???????
	$("#top_box .app_jd")[0].onmouseout=$("#top_box .service")[0].onmouseout=hideItems;
	//2找到id为category的div,绑定onmouseover事件
	$("#category")[0].addEventListener("mouseover",showCate,false);
	$("#category")[0].addEventListener("mouseout",hideCate,false);
	//3找到id为cate_box的直接子代li，存入lis
	var lis=$("#cate_box>li");
	//3遍历lis中的每个li
	for(var i=0;i<lis.length;i++){
		//3   为当前li绑定mouseover和mouseout事件
		lis[i].onmouseover=showSubCate;
		lis[i].onmouseout=hideSubCate;
	}
	//4、初始化
	pPhoto.init();
}//---------->onload结束
//3 当鼠标进入一级分类时，显示当前li下的.sub_cate_box
function showSubCate(){
	this.$(".sub_cate_box")[0].style.display="block";
	//让h3保持hover状态
	this.$("h3")[0].className="hover";
}

//3 当鼠标移除一级分类时，隐藏当前li下的.sub_cate_box
function hideSubCate(){
	this.$(".sub_cate_box")[0].style.display="";
	//让h3去掉hover状态
	this.$("h3")[0].className="";
}


function showItems(){
	/*1鼠标进入li时候显示下方的_items的元素*/
	//1在当前元素下找id以_items结尾的元素，并修改该元素的style属性下的display为block
	this.$("[id$='_items']")[0].style.display="block";
	//找到当前li下的第一个a，并把它的className属性为：hover;（因为在JS里无法直接修改hover属性）
	this.$("a")[0].className="hover";
}
function hideItems(){
	/*1鼠标移除li时候显示下方的_items的元素*/
	//1在当前元素下找id以_items结尾的元素，并修改该元素的style属性下的display为block
	this.$("[id$='_items']")[0].style.display="";
	//1找到当前li下的第一个a，并把它的className属性为：""-》空;
	this.$("a")[0].className="";
}


//2当鼠标进入全部商品分类时候，显示id为cate_box的元素
function showCate(){
	this.$("#cate_box")[0].style.display="block";
}
//2当鼠标移除全部商品分类时候，隐藏id为cate_box的元素
function hideCate(){
	this.$("#cate_box")[0].style.display="";
}
//4、包含小图片的移动，中图片的更换，放大图片
var pPhoto={
	LIWIDTH:62,//4、每个小图片li的固定宽度
	moved:0,//4、记录当前左移的小图片的个数
	count:0,//4、记录小图片的总数
	ul:null,//4、小图片的父元素ul,
	btnL:null,//4、左边的小按钮，让ul右移
	btnR:null,//4、右边的小按钮，让ul左移
	superMask:null,
	SUPERWIDTH:350,
	SUPERHEIGHT:350,
	MASKWIDTH:175,
	MASKHEIGHT:175,
	init:function(){
		this.ul=$("#icon_list")[0];
		this.ul.onmouseover=this.changeMImg;//5、this-->ul
		this.btnL=this.ul.parentNode.$("a")[0];
		this.btnR=this.ul.parentNode.$("a")[1];
		this.btnL.onclick=this.btnR.onclick=function(){pPhoto.move(this/*指按钮对象，地址*/);}
		this.count=this.ul.$("li").length;
		//6、找到id为superMask的div
		this.superMask=$("#superMask")[0];
		//6、为superMask绑定事件
		this.superMask.onmouseover=this.superMask.onmouseout=this.showMask;
		//7、为superMask绑定移动事件
		this.superMask.onmousemove=function(){
			var e=window.event||arguments[0];
			pPhoto.zoom(e);
		}
	},
	//7、
	zoom:function(e){//7、this-->pPhoto
		//获得鼠标相对于目标元素的坐标x,y
		//分别计算mTop=y-MASKHEIGHT/2
		//			mLeft=x-MASKWIDTH/2
		//如果mTop<0,就mTop=0
		//如果mTop>SUPERHEIGHT-MASKHEIGHT
			//mTop就等于SUPERHEIGHT-MASKHEIGHT
		//如果mLeft<0,就mLeft=0
		//如果mLeft>SUPERWIDTH-MASKWIDTH
			//就等于SUPERWIDTH-MASKWIDTH
		//找到mask元素
		//设置它的top为mTop,left为mLeft
		var x=e.offsetX;
		var y=e.offsetY;
		var mTop=y-this.MASKHEIGHT/2;
		var mLeft=x-this.MASKWIDTH/2;
		mTop<0&&(mTop=0);
		mTop>this.SUPERHEIGHT-this.MASKHEIGHT&&(mTop=this.SUPERHEIGHT-this.MASKHEIGHT);
		mLeft<0&&(mLeft=0);
		mLeft>this.SUPERWIDTH-this.MASKWIDTH&&(mLeft=this.SUPERWIDTH-this.MASKWIDTH);
		var mask=$("#mask")[0];
		mask.style.top=mTop+"px";
		mask.style.left=mLeft+"px";
		//8、根据mTop,mLeft修改largeDiv的背景图片的position属性
		$("#largeDiv")[0].style.backgroundPosition=-16/7*mLeft+"px "+-16/7*mTop+"px";
	},
	showMask:function(){//6、
		//6、当鼠标进入superMask时，显示mask
		//6、当鼠标移除superMask时，隐藏mask
		var mask=$("#mask")[0];
		var styleS=getComputedStyle(mask);
		mask.style.display=styleS.display=="none"?"block":"none";
		var largeDiv=$("#largeDiv")[0];
		//var styleS=getComputedStyle(largeDiv);
		largeDiv.style.display=mask.style.display;
		if(largeDiv.style.display=="block"){
			var path=$("#mImg")[0].src;
			var i=path.lastIndexOf(".");
			$("#largeDiv")[0].style.backgroundImage="url("+path.slice(0,i-1)+"l"+path.slice(i)+")";
		}
	},
	move:function(btn){/*4、this指当前点击的按钮*/
		if(!btn.className.endsWith("_disabled")){
			//4、如果当前点击的是右边按钮
			// 4、moved加1
			//4、修改ul的style的left为：-(LIWIDTH*moved-20)+"px";
			if(btn==this.btnR){//==其实比较的是两个变量中的对象地址
				this.ul.style.left=-(this.LIWIDTH*(++this.moved)-20)+"px";
			}else{
				this.ul.style.left=-(this.LIWIDTH*(--this.moved)-20)+"px";
			}
			this.btnEnable();//4、this指pPhoto
		}
	},//4、move的结束
	//4、根据count和move两个是的关系
	//4、修改两个按钮的状态
	btnEnable:function(){//4、this-->pPhoto
		//4、如果moved==0,
		//4、左边按钮的className+="_disabled";
		//4、否则，如果count-moved==5
		//右边按钮的className+="_disabled";
		//否则
		//    将两个按钮的className属性中的_disabled替换为："";
		if(this.moved==0){
			this.btnL.className+="_disabled";
		}else if(this.count-this.moved==5){
			this.btnR.className+="_disabled";
		}else{
			this.btnL.className=this.btnL.className.replace("_disabled","");
			this.btnR.className=this.btnR.className.replace("_disabled","");
		}
	},//4、btnEnable的结束
	/*5、当鼠标进入img时，根据小img的src路径更改中图片的路径*/
	changeMImg:function(){
		//5、先获得事件对象e
		//再获得目标元素src
		//判断如果*目标元素*是IMG
			//取出目标元素:srcE的src属性，存入path
			//path变量的.之前插入"-m",存回path中
					/*比如：xx\xx\product-s1.jpg--->xx\xx\product-s1-m.jpg*/
			//找到id为mImg的元素，设置其属性src属性为path
		var e=window.event||arguments[0];
		var src=e.srcElement||e.target;
		if(src.nodeName=="IMG"){
			var path=src.src;
			var i=path.lastIndexOf(".");
			//path=path.slice(0,i)+"-m"+path.slice(i);
			$("#mImg")[0].src=path.slice(0,i)+"-m"+path.slice(i);
		}
	},//5、changMing的结束


}//pPhoto的结束
