/**
 * Created by Administrator on 2016/10/17.
 * id=homeBtn的按钮切换效果
 */
//首页底部导航点击效果id=navMenu
var adv={
    div:null,
    step:10,
    btnItem:null,
    sumIndex:true,
    interval:10,
    init:function(){
        this.div=document.getElementById("navMenu");
        this.btnItem=document.getElementById("navBtn");
        if(this.btnItem){
            this.btnItem.onclick=adv.toggleItem;
        }
    },
    moveUp:function(){
        //1、按钮点击通过追加classNanme改变样式
        adv.btnItem.className="footerLines";
        //2、操作要上升的DIV
        var divStyle=getComputedStyle(this.div);
        var minHeight=parseInt(divStyle.height);
        this.div.style.top=parseInt(divStyle.top)-this.step+"px";
        if(parseInt(this.div.style.top)>-minHeight){
            setTimeout(function(){
                adv.moveUp();
            },this.interval);
        }else{//3、避免没上升顶部期间再次点击
            adv.sumIndex=true;
        }
    },
    moveDown:function(){
        //1、按钮点击通过删除classNanme改变样式
        adv.btnItem.className="footerLines"+" sumShow";
        //2、操作要下落的DIV
        var divStyle=getComputedStyle(this.div);
        var top=parseInt(divStyle.top)+this.step;
        this.div.style.top=top+"px";
        //获取nav的高度
        var navStyle=getComputedStyle(document.getElementById("navHeight"));
        var maxHeight=parseInt(navStyle.height)-3;
        if(top<maxHeight){
            setTimeout(function(){
                adv.moveDown();
            },this.interval);
        }else{//3、避免没下落到底部期间再次点击
            adv.sumIndex=false;
            return false;
        }
    },
    toggleItem:function(){
        if(adv.sumIndex){
            adv.moveDown();
        }else{
            adv.moveUp();
        }
    }
};
window.onload=function(){
    adv.init();
};