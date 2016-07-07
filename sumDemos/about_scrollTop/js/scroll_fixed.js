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
        /************滚动固定定位图片**********************************************************************/
        var elem=document.getElementById("willFixed");
        var MAX=document.getElementById("max_Height");
        var max_height=MAX.offsetTop;
        var sum=elem.offsetTop;
        var elemHeight=parseFloat(getComputedStyle(elem).height);
        var elemWidth=parseFloat(getComputedStyle(elem).width);
        console.log(elemHeight,elemWidth);
        document.onscroll=function(){
            elem.style.width=elemWidth+"px";
            elem.style.height=elemHeight+"px";
                        //var willHeight;
                        //if(document.body.scrollTop){
                        //    willHeight=parseFloat(document.body.scrollTop);
                        //}else if(document.documentElement.scrollTop){
                        //    willHeight=parseFloat(document.documentElement.scrollTop);
                        //}
            var scrollTop = document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop;
            var willHeight=parseFloat(scrollTop);
            ///***********顶部跟随滚动条固定*********/
            var elemHeader=document.getElementById("header");
            var elemHeaderHeight=parseFloat(getComputedStyle(elemHeader).height);
            /******************************/
            if(willHeight>sum&&willHeight<(max_height-elemHeight)){
                elem.className="sum_item"+" will_fixed";//图片
            }else if(willHeight>elemHeaderHeight){
                elemHeader.style.position="fixed";//顶部
            }else{
                elemHeader.style.position="relative";//顶部
                elem.className="sum_item"+"";//图片
            }

            // console.log(sum,willHeight,max_height);
        }
        /***********************滚动定位************************************************************************/
    })();
};