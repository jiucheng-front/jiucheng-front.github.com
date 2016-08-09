var adv={
	div:null,
	step:5, //每步长5px
	interval:10, //时间间隔
	init:function(){
		this.div=document.querySelector("#msg");
		this.moveUpStep();
	},
	moveUpStep:function(){//移动一步
		//问题：style只能获得内联样式
	/***如何获得应用在当前元素上的所有样式属性？***/
		//DOM: var style=getComputedStyle(elem);
		//IE8: var style=elem.currentStyle;
		var divStyle=getComputedStyle(this.div);
		//问题：divStyle只读，不能设置
		//解决：直接在内联style中设置样式覆盖样式表的
/***总结：只要读样式，用getComputedStyle(elem)
     //只要设置样式，用elem.style.属性=***/
		this.div.style.bottom=parseInt(divStyle.bottom)+this.step+"px";
		if(parseInt(this.div.style.bottom)<0){
			setTimeout(function(){
				adv.moveUpStep();
			},this.interval);
		}
	},
	moveDownStep:function(){
		//获得当前对象计算后的样式divStyle
		var divStyle=getComputedStyle(this.div);
		//获得divStyle的bottom属性值,减1个step
		var bottom=parseInt(divStyle.bottom)-this.step;
		console.log(bottom);
		//获得divStyle的height属性值
		var height=parseInt(divStyle.height);
		//将当前div对象的bottoms属性设置为新bottom值
		this.div.style.bottom=bottom+"px";
		/*当前div的bottom属性值>-height时*/
		if(bottom>-height){
			setTimeout(function(){
				adv.moveDownStep();
			},this.interval);
		}else{
		//如果到底，等一段时间后，自动调用moveUpStep
			setTimeout(function(){
				adv.moveUpStep();
			},5000);
		}
	}
}
window.onload=function(){
	adv.init();
}