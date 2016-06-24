/**
 * Created by Administrator on 2016/6/24.
 */
window.$=HTMLElement.prototype.$=function(selector){
    return (this==window?document:this).querySelectorAll(selector);
};
window.onload=function(){
    var liLists=$(".js_show");
    //console.log(liLists);
    for(var i= 0;i<liLists.length;i++){
        liLists[i].onmouseover=showItems;
        liLists[i].onmouseout=hideItems;
    }
};
function showItems(){
    this.$(".mask")[0].style.display="block";
}
function hideItems(){
    this.$(".mask")[0].style.display="none";
}