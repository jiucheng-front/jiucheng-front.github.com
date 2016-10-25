/**
 * Created by Administrator on 2016/10/17.
 * id=homeBtn的按钮切换效果
 */
//自动向上无限上升
var adv={
    ul:null,
    ulTop:null,
    li:null,
    liHeight:null,
    step:1,
    interval:10,
    timer:null,
    init:function(){
        //1、获取对应元素以及所需高度
        this.ul=document.getElementById("moveItem");
        this.li=document.getElementsByClassName("js-itemLi");
        this.ulTop=parseInt(getComputedStyle(adv.ul).top);
        this.liHeight=parseInt(getComputedStyle(adv.li[0]).height);
        console.log(this.ulTop);
        this.timer=setInterval(function(){
            adv.moveUp();
        },100);//this.interval
    },
    //2、改变ul的top值
    moveUp:function(){
        this.ulTop-=this.step;
        this.ul.style.top=this.ulTop+"px";//此时是负数
        var nowulStyle=getComputedStyle(adv.ul);
        var nowulTop=parseInt(nowulStyle.top);
        //2、1获取ul的第一个li节点
        var firstChild=this.ul.childNodes[0];
        if(nowulTop<(-this.liHeight)){
            this.ul.removeChild(firstChild);
            this.ul.appendChild(firstChild);
            this.ulTop=0;
        }

        //console.log(this);
    }
};
window.onload=function(){
    adv.init();
};