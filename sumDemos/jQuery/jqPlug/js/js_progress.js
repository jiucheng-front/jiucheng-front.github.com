/**
 * Created by Administrator on 2016/10/14.
 *
 * js模拟的进度条
 */
var elem={
    changeColorItem:null,
    changeNumberItem:null,
    changeBtnItem:null,
    timer:null,
    index:0,
    itemWidth:null,
    itemText:0,
    init:function(){
        this.changeColorItem=document.getElementById("changeColorItem");
        this.changeNumberItem=document.getElementById("changeNumberItem");
        this.changeBtnItem=document.getElementById("changeBtnItem");
        elem.timer=setInterval(function(){
            elem.index+=1;
            elem.changeColorFn();
            elem.changeTextFn();
            if(elem.index>=80){
                clearInterval(elem.timer);
            }
        },100);
    },
    changeColorFn:function(){
        elem.itemWidth+=1;
        elem.changeColorItem.style.width=elem.itemWidth+"%";
    },
    changeTextFn:function(){
        elem.itemText+=1;
        document.getElementById("changeNumberItem").innerHTML=elem.itemText+"%";
    }
};
window.onload=function(){
    elem.init();
};