/**
 * Created by Administrator on 2016/9/10.
 */
$(function(){
    // tab-1
    $(".js-twotabbtn").mousemove(function(){
        var oneindex=$(this).index();
        $(this).addClass("have-on").siblings().removeClass("have-on");
        $(".two-tablist").eq(oneindex).addClass("will-show").siblings().removeClass("will-show");
    });
    //tab-2
    $(".js-fourtabbtn").mousemove(function(){
        var twoindex=$(this).index();
        $(this).addClass("have-on").siblings().removeClass("have-on");
        $(".four-tablists").eq(twoindex).addClass("will-show").siblings().removeClass("will-show");
    });
    //tab-3
    $(".js-fourimgsbtn ").mousemove(function(){
        var threeindex=$(this).index();
        $(this).addClass("have-on").siblings().removeClass("have-on");
        $(".fouimgs-tab").eq(threeindex).addClass("will-show").siblings().removeClass("will-show");
    });
    //a的切换
    $(".js-answerbtn ").mousemove(function(){
        $(this).addClass("have-on").siblings().removeClass("have-on");
    });
});