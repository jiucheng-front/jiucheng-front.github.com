/**
 * Created by jason on 2016/3/16.
 */
$(function(){
    //点击登录按钮
    $(".login").click(function(){
        $(".big_form").css({
            display:"block"
        });
        console.log("aaa");
    });
    $(".close").click(function(){
        $(".big_form").css({
            display:"none"
        })
    });
});
