$(document).ready(function(){
    $('.func li').mouseover(function(){
    $(this).removeClass();	
    $(this).find('.mast').slideDown("fast");
    });
    $('.func li').mouseleave(function(){
     $(this).removeClass();
    $(this).find('.mast').slideUp("fast");
    });
});

$(document).ready(function  () {

/**********************/
    $('#show_banners img').lazyload({effect:"fadeIn"})
/**********************/

});

$(document).ready(function  () {
    jQuery(".fullSlide").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: !0,
        autoPage: !0,
        trigger: "click",
        startFun: function(l) {
            var e = jQuery(".fullSlide .bd li").eq(l);
            e.attr("_src") && e.css("background-image", e.attr("_src")).removeAttr("_src")
        }
    }),
    $(function() {
        $(".fullSlide").hover(function() {
            $(this).find(".prev,.next").css("display", "block")
        }
        , function() {
            $(this).find(".prev,.next").css("display", "none")
        }
        )
    });
});