/**
 * Created by Administrator on 2016/4/29.
 */
$(function(){
    $(".js_five_btn").hover(function(){
        $(this).addClass("five_selected").siblings().removeClass("five_selected");
        var index=$(this).index();
        $(".five_right img").eq(index).fadeIn(500).siblings().fadeOut(500);
    });
});