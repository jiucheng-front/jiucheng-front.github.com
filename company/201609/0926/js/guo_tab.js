/**
 * Created by Administrator on 2016/9/26.
 */
window.onload=function(){
    var Btns=document.getElementsByClassName("js_tab_btn");
    var willShows=document.getElementsByClassName("three_one");
    for(var i=0,len=Btns.length;i<len;i++){
        Btns[i].index=i;
        Btns[i].onmouseover=function(){
            for(var n=0;n<len;n++){
                Btns[n].className="js_tab_btn"+"";
                willShows[n].className="three_one"+" will_hide";
            }
            this.className="js_tab_btn"+" have_on";
            willShows[this.index].className="three_one"+" will_show";
        }
    }
};