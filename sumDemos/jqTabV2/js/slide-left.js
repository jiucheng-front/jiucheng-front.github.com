/**
 * Created by Administrator on 2016/7/25.
 */
function slideLeft(idBig,idSmall,prev,next,numVar,Mleft){
    //一、获取元素
    function G(s){
        return document.getElementById(s);
    }
    //二、获取元素样式-包括兼容性
    function getStyle(obj, attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj, false)[attr];
        }
    }
    //三、DOM对象
    var oBig= G(idBig);//div
    var oSmall=G(idSmall);//div
    var oPrev=G(prev);//后退按钮
    var oNext=G(next);//前进按钮
    var oBigLi=oBig.getElementsByTagName("li");//下面的大图片li
    var oSmallLi=oSmall.getElementsByTagName("li");//上面的小图片li
    var len1=oBigLi.length;//大图片个数
    var len2=oSmallLi.length;//小图片个数
    //console.log(len1,len2);//li个数
    var oBigUl=oBig.getElementsByTagName("ul")[0];
    var oSmallUl=oSmall.getElementsByTagName("ul")[0];
    var w1=oBigLi[0].offsetHeight;//大图高度
    var w2=oSmallLi[0].offsetWidth;//小图宽度
    //console.log(w1,w2);
    oBigUl.style.height=w1*len1+"px";//大Ul宽度
    oSmallUl.style.width=(w2+Mleft)*len2+"px";//上面小ul的长度
    var index = 0;
    var num = numVar;//上面一行视觉内li的个数，防止最后空白
    var num2 = Math.ceil(num/2);//浮点数向上取整
    //console.log(num,num2);
    //四、共用运动方法
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
                //console.log(iSpeed);
                obj.style[attr] = iCur + iSpeed + 'px';
                if(iCur == json[attr]){
                    clearInterval(obj.timer);
                }
            }
        }, 30);
    }
    //五、上下大小UL大动画函数是否启动
    function Change(){
        Animate(oBigUl, {top: - index * w1});
        if(index < num2){
            Animate(oSmallUl, {left: 0});
        }else if(index + num2 <len2){
            Animate(oSmallUl, {left: - (index - num2 + 1) * (w2+Mleft)});
        }else{
            Animate(oSmallUl, {left: - (len2 - num) * (w2+Mleft)});
        }
        for (var i = 0; i < len2; i++) {
            oSmallLi[i].className = "";
            if(i == index){
                oSmallLi[i].className = "on";
            }
        }
    }
    //六、1向右按钮
    oNext.onclick = function(){
        index ++;
        index = index == len2 ? 0 : index;
        Change();
    };
    //2向前按钮
    oPrev.onclick = function(){
        index --;
        index = index == -1 ? len2 -1 : index;
        Change();
    };
    //七、上面小li的点击动画效果
    for (var i = 0; i < len2; i++) {
        oSmallLi[i].index = i;
        oSmallLi[i].onclick = function(){
            index = this.index;
            Change();
        }
    }
}