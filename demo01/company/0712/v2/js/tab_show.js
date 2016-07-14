/**
 * Created by Administrator on 2016/7/14.
 */
window.onload=function(){
    (function(){
        var Btns=document.getElementsByClassName("js_btn");
        var willShows=document.getElementsByClassName("five_tab");
        for(var i=0,len=Btns.length;i<len;i++){
            Btns[i].index=i;
            Btns[i].onclick=function(){
                for(var n=0;n<len;n++){
                    Btns[n].className="js_btn"+"";
                    willShows[n].className="five_tab"+" will_hide";
                }
                this.className="js_btn"+" will_click";
                willShows[this.index].className="five_tab"+" will_show";
            }
        }
    })()
}