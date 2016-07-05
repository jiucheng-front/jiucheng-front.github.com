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
    })();
};