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
        },3000);
    },
    //页面刚加载的3秒内该弹框不显示
    index:0,
    timerTwo:null,
    fn:function(){
        adv.timerTwo=setInterval(function(){
            adv.index+=1;
            console.log(adv.index);
            if(adv.index>=3){
                document.getElementById("middleBox").style.display="block";
                adv.init();
                clearInterval(adv.timerTwo);
            }
        },1000);
    }
};
window.onload=function(){
    //var t=0;
    //var timer=setInterval(function(){
    //    t+=1;
    //    console.log(t);
    //    if(t>3){
    //        document.getElementById("middleBox").style.display="block";
    //        adv.init();
    //        clearInterval(timer);
    //    }
    //},1000);
    adv.fn();
};