/**
 * Created by Administrator on 2016/7/9.
 */
window.onload=function(){
    (function(){
        var Btns=document.getElementsByClassName("js_tab_btn");
        var willShows=document.getElementsByClassName("one_map");
        for(var i=0,len=Btns.length;i<len;i++){
            Btns[i].index=i;
            Btns[i].onclick=function(){
                for(var n=0;n<len;n++){
                    Btns[n].className="js_tab_btn"+"";
                    willShows[n].className="one_map"+" will_hide";
                }
                this.className="js_tab_btn"+" will_selected";
                willShows[this.index].className="one_map"+" will_show";
            }
        }
    })();
};