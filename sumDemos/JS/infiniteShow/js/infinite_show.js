/**
 * Created by Administrator on 2016/7/19.
 */
var adv={
    div:null,
    timer:null,
    btn:null,
    init:function(){
        this.btn=document.getElementById("closeBtn");
        this.div=document.getElementById("middleBox");
        this.btn.onclick=this.displayNone;
    },
    displayBlock:function(){
        adv.div.style.display="block";
    },
    displayNone:function(){
        adv.div.style.display="none";
        timer=setTimeout(function(){
            adv.displayBlock();
        },1000);//此处偷偷改了~0 0~
    }
};
window.onload=function(){
    adv.init();
};