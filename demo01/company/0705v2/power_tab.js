/**
 * Created by Administrator on 2016/7/5.
 */
window.onload=function(){
    (function(){
        var Btns=document.getElementsByClassName("js_btn");
        var willShows=document.getElementsByClassName("power_same");
        for(var i=0,len=Btns.length;i<len;i++){
            Btns[i].index=i;
            Btns[i].onmousemove=function(){
                for(var n=0;n<len;n++){
                    Btns[n].className="js_btn"+"";
                    willShows[n].className="power_same"+" will_hide";
                }
                this.className="js_btn"+" have_selected";
                willShows[this.index].className="power_same"+" will_show";
            }
        }
        // 固定定位
        var elem=document.getElementById("willFixed");
        var MAX=document.getElementById("max_Height");
        var max_height=MAX.offsetTop;
        var sum=elem.offsetTop;
        document.onscroll=function(){
            var willHeight=parseFloat(document.body.scrollTop);
            if(willHeight>sum&&willHeight<(max_height-386)){
                elem.className="skill"+" will_fixed";
            }else{
                elem.className="skill"+"";
            }
            console.log(sum,willHeight,max_height);
        }
    })();
};