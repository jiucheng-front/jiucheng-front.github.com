/**
 * Created by Administrator on 2016/7/25.
 */
function slideLeft(idBig,idSmall,prev,next,numVar,pWidth){
    //获取元素
    function G(s){
        return document.getElementById(s);
    }
    //获取元素样式-包括兼容性
    function getStyle(obj, attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj, false)[attr];
        }
    }
    //定时器
    function Animate(obj, json){
        if(obj.timer){
            clearInterval(obj.timer);
        }
        obj.timer = setInterval(function(){
            for(var attr in json){
                var iCur = parseInt(getStyle(obj, attr));
                iCur = iCur ? iCur : 0;
                var iSpeed = (json[attr] - iCur) / 5;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if(iCur == json[attr]){
                    clearInterval(obj.timer);
                }
            }
        }, 30);
    }
    //DOM对象
    var oBig= G(idBig);//div
    var oSmall=G(idSmall);//div
    var oPrev=G(prev);//后退按钮
    var oNext=G(next);//前进按钮
    var oBigLi=oBig.getElementsByTagName("li");//下面的大图片li
    var oSmallLi=oSmall.getElementsByTagName("li");//上面的小图片li
    var len1=oBigLi.length;//大图片个数
    var len2=oSmallLi.length;//小图片个数
    console.log(len1,len2);
    var oBigUl=oBig.getElementsByTagName("ul")[0];
    var oSmallUl=oSmall.getElementsByTagName("ul")[0];
    var w1=oBigLi[0].offsetWidth;
    var w2=oSmallLi[0].offsetWidth;
    console.log(w1,w2);
    oBigUl.style.width=w1*len1+"px";
}