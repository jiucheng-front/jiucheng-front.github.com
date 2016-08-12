/**
 * Created by Administrator on 2016/7/27.
 */
window.onload=function(){
    //tab1
    var liOnes=document.getElementsByClassName("same_total");
    var divOnes=document.getElementsByClassName("same_lists");
    for(var i=0;i<liOnes.length;i++){
        liOnes[i].index=i;
        liOnes[i].onclick=function(){
            for(var j=0;j<divOnes.length;j++){
                liOnes[j].className="same_total"+" js_btn";
                divOnes[j].className="same_lists"+" will_hide";
                divOnes[this.index].className="same_lists"+" will_show";
            }
            this.className="same_total"+" js_btn"+" have_on";
            //console.log(this.index);
        }
    }
};