/**
 * Created by Administrator on 2016/9/20.
 */
window.onload=function(){
    var Btns=document.getElementsByClassName("js_tab_btn");
    var willShows=document.getElementsByClassName("footer_img");
    for(var i=0,len=Btns.length;i<len;i++){
        Btns[i].index=i;
        Btns[i].onmouseover=function(){
            for(var n=0;n<len;n++){
                Btns[n].className="js_tab_btn"+"";
                willShows[n].className="footer_img"+" will_hide";
            }
            this.className="js_tab_btn"+" will_selected";
            willShows[this.index].className="footer_img"+" will_show";
        }
    }
};