/**
 * Created by jason on 2016/3/16.
 */
$(function(){
    //点击登录按钮
    $(".login").click(function(){
        $(".big_form").addClass("selected");
    });
    $(".close").click(function(){
        $(".big_form").removeClass("selected");
    });
});
