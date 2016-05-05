/**
 * Created by Administrator on 2016/4/29.
 */

$(function(){
    //carousel
    var a= 0,t=null;
    function autoMove(){
        a++;
        if(a>=$(".nav_banner a").length)a=0;
        play(a);
    }
    function play(a){
        $(".nav_banner>a").filter(":visible").fadeOut(500).parent().children().eq(a).fadeIn(500);
        $(".nav_banner ul li").eq(a).addClass("baner_btn").siblings().removeClass("baner_btn");
    }
    $(".nav_banner>a:not(:first-child)").hide();
    t=setInterval(autoMove,3000);
    $(".nav_banner ul li").hover(function(){
        clearInterval(t);
        a=$(this).index();
        play(a);
    },function(){
        t=setInterval(autoMove,2000);
    });
    $(".nav_banner>a").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(autoMove,2000);
    });
    //section_title one_list
    $(".list_parent li").hover(function(){
        $(this).find("a").fadeIn(1000);
    },function(){
        $(this).find("a").fadeOut(500);
    });
    //section_two
    $(".js_two_btn").hover(function(){
        $(this).addClass("have_selected").siblings().removeClass("have_selected");
        var index=$(this).index();
        $(".two_list").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //section_five
    $(".js_five_btn").hover(function(){
        $(this).addClass("five_selected").siblings().removeClass("five_selected");
        var index=$(this).index();
        $(".five_baner").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
    //    section_seven
    $(".js_seven_btn").hover(function(){
        var index=$(this).index();
        $(this).addClass("seven_selected").siblings().removeClass("seven_selected");
        $(".baner_list").eq(index).fadeIn().siblings().fadeOut();
    });
    //section_eleven
    $(".js_btn_eleven").hover(function(){
        var index=$(this).index();
        $(this).addClass("have_hover").siblings().removeClass("have_hover");
        $(".eleven_parent").eq(index).fadeIn().siblings().fadeOut();
    });
    // section_place
    $(".js_btn_place").hover(function(){
        var index=$(this).index();
        $(this).addClass("place_selected").siblings().removeClass("place_selected");
        $(".place_left").eq(index).fadeIn().siblings().fadeOut();
    });
    // section_login
    $(".js_login_btn").hover(function(){
        var index=$(this).index();
        $(this).addClass("login_selected").siblings().removeClass("login_selected");
        $(".ask_parent").eq(index).fadeIn().siblings().fadeOut();
    });
});