/**
 * Created by Administrator on 2016/10/17.
 * topfour_imgs:板块的tab切换
 */
window.onload=function(){
    var liBtns=document.getElementsByClassName("js_topfourbtn");
    var divItems=document.getElementsByClassName("top_imgs");
    for(var i=0;i<liBtns.length;i++){
        liBtns[i].index=i;
        liBtns[i].onclick=function(){
            for(var j=0;j<divItems.length;j++){
                liBtns[j].className="js_topfourbtn";
                divItems[j].className="top_imgs"+" will_hide";
                divItems[this.index].className="top_imgs"+" will_show";
            }
            this.className="js_topfourbtn"+" have_selected";
            //console.log(this.index);
        }
    }
};