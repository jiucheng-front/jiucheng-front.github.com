window.$=HTMLElement.prototype.$=function(selector){
    return (this==window?document:this).querySelectorAll(selector);
}
/*************品牌推荐里的遮罩层**************/
    //1-1、找到ul下的直接子代li
    var liLists=$('#notes>li');
    //1-2遍历li并绑定事件
    for(var i=0;i<liLists.length;i++){
        //1-3为li绑定onmouseover事件
        liLists[i].onmouseover=showMask;
        //1-4为li绑定onmouseout事件
        liLists[i].onmouseout=hideMask;
    }
//1、显示函数
function showMask(){
    //this指代当前li
    //3、更改当前mask的背景色
    this.$(".mask")[0].style.backgroundColor=getRandomColor();
    //鼠标进入时当前mask的显示
    this.$(".mask")[0].style.display="block";
}
//2、隐藏函数
function hideMask(){
    //光标移除时候当前mask隐藏
    this.$(".mask")[0].style.display="none";
}
//3、随机色的函数
function getRandomColor(){
    return 'rgb('
        +Math.floor(Math.random()*255)+','
        +Math.floor(Math.random()*255)+','
        +Math.floor(Math.random()*255)+')';
}
/*************更换主题*************/

/********主导航的下拉选项******/
var li_lists=$('.nav ul li');
//console.log(li_lists);
for(var i=1;i<li_lists.length;i++){
    li_lists[i].onmouseover=showProducts;
    li_lists[i].onmouseout=hideProducts;
}
function showProducts(){
    this.$('.products')[0].style.display="block";
}
function hideProducts(){
    this.$('.products')[0].style.display="none";
}
