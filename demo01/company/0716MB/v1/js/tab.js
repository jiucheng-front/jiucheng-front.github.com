$(document).ready(function(){
    $(".tab-hd li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");

        $(".tab-bd>div").eq($('.tab-hd li').index(this)).show().siblings().hide();
    });

    $(".p3-hd li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");

        $(".p3-bd>div").eq($('.p3-hd li').index(this)).show().siblings().hide();
    })
})
