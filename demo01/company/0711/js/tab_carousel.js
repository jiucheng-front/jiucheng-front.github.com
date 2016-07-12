/**
 * Created by Administrator on 2016/7/11.
 */
window.onload=function(){
    (function(){
        //切换1
        var Btns=document.getElementsByClassName("js_btn");
        var willShows=document.getElementsByClassName("two_items");
        for(var i=0,len=Btns.length;i<len;i++){
            Btns[i].index=i;
            Btns[i].onmouseover=function(){
                for(var n=0;n<len;n++){
                    Btns[n].className="js_btn"+"";
                    willShows[n].className="two_items"+" will_hide";
                }
                this.className="js_btn"+" will_selected";
                willShows[this.index].className="two_items"+" will_show";
            }
        }
    //    切换二
        var BtnsTwo=document.getElementsByClassName("tab_three");
        var willShowsTwo=document.getElementsByClassName("three_items");
        for(var a=0,b=BtnsTwo.length;a<b;a++){
            BtnsTwo[a].index=a;
            BtnsTwo[a].onmouseover=function(){
                for(var c=0;c<b;c++){
                    BtnsTwo[c].className="tab_three"+"";
                    willShowsTwo[c].className="three_items"+" will_hide";
                }
                this.className="tab_three"+" have_selected";
                willShowsTwo[this.index].className="three_items"+" will_show";
            }
        }

    })();
};