/**
 * Created by Administrator on 2016/10/17.
 * topfour_imgs:板块的tab切换
 * id=homeBtn的按钮切换效果
 */
//1、学术交流自动tab切换
function toogleFour(){
    var index=0;
    function addIndex(){
        index++;
        if(index>1){
            index=0;
        }
        var liBtns=document.getElementsByClassName("js_topfourbtn");
        var divItems=document.getElementsByClassName("top_imgs");
        for(var j=0;j<divItems.length;j++){
            liBtns[j].className="js_topfourbtn";
            divItems[j].className="top_imgs"+" will_hide";
            divItems[index].className="top_imgs"+" will_show";
            liBtns[index].className="js_topfourbtn"+" have_selected";
        }
    }
    setInterval(addIndex,3000);
}
//首页底部导航点击效果id=footerMenu
var adv={
    div:null,
    step:10,
    btnItem:null,
    sumIndex:true,
    interval:10,
    init:function(){
        this.div=document.getElementById("footerMenu");
        this.btnItem=document.getElementById("homeBtn");
        this.btnItem.onclick=adv.toggleItem;
    },
    moveUp:function(){
        //1、按钮点击通过追加classNanme改变样式
        document.getElementsByClassName("footerLines")[0].className="footerLines"+" sumShow";
        //2、操作要上升的DIV
        var divStyle=getComputedStyle(this.div);
        this.div.style.top=parseInt(divStyle.top)-this.step+"px";
        if(parseInt(this.div.style.top)>0){
            setTimeout(function(){
                adv.moveUp();
            },this.interval);
        }
        //3、避免没上升顶部期间再次点击
        if(parseInt(this.div.style.top)<=0){
            adv.sumIndex=false;
        }else{
            return false;
        }
    },
    moveDown:function(){
        //1、按钮点击通过删除classNanme改变样式
        document.getElementsByClassName("footerLines")[0].className="footerLines";
        //2、操作要下落的DIV
        var divStyle=getComputedStyle(this.div);
        var top=parseInt(divStyle.top)+this.step;
        var height=parseInt(divStyle.height);
        this.div.style.top=top+"px";
        if(top<height){
            setTimeout(function(){
                adv.moveDown();
            },this.interval);
        }
        //3、避免没下落到底部期间再次点击
        if(top>=height){
            adv.sumIndex=true;
        }else{
            return false;
        }
    },
    toggleItem:function(){
        if(adv.sumIndex){
            adv.moveUp();
        }else{
            adv.moveDown();
        }
    }
};
window.onload=function(){
    toogleFour();
    adv.init();
};