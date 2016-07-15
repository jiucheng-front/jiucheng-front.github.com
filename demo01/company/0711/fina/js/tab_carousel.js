$(function(){
$(".tab_three").mouseover(function(){
    $(this).addClass("have_selected").siblings().removeClass("have_selected");
	$(".three_items ").eq($(this).index()).show().siblings().hide();
})


$(".will_left li").mouseover(function(){
    $(this).addClass("will_selected ").siblings().removeClass("will_selected");
	$(".will_right li").removeClass("will_selected");
	$(".lefts").eq($(this).index()).show().siblings(".lefts").hide();
})

$(".will_right li").mouseover(function(){
    $(this).addClass("will_selected").siblings().removeClass("will_selected");
	$(".will_left li").removeClass("will_selected");
	$(".rights").eq($(this).index()).show().siblings(".rights").hide();
})
$(".js_eight_btn").mouseover(function(){
	$(this).addClass("on").siblings().removeClass("on");
});

})