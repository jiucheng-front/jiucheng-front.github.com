/**
 * Created by Administrator on 2016/8/23.
 */
window.onload=function(){
    (function(){
        /************滚动固定定位****************/
        var elem=document.getElementById("willFixed");
        var elemTwo=document.getElementById("willFixedTwo");
        var MAX=document.getElementById("max_Height");
        var max_height=MAX.offsetTop;
        var sum=elemTwo.offsetTop+345;
        document.onscroll=function(){
            var willHeight;
            if(document.body.scrollTop){
                willHeight=parseFloat(document.body.scrollTop);
            }else if(document.documentElement.scrollTop){
                willHeight=parseFloat(document.documentElement.scrollTop);
            }
            if(willHeight>sum&&willHeight<(max_height-800)){
                elem.className="rightBox"+" fl"+" hd"+" will_fixed";
            }else{
                elem.className="rightBox"+" fl"+" hd"+"";
            }
        };
        /***********************滚动定位***************************/
    })();
};