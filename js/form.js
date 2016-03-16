/**
 * Created by jason on 2016/1/8.
 */
$(function(){
    //点击登录按钮
    $(".login").click(function(){
        $(".big_form").css({
            display:"block"
        })
    });
    $(".close").click(function(){
        $(".big_form").css({
            display:"none"
        })
    });
});