/**
 * Created by Administrator on 16-3-20.
 */
$(function(){
    $(".tp").hover(function(){
        $(this).find(".demo_list").slideDown(500);
    },function(){
        $(this).find(".demo_list").slideUp(500);
    });
});
