/**
 * Created by Administrator on 16-3-20.
 */
$(function(){
    $(".tp").hover(function(){
    	var bg=$(this).css('background-color');
    	$(this).find(".demo_list").css({
    		'background-color':bg
    	});
        $(this).find(".demo_list").show(500);
    },function(){
        $(this).find(".demo_list").hide(500);
    });
});
