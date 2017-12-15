window.$=HTMLElement.prototype.$=function(selector){
    return (this==window?document:this).querySelectorAll(selector);
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
    $('.left')[0].style.borderColor='#4261A4';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#4261A4';
    }
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
    $('.left')[0].style.borderColor='#AFD400';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#AFD400';
    }
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
    $('.left')[0].style.borderColor='#FBA90D';
    //h6有四个
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#FBA90D';
    }
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
    $('.left')[0].style.borderColor='#27C2D1';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#27C2D1';
    }
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
    $('.left')[0].style.borderColor='#E11556';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#E11556';
    }
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
    $('.left')[0].style.borderColor='#BA3AD9';
    var h6=$('.left h6');
    for(var i=0;i<h6.length;i++){
        $('.left h6')[i].style.borderBottomColor='#BA3AD9';
    }
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
    //console.log(this.$('.products')[0]);
}
function hideProducts(){
    this.$('.products')[0].style.display="none";
}
/***********尺寸选择************/
var youWidth=$('#yourWidth li');
//console.log(youWidth);
for(var i=0;i<youWidth.length;i++){
    youWidth[i].onclick=haveChange;
}
function haveChange(){
    var msg=this.$('.Message')[0].innerHTML;
    //console.log(msg);
    $('#youChange')[0].innerHTML=msg;
}
/********总价********/
var inputCount=$('#count')[0];
inputCount.onclick=getCount;
function getCount(){
    var value=inputCount.value;
    //console.log(value);
    var totalPrice=value*200.0;
    if(value<1){
        $('#count')[0].value=1;
        $('#totalPrice')[0].innerHTML='￥'+200;
    }else{
        $('#totalPrice')[0].innerHTML='￥'+totalPrice;
    }
}
/*******颜色选择***********/
var colorList=$('#muchSelect li');
//console.log(colorList);
for(var i=0;i<colorList.length;i++){

    colorList[i].onclick=selectColor;
}
//改变下边中型图片和当前点击的LI边框
function selectColor(){
    //2、1
    var addBorder=$("#muchSelect img");
    //console.log(addBorder);
    for(var i=0;i<addBorder.length;i++){
        addBorder[i].className="";
    }
    this.$('img')[0].className="willRed";
    //2、获得当前li下的img的src属性
    var imgSrc=this.$('img')[0];
    var i=imgSrc.src.lastIndexOf(".");
    //console.log(i);
    //2、2找到要改变的img
    var willShow=$('#menus img');
    for(var a=0;a<willShow.length;a++){
        //为每个img绑定改变图片
        willShow[a].className="";
        willShow[a].src=imgSrc.src.slice(0,i)+a+imgSrc.src.slice(i);
    }
    willShow[0].className="willRed";
    var bigImg=$(".Img")[0];
    bigImg.src=imgSrc.src.slice(0,i)+"00"+imgSrc.src.slice(i);
}
/************中间的三个选择LI**************/
var threeLists=$("#menus img");
//console.log(threeLists);
for(var i=0;i<threeLists.length;i++){
    threeLists[i].onclick=changeTop;
}
function changeTop(){
    //1、改变上部图片
    var index=this.src.lastIndexOf(".");
    var bigImg=$(".Img")[0];
    bigImg.src=this.src.slice(0,index)+"0"+this.src.slice(index);
    //2、改变当前点击的图片的边框
    for(var i=0;i<threeLists.length;i++){
        threeLists[i].className="";
    }
    this.className="willRed";
}
/***********显示最大的遮罩层****************/
var showBig=$("#showBig")[0];
showBig.onclick=function(){
    var bigImg=$(".Img")[0];
    var index=bigImg.src.lastIndexOf(".");
    var hideBig=$("#hideBig")[0];
    hideBig.src=bigImg.src.slice(0,index)+"big"+bigImg.src.slice(index);
    $(".bigMask")[0].style.display="block";
}
$("#hideBig")[0].onclick=function(){
    $(".bigMask")[0].style.display="none";
}
/***********介绍、属性、尺码***********/
var showItems=$("#tips li");
//console.log(showItems);
for(var i=0;i<showItems.length;i++){
    showItems[i].onclick=showDiv;
}
function showDiv(){
    var showDivs=$("#tips div");
    for(var i=0;i<showDivs.length;i++){
        showDivs[i].className="";
    }
    this.$("div")[0].className="hidden";
    for(var i=0;i<showItems.length;i++){
        showItems[i].className="";
    }
    this.className="redbg";
}
/**********评分**********/
//获取所有的LI
// var fiveLis=$("#products_fen li");
// for(var i=0;i<fiveLis.length;i++){
//     //鼠标悬停绑定
//     fiveLis[i].onmouseover=function(){
//         var className = this.parentNode.className;
//         if(className.indexOf("click")==-1){
//             this.parentNode.className=this.parentNode.className+this.id;
//         }
//     };
//     //鼠标移除一起绑定
//     fiveLis[i].onmouseout=function(){
//         this.parentNode.className=this.parentNode.className.replace(/star[0-5]/,"");
//     };
//     fiveLis[i].onclick=function(){
//         var className = this.parentNode.className;
//         if(className.indexOf("click")==-1){
//             alert("感谢您的评分！");
//             this.parentNode.className="click"+this.id.replace(/[a-z]+/,"");
//         }else{
//             alert("抱歉，您已经评过分了！");
//         }
//     }
// }


// 2017-12-15 
var Score={
    scoreLists:$("#products_fen li"),
    init:function(){
        var length = this.scoreLists.length;
        for(var i=0;i<length;i++){
            this.scoreLists[i].addEventListener("mouseover",this.overAddClass);
            this.scoreLists[i].addEventListener("mouseout",this.overRemoveClass);
            this.scoreLists[i].addEventListener("click",this.clickAddClass);
        }
    },
    overAddClass(){
        var className = this.parentNode.className;
        if(className.indexOf("click")==-1){
            this.parentNode.className=this.id;
        }
    },
    overRemoveClass(){
        this.parentNode.className=this.parentNode.className.replace(/star[0-5]/,"");
    },
    clickAddClass(){
        var className = this.parentNode.className;
        if(className.indexOf("click")==-1){
            alert("感谢您的评分！");
            this.parentNode.className="click"+this.id.replace(/[a-z]+/,"");
        }else{
            alert("抱歉，您已经评过分了！");
        }
    }
}

window.onload=function(){
    Score.init();
}



