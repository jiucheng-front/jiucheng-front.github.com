/**
 * Created by Administrator on 16-3-19.
 */
var  a=0;
var t=null;
$(function(){
    $('.baner>a:not(:first-child)').hide();
    t=setInterval("autoMove()",2000);
    //鼠标进入轮播停止
    $('.baner').hover(function(){clearInterval(t)},function(){t=setInterval("autoMove()",2000);});
//    鼠标悬停效果
    $('.fours li a').hover(function(){
        $(this).find(".mask").addClass("masked");
    },function(){
        $(this).find(".mask").removeClass("masked");
    });

});
function autoMove(){
    a++;
    if(a>=4){
        a=0;
    }
    play(a);
}
function play(a){
    $('.baner>a').filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(1000);
    $('.baner_btn li').eq(a).addClass("selected").siblings().removeClass("selected");
}
