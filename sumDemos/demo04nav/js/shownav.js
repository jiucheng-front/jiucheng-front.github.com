/**
 * Created by Administrator on 2016/10/17.
 * id=homeBtn�İ�ť�л�Ч��
 */
//��ҳ�ײ��������Ч��id=navMenu
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
        //1����ť���ͨ��׷��classNanme�ı���ʽ
        adv.btnItem.className="footerLines";
        //2������Ҫ������DIV
        var divStyle=getComputedStyle(this.div);
        var minHeight=parseInt(divStyle.height);
        this.div.style.top=parseInt(divStyle.top)-this.step+"px";
        if(parseInt(this.div.style.top)>-minHeight){
            setTimeout(function(){
                adv.moveUp();
            },this.interval);
        }else{//3������û���������ڼ��ٴε��
            adv.sumIndex=true;
        }
    },
    moveDown:function(){
        //1����ť���ͨ��ɾ��classNanme�ı���ʽ
        adv.btnItem.className="footerLines"+" sumShow";
        //2������Ҫ�����DIV
        var divStyle=getComputedStyle(this.div);
        var top=parseInt(divStyle.top)+this.step;
        this.div.style.top=top+"px";
        //��ȡnav�ĸ߶�
        var navStyle=getComputedStyle(document.getElementById("navHeight"));
        var maxHeight=parseInt(navStyle.height)-3;
        if(top<maxHeight){
            setTimeout(function(){
                adv.moveDown();
            },this.interval);
        }else{//3������û���䵽�ײ��ڼ��ٴε��
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