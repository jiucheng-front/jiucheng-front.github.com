/**
 * Created by Administrator on 2016/8/15.
 */
$(function(){
    $(".js_eightbtn").click(function(){
        var index=$(this).index();
        $(this).addClass("have_on").siblings().removeClass("have_on");
        $(".eight_parent").eq(index).show().siblings().hide();
    });
});