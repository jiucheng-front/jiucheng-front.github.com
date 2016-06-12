/**
 * Created by Administrator on 2016/6/12.
 */
$(function(){
    $(".js_hot_btn").click(function(){
        var index=$(this).index();
        $(this).addClass("have_selected").siblings().removeClass("have_selected");
        $(".list_one").eq(index).fadeIn().siblings().fadeOut();
    });
});