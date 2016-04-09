/**
 * Created by Administrator on 16-4-3.
 */
$(function(){
    //第二个按钮
    $('.btn_two').click(function(){
        $(this).parent().addClass("will_change");
        var btnPrev=$(this).parent().prev();
        var btnNext=$(this).parent().next();
        //console.log(btnNext);
        if(btnPrev.hasClass("will_change")){
            //console.log("AAAA");
            $(".page_one").animate({
                "left":"-110%"
            },500);
            $(".page_two").animate({
                "left":"0.9em"
            },500);
            btnPrev.removeClass("will_change");
        }else if(btnNext.hasClass("will_change")){
            $(".page_three").animate({
                "left":"100%"
            },500);
            $(".page_two").animate({
                "left":"0.9em"
            },500);
            btnNext.removeClass("will_change");
        }

    });
    //第三个按钮
    $(".btn_three").click(function(){
        $(this).parent().addClass("will_change");
        var btnPrevP=$(this).parent().prev().prev();
        var btnPrev=$(this).parent().prev();
        if(btnPrevP.hasClass('will_change')){
            $(".page_one").animate({
                "left":"-110%"
            },500);
            $(".page_two").delay(300).animate({
                "left":"-110%"
            },500);
            $(".page_three").delay(500).animate({
                "left":"0.8em"
            },500);
            btnPrevP.removeClass("will_change");
        }else if(btnPrev.hasClass('will_change')){
            $(".page_two").animate({
                "left":"-110%"
            },500);
            $('.page_three').animate({
                "left":"0.8em"
            },500);
            btnPrev.removeClass("will_change");
        }

    });
//    第一个按钮
    $(".btn_one").click(function(){
        $(this).parent().addClass("will_change");
        var btnNext=$(this).parent().next();
        var btnNextN=$(this).parent().next().next();
        if(btnNext.hasClass("will_change")){
            $(".page_two").animate({
                "left":"100%"
            },500);
            $(".page_one").animate({
                "left":0
            },500);
            btnNext.removeClass("will_change");
        }else if(btnNextN.hasClass("will_change")){
            $(".page_three").animate({
                "left":"100%"
            },500);
            $(".page_two").delay(300).animate({
                "left":"100%"
            },500);
            $(".page_one").delay(500).animate({
                "left":0
            },500);
            btnNextN.removeClass("will_change");
        }
    });
    
});