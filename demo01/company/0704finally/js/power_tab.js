/**
 * Created by Administrator on 2016/7/5.
 */
window.onload=function(){
    (function(){
        /*********************************tab切换结合CSS*****************************************/
        //var Btns=document.getElementsByClassName("js_btn");
        //var willShows=document.getElementsByClassName("power_same");
        //for(var i=0,len=Btns.length;i<len;i++){
        //    Btns[i].index=i;
        //    Btns[i].onmousemove=function(){
        //        for(var n=0;n<len;n++){
        //            Btns[n].className="js_btn"+"";
        //            willShows[n].className="power_same"+" will_hide";
        //        }
        //        this.className="js_btn"+" have_selected";
        //        willShows[this.index].className="power_same"+" will_show";
        //    }
        //}
        /**********************************tab切换****************************************/
        /************滚动固定定位****************/
        var elem=document.getElementById("willFixed");
        var MAX=document.getElementById("max_Height");
        var max_height=MAX.offsetTop;
        var sum=elem.offsetTop;
        document.onscroll=function(){
            // var willHeight=parseFloat(document.body.scrollTop);
            var willHeight;
            if(document.body.scrollTop){
                willHeight=parseFloat(document.body.scrollTop);
            }else if(document.documentElement.scrollTop){
                willHeight=parseFloat(document.documentElement.scrollTop);
            }
            // var willHeight=parseFloat(document.documentElement.scrollTop);
            if(willHeight>sum&&willHeight<(max_height-266)){
                elem.className="skill"+" will_fixed";
            }else{
                elem.className="skill"+"";
            }
            // console.log(sum,willHeight,max_height);
        }
        /***********************滚动定位***************************/
    })();
};