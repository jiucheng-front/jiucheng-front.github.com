var  a=0;
var t=null;
$(function(){
   $('.fours>a:not(:first-child)').hide();
   t=setInterval("autoMove()",2000);
   //鼠标进入轮播停止
   $('.parent').hover(function(){clearInterval(t)},function(){t=setInterval("autoMove()",2000);});
// 当鼠标进去对应选项时候图片对应变化
   $(".top p>a").hover(function(){
      clearInterval(t);
      var num=$(this).index();
      showThis(num);
    //console.log(num);
   })
});
function autoMove(){
 a++;
 if(a>=4){
   a=0;
  }
 play(a);
}
function play(a){
   $('.fours>a').filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(1000);
   $('.top p a').eq(a).addClass("selected").siblings().removeClass("selected");
}
//鼠标进入的情况
function showThis(sum){
   $(".fours>a").eq(sum).fadeIn(1000).siblings().fadeOut(500);
   $(".top p a").eq(sum).addClass("selected").siblings().removeClass("selected");
}