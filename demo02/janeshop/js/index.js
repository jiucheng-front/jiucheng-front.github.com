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
    //获取每个li并绑定事件
var li=$("#colors li");
//console.log(li);
li[0].onclick=changeClass0;
li[1].onclick=changeClass1;
li[2].onclick=changeClass2;
li[3].onclick=changeClass3;
li[4].onclick=changeClass4;
li[5].onclick=changeClass5;
var b=$('#colors li b');
//获取每个li下的b元素，添加或者删除className来改变背景图片，注意：利用选择器的优先级
//每个事件中同时改变网页内容中其他带背景色的位置
//console.log(b);
function changeClass0(){
    b[0].className='selected';
    b[1].className="";
    b[2].className="";
    b[3].className="";
    b[4].className="";
    b[5].className="";
    $('.nav')[0].style.backgroundColor='#4261A4';
    $('.left h5')[0].style.backgroundColor='#4261A4';
    $('.newMessage h5')[0].style.backgroundColor='#4261A4';
    $('.left')[0].style.borderColor='#4261A4';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#4261A4';
    }
    $('.newMessage')[0].style.borderColor='#4261A4';
}
function changeClass1(){
    b[0].className="";
    b[1].className='selected';
    b[2].className="";
    b[3].className="";
    b[4].className="";
    b[5].className="";
    $('.nav')[0].style.backgroundColor='#AFD400';
    $('.left h5')[0].style.backgroundColor='#AFD400';
    $('.newMessage h5')[0].style.backgroundColor='#AFD400';
    $('.left')[0].style.borderColor='#AFD400';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#AFD400';
    }
    $('.newMessage')[0].style.borderColor='#AFD400';
}
function changeClass2(){
    b[0].className="";
    b[1].className="";
    b[2].className='selected';
    b[3].className="";
    b[4].className="";
    b[5].className="";
    $('.nav')[0].style.backgroundColor='#FBA90D';
    $('.left h5')[0].style.backgroundColor='#FBA90D';
    $('.newMessage h5')[0].style.backgroundColor='#FBA90D';
    $('.left')[0].style.borderColor='#FBA90D';
    //h6有四个
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#FBA90D';
    }
    $('.newMessage')[0].style.borderColor='#FBA90D';
}
function changeClass3(){
    b[0].className="";
    b[1].className="";
    b[2].className="";
    b[3].className='selected';
    b[4].className="";
    b[5].className="";
    $('.nav')[0].style.backgroundColor='#27C2D1';
    $('.left h5')[0].style.backgroundColor='#27C2D1';
    $('.newMessage h5')[0].style.backgroundColor='#27C2D1';
    $('.left')[0].style.borderColor='#27C2D1';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#27C2D1';
    }
    $('.newMessage')[0].style.borderColor='#27C2D1';
}
function changeClass4(){
    b[0].className="";
    b[1].className="";
    b[2].className="";
    b[3].className="";
    b[4].className='selected';
    b[5].className="";
    $('.nav')[0].style.backgroundColor='#E11556';
    $('.left h5')[0].style.backgroundColor='#E11556';
    $('.newMessage h5')[0].style.backgroundColor='#E11556';
    $('.left')[0].style.borderColor='#E11556';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#E11556';
    }
    $('.newMessage')[0].style.borderColor='#E11556';
}function changeClass5(){
    //b[0].className="";
    //b[1].className="";
    //b[2].className="";
    //b[3].className="";
    //b[4].className="";
    b[0].className=b[1].className=b[2].className=b[3].className=b[4].className="";
    b[5].className='selected';
    $('.nav')[0].style.backgroundColor='#BA3AD9';
    $('.left h5')[0].style.backgroundColor='#BA3AD9';
    $('.newMessage h5')[0].style.backgroundColor='#BA3AD9';
    $('.left')[0].style.borderColor='#BA3AD9';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#BA3AD9';
    }
    $('.newMessage')[0].style.borderColor='#BA3AD9';
}
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
